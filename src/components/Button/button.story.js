import { storiesOf } from '@storybook/vue'
import ButtonCta from './button.vue'

storiesOf('Button', module)
  .add('Primary', () => ({
    components: {ButtonCta},
    template: '<button-cta :onClick="handleClick" theme="primary">Primary button</button-cta>',
    data: () => ({
      handleClick () {
        console.log('Button clicked.')
      }
    })
  }))
  .add('Info', () => ({
    components: {ButtonCta},
    template: '<button-cta :onClick="handleClick" theme="info">Info button</button-cta>',
    data: () => ({
      handleClick () {
        console.log('Button clicked.')
      }
    })
  }))
  .add('Large', () => ({
    components: {ButtonCta},
    template: '<button-cta :onClick="handleClick" size="lg">Large button</button-cta>',
    data: () => ({
      handleClick () {
        console.log('Button clicked.')
      }
    })
  }))