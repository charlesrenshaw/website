<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/organisms/Footer.vue';
import NavBar from '../components/organisms/NavBar.vue';
import Header from "../components/ui/Header.vue";
import { getArticleBySlug, type Article } from "../docs/articles";

const route = useRoute();
const slug = ref(route.params.slug as string);
const article = ref<Article | null | undefined>(null);
const loading = ref(true);
const error = ref(false);

const loadArticle = async () => {
    try {
        loading.value = true;
        error.value = false;

        const foundArticle = getArticleBySlug(slug.value);

        if (foundArticle) {
            article.value = foundArticle;
        } else {
            error.value = true;
            console.error(`Article with slug "${slug.value}" not found`);
        }
    } catch (err) {
        error.value = true;
        console.error('Error loading article:', err);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    loadArticle();
});
</script>

<template>
    <NavBar />
    <div>
        <div v-if="loading" class="container mx-auto py-20 text-center">
            <p class="text-lg">Loading article...</p>
        </div>

        <div v-else-if="error" class="container mx-auto py-20 text-center">
            <h2 class="text-2xl font-bold text-red-600 mb-4">Article Not Found</h2>
            <p class="text-lg mb-8">Sorry, we couldn't find the article you're looking for.</p>
            <router-link to="/" class="bg-[#140A23] text-white px-6 py-3 inline-block">
                Return to Home
            </router-link>
        </div>

        <template v-else-if="article">
            <Header :title=article.category :sub-title=article.title />

            <div class="mb-12 container mx-auto lg:w-11/12">
                <img :src="article.bannerImage" :alt="article.title" class="w-full h-auto max-h-[400px] object-cover">
            </div>

            <div class="container mx-auto px-4 max-w-8xl my-8">
                <div class="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16">
                    <div class="col-span-1 md:col-span-4 space-y-6 md:space-y-10">
                        <template v-for="(section, index) in article.body" :key="index">
                            <div v-if="section.header" class="mb-6 md:mb-8">
                                <h2 class="text-[#0D1C29] font-frank text-2xl md:text-3xl font-light leading-tight mb-3 md:mb-4">
                                    {{ section.header }}
                                </h2>
                                <p class="text-[#0D1C2999] text-sm leading-relaxed">
                                    {{ section.content }}
                                </p>
                            </div>

                            <div v-else class="mb-6 md:mb-10">
                                <p class="text-[#0D1C2999] text-sm leading-relaxed">
                                    {{ section.content }}
                                </p>
                            </div>
                        </template>
                    </div>

                    <div class="col-span-1 md:col-span-2 w-full mt-8 md:mt-0">
                        <div class="w-full bg-[#F9F9F9] p-4 md:p-8 space-y-6 md:space-y-8">
                            <div class="flex items-center gap-2">
                                <p class="uppercase text-xs">author</p>
                                <div class="bg-[#E8EDED] h-[1px] w-full" />
                            </div>
                            <div>
                                <div class="flex gap-3 md:gap-4">
                                    <img :src="article.author.image" :alt="article.author.name"
                                        class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover object-top">

                                    <div>
                                        <h3 class="font-light text-lg md:text-xl text-[#0D1C29] mb-1">{{ article.author.name }}</h3>
                                        <p class="text-xs md:text-sm uppercase text-[#0D1C2999] font-medium tracking-wider mb-2">
                                            {{ article.author.role }}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-sm text-[#666666] leading-relaxed">{{ article.author.bio }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </template>
    </div>
</template>

<style scoped>
.font-frank {
    letter-spacing: -0.02em;
}

.prose {
    color: #333;
    line-height: 1.8;
}
</style>