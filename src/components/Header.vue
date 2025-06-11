<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const isToggleOpen = ref(false);

const toggleDrop = () => {
	isToggleOpen.value = !isToggleOpen.value;
};

const toggle = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<header class="mb-[62px]">
		<div class="max-w-[1230px] w-full mx-auto main-container">
			<div class="flex justify-between">
				<nav class="flex p-2 items-center">
					<a href="/" class="text-[#6750A4] font-bold text-[40px]"
						>LOGO</a
					>
				</nav>
				<nav
					class="flex p-6 gap-[24px] text-lg items-center leading-relaxed"
				>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Pricing</a>
					<a href="/">Facts</a>
					<a href="/">Blog</a>
					<a href="/">Support</a>

					<div class="relative inline-block text-left">
						<button
							@click="toggle"
							class="text-lg bg-[#6750A4] hover:bg-[#6760A4] py-2 px-10 rounded-full text-white cursor-pointer transition-colors mr-9"
						>
							Download
						</button>

						<div
							v-if="isOpen"
							class="absolute right-23 mt-2 w-44 bg-white rounded shadow-lg z-50"
						>
							<a
								href="/"
								class="text-sm block px-4 py-2 text-[#23153E] hover:bg-gray-100"
								>App Store</a
							>
							<a
								href="/"
								class="text-sm block px-4 py-2 text-[#23153E] hover:bg-gray-100"
								>Google Play</a
							>
						</div>

						<div class="relative inline-block">
							<button
								@click="toggleDrop"
								class="flex items-center text-lg cursor-pointer"
							>
								Eng
								<svg
									:class="{
										'rotate-180': isToggleOpen,
										'rotate-0': !isToggleOpen,
									}"
									class="w-4 h-4 ml-2 transition-transform duration-300"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</button>
							<div
								v-if="isToggleOpen"
								class="absolute left-0 mt-3 w-44 bg-white rounded shadow-lg z-50">
								
								<a
									href="/"
									class="flex items-center text-sm px-4 py-2 text-[#23153E] hover:bg-gray-100" 
									><img src="@/assets/Icons/sverige_icon.svg" width="24" height="24"> Sverige</a
								>

								<a
									href="/"
									class="flex items-center text-sm  px-4 py-2 text-[#23153E] hover:bg-gray-100"
									><img src="@/assets/Icons/english_icon.svg" width="24" height="24"> English</a
								>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</header>
</template>
