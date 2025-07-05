<script setup lang="ts">
import MainLayout from "../components/layouts/MainLayout.vue"
import ExpertiseCard from '../components/molecules/ExpertiseCard.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Expertise1 from "../assets/expertise_1.jpg"
import Expertise2 from "../assets/expertise_2.png"
import Expertise3 from "../assets/expertise_3.png"

gsap.registerPlugin(ScrollTrigger)

const businessData = [{
    title: "Corporate Governance",
    description: "Comprehensive governance frameworks and board advisory services to ensure ethical leadership and regulatory compliance.",
    link: "#"
}, {
    title: "Business Expansion",
    description: "Strategic planning and execution support for market entry, mergers, acquisitions, and scaling operations.",
    link: "#"
}, {
    title: "Regulatory Compliance",
    description: "Expert guidance on industry regulations, compliance frameworks, and risk mitigation strategies.",
    link: "#"
}, {
    title: "Contract Negotiation",
    description: "Professional contract drafting, review, and negotiation services to protect your business interests.",
    link: "#"
}, {
    title: "Business Structuring",
    description: "Optimal business entity formation and restructuring solutions for tax efficiency and operational excellence.",
    link: "#"
}]

const financialAdvisoryData = [{
    title: "Tax Compliance",
    description: "Comprehensive tax planning, preparation, and compliance services for individuals and businesses.",
    link: "#"
}, {
    title: "Risk Management",
    description: "Identification, assessment, and mitigation of financial and operational risks to protect your assets.",
    link: "#"
}, {
    title: "Asset Protection",
    description: "Strategic asset protection planning to safeguard wealth from creditors and legal challenges.",
    link: "#"
}, {
    title: "Dispute Resolution",
    description: "Expert mediation and litigation support for business disputes and legal conflicts.",
    link: "#"
}, {
    title: "Contract Review",
    description: "Thorough contract analysis and legal review to ensure favorable terms and minimize risks.",
    link: "#"
}]

const legalData = [{
    title: "Risk Management",
    description: "Comprehensive risk assessment and management strategies to protect your financial interests.",
    link: "#"
}, {
    title: "Insurance Solutions",
    description: "Tailored insurance planning and optimization to ensure adequate coverage and cost efficiency.",
    link: "#"
}, {
    title: "Tax Strategies",
    description: "Advanced tax planning and optimization strategies to minimize tax liability and maximize savings.",
    link: "#"
}, {
    title: "Retirement Planning",
    description: "Comprehensive retirement planning services to secure your financial future and lifestyle goals.",
    link: "#"
}, {
    title: "Wealth Management",
    description: "Holistic wealth management solutions including investment planning, estate planning, and portfolio optimization.",
    link: "#"
}]

const companyEmail = "info@charlesrenshaw.com"

onMounted(() => {
  const pageIntro = gsap.timeline({ defaults: { ease: "power3.out" } })
  
  pageIntro
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
    
  const sections = document.querySelectorAll('.expertise-section')
  
  sections.forEach((section, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
    
    const imageContainer = section.querySelector('.expertise-image')
    const contentContainer = section.querySelector('.expertise-content')
    
    if (index % 2 === 0) {
      tl.from(imageContainer, {
        x: -50,
        opacity: 0,
        duration: 0.8
      }).from(contentContainer, {
        x: 50,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")
    } else {
      tl.from(contentContainer, {
        x: -50,
        opacity: 0,
        duration: 0.8
      }).from(imageContainer, {
        x: 50,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")
    }
    
    const listItems = contentContainer?.querySelectorAll('.service-item')
    if (listItems) {
      tl.from(listItems, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
      }, "-=0.4")
    }
  })
  
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('service-item') || target.closest('.service-item')) {
      const item = target.classList.contains('service-item') ? target : target.closest('.service-item');
      if (item) {
        gsap.to(item, {
          x: 5,
          color: "#C5A788",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  });
  
  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('service-item') || target.closest('.service-item')) {
      const item = target.classList.contains('service-item') ? target : target.closest('.service-item');
      if (item) {
        gsap.to(item, {
          x: 0,
          color: "#140A23",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  });
  
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('contact-button') || target.closest('.contact-button')) {
      const button = target.classList.contains('contact-button') ? target : target.closest('.contact-button');
      if (button) {
        gsap.to(button, {
          backgroundColor: "#C5A788",
          color: "#FFFFFF",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  });
  
  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('contact-button') || target.closest('.contact-button')) {
      const button = target.classList.contains('contact-button') ? target : target.closest('.contact-button');
      if (button) {
        gsap.to(button, {
          backgroundColor: "#140A23",
          color: "#FFFFFF",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  });
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  
  document.removeEventListener('mouseover', () => {});
  document.removeEventListener('mouseout', () => {});
})
</script>

<template>
    <MainLayout title="our expertise" subtitle="Tailored Services for Your Needs" childrenStyle="px-0 md:px-8">
        <div class="lg:container mx-auto pb-8">
            <div class="expertise-section flex flex-col lg:flex-row w-full">
                <div class="expertise-image w-full lg:w-1/2 h-72 lg:h-auto relative lg:flex-grow-0">
                    <div class="w-full h-full lg:absolute lg:inset-0">
                        <img :src="Expertise1" alt="Business Expertise" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="expertise-content w-full lg:w-1/2">
                    <ExpertiseCard title="Drive Success with" highlightText=" Expert Business Solutions"
                        description="Our Business Services encompass a wide array of offerings designed to support entrepreneurs and businesses at every stage of their journey."
                        categoryLabel="business" :serviceItems="businessData" :companyEmail="companyEmail" />
                </div>
            </div>

            <div class="expertise-section flex flex-col-reverse lg:flex-row w-full">
                <div class="expertise-content w-full lg:w-1/2">
                    <ExpertiseCard title="Protect Your Interests with" highlightText=" Expert Counsel"
                        description="Our Legal & Taxes services offer comprehensive support to individuals and businesses, addressing a wide range of legal and tax-related challenges."
                        categoryLabel="legal & taxes" :serviceItems="financialAdvisoryData"
                        :companyEmail="companyEmail" />
                </div>
                <div class="expertise-image w-full lg:w-1/2 h-72 lg:h-auto relative lg:flex-grow-0">
                    <div class="w-full h-full lg:absolute lg:inset-0">
                        <img :src="Expertise2" alt="Legal & Taxes Expertise" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div class="expertise-section flex flex-col lg:flex-row w-full">
                <div class="expertise-image w-full lg:w-1/2 h-72 lg:h-auto relative lg:flex-grow-0">
                    <div class="w-full h-full lg:absolute lg:inset-0">
                        <img :src="Expertise3" alt="Financial Advisory Expertise" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="expertise-content w-full lg:w-1/2">
                    <ExpertiseCard title="Elevate Your Finances with" highlightText=" Proven Strategies"
                        description="Our Financial Advisory services are designed to empower individuals and businesses to make informed financial decisions and secure their financial futures."
                        categoryLabel="financial advisory" :serviceItems="legalData" :companyEmail="companyEmail" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<style scoped>
.expertise-section {
    overflow: hidden;
    margin-bottom: 0;
    padding: 0;
}

:deep(.service-item) {
    position: relative;
}

.expertise-section + .expertise-section {
    margin-top: 0;
}

:deep(.expertise-card) {
    padding-top: 0;
    padding-bottom: 0;
}

@media (min-width: 1024px) {
    .expertise-image {
        min-height: calc(100% + 80px);
    }
}
</style>
