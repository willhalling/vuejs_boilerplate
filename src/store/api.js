export default {
  getNotifications () {
    // TEST DATA
    // in real app we would call external api here
    const notifications = [
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
    return new Promise((resolve) => resolve(notifications))
  }
}
