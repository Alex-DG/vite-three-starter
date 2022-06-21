import '../styles/app.css'
import Experience from './Experience'

/**
 * Documentations
 */
document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Vite Three Starter!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite | Documentation</a>
    <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank">Three | Documentation</a>
  </div>
`

/**
 * Experience
 */
new Experience({
  domElement: document.getElementById('experience'),
})
