<script setup>

import Header from './layouts/Header.vue';
import Main from './layouts/Main.vue';
import Footer from './layouts/Footer.vue';
import flowise from "./data/flowise";
import { onMounted } from "vue"

onMounted(() => {
    console.log('flowise', flowise)
})

</script>

<template>
    <Header/>

    <Main/>

    <Footer />
</template>

<style scoped></style>
