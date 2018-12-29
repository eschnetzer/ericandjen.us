<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <schedule></schedule>
    </div>
  </section>
</template>

<script>
import Schedule from '../components/schedule.vue';
let title = `Wedding Schedule`;
export default {
  components: {
    schedule: Schedule
  },
  data() {
    return {
      headerTitle: title
    }
  },
  head: {
    title: `${title} | Eric Schnetzer and Jennifer Cain | July 20, 2019`,
  }
}
</script>
