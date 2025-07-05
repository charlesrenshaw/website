<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import nirastate from "../../assets/partners/nirastate.png"
import asgardia from "../../assets/partners/asgardia.png"
import stari from "../../assets/partners/stari.png"
import kanba from "../../assets/partners/kanba.png"
import hooks from "../../assets/partners/hooks.png"
import cirle from "../../assets/partners/circle.png"

interface Partner {
    name: string;
    image: string;
}

const partners: Partner[] = [
    {
        name: "Nira State",
        image: nirastate,
    },
    {
        name: "Asgardia",
        image: asgardia,
    },
    {
        name: "Stari",
        image: stari,
    },
    {
        name: "Kanba",
        image: kanba,
    },
    {
        name: "Hooks",
        image: hooks,
    },
    {
        name: "Circle",
        image: cirle,
    },
];

const allPartners: Partner[] = [...partners, ...partners, ...partners];
const partnersContainer = ref<HTMLDivElement | null>(null);
const partnersStrip = ref<HTMLDivElement | null>(null);
let animation: gsap.core.Tween | null = null;

onMounted(() => {
  const singleSetWidth = partners.length * 180;
  
  setTimeout(() => {
    if (partnersStrip.value && partnersContainer.value) {
      animation = gsap.to(partnersStrip.value, {
        x: -singleSetWidth,
        duration: 20,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(partnersStrip.value, { x: 0 });
        }
      });
      
      partnersContainer.value.addEventListener('mouseenter', () => {
        animation?.pause();
      });
      
      partnersContainer.value.addEventListener('mouseleave', () => {
        animation?.play();
      });
    }
  }, 100);
});

onBeforeUnmount(() => {
  if (animation) {
    animation.kill();
  }
});
</script>

<template>
    <div ref="partnersContainer" class="bg-[#C5A788] h-[80px] lg:h-[110px] overflow-hidden relative flex items-center partners-container">
        <div ref="partnersStrip" class="flex items-center">
            <div v-for="(partner, index) in allPartners" :key="`partner-${index}`"
                class="mx-5 lg:mx-10 flex items-center justify-center h-[70px]">
                <img :src="partner.image" :alt="partner.name"
                    class="max-h-[40px] max-w-[100px] lg:max-w-[140px] object-contain partner-logo" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.partners-container {
    position: relative;
}

.partners-container::before,
.partners-container::after {
    content: "";
    position: absolute;
    top: 0;
    width: 80px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
}

.partners-container::before {
    left: 0;
    background: linear-gradient(to right, #C5A788, rgba(197, 167, 136, 0));
}

.partners-container::after {
    right: 0;
    background: linear-gradient(to left, #C5A788, rgba(197, 167, 136, 0));
}

.partner-logo {
    transition: transform 0.3s ease;
    will-change: transform;
}

.partner-logo:hover {
    transform: scale(1.1);
}
</style>