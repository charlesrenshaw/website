<script lang="ts" setup>
import TeamMember from '../components/molecules/TeamMember.vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

type LawyerImageKey = 'Adeboyejo' | 'Charles' | 'Faith' | 'Kadiri' | 'Nonye' | 'Oluwatosin';

const lawyerImages: Record<LawyerImageKey, () => Promise<{ default: string }>> = {
    Adeboyejo: () => import('../assets/peoples/Adeboyejo.webp'),
    Charles: () => import('../assets/peoples/Charles.webp'),
    Faith: () => import('../assets/peoples/Faith.webp'),
    Kadiri: () => import('../assets/peoples/kadiri.webp'),
    Nonye: () => import('../assets/peoples/Nonye.webp'),
    Oluwatosin: () => import('../assets/peoples/Oluwatosin.webp'),
}

const placeholderImage = '/placeholder-lawyer.png'

const lawyerImageUrls = ref<Record<LawyerImageKey, string>>({
    Adeboyejo: placeholderImage,
    Charles: placeholderImage,
    Faith: placeholderImage,
    Kadiri: placeholderImage,
    Nonye: placeholderImage,
    Oluwatosin: placeholderImage,
})

interface Lawyer {
    name: string;
    title: string;
    imageKey: LawyerImageKey;
    bio: string;
    email: string;
    linkedinLink: string;
}

const lawyers: Lawyer[] = [
    {
        name: "Charles Adeyoriju",
        title: "SENIOR PARTNER",
        imageKey: "Charles",
        bio: "Dedicated legal expert ensuring client success with personalized legal strategies.",
        email: "ca@charlesrenshaw.com",
        linkedinLink: "https://www.linkedin.com/in/charlesadeyoriju/",
    },
    {
        name: "Adeboyejo Aromolaran",
        title: "MANAGING PARTNER",
        imageKey: "Adeboyejo",
        bio: "Legal advocate committed to delivering justice and favorable outcomes for clients.",
        email: "aaa@charlesrenshaw.com",
        linkedinLink: "https://www.linkedin.com/in/adeboyejo-aromolaran-783664143/",
    },
    {
        name: "Faith Okoye",
        title: "SENIOR ASSOCIATE",
        imageKey: "Faith",
        bio: "Providing valuable support to attorneys with legal research and documentation.",
        email: "f.okoye@charlesrenshaw.com",
        linkedinLink: "https://www.linkedin.com/in/faith-okoye-339417b8/",
    },
    {
        name: "Nonye Ezeani",
        title: "ASSOCIATE",
        imageKey: "Nonye",
        bio: "Dedicated legal expert ensuring client success with personalized legal strategies.",
        email: "n.ezeani@charlesrenshaw.com",
        linkedinLink: "https://www.linkedin.com/in/nonye-ezeani-513157161/",
    },
    {
        name: "Oluwatosin Akinyele",
        title: "LITIGATION OFFICER",
        imageKey: "Oluwatosin",
        bio: "Legal advocate committed to delivering justice and favorable outcomes for clients.",
        email: "#",
        linkedinLink: "#",
    },
    {
        name: "Kadiri Ohiole",
        title: "ASSOCIATE PARTNER",
        imageKey: "Kadiri",
        bio: "Providing valuable support to attorneys with legal research and documentation.",
        email: "k.ohiole@charlesrenshaw.com",
        linkedinLink: "https://www.linkedin.com/in/ohiole-kadiri-15b800167/",
    }
]

const loadImages = async () => {
    const loadPromises = Object.keys(lawyerImages).map(async (key) => {
        const typedKey = key as LawyerImageKey
        try {
            const module = await lawyerImages[typedKey]()
            lawyerImageUrls.value[typedKey] = module.default
            return { key: typedKey, loaded: true }
        } catch (error) {
            console.error(`Failed to load image: ${key}`, error)
            return { key: typedKey, loaded: false }
        }
    })

    return Promise.all(loadPromises)
}

onMounted(async () => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

    timeline
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

    gsap.set(".lawyer-card", { y: 50, opacity: 0 })

    // Load all images first
    await loadImages()

    const cardsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".lawyer-grid",
            start: "top bottom-=50px",
            toggleActions: "play none none none"
        }
    })

    cardsTimeline.to(".lawyer-card", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: {
            each: 0.1,
            grid: [3, 3],
            from: "start"
        }
    })

    const cards = document.querySelectorAll('.lawyer-card')
    cards.forEach(card => {
        const image = card.querySelector('.team-member-image img')
        const socialIcons = card.querySelectorAll('.social-icons a')

        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -4, duration: 0.3, ease: "power2.out" })
            if (image) gsap.to(image, { scale: 1.05, duration: 0.5, ease: "power1.out" })
        })

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
            if (image) gsap.to(image, { scale: 1, duration: 0.5, ease: "power1.out" })
        })

        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, { y: -3, color: "#C5A788", duration: 0.3 })
            })

            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, { y: 0, color: "inherit", duration: 0.3 })
            })
        })
    })

    gsap.utils.toArray<HTMLElement>('.lawyer-card').forEach((card, i) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top bottom-=100px",
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    delay: i % 3 * 0.1
                })
            },
            once: true
        })
    })
})

onBeforeUnmount(() => {
    // Clean up all ScrollTrigger instances to prevent memory leaks
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Remove any lingering GSAP animations
    gsap.killTweensOf(".lawyer-card")
    gsap.killTweensOf(".page-title")
    gsap.killTweensOf(".page-subtitle")
})
</script>

<template>
    <MainLayout title="our people" subtitle="Excellence Through Teamwork">
        <div class="container mx-auto py-8">
            <div
                class="lawyer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-16">
                <div v-for="(lawyer, lawyerIndex) in lawyers" :key="lawyerIndex" class="lawyer-card flex flex-col"
                    :data-image-key="lawyer.imageKey">
                    <TeamMember :name="lawyer.name" :title="lawyer.title" :image="lawyerImageUrls[lawyer.imageKey]"
                        :bio="lawyer.bio" :email="lawyer.email" :linkedinLink="lawyer.linkedinLink" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<style scoped>
@media (max-width: 640px) {
    .container {
        padding-left: 16px;
        padding-right: 16px;
    }

    .grid {
        row-gap: 8px;
    }
}

/* Only keep overflow hidden for images */
:deep(.team-member-image) {
    overflow: hidden;
}
</style>