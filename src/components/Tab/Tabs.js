// https://codesandbox.io/s/18d14
import {
  h,
  defineComponent,
  provide,
  ref,
  computed,
  inject,
  toRaw,
  withDirectives,
  vShow,
  TransitionGroup,
  onUnmounted,
  resolveDynamicComponent,
  watch
} from "vue";
import {useId} from "./useId";

let TabsContext = Symbol("TabsContext");

const useDefaultSlots = (slots) => {
  const defaultSlots = slots.default();
  // console.log("defaultSlots:", defaultSlots);

  let collect = [];
  let useCollectPanel = (Slots = []) => {
    for (let node of Slots) {
      if (node?.type?.name === "TabPanel") collect.push(node);
      if (node.children && Array.isArray(node.children))
        useCollectPanel(node.children);
    }
  };
  useCollectPanel(defaultSlots);

  if (useDefaultSlots.length === 0) {
    let err = new Error(`<TabPanel /> is missing from <Tabs /> component.`);
    throw err;
  }
  return collect.map((node, index) => {
    node.key = node.props.name ? `panel-${node.props.name}` : node.key;
    if (!node.key) {
      throw new Error("For <TabPanel> must be keyed or named");
    }
    return node;
  });
};

export const Tabs = defineComponent({
  name: "Tabs",
  props: {
    modelValue: {type: String},
    tag: {
      type: String,
      default: "div"
    }
  },
  render() {
    return h(
      this.tag,
      {
        ref: "el",
        onKeydown: this.onKeyDown
      },
      this.$slots.default({
        panels: this.tabPanels,
        currentValue: this.currentValue,
        direction: this.direction
      })
    );
  },
  setup(props, {emit}) {
    let tabsRef = ref(null);
    let tabPanels = ref([]);
    let currentValue = ref("");
    let direction = ref("rtl");

    let value = computed(
      () => props.modelValue || currentValue.value || firstTabPanel.value?.name
    );

    let firstTabPanel = computed(() =>
      tabPanels.value.find((panel) => {
        if (panel.props.disabled) return false;
        return true;
      })
    );

    const onChangePane = (name) => {
      setDirection(name, currentValue.value);
      currentValue.value = name;
      emit("update:modelValue", name);
    };

    let api = {
      value,
      registerPanel(panel) {
        tabPanels.value.push(panel);
      },
      unregisterPanel(name) {
        const index = findIndex(name);
        tabPanels.value.splice(index, 1);
        onChangePane(firstTabPanel.value?.name);
      },
      change: onChangePane
    };

    const findIndex = (name) =>
      tabPanels.value.findIndex((panel) => panel.name === name);

    const findById = (id) => tabPanels.value.find((panel) => panel.id === id);

    const setDirection = (newValue, oldValue) => {
      const newIndex = findIndex(newValue);
      const oldIndex = findIndex(oldValue);

      direction.value = newIndex > oldIndex ? "rtl" : "ltr";
    };

    provide(TabsContext, api);

    const onKeyDown = (event) => {
      let id = event.target.getAttribute("aria-controls");
      let activePanels = tabPanels.value.filter(
        (panel) => panel.props.disabled === false
      );
      // document.activeElement
      // console.log(
      //   "activeElement:",
      //   document.activeElement.getAttribute("aria-controls")
      // );
      let currentPanel = activePanels.findIndex(
        (panel) => panel.name === value.value
      );
      let total = activePanels.length;

      switch (event.code) {
        case "ArrowRight":
          event.stopPropagation();
          event.preventDefault();

          let nextIndex = currentPanel + 1;
          nextIndex = nextIndex % total;
          //nextIndex = nextIndex < activePanels.length ? nextIndex : 0;

          let next = activePanels[nextIndex];

          if (next) {
            onChangePane(next.name);
            document.querySelector(`[aria-controls=${next.id}]`).focus();
          }
          break;
        case "ArrowLeft":
          event.stopPropagation();
          event.preventDefault();

          let prevIndex = currentPanel;
          if (prevIndex === 0) prevIndex = total;
          prevIndex = prevIndex - 1;

          let previous = activePanels[prevIndex];
          if (previous) {
            onChangePane(previous.name);
            document.querySelector(`[aria-controls=${previous.id}]`).focus();
          }

          break;
        case "Home":
          event.stopPropagation();
          event.preventDefault();

          let first = activePanels[0];
          if (first) {
            onChangePane(first.name);
            document.querySelector(`[aria-controls=${first.id}]`).focus();
          }

          break;
        case "End":
          event.stopPropagation();
          event.preventDefault();

          let last = activePanels[activePanels.length - 1];
          if (last) {
            onChangePane(last.name);
            document.querySelector(`[aria-controls=${last.id}]`).focus();
          }

          break;
        case "Space":
        case "Enter":
          event.stopPropagation();
          event.preventDefault();

          const selectedPanel = findById(id);
          if (selectedPanel) onChangePane(selectedPanel.name);
          break;
        default: {
        }
      }
    };

    watch(
      tabPanels,
      () => {
        const panelRefs = tabsRef.value?.querySelectorAll('[id^="tabpanel-"]');
        if (!panelRefs) return;
        let orderMap = Array.prototype.slice
          .call(panelRefs)
          .reduce(
            (lookup, element, index) =>
              Object.assign(lookup, {[element.id]: index}),
            {}
          );

        // console.log(orderMap);
        tabPanels.value.sort((a, z) => orderMap[a.id] - orderMap[z.id]);
      },
      {deep: true}
    );

    // watch(
    //   () => props.modelValue,
    //   (value) => {
    //     console.log("CHANGE VALUE:", value);
    //     setDirection(value, currentValue.value);
    //     currentValue.value = value;
    //   }
    // );

    return {
      el: tabsRef,
      direction,
      tabPanels,
      onKeyDown,
      currentValue
    };
  }
});

