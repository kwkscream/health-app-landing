import Home from "@/views/Home.vue"
import FeedbackForm from '@/views/FeedbackForm.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{path: '/', name:'Home', component:Home},
	{path: '/feedback', name:'Feedback', component:FeedbackForm}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router