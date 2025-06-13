<script setup></script>

<template>
	<main class="max-w-[1230px] w-full mx-auto mb-[160px] px-4">
		<div
			class="flex flex-col items-center justify-center text-center mb-[60px]"
		>
			<h3 class="font-bold text-[#23153E] text-3xl p-3 md:text-5xl md:p-6">
				Before, during and after pregnancy
			</h3>
			<p class="text-[#443A5A] font-medium text-lg p-3 md:text-3xl md:p-5">
				The app is divided into three different stages to help you
				choose appropriate exercises. Each exercise is carefully
				selected to ensure safe and appropriate adjustments to follow
				the pregnancy’s progress.
			</p>
			<div class="bg-[#FF2D55] h-[3px] w-[46px] mb-[60px]"></div>
		</div>

		<div
			class="flex items-center justify-center gap-10 md:gap-[90px] relative mb-6 px-2 sm:px-0"
		>
			<div class="mb-5 md:mb-0">
				<h3
					class="font-bold text-3xl md:text-[40px] text-[#23153E] mb-3.5 text-start"
				>
					Before pregnancy
				</h3>
				<div class="bg-[#FF2D55] h-[2px] w-[34px] md:h-[3px] md:w-[46px] mb-6"></div>
				<p class="leading-7 text-lg text-[#443A5A] mb-4">
					Start preparing for pregnancy with safe exercises that build
					up a strong body.
				</p>
				<h4 class="font-medium text-2xl md:text-3xl text-[#443A5A] mb-[5px]">
					Trimesters
				</h4>
				<p class="text-base md:text-lg text-[#443A5A] max-w-[556px]">
					The pregnancy is divided into first trimester, second
					trimester part 1 and 2, and third trimester part 1 and 2 to
					provide exercises that are safe for each stage of the
					pregnancy. Each exercise comes with a video and a
					description so you can safely perform each exercise. Simple
					put in your due date and you will be taken to the proper
					stage.
				</p>
			</div>
			<div class="hidden md:inline-block md:w-[546px] md:h-[683px]">
				<img src="@/assets/images/activities.png" />
			</div>
			<img
				src="@/assets/images/healthy_text.png"
				width="973"
				height="217"
				class="hidden md:inline-block absolute top-157 left-65 -z-30"
			/>
		</div>
		<div class="flex flex-row-reverse md:flex-row items-center gap-10 md:gap-[90px] px-2 sm:px-0">
			<div>
				<img
					class="hidden md:inline-block"
					src="@/assets/images/during.png"
					width="546"
					height="652"
				/>
			</div>
			<div class="max-w-[605px]">
				<h3 class="font-bold text-2xl md:text-[40px] text-[#23153E] mb-3.5">
					During pregnancy
				</h3>
				<div class="bg-[#FF2D55] h-[2px] w-[34px] md:h-[3px] md:w-[46px] mb-6"></div>
				<p class="text-base md:text-lg text-[#443A5A] leading-7 max-w-[498px]">
					Working out during pregnancy has many benefits for both the
					mom and the baby. It can reduce back pain, help prevent
					gestational diabetes, promote good posture, strength and
					endurance, and also improve the ability to cope with labor.
				</p>
			</div>
		</div>
	</main>
</template>
