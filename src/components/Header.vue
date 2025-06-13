<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isToggleOpen = ref(false);
const isMobileMenuOpen = ref(false);

const toggleDrop = () => {
	isToggleOpen.value = !isToggleOpen.value;
};

const toggle = () => {
	isOpen.value = !isOpen.value;
};

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
	<header class="mb-[62px]">
		<div class="max-w-[1230px] w-full mx-auto px-4">
			<div class="flex items-center justify-between py-4">
				<nav class="flex items-center">
					<a
						href="/"
						class="text-[#6750A4] font-bold text-[32px] sm:text-[40px]"
						>LOGO</a
					>
				</nav>

				<button
					class="lg:hidden text-[#23153E]"
					@click="toggleMobileMenu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<nav
					class="hidden lg:flex items-center gap-6 text-lg text-[#23153E] leading-relaxed"
				>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Pricing</a>
					<a href="/">Facts</a>
					<a href="/">Blog</a>
					<a href="/">Support</a>

					<div class="relative">
						<button
							@click="toggle"
							class="text-lg bg-[#6750A4] hover:bg-[#6760A4] py-2 px-6 rounded-full text-white transition-colors"
						>
							Download
						</button>

						<div
							v-if="isOpen"
							class="absolute right-0 mt-2 w-44 bg-white rounded shadow-lg z-50"
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
					</div>

					<div class="relative">
						<button
							@click="toggleDrop"
							class="flex items-center text-lg cursor-pointer text-[#23153E]"
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
							class="absolute left-0 mt-3 w-44 bg-white rounded shadow-lg z-50"
						>
							<a
								href="/"
								class="flex items-center text-sm px-4 py-2 text-[#23153E] hover:bg-gray-100"
							>
								<img
									src="@/assets/Icons/sverige_icon.svg"
									width="24"
									height="24"
									class="mr-2"
								/>
								Sverige
							</a>
							<a
								href="/"
								class="flex items-center text-sm px-4 py-2 text-[#23153E] hover:bg-gray-100"
							>
								<img
									src="@/assets/Icons/english_icon.svg"
									width="24"
									height="24"
									class="mr-2"
								/>
								English
							</a>
						</div>
					</div>
				</nav>
			</div>
			<div
				v-if="isMobileMenuOpen"
				class="lg:hidden flex flex-col gap-3 text-[#23153E] text-base mt-4"
			>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Pricing</a>
				<a href="/">Facts</a>
				<a href="/">Blog</a>
				<a href="/">Support</a>
				<div class="relative">
					<button
						@click="toggle"
						class="bg-[#6750A4] hover:bg-[#6760A4] text-white py-2 px-6 rounded-full lg:w-full text-center"
					>
						Download
					</button>

					<div
						v-if="isOpen"
						class="bg-white rounded shadow z-50 mt-1"
					>
						<a href="/" class="block px-4 py-2 hover:bg-gray-100"
							>App Store</a
						>
						<a href="/" class="block px-4 py-2 hover:bg-gray-100"
							>Google Play</a
						>
					</div>
				</div>
				<div class="relative">
					<button
						@click="toggleDrop"
						class="flex items-center cursor-pointer text-[#23153E] mt-3"
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
						class="bg-white rounded shadow-lg mt-1 z-50"
					>
						<a
							href="/"
							class="flex items-center text-sm px-4 py-2 text-[#23153E] hover:bg-gray-100"
						>
							<img
								src="@/assets/Icons/sverige_icon.svg"
								width="24"
								height="24"
								class="mr-2"
							/>
							Sverige
						</a>
						<a
							href="/"
							class="flex items-center text-sm px-4 py-2 text-[#23153E] hover:bg-gray-100"
						>
							<img
								src="@/assets/Icons/english_icon.svg"
								width="24"
								height="24"
								class="mr-2"
							/>
							English
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
