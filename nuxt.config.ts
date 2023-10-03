export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons'
    ]
},
modules:['nuxt-icon'],
app: {
  head: {
    title:"My study",
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  }
}
})
