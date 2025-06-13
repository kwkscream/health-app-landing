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
	<main class="max-w-[1240px] w-full mx-auto px-4">
		<div
			class="bg-[url('@/assets/images/form_bg.png')] bg-no-repeat bg-cover bg-center h-[560px] rounded-3xl mb-[100px] flex justify-center items-center"
		>
			<form
				@submit.prevent="handleForm"
				class="flex flex-col max-w-[400px] justify-center items-center px-4"
			>
				<h2 class="whitespace-nowrap text-white text-3xl md:text-5xl font-bold mb-4">
					Send your data
				</h2>
				<input
					v-model="form.fname"
					required
					placeholder="Name"
					type="text"
					name="fname"
					class="w-full pl-[30px] py-[15px] bg-white rounded-full mb-4"
				/>
				<input
					v-model="form.sname"
					required
					placeholder="Second Name"
					type="text"
					name="sname"
					class="w-full pl-[30px] py-[15px] bg-white rounded-full mb-4"
				/>
				<input
					v-model="form.email"
					required
					placeholder="Email"
					type="email"
					name="email"
					class="w-full pl-[30px] py-[15px] bg-white rounded-full mb-4"
				/>
				<input
					v-model="form.adress"
					required
					placeholder="Adress"
					type="text"
					name="adress"
					class="w-full pl-[30px] py-[15px] bg-white rounded-full mb-4"
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
