<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import MainLayout from "../components/layouts/MainLayout.vue"

import pattern from "../assets/CRApattern.svg"
import Integrity from "../assets/integrity.png"
import Justice from "../assets/justice.png"
import TeamWork from "../assets/team-work.png"

gsap.registerPlugin(ScrollTrigger)

const values = [{
  title: "Teamwork",
  image: TeamWork
}, {
  title: "Integrity",
  image: Integrity
}, {
  title: "Justice",
  image: Justice
}]

const visionTextRef = ref<HTMLElement | null>(null)
const missionTextRef = ref<HTMLElement | null>(null)
const visionHeight = ref(0)
const missionHeight = ref(0)

const currentSlide = ref(0)
const totalSlides = values.length
let autoSlideInterval: number | null = null

const startAutoSlide = () => {
  autoSlideInterval = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides
  }, 3000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval !== null) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const handleResize = () => {
  if (window.innerWidth < 1024) {
    if (!autoSlideInterval) startAutoSlide()
  } else {
    stopAutoSlide()
  }

  if (visionTextRef.value) {
    visionHeight.value = visionTextRef.value.offsetHeight
  }
  if (missionTextRef.value) {
    missionHeight.value = missionTextRef.value.offsetHeight
  }
}

const companyEmail = "info@charlesrenshaw.com"

const animateFromBottom = (element: string, trigger: string, delay = 0) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: trigger,
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: "power3.out"
  });
}

onMounted(() => {
  setTimeout(() => {
    if (visionTextRef.value) {
      visionHeight.value = visionTextRef.value.offsetHeight
    }
    if (missionTextRef.value) {
      missionHeight.value = missionTextRef.value.offsetHeight
    }
  }, 100)

  if (window.innerWidth < 1024) {
    startAutoSlide()
  }

  window.addEventListener('resize', handleResize)


  animateFromBottom(".intro-paragraph", ".intro-paragraph");

  gsap.from(".values-heading", {
    scrollTrigger: {
      trigger: ".values-section",
      start: "top 80%"
    },
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
  })

  gsap.from(".value-card", {
    scrollTrigger: {
      trigger: ".values-grid",
      start: "top 80%"
    },
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "power2.out"
  })

  // Text sections animations
  animateFromBottom(".vision-heading", ".vision-section");
  animateFromBottom(".vision-text", ".vision-section", 0.2);

  animateFromBottom(".mission-heading", ".mission-section");
  animateFromBottom(".mission-text", ".mission-section", 0.2);

  // Contact section animations
  animateFromBottom(".contact-content", ".contact-section");
  animateFromBottom(".contact-button", ".contact-section", 0.2);
})

