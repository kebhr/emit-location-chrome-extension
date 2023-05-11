import { InjectionKey, reactive, readonly } from "vue";
import { LngLat, Store } from '../types/store';

const state = reactive({
  lngLat: {
    lat: 0,
    lng: 0,
  }
});

const set = (lngLat: LngLat) => state.lngLat = lngLat;
const get = () => state.lngLat;

export default {
  state: readonly(state),
  set,
  get
};

export const key: InjectionKey<Store> = Symbol('key')
