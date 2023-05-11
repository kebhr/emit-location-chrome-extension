<script setup lang="ts">
import Map from './components/Map.vue'
import Command from './components/Command.vue'
import store, { key } from './store';
import { provide } from 'vue';

provide(key, store);
</script>

<template>
  <Map />
  <Command />
</template>

<style scoped>
</style>
