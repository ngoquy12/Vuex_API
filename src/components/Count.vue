<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="handleIncrement">Increment</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.countModule.count);

const handleIncrement = () => {
  store.commit("increment");
};
</script>

<style></style>
