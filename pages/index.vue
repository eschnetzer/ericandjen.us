<template>
  <section class="container">
    <div class="content">
      <div class="aspot"></div>
      <div class="divider">
        <div class="when">
          <h2>The Wedding</h2>
          <p>Celebrate the marriage of Jennifer Rose Cain and Eric Russell Schnetzer</p>
          <br>
          <schedule></schedule>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Schedule from '../components/schedule.vue';
export default {
  components: {
    schedule: Schedule
  }
}
</script>
