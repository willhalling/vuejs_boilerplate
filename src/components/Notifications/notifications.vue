<template>
  <div class="notifications">
    <div v-for="message in messages" :key="message.id" class="alert" :class="`alert-${message.type}`" role="alert">
      <strong>{{ message.message.title }}:</strong> {{ message.message.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  props: {
    messages: {
      type: Array
    }
  }
}
</script>