export const TabTransition = defineComponent({
  name: "TabTransition",

  props: {
    tag: {
      type: String,
      default: "div"
    },

    transition: {
      type: String,
      default: "fade"
    }
  },

  render() {
    const defaultSlots = useDefaultSlots(this.$slots);
    // console.log("Render-slots:", defaultSlots);
    return h(
      TransitionGroup,
      {
        tag: this.tag,
        name: this.transition,
        onEnter: this.onAddOverflowHidden,
        onAfterEnter: this.onRemoveOverflowHidden,
        style: this.styles
      },
      {
        default: () =>
          defaultSlots.map((node) =>
            h(resolveDynamicComponent(node), {
              key: node.key
            })
          )
      }
    );
  },

  setup() {
    let isOverflowHidden = ref(false);

    const onAddOverflowHidden = () => {
      isOverflowHidden.value = true;
    };

    const onRemoveOverflowHidden = () => {
      isOverflowHidden.value = false;
    };

    let styles = computed(() => ({
      overflow: isOverflowHidden.value ? "hidden" : "visible"
    }));

    return {
      styles,
      onAddOverflowHidden,
      onRemoveOverflowHidden
    };
  }
});

export const TabPanel = defineComponent({
  name: "TabPanel",

  props: {
    tag: {
      type: String,
      default: "div"
    },

    name: {
      type: String,
      default: ""
    },

    label: {
      type: String,
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    class: {
      type: [String, Function],
      required: false
    }
  },

  render() {
    let propsWeControl = {
      id: this.domId,
      role: "tabpanel",
      "aria-expanded": this.isActive,
      class: this.$props.class
    };

    return withDirectives(
      h(
        this.tag,
        {...propsWeControl},
        this.$slots.default({
          active: this.isActive,
          disabled: this.disabled
        })
      ),
      [[vShow, this.isActive]]
    );
  },

  setup(props, {attrs}) {
    const api = inject(TabsContext, null);

    const id = useId();
    const domId = `tabpanel-${id}`;

    const name = props.name || id.toString();

    const isActive = computed(() => toRaw(api.value.value) === name);

    const isDisabled = computed(() => props.disabled);

    api.registerPanel({
      id: domId,
      name,
      props: {
        label: props.label,
        active: isActive,
        disabled: isDisabled,
        ...attrs
      }
    });

    onUnmounted(() => {
      api.unregisterPanel(name);
    });

    return {
      domId,
      isActive
    };
  }
});

export const TabList = defineComponent({
  name: "TabList",
  props: {
    tag: {
      type: String,
      default: "ul"
    }
  },
  render() {
    return h(
      this.tag,
      {
        role: "tablist"
      },
      this.$slots.default()
    );
  }
});

export const TabButton = defineComponent({
  name: "TabButton",
  props: {
    tag: {
      type: String,
      default: "li"
    },

    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    active: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },
  render() {
    let propsWeControl = {
      role: "tab",
      key: this.id,
      "aria-controls": this.id,
      tabindex: this.disabled ? -1 : 0,
      "aria-selected": this.active,
      onClick: this.onClick
    };

    return h(this.tag, {...propsWeControl}, this.$slots.default());
  },
  setup(props) {
    const api = inject(TabsContext, null);

    const onClick = () => {
      if (props.disabled || props.active) return;
      api.change(props.name);
    };

    return {
      onClick
    };
  }
});
