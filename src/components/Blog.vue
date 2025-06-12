<script setup></script>

<template>
	<section class="max-w-[1230px] w-full mx-auto mb-[80px]">
		<div class="flex flex-col items-center justify-center mb-8">
			<h2 class="mb-5 text-5xl text-[#23153E] font-bold">
				Our blog posts
			</h2>
			<div class="bg-[#FF2D55] h-[3px] w-[46px] mb-[60px]"></div>
			<div class="flex items-center justify-center gap-[30px]">
				<article class="relative">
					<img
						src="@/assets/images/blog_1.png"
						width="604"
						height="604"
					/>

					<div
						class="absolute bottom-[34px] left-[32px] right-[28px]"
					>
						<h4
							class="text-white font-bold text-3xl max-w-[544px] text-start mb-3"
						>
							Return to running after <br />
							pregnancy – Is your body strong enough for running?
						</h4>
						<div class="flex gap-9">
							<div class="flex gap-[9px]">
								<img
									src="@/assets/Icons/blog_icon.svg"
									width="30"
									height="30"
								/>
								<span class="text-base text-white leading-7"
									>BY TILDA LOFTIN</span
								>
							</div>
							<div>
								<span class="text-base text-white leading-7"
									>JUNE 25, 2021</span
								>
							</div>
						</div>
					</div>
				</article>

				<div class="grid grid-cols-2 gap-[32px]">
					<article class="relative w-full">
						<img
							src="@/assets/images/blog_2.png"
							width="286"
							height="286"
						/>

						<div
							class="absolute bottom-[16px] left-[16px] right-[99px]"
						>
							<h5 class="font-bold text-2xl text-white mb-[6px]">
								Stroller walks
							</h5>
							<span class="text-base text-white leading-7"
								>APRIL 21, 2021</span
							>
						</div>
					</article>
					<article class="relative w-full">
						<img
							src="@/assets/images/blog_3.png"
							width="286"
							height="286"
						/>

						<div class="absolute bottom-[16px] left-[16px]">
							<h5 class="font-bold text-2xl text-white mb-[6px]">
								Playground <br />
								workout
							</h5>
							<span class="text-base text-white leading-7"
								>MARCH 17, 2020</span
							>
						</div>
					</article>
					<article class="relative w-full">
						<img
							src="@/assets/images/blog_4.png"
							width="286"
							height="286"
						/>

						<div class="absolute bottom-[16px] left-[16px]">
							<h5 class="font-bold text-2xl text-white mb-[6px]">
								Your Essential Fitness Gear for <br />
								Each Trimester
							</h5>
							<span class="text-base text-white leading-7"
								>FEBRUARY 21, 2021</span
							>
						</div>
					</article>
					<article class="relative w-full">
						<img
							src="@/assets/images/blog_5.png"
							width="286"
							height="286"
						/>

						<div class="absolute bottom-[16px] left-[16px]">
							<h5 class="font-bold text-2xl text-white mb-[6px]">
								What YOU could gain by working <br />
								with a Woman’s Health Physical Therapist
							</h5>
							<span class="text-base text-white leading-7"
								>JANUARY 23, 2020</span
							>
						</div>
					</article>
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center">
			<a href="/" class="hover:underline text-2xl text-[#23153E] leading-7 flex items-center gap-[9px]"
				>Like what you see? View more
				<img src="@/assets/Icons/button_right.svg"
			/></a>
		</div>
	</section>
</template>
