<template>
 <div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
  <dt class="accordion-item-title">
   <button @click="toggle" class="accordion-item-trigger">
    <h4 class="accordion-item-title-text">{{ item.title }}</h4>
    <span class="accordion-item-trigger-icon"></span>
   </button>
  </dt>
  <transition
      name="accordion-item"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave">
   <dd v-show="item.active" class="accordion-item-details">
    <div v-html="item.details" class="accordion-item-details-inner"></div>
   </dd>
  </transition>
 </div>
</template>

<script>
export default {
 props: ['item', 'multiple', 'groupId'],
 name: "AccordionItem",
 methods: {
  toggle(event) {
   if (this.multiple) this.item.active = !this.item.active
   else {
    this.$parent.$refs.child.forEach((item, index) => {
     if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
     else item.item.active = false
    })
   }
  },
  beforeEnter: function (el) {
   el.style.height = '0';
  },
  enter: function (el) {
   el.style.height = el.scrollHeight + 'px';
  },
  beforeLeave: function (el) {
   el.style.height = el.scrollHeight + 'px';
  },
  leave: function (el) {
   el.style.height = '0';
  }
 }
}
</script>

<style lang="scss">


.accordion {
 padding: 0;

 .accordion-item {

  &.is-active {
   .accordion-item-title {
    .accordion-item-trigger {
     background-color: #002C8F;
     color: #fff;
    }
   }


  }
 }
}

.accordion div:not(:last-child) {
 margin-bottom: 10px;
}

.accordion div:last-child .accordion-item-details {
 border-radius: 5px;
}

.accordion dd {
 margin-left: 0;
}

.accordion-item-trigger,
.accordion-item-details-inner {
 padding: 15px 20px 15px 20px;
 color: #949494;
}

.accordion-item-title {
 position: relative;
}

.accordion-item-title h4 {
 font-weight: 600;
 font-size: 18px;
 margin-bottom: 0;
 padding-right: 1.25rem;
}

.accordion-item-trigger {
 width: 100%;
 text-align: left;
 background-color: #F2F2F2;
 border-radius: 5px 5px 5px 5px;
 outline: none;
}

.accordion-item-trigger-icon {
 display: block;
 position: absolute;
 top: 0;
 right: 1.25rem;
 bottom: 0;
 margin: auto;
 width: 8px;
 height: 8px;
 border-right: 2px solid #363636;
 border-bottom: 2px solid #363636;
 transform: translateY(-2px) rotate(45deg);
 transition: transform 0.2s ease;
}

.is-active .accordion-item-trigger-icon {
 transform: translateY(2px) rotate(225deg);
}

.accordion-item-details {
 overflow: hidden;
 background-color: #f5f5f578;
}

.accordion-item-enter-active,
.accordion-item-leave-active {
 will-change: height;
 transition: height 0.4s ease;
}

.accordion-item-enter,
.accordion-item-leave-to {
 height: 0 !important;
}
</style>