<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '#'
  }
});
</script>

<template>
  <div class="news-article h-full flex flex-col">
    <div class="relative overflow-hidden mb-6">
      <img :src="image" alt="Article image" class="w-full h-[280px] object-cover" />
      <div class="absolute bottom-2 left-3 backdrop-blur-lg px-6 py-2 border-l border-t border-white/20">
        <span class="uppercase text-white text-xs font-medium tracking-wider">{{ category }}</span>
      </div>
    </div>

    <div class="flex flex-col flex-grow">
      <h3 class="font-frank text-2xl font-light leading-tight mb-3 text-[#0D1C29] line-clamp-2">
        {{ title }}
      </h3>

      <div class="flex flex-col justify-between flex-grow">
        <p class="text-[#0D1C2999] font-inter leading-relaxed mb mb-4 lg:mb-6 line-clamp-3">
          {{ description }}
        </p>

        <a :href="link"
          class="inline-block w-fit uppercase text-[#140A23] font-medium text-sm tracking-wider border-b-2 border-[#140A23] pb-1 hover:text-[#C5A788] hover:border-[#C5A788] transition-colors mt-auto">
          READ ARTICLE
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-article:hover img {
  transform: scale(1.05);
  transition: transform 0.7s ease;
}

img {
  transition: transform 0.7s ease;
}

.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>