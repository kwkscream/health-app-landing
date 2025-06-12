<script setup>
	import Header from '../components/Header.vue';
	 import Footer from '../components/Footer.vue';
	 import Form from '../components/Form.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header class="mb-[100px]" />
    <main class="flex flex-1 items-center justify-center">
      <Form />
    </main>
    <Footer />
  </div>
</template>