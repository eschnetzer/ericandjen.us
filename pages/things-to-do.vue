<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <p>If you need to find something to do in between our <nuxt-link to="/schedule">busy schedule</nuxt-link>, consider enjoying the beautiful scenery all around you! Summer is a great time to explore the Lakes Region! Here are a few spots you might want to check out while you’re in NH.</p>

      <h3>
        <a target="_blank" href="http://www.nhstateparks.org/">
          Ellacoya State Park
        </a>
      </h3>
      <h4>Go to the Beach and jump in the lake</h4>

      <h3>
        <a target="_blank" href="https://www.winnipesaukeepier.com/">
          Winnipesaukee Pier
        </a>
      </h3>
      <h4>Cruise the Strip at Weirs Beach & People Watch.  There are lots of shops along the way.</h4>

      <h3>
        <a target="_blank" href="http://weirsbeach.com/the-half-moon/half-moon-amusement-arcades/">
          Half Moon Amusement Arcades
        </a>
      </h3>
      <h4>Act Like a Kid Again and Have Some Fun!</h4>

      <h3>
        <a target="_blank" href="http://www.funspotnh.com/">
          Funspot
        </a>
      </h3>
      <h4>Largest Arcade in the World</h4>

      <h3>
        <a target="_blank" href="http://daytonafunparknh.com/">
          Daytona Fun Park
        </a>
      </h3>
      <h4>Go-Carts, Bumper Boats, Batting Cages </h4>

      <h3>
        <a target="_blank" href="http://www.piratescove.net/weirs-beach">
          Pirate’s Cove
        </a>
      </h3>
      <h4>Mini Golf!</h4>

      <div class="divider"></div>

      <p>Or take a nap so you can dance all night!</p>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

let title = `Things To Do`;
export default {
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
