<template>
  <section class="container">
    <div>
      <h1 class="title teal">
        Eric and Jen
      </h1>
      <h2 class="subtitle">
        Lake Winnipesaukee, NH<br>
        July 20, 2019
      </h2>
      <h3 class="purple">
        {{ daysLeft }} Days Left
      </h3>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button button-teal">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button button-green">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import MomentPlugin from '../plugins/moment.js';
Vue.use(MomentPlugin);

export default {
    data() {
        let theDate = this.$moment("2019-07-20", "YYYY-MM-DD");
        let now = this.$moment();
        return {
            daysLeft: theDate.diff(now, 'days')
        }
    }
}
</script>
