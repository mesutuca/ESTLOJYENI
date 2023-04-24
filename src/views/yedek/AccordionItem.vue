<template>
	<div class="accordion-item">
		<div class="accordion-header" @click="toggle">
			<h3>{{ title }}</h3>
		</div>
		<div class="accordion-body" v-show="isActive">
			<slot/>
		</div>
	</div>

</template>

<script>
export default {
	name: "AccordionItem",
	props: {
		title: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},

	computed: {
		isActive() {
			if (Array.isArray(this.value)) {
				return this.value.includes(this.id);
			}
			return this.value === this.id;
		},
	},
	methods: {

		toggle() {
			if (this.$parent.multiple) {
				console.log("burasi")
			} else {
				console.log("else bloğu")
				// this.$parent.$refs.child.forEach((item, index) => {
				// 	if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
				// 	else item.item.active = false
				// })
			}
		},

		// toggle() {
		// 	this.$parent.setActive(this.id);
		// },
	},
};
</script>