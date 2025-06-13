<script setup></script>

<template>
	<section class="max-w-[1240px] w-full mx-auto mb-[170px] px-4 md:px-0">
		<div class="relative w-full">
			<img
				src="@/assets/images/hero_bg.png"
				width="1240"
				height="770"
				class="w-full h-full object-cover"
			/>
			<img
				src="@/assets/images/iphone_main.png"
				width="534"
				height="710"
				class="absolute top-[103px] right-[41px] hidden lg:inline-block"
				style="
					filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))
						drop-shadow(-4px 0 4px rgba(0, 0, 0, 0.1))
						drop-shadow(5px 0 4px rgba(0, 0, 0, 0.1));
				"
			/>
			<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:absolute lg:top-[106px] lg:left-[102px] lg:max-w-[500px]">
				<h1 class="text-2xl md:text-2xl lg:text-[56px] font-bold mb-5">
					Strong for life with us
				</h1>
				<div class="w-[23px] h-[2px] bg-[#FF2D55] sm:h-[3px] sm:w-[46px] mb-3 md:mb-9"></div>
				<p class="hidden sm:inline-block text-[#443A5A] text-base md:text-lg lg:text-2xl mb-9">
					The best Pre/postnatal fitness app! 100 exercises divided in
					before, during and after pregnancy. Stay strong and healthy
					through all stages of pregnancy.
				</p>
				<div class="flex gap-10">
					<a href="/" class="w-[100px] h-[25px] lg:w-[170px] lg:h-[50px] hover:opacity-80 transition-opacity"><img src="@/assets/images/app_store.png"></a>
					<a href="/" class="w-[100px] h-[25px] lg:w-[170px] lg:h-[50px] hover:opacity-80 transition-opacity"><img src="@/assets/images/google_play.png"></a>
				</div>

			</div>
		</div>
	</section>
</template>
