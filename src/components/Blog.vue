<script setup>
const articles = [
	{
		img: "/article_images/blog_2.png",
		title: "Stroller Walks",
		date: "APRIL 21, 2021",
	},
	{
		img: "/article_images/blog_3.png",
		title: "Playground workout",
		date: "MARCH 17, 2020",
	},
	{
		img: "/article_images/blog_4.png",
		title: "Your Essential Fitness Gear for Each Trimester",
		date: "FEBRUARY 21, 2021",
	},
	{
		img: "/article_images/blog_5.png",
		title: "What YOU could gain by working with a Woman’s Health Physical Therapist ",
		date: "JANUARY 23, 2020",
	},
];
</script>

<template>
	<section class="max-w-[1230px] w-full mx-auto mb-[80px] px-4">
		<div class="flex flex-col items-center justify-center mb-8">
			<h2 class="mb-5 text-3xl md:text-5xl text-[#23153E] font-bold">
				Our blog posts
			</h2>
			<div
				class="bg-[#FF2D55] h-[2px] w-[34px] md:h-[3px] md:w-[46px] mb-[60px]"
			></div>
			<div class="flex items-center justify-center gap-[16px] md:gap-[30px] flex-col lg:flex-row">
				<article class="relative">
					<img
						class="w-full object-cover rounded-2xl"
						src="/article_images/blog_1.png"
					/>

					<div
						class="absolute bottom-[34px] left-[32px] right-[28px]"
					>
						<h4
							class="text-white font-bold text-lg md:text-xl lg:text-3xl max-w-[544px] text-start mb-3"
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

				<div class="grid grid-cols-2 gap-[16px] md:gap-[32px]">
					<article
						v-for="article in articles"
						:key="article.title"
						class="relative w-full"
					>
						<img :src="article.img" />

						<div
							class="w-full absolute bottom-[16px] left-[16px] right-[99px]"
						>
							<h5
								class="font-bold text-lg md:text-2xl text-white md:mb-[6px]"
							>
								Stroller walks
							</h5>
							<span
								class="text-xs md:text-base text-white leading-7"
								>APRIL 21, 2021</span
							>
						</div>
					</article>
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center">
			<a
				href="/"
				class="hover:underline text-lg md:text-2xl text-[#23153E] leading-7 flex items-center gap-[9px]"
				>Like what you see? View more
				<img src="@/assets/Icons/button_right.svg"
			/></a>
		</div>
	</section>
</template>
