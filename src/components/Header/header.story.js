import { storiesOf } from '@storybook/vue'
import Header from './header.vue'

storiesOf('Header', module)
  .add('default', () => ({
    components: { Header },
    template: '<header>Header component</header>',
    data: () => ({})
  }))