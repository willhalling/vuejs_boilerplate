import { storiesOf } from '@storybook/vue'

import Notifications from './notifications.vue'

storiesOf('Notifications', module)
  .add('default', () => ({
    components: { Notifications },
    template: '<notifications :messages="notifications"></notifications>',
    data: () => ({
      notifications: [
        {
          id: 1,
          type: 'info',
          message: {
            title: 'Creatives are ready!',
            body: 'Your creatives are now rendered and ready to preview.'
          }
        },
        {
          id: 2,
          type: 'danger',
          message: {
            title: 'Payment declined!',
            body: 'Your latest invoice hasn\'t been paid yet.'
          }
        }
      ]
    })
  }))