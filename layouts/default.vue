<template>
  <div>
    <aside class="daysLeft">
      <div class="daysLeftCircle">
        <span class="daysLeftNumber">
          {{ daysLeft }}
        </span>
        <span class="daysLeftText">
          days
        </span>
      </div>
    </aside>
    <header>
      <h1 class="title">
        <nuxt-link to="/">eric and jen</nuxt-link>
      </h1>
      <nav>
        <!-- <nuxt-link to="/our-love-story">Our Love Story</nuxt-link> -->
        <!-- <nuxt-link to="/the-wedding-party">The Wedding Party</nuxt-link> -->
        <nuxt-link to="/schedule">Schedule</nuxt-link>
        <nuxt-link to="/photos">Photos</nuxt-link>
        <nuxt-link to="/accommodations">Accommodations</nuxt-link>
        <!-- <nuxt-link to="/transportation">Transportation</nuxt-link> -->
        <!-- <nuxt-link to="/things-to-do">Things To Do</nuxt-link> -->
        <nuxt-link to="/registry">Registry</nuxt-link>
      </nav>
    </header>
    <nuxt/>
    <footer>
      <nav>
        <nuxt-link class="home" to="/">
          <font-awesome-icon icon="home" />
          Home
        </nuxt-link>
      </nav>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import MomentPlugin from '../plugins/moment.js';
import FontawesomePlugin from '../plugins/fontawesome.js';
Vue.use(MomentPlugin, FontawesomePlugin);

export default {
  data() {
    let theDate = this.$moment("2019-07-20", "YYYY-MM-DD");
    let now = this.$moment();
    return {
      daysLeft: theDate.diff(now, 'days'),
      headerTitle: 'eric and jen'
    }
  }
}
</script>
