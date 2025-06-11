<script setup></script>

<template>
	<section class="max-w-[1230px] w-full mx-auto main-container">
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
				class="absolute top-26 left-160"
				style="
					filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))
						drop-shadow(-4px 0 4px rgba(0, 0, 0, 0.1))
						drop-shadow(5px 0 4px rgba(0, 0, 0, 0.1));
				"
			/>
			<div class="absolute top-[106px] left-[102px] max-w-[500px]">
				<h1 class="text-[56px] font-bold mb-5">
					Strong for life with us
				</h1>
				<div class="bg-[#FF2D55] h-[3px] w-[46px] mb-9"></div>
				<p class="text-[#443A5A] text-2xl mb-9">
					The best Pre/postnatal fitness app! 100 exercises divided in
					before, during and after pregnancy. Stay strong and healthy
					through all stages of pregnancy.
				</p>

				<div class="flex gap-10">
					<a href="/" class="hover:opacity-80 transition-opacity"><img src="@/assets/images/app_store.png" width="170" height="50"></a>
					<a href="/" class="hover:opacity-80 transition-opacity"><img src="@/assets/images/google_play.png" width="170" height="50"></a>
				</div>

			</div>
		</div>
	</section>
</template>
