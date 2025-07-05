<script setup lang="ts">
import { ref, onMounted } from "vue"
import { gsap } from "gsap"
import heroimage from "../../assets/heroimage.jpg"

const companyEmail = "info@charlesrenshaw.com"
const heroContent = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
  
  tl.fromTo(".hero-image", 
    { scale: 1.1, opacity: 0.8 }, 
    { scale: 1, opacity: 1, duration: 1.2 },
    0
  )
  .fromTo(".hero-overlay", 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.8 },
    0
  )
  .fromTo(".hero-title", 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 },
    0.3
  )
  .fromTo(".hero-description", 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 },
    0.5
  )
  .fromTo(".hero-cta", 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 },
    0.7
  )
})
</script>

<template>
    <div ref="heroContent" class="relative w-full h-[500px] md:h-[550px] lg:h-[612px] overflow-hidden">
        <div class="absolute inset-0 w-full h-full">
            <img :src="heroimage" alt="Hero Image" class="hero-image w-full h-full object-cover" />
        </div>

        <div class="hero-overlay absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

        <div class="absolute inset-0 flex items-center">
            <div class="container mx-auto px-6 md:px-12">
                <div class="max-w-2xl">
                    <h1 class="hero-title text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-tight font-frank mb-4">
                        Your Partner for<br />Business Advisory
                    </h1>

                    <p class="hero-description text-white/80 text-base md:text-lg mt-4 mb-8 leading-relaxed font-inter w-full max-w-[560px]">
                        Partner with us to access expert services tailored to optimise your
                        operations, mitigate risks, and achieve your business goals effectively.
                    </p>

                    <a :href="`mailto:${companyEmail}`"
                        class="hero-cta uppercase text-[#140A23] bg-white hover:bg-[#C5A788] hover:text-white transition-colors duration-300 py-3 px-8 font-medium tracking-wide inline-block focus:ring-2 focus:ring-[#C5A788] focus:outline-none">
                        CONTACT US
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-frank {
    letter-spacing: -0.02em;
}

.hero-cta {
    position: relative;
    overflow: hidden;
}

.hero-cta:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shine 1.5s;
}

@keyframes shine {
    to {
        left: 100%;
    }
}
</style>