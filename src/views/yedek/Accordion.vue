<template>
	<div class="accordion">
		<slot/>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	props: {
		id: {
			type: [String, Number],
			required: false,
		},
		multiple: {
			type: Boolean,
			required: false,
		},
		modelValue: {
			type: [String, Number],
			required: true,
		},
	},
	data() {
		return {
			active: this.modelValue,
		};
	},
	watch: {
		value(val) {
			this.active = val;
		},
		active(val) {
			this.$emit("update:modelValue", val);
		},
	},
	methods: {
		setActive(id) {
			console.log(id,'burasimi')
			if (this.multiple) {
				const index = this.active.indexOf(id);
				if (index > -1) {
					this.active.splice(index, 1);
				} else {
					this.active.push(id);
				}
			} else {
				this.active = this.active === id ? 0 : id;
			}
		},
	},
};
</script>