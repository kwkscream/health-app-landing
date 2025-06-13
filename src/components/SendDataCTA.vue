<script setup></script>

<template>
	<section class="max-w-[1230px] w-full mx-auto mb-[160px] px-4">
		<div class="bg-[url('@/assets/images/send_data_bg.png')] bg-cover bg-center w-full rounded-2xl">
			<div
				class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-[240px] px-[50px] py-[55px] md:px-[100px] md:py-[105px]"
			>
				<h3 class="md:whitespace-nowrap text-white text-2xl md:text-5xl font-bold">Send your data</h3>
				<RouterLink
					to="/feedback"
					class="md:whitespace-nowrap rounded-full hover:bg-[#6730A4] bg-[#6750A4] py-2 md:py-3.5 px-[50px] md:px-[147px] font-medium text-xl md:text-lg text-white"
					>Go to form</RouterLink
				>
			</div>
		</div>
	</section>
</template>
