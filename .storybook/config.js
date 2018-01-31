import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

// Install Vue plugins.
Vue.use(Vuex);

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);