import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: 'emit-location',
  version: packageJson.version,
  action: {
    default_popup: 'index.html'
  },
}));