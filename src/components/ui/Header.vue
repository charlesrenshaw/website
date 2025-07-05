<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="text-center py-8 px-4 lg:px-8">
        <p class="text-[#C5A788] text-sm uppercase font-medium tracking-wide mb-3">{{ title }}</p>
        <h3 class="text-[#140A23] font-frank max-w-4xl mx-auto text-3xl lg:text-[56px] font-light leading-tight">
            {{ subTitle }}
        </h3>
    </div>
</template>


<style scoped></style>
