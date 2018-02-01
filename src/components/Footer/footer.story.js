import { storiesOf } from '@storybook/vue'
import Footer from './footer.vue'

storiesOf('Footer', module)
  .add('default', () => ({
    components: { Footer },
    template: '<footer>Footer component</footer>',
    data: () => ({})
  }))