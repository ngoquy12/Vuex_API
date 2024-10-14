<template>
  <div>
    <h1>List Post ({{ countPost }})</h1>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else-if="data">Data: {{ data }}</h1>
    <h1 v-else>Error: {{ error }}</h1>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isLoading = computed(() => store.state.postModule.loading);
const data = computed(() => store.state.postModule.data);
const error = computed(() => store.state.postModule.error);
const countPost = computed(() => store.getters.countPost);

onMounted(() => {
  store.dispatch("fetchData");
});
</script>

<style></style>
