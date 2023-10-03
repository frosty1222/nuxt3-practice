// ~/plugins/fontawesome.js

import {defineNuxtPlugin} from "#app";

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fab} from '@fortawesome/free-brands-svg-icons'

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fab)

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})