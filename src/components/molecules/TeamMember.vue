<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    linkedinLink: {
        type: String,
        default: '#'
    }
})
</script>

<template>
    <div class="team-member w-full space-y-4">
        <div class="team-member-image relative w-full aspect-[3/4] mb-4 overflow-hidden">
            <img :src="image" :alt="name" class="w-full h-full object-cover">
            <div class="absolute bottom-8 left-8 backdrop-blur-lg px-6 py-2 border-l border-t border-white/20">
                <span class="uppercase text-white text-xs font-medium tracking-wider">{{ title }}</span>
            </div>
        </div>
        <div class="flex flex-col gap-1">
            <h3 class="text-[#0D1C29] font-light text-xl mb-1">{{ name }}</h3>
            <p class="text-[#0D1C2999] text-sm mb-3">{{ bio }}</p>
        </div>
        <div class="social-icons flex space-x-4">
            <template v-if="email !== '#'">
                <a :href="`mailto:${email}`"
                    class="transition-colors duration-300 group cursor-pointer hover:scale-110 transform">
                    <i
                        class="pi pi-envelope text-lg sm:text-xl md:text-2xl text-[#C5A788] group-hover:text-[#A08B73] transition-all duration-300"></i>
                </a>
            </template>
            <template v-else>
                <span class="transition-colors duration-300 group cursor-not-allowed opacity-50">
                    <i class="pi pi-envelope text-lg sm:text-xl md:text-2xl text-[#C5A788]"></i>
                </span>
            </template>
            <template v-if="linkedinLink !== '#'">
                <a :href="linkedinLink" target="_blank" rel="noopener noreferrer"
                    class="transition-colors duration-300 group cursor-pointer hover:scale-110 transform">
                    <i
                        class="pi pi-linkedin text-lg sm:text-xl md:text-2xl text-[#C5A788] group-hover:text-[#A08B73] transition-all duration-300"></i>
                </a>
            </template>
            <template v-else>
                <span class="transition-colors duration-300 group cursor-not-allowed opacity-50">
                    <i class="pi pi-linkedin text-lg sm:text-xl md:text-2xl text-[#C5A788]"></i>
                </span>
            </template>
        </div>
    </div>
</template>

<style scoped>
.team-member:hover img {
    transform: scale(1.02);
}

a:focus-visible {
    outline: 2px solid #C5A788;
    outline-offset: 2px;
    border-radius: 2px;
}
</style>
