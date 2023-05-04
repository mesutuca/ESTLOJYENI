<template>
	<div class="top hidden sm:block bg-[#131d33]">
		<div class="container max-w-9xl mx-auto">
			<div class="flex items-center justify-between w-full top-menu">
				<div class="top-left">
					<ul class="flex flex-wrap">
						<li>
							<a href="">234, Triumph St, Los Angeles, California, US.</a>
						</li>
						<li>
							<a href="">Mon - Satday: 9.00 am to 6.00 pm.</a>
						</li>
					</ul>
				</div>
				<div class="top-right">
					<ul class="flex flex-wrap">
						<li>
							<a href="">Sipariş Takip</a>
						</li>
						<li>
							<a href="">+90 542 443 87 00</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Top"
}
</script>

<style lang="scss">
.top-menu {
	ul {
		li {
			border-left: 1px solid rgba(255, 255, 255, 0.2);

			a {
				display: flex;
				align-items: center;
				height: 44px;
				color: white;
				line-height: calc(12px + 8px);
				font-size: 12px;
				font-weight: 400;
				padding: 0 16px;
				transition: all .2s linear;
			}

			&:first-child {
				border-left: none;
			}

			&:last-child {
				border-right: none;
			}
		}


	}
}
</style>
