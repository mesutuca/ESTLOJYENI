<template>
	<div class="accordion-item" :class="{'is-active': isActive}">
		<div class="accordion-item-title">
			<button @click="toggle" class="accordion-item-trigger">
				<h4 class="accordion-item-title-text">{{ title }}</h4>
				<span class="accordion-item-trigger-icon"></span>
			</button>
		</div>
		<transition
			name="accordion-item"
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave">
			<dd v-show="isActive" class="accordion-item-details">
				<div class="accordion-item-details-inner">
					<slot/>
				</div>
			</dd>
		</transition>
	</div>
</template>

<script>
export default {
	name: "AccordionItem",
	props: {
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	computed: {
		isActive() {
			return this.$parent.activeItems.includes(this.id);
		},
	},
	methods: {
		toggle() {
			this.$parent.toggleAccordion(this.id);
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
	},
};
</script>
<style lang="scss">
#accordion-1 {
	&.accordion {
		padding: 0;

		div:not(:last-child) {
			margin-bottom: 10px;
		}

		.accordion-item {

			.accordion-item-title {
				position: relative;

				.accordion-item-trigger {
					width: 100%;
					text-align: left;
					background-color: #F2F2F2;
					border-radius: 5px 5px 5px 5px;
					outline: none;
					padding: 15px 20px 15px 20px;
					color: #949494;

					.accordion-item-title-text {
						font-weight: 600;
						font-size: 18px;
						margin-bottom: 0;
						padding-right: 1.25rem;
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
				}

			}

			.accordion-item-details {
				overflow: hidden;
				background-color: #f5f5f578;
				border-radius: 0 0 5px 5px;

				.accordion-item-details-inner {
					padding: 15px 20px 15px 20px;
					color: #949494;
				}
			}

			&.is-active {
				.accordion-item-title {
					.accordion-item-trigger {
						background-color: #002C8F;
						color: #fff;

						.accordion-item-trigger-icon {
							border-right: 2px solid #ffffff;
							border-bottom: 2px solid #ffffff;
							transform: translateY(2px) rotate(225deg);
						}
					}
				}
			}

		}
	}
}

:root {
	--spacer-1: 4px;
	--spacer-2: 8px;
	--spacer-3: 12px;
	--spacer-4: 16px;
	--spacer-5: 20px;
	--spacer-6: 24px;
	--spacer-7: 28px;
	--spacer-8: 32px;
	--spacer-9: 36px;
	--spacer-10: 40px;
	--spacer-11: 44px;
	--spacer-12: 48px;
	--spacer-13: 52px;
	--spacer-14: 56px;
	--spacer-15: 60px;
	--spacer-16: 64px;
	--spacer-17: 68px;
	--spacer-18: 72px;
	--spacer-19: 76px;
	--spacer-20: 80px;
	--spacer-21: 84px;
	--spacer-22: 88px;
	--spacer-23: 92px;
	--spacer-24: 96px;
	--spacer-25: 100px;
	--spacer-26: 104px;
	--spacer-27: 108px;
	--spacer-28: 112px;
	--spacer-29: 116px;
	--spacer-30: 120px;
	--spacer-31: 124px;
	--spacer-32: 128px;
	--spacer-33: 132px;
	--spacer-34: 136px;
	--spacer-35: 140px;
	--spacer-36: 144px;
	--spacer-37: 148px;
	--spacer-38: 152px;
	--spacer-39: 156px;
	--spacer-40: 160px;
	--font-size-10: 10px;
	--font-size-11: 11px;
	--font-size-12: 12px;
	--font-size-13: 13px;
	--font-size-14: 14px;
	--font-size-15: 15px;
	--font-size-16: 16px;
	--font-size-17: 17px;
	--font-size-18: 18px;
	--font-size-19: 19px;
	--font-size-20: 20px;
	--font-size-21: 21px;
	--font-size-22: 22px;
	--font-size-23: 23px;
	--font-size-24: 24px;
	--font-size-25: 25px;
	--font-size-26: 26px;
	--font-size-27: 27px;
	--font-size-28: 28px;
	--font-size-29: 29px;
	--font-size-30: 30px;
	--font-size-31: 31px;
	--font-size-32: 32px;
	--font-size-33: 33px;
	--font-size-34: 34px;
	--font-size-35: 35px;
	--font-size-36: 36px;
	--font-size-37: 37px;
	--font-size-38: 38px;
	--font-size-39: 39px;
	--font-size-40: 40px;
	--font-size-41: 41px;
	--font-size-42: 42px;
	--font-size-43: 43px;
	--font-size-44: 44px;
	--font-size-45: 45px;
	--font-size-46: 46px;
	--font-size-47: 47px;
	--font-size-48: 48px;
	--font-size-49: 49px;
	--font-size-50: 50px;
	--font-size-51: 51px;
	--font-size-52: 52px;
	--font-size-53: 53px;
	--font-size-54: 54px;
	--font-size-55: 55px;
	--font-size-56: 56px;
	--font-size-57: 57px;
	--font-size-58: 58px;
	--font-size-59: 59px;
	--font-size-60: 60px;
	--font-size-61: 61px;
	--font-size-62: 62px;
	--font-size-63: 63px;
	--font-size-64: 64px;
	--font-size-65: 65px;
	--font-size-66: 66px;
	--font-size-67: 67px;
	--font-size-68: 68px;
	--font-size-69: 69px;
	--font-size-70: 70px;
	--font-size-71: 71px;
	--font-size-72: 72px;
	--font-size-73: 73px;
	--font-size-74: 74px;
	--font-size-75: 75px;
	--font-size-76: 76px;
	--font-size-77: 77px;
	--font-size-78: 78px;
	--font-size-79: 79px;
	--font-size-80: 80px;
	--font-size-81: 81px;
	--font-size-82: 82px;
	--font-size-83: 83px;
	--font-size-84: 84px;
	--font-size-85: 85px;
	--font-size-86: 86px;
	--font-size-87: 87px;
	--font-size-88: 88px;
	--font-size-89: 89px;
	--font-size-90: 90px;
	--font-size-91: 91px;
	--font-size-92: 92px;
	--font-size-93: 93px;
	--font-size-94: 94px;
	--font-size-95: 95px;
	--font-size-96: 96px;
	--font-size-97: 97px;
	--font-size-98: 98px;
	--font-size-99: 99px;
	--font-size-100: 100px;
	--font-size-101: 101px;
	--font-size-102: 102px;
	--font-size-103: 103px;
	--font-size-104: 104px;
	--font-size-105: 105px;
	--font-size-106: 106px;
	--font-size-107: 107px;
	--font-size-108: 108px;
	--font-size-109: 109px;
	--font-size-110: 110px;
	--font-size-111: 111px;
	--font-size-112: 112px;
	--font-size-113: 113px;
	--font-size-114: 114px;
	--font-size-115: 115px;
	--font-size-116: 116px;
	--font-size-117: 117px;
	--font-size-118: 118px;
	--font-size-119: 119px;
	--font-size-120: 120px;
}

#accordion-2 {
	&.accordion {
		border: 1px solid #f2eded;
		padding: 0;

		.accordion-item {
			//border-bottom: 1px solid #f2eded;
			border-top: 1px solid #f2eded;

			&:first-of-type {
				border-top: 0;
				//border: none;
			}

			&:last-of-type {
				border-bottom: 0;
				//border: none;
			}

			.accordion-item-title {
				position: relative;


				.accordion-item-trigger {
					width: 100%;
					text-align: left;
					outline: none;
					padding: 15px 20px 15px 20px;
					color: #949494;

					.accordion-item-title-text {
						font-size: 15px;
						margin-bottom: 0;
						padding-right: 1.25rem;
						font-weight: 600;
						font-style: normal;
						font-stretch: normal;
						line-height: 2.29;
						letter-spacing: -0.15px;
						color: #484848;
					}

					.accordion-item-trigger-icon {
						position: absolute;
						right: 2.25rem;
						top: 0;
						width: 24px;
						height: 100%;
						background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M11 13V22H13V13H22V11H13V2H11V11H2V13H11Z' fill='%23008286'/%3E%3C/svg%3E") no-repeat 50%;
						transition: all .2s linear;
					}
				}

			}

			.accordion-item-details {
				overflow: hidden;
				background-color: #f5f5f578;

				.accordion-item-details-inner {
					padding: 15px 20px 15px 20px;
					color: #949494;
				}
			}

			&.is-active {
				.accordion-item-title {
					.accordion-item-trigger {
						border-bottom: 1px solid #f2eded;
						background-color: #002C8F;

						.accordion-item-title-text {
							color: #fff;
						}

						.accordion-item-trigger-icon {
							background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='FFFFFF'%3E%3Crect x='2' y='11' width='20' height='2' fill='%23008286'/%3E%3C/svg%3E") no-repeat 50%;
							transform: translateY(2px) rotate(-180deg);
						}
					}
				}
			}

		}
	}
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