onBeforeUnmount(() => {
  stopAutoSlide()
  window.removeEventListener('resize', handleResize)

  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<template>
  <MainLayout title="ABOUT US" subtitle="Africa's leading firm" chilrenStyle="md:px-0">
    <div class="container mx-auto px-4 lg:px-0">
      <p
        class="intro-paragraph text-justify text-[#0D1C2999] leading-7 tracking-normal mb-8 font-inter text-sm lg:text-base">
        At Charles, Renshaw & Abraham, we are more than just lawyers, we are your trusted advocates. With years of
        experience and expertise in various area of law, we are dedicated to providing personalised and effective legal
        representation, committed to protecting your rights, and advocating for your interests. We work closely with
        clients to understand their goals and challenges, offering strategic guidance and personalised legal
        representation every step of the way. Whether navigating complex regulatory landscapes, resolving disputes, or
        protecting intellectual property rights, we are committed to delivering results that exceed expectations.
      </p>

      <div class="values-section w-full mt-8 mb-12">
        <h3
          class="values-heading text-[#140A23] font-frank text-2xl lg:text-[40px] font-light leading-tight text-center mb-6">
          Our Values
        </h3>

        <div class="relative lg:hidden mb-8">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(value, index) in values" :key="index" class="w-full flex-shrink-0 h-[200px] relative">
                <img :src="value.image" alt="Value Image" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#140A23] opacity-80"></div>
                <h3
                  class="text-white font-frank text-3xl font-light leading-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {{ value.title }}
                </h3>
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
            <button v-for="index in totalSlides" :key="index" @click="currentSlide = index - 1"
              class="w-2 h-2 rounded-full border border-[#C5A788] transition-all"
              :class="{ 'bg-[#C5A788] w-6': currentSlide === index - 1, 'bg-transparent': currentSlide !== index - 1 }"
              aria-label="Change slide">
            </button>
          </div>
        </div>

        <div class="values-grid hidden lg:grid grid-cols-3 gap-10 py-6 w-full">
          <div v-for="(value, index) in values" :key="index" class="value-card h-[200px] relative">
            <img :src="value.image" alt="Value Image" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#140A23] opacity-80"></div>
            <h3
              class="text-white font-frank text-[40px] font-light leading-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {{ value.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#F7F5FA]">
      <div class="container mx-auto py-12 px-4 lg:px-0">
        <!-- Vision Section with Centered Text -->
        <div class="vision-section mb-16 mx-auto text-center">
          <h3 class="vision-heading font-frank text-2xl lg:text-[40px] text-[#140A23] leading-tight mb-6">
            Our Vision
          </h3>
          <p class="vision-text text-[#0D1C2999] leading-7 font-inter text-sm lg:text-base">
            To be Africa's foremost one-stop legal powerhouse, born in Nigeria and built for the world. We envision
            delivering accessible, innovative, and excellent legal services that seamlessly span all sectors,
            industries, and geographies. With an unwavering commitment to upholding the highest standards of client
            service and employee welfare, we strive to set the benchmark for legal excellence, foster
            enduring relationships, and drive transformative impact across the continent and beyond.
          </p>
        </div>

        <div class="mission-section mx-auto text-center mb-16">
          <h3 class="mission-heading font-frank text-2xl lg:text-[40px] text-[#140A23] leading-tight mb-6">
            Our Mission
          </h3>
          <p class="mission-text text-[#0D1C2999] leading-7 font-inter text-sm lg:text-base">
            At Charles, Renshaw & Abraham, our mission is to deliver unmatched legal excellence with precision and
            integrity, while fostering deep client relationships and driving innovation through technology. We
            prioritize people over profits, empowering our employees and serving the diverse needs of Africa with a
            pan-African footprint. We strive to make legal services accessible and impactful for all, shaping a
            brighter future for our clients, our people, and the continent.
          </p>
        </div>
      </div>
    </div>

    <div class="contact-section py-8 px-4 sm:p-8 md:p-16">
      <div class="container px-6 py-12 sm:px-10 md:px-16 md:py-24 mx-auto relative overflow-hidden bg-[#1F1330]">
        <div class="absolute inset-0">
          <img :src="pattern" alt="Background pattern" class="w-full h-full object-cover" />
        </div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="contact-content">
            <h3
              class="text-white font-frank text-3xl lg:text-[40px] font-light leading-tight mb-6 text-center md:text-left">
              Reach out to our legal team and experienced associates today
            </h3>
          </div>

          <div class="flex items-center justify-center md:justify-end w-full">
            <a :href="`mailto:${companyEmail}`"
              class="contact-button bg-white flex-shrink-0 font-medium text-sm py-4 px-8 uppercase tracking-wider text-[#140A23] hover:bg-[#C5A788] hover:text-white transition-colors duration-300">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.font-frank {
  letter-spacing: -0.02em;
}

.transition-all {
  -webkit-transition-property: all;
  transition-property: all;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.value-card {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.value-card img {
  transition: transform 0.7s ease;
}

.value-card:hover img {
  transform: scale(1.05);
}

.contact-button {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  z-index: 1;
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #C5A788;
  transition: left 0.3s ease;
  z-index: -1;
}

.contact-button:hover {
  color: white;
}

.contact-button:hover::before {
  left: 0;
}
</style>
