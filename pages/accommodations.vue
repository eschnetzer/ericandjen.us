<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <p>We recommend booking your accommodations as early as possible since the Lake Winnipesaukee area is a popular destination in the summer. Please be aware that many places may have a mimimum two night stay.</p>
      <h3 class="alignCenter">
        Recommendations to follow.
      </h3>
    </div>
  </section>
</template>

<script>
let title = `Accommodations`;
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
