<template>
  <div class="hello">
    <notifications :messages="notifications"></notifications>
    <button type="button" class="btn btn-info" @click="handleClickNotification">Get Notifications</button>
  </div>
</template>

<script>
import Notifications from '@/components/Notifications/notifications.vue'
export default {
  name: 'HelloWorld',
  components: {
    Notifications
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
