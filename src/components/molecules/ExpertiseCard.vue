<script setup lang="ts">
import { ref } from 'vue'

interface ServiceItem {
  title: string;
  description: string
  link: string;
}

defineProps({
  title: {
    type: String,
    required: true
  },
  highlightText: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categoryLabel: {
    type: String,
    required: true
  },
  serviceItems: {
    type: Array as () => ServiceItem[],
    required: true
  },
  companyEmail: {
    type: String,
    required: true
  }
});

const expandedItem = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  if (expandedItem.value === index) {
    expandedItem.value = null
  } else {
    expandedItem.value = index
  }
}
</script>

<template>
  <div class="p-10 lg:p-16 bg-[#F7F5FA] h-full">
    <div class="space-y-2">
      <h3 class="text-[#140A23] font-frank text-xl lg:text-[28px] font-light leading-tight">
        {{ title }}
        <span class="text-[#DB2B2E]">{{ highlightText }}</span>
      </h3>
      <p class="text-[#140A23] text-sm lg:text-lg font-normal leading-7 text-justify md:text-left">
        {{ description }}
      </p>
    </div>

    <div class="mt-8">
      <div class="flex items-center justify-center gap-2 mb-6">
        <h4 class="text-[#C5A788] text-xs uppercase font-medium tracking-wider">
          {{ categoryLabel }}
        </h4>
        <div class="border-white/10 border h-0 flex-grow" />
      </div>

      <div>
        <div v-for="(item, index) in serviceItems" :key="index" class="border-b border-gray-200">
          <button @click="toggleAccordion(index)"
            class="flex items-center justify-between w-full py-5 text-left focus:outline-none group">
            <span class="text-[#140A23] font-frank text-lg lg:text-2xl font-light transition-colors service-item">
              {{ item.title }}
            </span>
            <i :class="{ 'pi-chevron-down': expandedItem !== index, 'pi-chevron-up': expandedItem === index }"
              class="pi text-[#C5A788] text-xs transition-transform duration-200"></i>
          </button>

          <div v-if="expandedItem === index" class="pb-5 transition-all duration-300 ease-in-out max-h-20">
            <p class="text-[#140A23] text-sm lg:text-base leading-6 lg:text-justify md:text-left opacity-80">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <a :href="`mailto:${companyEmail}`" class="uppercase bg-[#140A23] text-xs font-medium text-white py-3 px-6">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pi {
  font-size: 1.25rem;
}
</style>