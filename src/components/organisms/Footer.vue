<script setup lang="ts">
import FooterLogo from "../../assets/cra_logo_white2.svg";
const year = new Date().getFullYear();
</script>

<template>
  <div class="bg-[#140A23] p-8 lg;p-16 text-white">
    <div class="container mx-auto">
      <div class="grid grid-1 lg:grid-cols-3 gap-16 pb-14 border-b border-white/10">
        <div class="flex flex-col justify-between">
          <img :src="FooterLogo" alt="Charles, Renshaw & Abraham" class="mb-10 max-w-[320px]" />

          <div class="flex space-x-6">
            <a href="https://x.com/cra_lawyers" target="_blank"
              class="text-white hover:text-[#C5A788] transition-colors">
              <i class="pi pi-twitter text-2xl"></i>
            </a>

            <a href="https://www.instagram.com/cra_lawyers/" target="_blank"
              class="text-white hover:text-[#C5A788] transition-colors">
              <i class="pi pi-instagram text-2xl"></i>
            </a>

            <a href="https://www.linkedin.com/company/cra-lawyers" target="_blank"
              class="text-white hover:text-[#C5A788] transition-colors">
              <i class="pi pi-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-center gap-2  mb-6">
            <h4 class="text-[#C5A788] text-xs uppercase font-medium tracking-wider">
              Pages
            </h4>
            <div class="border-white/10 border h-0 flex-grow" />
          </div>
          <ul class="space-y-4 text-xs custom-list">
            <li>
              <a href="/" class="text-white/70 hover:text-white transition-colors flex items-center">
                <span class="text-[#C5A788] mr-2">-</span> Home
              </a>
            </li>
            <li>
              <a href="/about-us" class="text-white/70 hover:text-white transition-colors flex items-center">
                <span class="text-[#C5A788] mr-2">-</span> About Us
              </a>
            </li>
            <li>
              <a href="/our-people" class="text-white/70 hover:text-white transition-colors flex items-center">
                <span class="text-[#C5A788] mr-2">-</span> Our People
              </a>
            </li>
            <li>
              <a href="/expertise" class="text-white/70 hover:text-white transition-colors flex items-center">
                <span class="text-[#C5A788] mr-2">-</span> Our Expertise
              </a>
            </li>
            <li>
              <a href="/resources" class="text-white/70 hover:text-white transition-colors flex items-center">
                <span class="text-[#C5A788] mr-2">-</span> Resources
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div class="flex items-center justify-center gap-2  mb-6">
            <h4 class="text-[#C5A788] text-xs uppercase font-medium tracking-wider">
              Contact Us
            </h4>
            <div class="border-white/10 border h-0 flex-grow" />
          </div>

          <ul class="space-y-4 text-xs custom-list">
            <li class="text-white/70 flex items-start">
              <span class="text-[#C5A788] mr-2">-</span>
              <a href="tel:+2349051391627" class="hover:text-white transition-colors duration-300">
                +234 905 139 1627
              </a>
            </li>
            <li class="text-white/70 flex items-start">
              <span class="text-[#C5A788] mr-2">-</span>
              <a href="mailto:info@charlesrenshaw.com" class="hover:text-white transition-colors duration-300">
                info@charlesrenshaw.com
              </a>
            </li>

            <li class="text-white/70 flex items-start">
              <span class="text-[#C5A788] mr-2">-</span>
              <a href="https://www.google.com/maps/search/?api=1&query=1+Oyibo+Adjarho+Street+Lekki+Phase+1+Lagos+Nigeria"
                target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors duration-300">
                Lagos: 1, Oyibo Adjarho Street, Lekki Phase 1, Lagos
              </a>
            </li>
            <li class="text-white/70 flex items-start">
              <span class="text-[#C5A788] mr-2">-</span>
              <a href="https://www.google.com/maps/search/?api=1&query=Block+54+Flat+4+OAU+Quarters+Off+Kashim+Ibrahim+Way+Maitaima+Abuja+Nigeria"
                target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors duration-300">
                Abuja: Block 54, Flat 4, OAU Quarters, Off Kashim Ibrahim Way, Maitaima, Abuja
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 text-center text-white/50">
        <p class="text-sm lg:text-base">© {{ year }} CHARLES, RENSHAW & ABRAHAM</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-list {
  list-style: none;
  padding: 0;
}
</style>
