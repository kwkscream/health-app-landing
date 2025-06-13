<script setup></script>

<template>
	<section class="max-w-[1240px] w-full mx-auto mb-[160px] px-4 md:px-0 flex flex-col items-center">
		<div class="flex items-center justify-center">
			<div class="flex flex-col justify-center items-center">
				<h2 class="text-3xl md:text-5xl font-bold mb-6 text-[#23153E]">
					How does it work?
				</h2>
				<p class="text-lg md:text-4xl font-medium text-[#443A5A] mb-5">
					Easy, fun & essential training for moms
				</p>
				<div class="bg-[#FF2D55] h-[2px] w-[34px] md:h-[3px] md:w-[46px] mb-[60px]"></div>
			</div>
		</div>
		<div class="flex flex-col max-w-full sm:max-w-5/6 md:flex-row gap-10">
			<div class="flex gap-4 md:gap-10 max-w-[596px]">
				<img
					src="@/assets/Icons/search_icon.svg"
					class="w-[50px] h-[50px] md:w-[76px] md:h-[76px]"
				/>
				<div>
					<h3 class="text-[#23153E] text-lg md:text-3xl font-medium">
						Browse exercises
					</h3>
					<p class="text-[#443A5A] text-sm md:text-lg">
						Browse over 100 exercises with a video or picture and a
						description.
					</p>
				</div>
			</div>
			<div class="flex gap-4 md:gap-10 max-w-[596px]">
				<img
					src="@/assets/Icons/create_icon.svg"
					class="w-[50px] h-[50px] md:w-[76px] md:h-[76px]"
				/>
				<div>
					<h3 class="text-[#23153E] text-lg md:text-3xl font-medium">
						Create timeline
					</h3>
					<p class="text-[#443A5A] text-sm md:text-lg">
						Take pictures along the way during and after the
						pregnancy to see the transformation.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
