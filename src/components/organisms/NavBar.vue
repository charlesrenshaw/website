<script setup lang="ts">
import { ref } from 'vue'
import logo from "../../assets/cra_logo_blue.svg"

const navlinks = [
    {
        name: "About Us",
        link: "/about-us",
        icon: "pi pi-info-circle"
    },
    {
        name: "Our People",
        link: "/our-people",
        icon: "pi pi-users"
    },
    {
        name: "Our Expertise",
        link: "/expertise",
        icon: "pi pi-briefcase"
    },
    {
        name: "Resources",
        link: "/resources",
        icon: "pi pi-book"
    }
]

const companyEmail = "info@charlesrenshaw.com"
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
    <div class="hidden lg:flex justify-between items-center w-full h-32 py-8 px-16">
        <a href="/">
            <img :src="logo" alt="Logo" />
        </a>

        <div>
            <div class="flex items-center w-full gap-6">
                <ul class="flex gap-6">
                    <li v-for="(navlink, index) in navlinks" :key="index" class="hover:text-blue-600 cursor-pointer">
                        <router-link :to="navlink.link" class="text-[#0D1C2999] text-xs font-medium"
                            active-class="text-black" exact-active-class="text-black font-semibold">
                            {{ navlink.name }}
                        </router-link>
                    </li>
                </ul>
                <a :href="`mailto:${companyEmail}`"
                    class="uppercase bg-[#140A23] text-xs font-medium text-white py-3 px-6">
                    Contact Us
                </a>
            </div>
        </div>
    </div>

    <div class="lg:hidden flex justify-between items-center w-full py-6 px-6">
        <a href="/" class="z-20">
            <img :src="logo" alt="Logo" class="h-12" />
        </a>

        <button @click="toggleMobileMenu" class="z-20 text-[#140A23] p-2">
            <i v-if="!mobileMenuOpen" class="pi pi-bars text-2xl"></i>
            <i v-else class="pi pi-times text-2xl"></i>
        </button>

        <div v-if="mobileMenuOpen" 
             class="fixed inset-0 bg-white z-10 pt-24 px-6 flex flex-col h-screen">
            <ul class="space-y-6">
                <li v-for="(navlink, index) in navlinks" :key="index" class="border-b border-gray-100 pb-4">
                    <router-link :to="navlink.link" 
                                @click="mobileMenuOpen = false"
                                class="text-[#140A23] text-sm font-medium flex items-center"
                                active-class="text-[#C5A788]" 
                                exact-active-class="text-[#C5A788] font-semibold">
                        <i :class="navlink.icon" class="mr-3 text-lg"></i>
                        {{ navlink.name }}
                    </router-link>
                </li>
            </ul>
            
            <a :href="`mailto:${companyEmail}`"
               class="uppercase bg-[#140A23] text-white py-3 px-6 flex items-center justify-center mt-8">
                <i class="pi pi-envelope mr-2"></i>
                Contact Us
            </a>
        </div>
    </div>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
    transition: all 0.3s ease;
}
</style>
