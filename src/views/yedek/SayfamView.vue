<template>
	<div class="max-xl-2 mx-auto">
		<div>
			<accordion id="faq" v-model="activeAccordion" :multiple="multiple">
				<accordion-item title="Celebration" id="1" :key="1">
					<div class="detail">
						<p>Come on, this is a Bluth family celebration. It's no place for children.</p>
					</div>
				</accordion-item>
				<accordion-item title="Lighter Fluid and Wine" id="2" :key="2">
					<div class="detail">
						<p>But where did the lighter fluid come from? Wine only turns to alcohol if you let it sit. But anyhoo, can you
							believe that the only reason the club is going under is because it's in a terrifying neighborhood?</p>
					</div>
				</accordion-item>
				<accordion-item title="What's in Oscar's box?" id="3" :key="3">
					<div class="detail">
						<p>In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed.</p>
						<p>Great, now I'm gonna smell to high heaven like a tuna melt!</p>
					</div>
				</accordion-item>
			</accordion>
		</div>
	</div>
</template>

<script>
import Accordion from "@/views/Accordion.vue";
import AccordionItem from "@/views/AccordionItem.vue";

export default {
	name: "AboutView",
	data() {
		return {
			activeAccordion: 1, // varsayılan olarak hiçbir accordion açık değil
			multiple: false, // birden fazla accordion'ın açık olmasına izin ver
		};
	},
	components: {
		Accordion,
		AccordionItem,
	},
};
</script>

<style scoped>

</style>