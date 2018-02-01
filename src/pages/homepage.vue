<template>
  <div class="homepage">
    <notifications :messages="notifications"></notifications>
    <button-cta :onClick="handleClickNotification" theme="primary">Get Notifications</button-cta>
  </div>
</template>

<script>
import Notifications from '@/components/Notifications/notifications'
import ButtonCta from '@/components/Button/button'
export default {
  name: 'Homepage',
  components: {
    Notifications,
    ButtonCta
  },
  computed: {
    notifications () {
      return this.$store.state.messages
    }
  },
  methods: {
    handleClickNotification () {
      this.$store.dispatch('latestNotifications').then(response => {
        console.log('Response', response)
      })
    }
  }
}
</script>
