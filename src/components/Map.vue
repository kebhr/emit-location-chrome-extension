<script setup lang="ts">
import { onMounted, inject } from 'vue';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import { key } from '../store';

const store = inject(key)

const initialLngLat = () => {
  const centerInLocalStorage = localStorage.getItem('center');
  if (centerInLocalStorage !== null) {
    return JSON.parse(centerInLocalStorage);
  } else {
    return [139.7, 35.7];
  }
};

const initialZoom = () => {
  if (localStorage.hasOwnProperty('zoom')) {
    return Number(localStorage.getItem('zoom'));
  } else {
    return 9;
  }
}

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tile2.openstreetmap.jp/styles/osm-bright-ja/style.json',
    center: initialLngLat(),
    zoom: initialZoom(),
  });

  map.addControl(new maplibregl.NavigationControl({}))

  const marker = new maplibregl.Marker();
  marker.setLngLat(initialLngLat()).addTo(map);
  store?.set({ lng: initialLngLat()[0], lat: initialLngLat()[1] });

  map.on('click', (event) => {
    store?.set(event.lngLat);
    marker.setLngLat(event.lngLat).addTo(map);
    localStorage.setItem('center', JSON.stringify([event.lngLat.lng, event.lngLat.lat]));
    localStorage.setItem('zoom', String(map.getZoom()));
  });
});

</script>

<template>
  <div id='map'></div>
</template>

<style scoped>
#map {
  height: 100%;
}
</style>
