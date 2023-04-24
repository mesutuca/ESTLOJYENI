<template>
	<div :id="id" class="accordion box w-full">
		<slot/>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	props: {
		id: {
			type: String,
			required: true,
		},
		multiple: {
			type: Boolean,
			required: false,
		},
		activeAccordion: {
			type: [String, Number, Array],
		},
	},
	data() {
		return {
			activeItems: [],
		};
	},
	methods: {
		toggleAccordion(id) {
			if (this.multiple) {
				if (this.activeItems.includes(id)) {
					this.activeItems = this.activeItems.filter((item) => item !== id);
				} else {
					this.activeItems.push(id);
				}
			} else {
				this.activeItems = this.activeItems === id ? [] : id;
			}
		},
		isActive(id) {
			return this.multiple ? this.activeItems.includes(id) : this.activeItems === id;
		},
	},
	mounted() {
		this.activeItems = this.activeAccordion;
	},
};
</script>