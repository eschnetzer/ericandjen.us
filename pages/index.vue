<template>
  <section class="container">
    <div class="content">
      <div class="aspot"></div>
      <div class="divider">
        <div class="when">
          <h2>The Wedding</h2>
          <p>Celebrate the marriage of Jennifer Rose Cain and Eric Russell Schnetzer</p>
          <br>
          <h3>Attire</h3>
          <p>Cocktail attire is requested but it will be a hot summer day and we want you to be comfortable. The wedding ceremony will be in an air conditioned church but the reception will be under a tent on the grass alongside Lake Winnipesaukee. Girls leave your stilettos at home!</p>
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
