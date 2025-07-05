<script setup lang="ts">
import NavBar from '../organisms/NavBar.vue';
import Footer from "../organisms/Footer.vue";
import Header from '../ui/Header.vue';

defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    },
    subtitle: {
        type: String,
        required: false,
        default: ''
    },
    showHeader: {
        type: Boolean,
        required: false,
        default: true
    },
    childrenStyle: {
        type: String,
        required: false,
        default: ''
    }
});
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <NavBar />
        <div v-if="showHeader" class="border-t border-[#E8EDED]">
            <Header :title="title" :subTitle="subtitle" />
        </div>

        <main :class="`flex-grow ${childrenStyle}`">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<style scoped></style>