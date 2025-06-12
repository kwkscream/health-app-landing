<script setup></script>

<template>
	<section class="max-w-[1230px] w-full mx-auto mb-[160px]">
		<div class="relative">
			<img src="@/assets/images/send_data_bg.png" />
			<div
				class="absolute top-[100px] left-[105px] flex justify-center items-center gap-[240px]"
			>
				<h3 class="text-white text-5xl font-bold">Send your data</h3>
				<!-- тре поміняти на router-link  -->

				<RouterLink
					to="/feedback"
					class="rounded-full hover:bg-[#6730A4] bg-[#6750A4] py-3.5 px-[147px] font-medium text-lg text-white"
					>Go to form</RouterLink
				>
			</div>
		</div>
	</section>
</template>
