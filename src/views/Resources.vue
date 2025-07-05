<script lang="ts" setup>
import NavBar from '../components/organisms/NavBar.vue'
import Footer from '../components/organisms/Footer.vue'
import news from "../components/molecules/news.vue"
import Header from "../components/ui/Header.vue"
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Resource1 from "../assets/resource_1.jpg"
import Resource2 from "../assets/resource_2.jpg"
import Resource3 from "../assets/resource_3.jpg"
import Resource4 from "../assets/resource_4.jpg"
import Resource5 from "../assets/resource_5.jpg"
import Resource6 from "../assets/resource_6.jpg"
import Resource7 from "../assets/resource_7.jpg"

gsap.registerPlugin(ScrollTrigger)

const newsData = [{
  image: Resource2,
  category: "taxes",
  title: "Securing Your Family's Future with Proper Wills and Trusts",
  description: "Discover the importance of estate planning and how wills and trusts can safeguard your assets and provide peace of mind.",
  link: "#"
}, {
  image: Resource3,
  category: "legal",
  title: "What to Do When Facing Criminal Charges and How to Protect",
  description: "Explore effective defense strategies and your rights when facing criminal charges, ensuring fair treatment and a strong legal defense.",
  link: "#"
}, {
  image: Resource4,
  category: "business",
  title: "Navigating Divorce and Child Custody with Legal Expertise",
  description: "Gain insights into divorce and child custody proceedings, and understand how our compassionate legal support can guide you through.",
  link: "#"
},
{
  image: Resource5,
  category: "legal",
  title: "Safeguarding Your Ideas and Innovations with Trademarks",
  description: "Learn about the importance of intellectual property rights and how trademarks, copyrights, and patents can protect your creative works.",
  link: "#"
}, {
  image: Resource6,
  category: "taxes",
  title: "Maximizing Deductions and Minimizing Liabilities",
  description: "Explore effective tax planning techniques to optimize deductions, reduce tax liabilities, and ensure compliance with ever-changing tax laws.",
  link: "#"
}, {
  image: Resource7,
  category: "legal",
  title: "Understanding Your Rights for Damages Sustained in Accidents",
  description: "Learn about the legal process for personal injury claims, your rights as an injured party, and how to seek rightful compensation.",
  link: "#"
}]

onMounted(() => {
  // Main header animations
  const headerTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })

  headerTimeline
    .from(".page-title", {
      y: -30,
      opacity: 0,
      duration: 0.8
    })
    .from(".page-subtitle", {
      y: -20,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")

  const featuredTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".featured-article",
      start: "top bottom-=100px",
      toggleActions: "play none none none"
    }
  })

  featuredTimeline
    .from(".featured-image", {
      x: -50,
      opacity: 0,
      duration: 0.8
    })
    .from(".featured-content", {
      x: 50,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(".category-tag", {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.4")
    .from(".featured-title", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.3")
    .from(".featured-description", {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.4")
    .from(".featured-link", {
      y: 15,
      opacity: 0,
      duration: 0.4
    }, "-=0.3")

  gsap.set(".article-card", { opacity: 0 })

  ScrollTrigger.batch(".article-card", {
    interval: 0.1,
    batchMax: 3,
    onEnter: batch => {
      gsap.to(batch, {
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      })
    },
    start: "top bottom-=100px"
  })

  document.addEventListener('mouseenter', (e) => {
    const target = e.target as HTMLElement;
    const card = target.closest('.article-card');

    if (card) {
      const image = card.querySelector('.article-image img');
      if (image) {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.5,
          ease: "power1.out"
        });
      }

      const title = card.querySelector('.article-title');
      if (title) {
        gsap.to(title, {
          color: "#C5A788",
          duration: 0.3,
          ease: "power1.out"
        });
      }
    }
  }, true);

  document.addEventListener('mouseleave', (e) => {
    const target = e.target as HTMLElement;
    const card = target.closest('.article-card');

    if (card) {
      const image = card.querySelector('.article-image img');
      if (image) {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power1.out"
        });
      }

      const title = card.querySelector('.article-title');
      if (title) {
        gsap.to(title, {
          color: "#140A23",
          duration: 0.3,
          ease: "power1.out"
        });
      }
    }
  }, true);
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  document.removeEventListener('mouseenter', () => { });
  document.removeEventListener('mouseleave', () => { });
})
</script>

<template>
  <div>
    <NavBar />

    <div class="border border-t border-[#E8EDED] pt-8">
      <Header title=" resources" sub-title="Knowledge Centre" />

      <div class="container mx-auto py-8 md:py-16">
        <!-- Featured Article -->
        <div class="featured-article flex flex-wrap">
          <div class="featured-image w-full lg:w-1/2 h-72 lg:h-auto relative lg:flex-grow-0">
            <div class="w-full h-full lg:absolute lg:inset-0 overflow-hidden">
              <img :src="Resource1" alt="business"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
          <div class="featured-content p-8 lg:p-16 w-full lg:w-1/2 bg-[#140A23] space-y-8">
            <div class="category-tag inline-flex items-center gap-2">
              <span class="text-[#C5A788] text-lg font-semibold">-</span>
              <p class="capitalize text-white text-xs">
                business
              </p>
            </div>
            <div class="text-white space-y-4">
              <h3 class="featured-title font-frank text-3xl lg:text-[40px] font-light leading-[44px] tracking-tighter">
                Understanding the Basics of Contract Law for Small Business Owners
              </h3>
              <p class="featured-description text-base lg:text-lg">
                Learn essential contract law principles to protect your business interests and avoid
                common pitfalls in contractual agreements.
              </p>
            </div>
            <div>
              <a href="/articles/understanding-basics-contract-law-small-business"
                class="featured-link inline-block w-fit uppercase text-white font-medium text-sm tracking-wider border-b-2 border-white pb-1 hover:text-[#C5A788] hover:border-[#C5A788] transition-colors mt-auto">
                READ ARTICLE
              </a>
            </div>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-8 lg:gap-x-8 mt-8 p-4 lg:p-0">
          <div v-for="(article, index) in newsData" :key="`news-${index}`" class="article-card">
            <div class="h-full p-[1px] box-content">
              <news :image="article.image" :category="article.category" :title="article.title"
                :description="article.description" :link="article.link">
              </news>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<style scoped>
.article-card {
  will-change: opacity;
}

:deep(.article-image) {
  overflow: hidden;
}

:deep(.article-image img) {
  will-change: transform;
}

:deep(.article-title) {
  transition: color 0.3s ease;
}

:deep(.article-card *) {
  backface-visibility: hidden;
}

.featured-article {
  overflow: hidden;
}
</style>