<script setup>
import { reactive } from "vue";
const form = reactive({
	fname: "",
	sname: "",
	email: "",
	adress: "",
});


const handleForm = () =>{
	console.log(` Name - ${form.fname} \n Second Name - ${form.sname} \n Email - ${form.email} \n Adress - ${form.adress}`);
}

</script>

<template>
	<main class="max-w-[1230px] w-full mx-auto px-4">
		<div
			class="bg-[url('@/assets/images/form_bg.png')] bg-no-repeat bg-cover bg-center h-[560px] rounded-3xl mb-[100px] flex justify-center items-center"
		>
			<form
				@submit.prevent="handleForm"
				class="flex flex-col max-w-[400px] justify-center items-center"
			>
				<h2 class="text-white text-3xl md:text-5xl font-bold mb-4">
					Send your data
				</h2>
				<input
					v-model="form.fname"
					required
					placeholder="Name"
					type="text"
					name="fname"
					class="pl-[30px] py-[15px] pr-[260] bg-white rounded-full mb-4"
				/>
				<input
					v-model="form.sname"
					required
					placeholder="Second Name"
					type="text"
					name="sname"
					class="pl-[30px] py-[15px] pr-[260] bg-white rounded-full mb-4"
				/>
				<input
					v-model="form.email"
					required
					placeholder="Email"
					type="email"
					name="email"
					class="pl-[30px] py-[15px] pr-[260] bg-white rounded-full mb-4"
				/>
				<input
					v-model="form.adress"
					required
					placeholder="Adress"
					type="text"
					name="adress"
					class="pl-[30px] py-[15px] pr-[260] bg-white rounded-full mb-4"
				/>

				<button
					class="cursor-pointer hover:opacity-90 font-medium text-lg text-white  py-[15px] px-[95px] md:px-[162px] bg-[#6750A4] rounded-full"
				>
					Submit
				</button>
			</form>
		</div>
	</main>
</template>
