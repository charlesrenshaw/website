<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EmpowerImage from "../../assets/empower.jpg"
import FemaleLawyer from "../../assets/female-lawyer.png"
import MaleLawyer from "../../assets/male-lawyer.jpg"
import BusinessNewImage from "../../assets/business-news.png"
import TaxesNewImage from "../../assets/taxes-news.png"
import LegalNewsImage from "../../assets/legal-news.png"
import news from "../molecules/news.vue"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const currentSlide = ref(0)
const totalSlides = 2
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

onMounted(() => {
    if (window.innerWidth < 1024) {
        startAutoSlide()
    }

    window.addEventListener('resize', handleResize)

    gsap.from(".about-title", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    })

    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
    })

    gsap.from(".expertise-header", {
        scrollTrigger: {
            trigger: ".expertise-section",
            start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })

    gsap.from(".expertise-item", {
        scrollTrigger: {
            trigger: ".expertise-section",
            start: "top 70%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out"
    })

    gsap.from(".people-content", {
        scrollTrigger: {
            trigger: ".people-section",
            start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    gsap.from(".people-images", {
        scrollTrigger: {
            trigger: ".people-section",
            start: "top 70%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    })

    // News Section Animation
    gsap.from(".news-header", {
        scrollTrigger: {
            trigger: ".news-section",
            start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })

    gsap.from(".news-item", {
        scrollTrigger: {
            trigger: ".news-section",
            start: "top 70%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    })
})

onBeforeUnmount(() => {
    stopAutoSlide()
    window.removeEventListener('resize', handleResize)

    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

const handleResize = () => {
    if (window.innerWidth < 1024) {
        if (!autoSlideInterval) startAutoSlide()
    } else {
        stopAutoSlide()
    }
}

const expertises = [{
    header: "business",
    links: [{
        title: "Corporate Governance",
    }, {
        title: "Business Expansion",
    }, {
        title: "Regulatory Compliance",
    },]
}, {
    header: "financial advisory",
    links: [{
        title: "Risk Management",
    }, {
        title: "Insurance Solutions",
    }, {
        title: "Tax Strategies",
    },]
}, {
    header: "legal & taxes",
    links: [{
        title: "Asset Protection",
    }, {
        title: "Risk Management",
    }, {
        title: "Dispute Resolution",
    },]
}]


const newsData = [{
    image: BusinessNewImage,
    category: "Business",
    title: "Understanding the Basics of Contract Law for Small Business Owners",
    description: "Learn essential contract law principles to protect your business interests and avoid common pitfalls in contractual agreements.",
    link: "#"
}, {
    image: TaxesNewImage,
    category: "taxes",
    title: "Securing Your Family's Future with Proper Wills and Trusts",
    description: "Discover the importance of estate planning and how wills  and trusts can safeguard your assets and provide peace of mind.",
    link: "#"
}, {
    image: LegalNewsImage,
    category: "legal",
    title: "What to Do When Facing Criminal Charges and How to Protect",
    description: "Explore effective defense strategies and your rights when facing criminal charges, ensuring fair treatment and a  strong legal defense.",
    link: "#"
}]
</script>

<template>
    <div>
        <div class="bg-[#F7F5FA] py-20 px-6 sm:px-10 md:px-16 about-section">
            <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                <div class="w-full max-w-[624px] text-center lg:text-left">
                    <p class="text-[#C5A788] text-sm uppercase tracking-wide mb-3 font-medium">About Us</p>

                    <h3
                        class="font-frank text-[#140A23] font-light text-4xl sm:text-5xl leading-tight mb-6 about-title">
                        Empowering<br class="hidden lg:block" /> Legal Solutions
                    </h3>

                    <p class="text-[#0D1C29]/60 font-inter text-base sm:text-lg leading-relaxed mb-10 about-text">
                        Our approach is centered on collaboration, transparency, and advocacy. We work closely
                        with clients to understand their goals and challenges, offering strategic guidance and
                        personalized legal representation every step of the way. Whether navigating complex
                        regulatory landscapes, resolving disputes, or protecting intellectual property rights,
                        we are committed to delivering results that exceed expectations.
                    </p>

                    <a href="/about-us"
                        class="inline-block uppercase bg-[#140A23] hover:bg-[#2A1C3B] text-white py-3 px-8 font-medium tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A788]">
                        About Us
                    </a>
                </div>
                <div class="w-full max-w-[500px] border-8 border-[#C5A788] overflow-hidden about-image">
                    <img :src="EmpowerImage" alt="Professional legal library"
                        class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
                </div>
            </div>
        </div>

        <div class="lg:px-16 py-8 lg:py-16 expertise-section">
            <div class="text-center expertise-header">
                <p class="text-[#C5A788] text-sm uppercase tracking-wide mb-3 font-medium">
                    OUR EXPLORE
                </p>
                <h3 class="text-[#140A23] font-frank text-4xl sm:text-5xl font-light leading-[-1px] mb-6">
                    Overview & Expertise
                </h3>
            </div>
            <div>
                <div class="container mx-auto py-8 lg:py-16 px-8 lg:px-16">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0 lg:gap-x-10">
                        <div v-for="(expertise, index) in expertises" :key="`expertise-${index}`"
                            class="flex flex-col expertise-item">
                            <div class="flex items-center justify-center gap-2 pb-4 mb-2">
                                <h3 class="text-[#C5A788] uppercase text-sm tracking-wide">
                                    {{ expertise.header }}
                                </h3>
                                <div class="border-[#E8EDED] border h-0 flex-grow" />
                            </div>

                            <div class="flex flex-col space-y-4 lg:space-y-6">
                                <div v-for="(link, linkIndex) in expertise.links" :key="`link-${linkIndex}`"
                                    class="py-2 lg:py-4 border-b border-[#E8EDED] group">
                                    <span class="text-[#140A23] font-frank text-lg font-light">
                                        {{ link.title }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center mt-12">
                        <a href="/expertise"
                            class="bg-[#140A23] text-white py-3 px-8 uppercase tracking-wider text-sm font-medium hover:bg-[#C5A788] transition-colors group-hover:translate-x-1 duration-300">
                            VIEW ALL EXPERTISE
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-[#F7F5FA] p-10 md:p-16 people-section">
            <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div class="w-full max-w-[624px] text-center lg:text-left people-content">
                    <p class="text-[#C5A788] text-sm uppercase tracking-wide mb-3 font-medium">Our People</p>

                    <h3 class="font-frank text-[#140A23] font-light text-3xl lg:text-[56px] leading-tight mb-6">
                        Excellence<br class="hidden lg:block" /> Through Teamwork
                    </h3>

                    <p class="text-[#0D1C29]/60 font-inter text-base sm:text-lg leading-relaxed lg:mb-10">
                        Meet the dynamic individuals committed to achieving excellence, driving results, and exceeding
                        expectations in all that we do.
                    </p>

                    <a href="/our-people"
                        class="hidden lg:inline-block uppercase bg-[#140A23] hover:bg-[#2A1C3B] text-white py-3 px-8 font-medium tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A788]">
                        Meet the Team
                    </a>
                </div>

                <div class="relative w-full max-w-[600px] h-[700px] lg:h-[600px] hidden lg:block people-images">
                    <div class="static w-[350px] h-[350px] border-8 border-[#C5A788] z-20 overflow-hidden mb-0">
                        <img :src="FemaleLawyer" alt="Female Lawyer" class="w-full h-full object-cover" />
                    </div>

                    <div
                        class="absolute bottom-0 right-0 w-[350px] h-[350px] border-8 border-[#C5A788] overflow-hidden">
                        <img :src="MaleLawyer" alt="Male Lawyer" class="w-full h-full object-cover" />
                    </div>
                </div>

                <div class="relative w-full max-w-[100%] h-[280px] lg:hidden overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out w-[200%]"
                        :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
                        <div class="w-1/2 flex items-center justify-center">
                            <div
                                class="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] border-8 border-[#C5A788] overflow-hidden">
                                <img :src="FemaleLawyer" alt="Female Lawyer" class="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div class="w-1/2 flex items-center justify-center">
                            <div
                                class="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] border-8 border-[#C5A788] overflow-hidden">
                                <img :src="MaleLawyer" alt="Male Lawyer" class="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                        <button v-for="index in totalSlides" :key="index" @click="currentSlide = index - 1"
                            class="w-2 h-2 rounded-full border border-[#C5A788] transition-all"
                            :class="{ 'bg-[#C5A788] w-6': currentSlide === index - 1, 'bg-transparent': currentSlide !== index - 1 }"
                            aria-label="Change slide">
                        </button>
                    </div>
                </div>

                <div class="w-full flex justify-center mt-4 lg:hidden">
                    <a href="/our-people"
                        class="inline-block uppercase bg-[#140A23] hover:bg-[#2A1C3B] text-white py-3 px-8 font-medium tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A788]">
                        Meet the Team
                    </a>
                </div>
            </div>
        </div>

        <div class="px-8 lg:px-16 py-8 lg:py-16 news-section">
            <div class="container mx-auto">
                <div class="flex items-end lg:items-center justify-between news-header">
                    <div>
                        <p class="text-[#C5A788] text-sm uppercase tracking-wide mb-2 font-medium">KNOWLEDGE CENTRE</p>
                        <h3 class="font-frank text-[#140A23] font-light text-3xl lg:text-[48px] leading-tight">
                            Latest News
                        </h3>
                    </div>

                    <a href="/resources"
                        class="uppercase bg-[#140A23] text-white py-3 px-4 lg:px-8 font-medium tracking-wide text-sm">
                        VIEW MORE
                    </a>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0 lg:gap-x-8 mt-8">
                    <div v-for="(article, index) in newsData" :key="`news-${index}`" class="news-item">
                        <news :image="article.image" :category="article.category" :title="article.title"
                            :description="article.description" :link="article.link"></news>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-frank {
    letter-spacing: -0.02em;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.transition-all {
    -webkit-transition-property: all;
    transition-property: all;
}
</style>