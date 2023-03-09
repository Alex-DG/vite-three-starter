// vite.config.js
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig(({ mode }) => {
  return {
    plugins: [glsl()],
    assetsInclude: [
      '**/*.glb',
      '**/*.gltf',
      '**/*.fbx',
      '**/*.mp4',
      '**/*.webp',
      '**/*.png',
      '**/*.jpg',
    ],
  }
})
