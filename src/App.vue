<script setup>

import Header from './layouts/Header.vue';
import Main from './layouts/Main.vue';
import Footer from './layouts/Footer.vue';
import flowise from "./data/flowise";
import { onMounted, watch } from "vue"

onMounted(() => {
    const chatBotInterval = setInterval(() => {
        if (window.chatbot) {
            window.chatbot.init(flowise);
            clearInterval(chatBotInterval);
        }
    }, 100);
});

</script>

<template>
    <Header/>

    <Main/>

    <Footer />
</template>

<style scoped></style>
