<script setup lang="ts">
import { inject } from 'vue';
import { key } from '../store';

const store = inject(key)
</script>

<template>
  <input type="text" id="commandHolder" :value="((lngLat) => { if (typeof lngLat !== 'undefined') return `emit('location', { lng: ${lngLat.lng}, lat: ${lngLat.lat} })` })(store?.get())">
</template>

<style scoped>
#commandHolder {
  width: 100%;
}
</style>