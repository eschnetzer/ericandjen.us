<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <h3 class="alignCenter">
        Come back soon.
      </h3>
    </div>
  </section>
</template>

<script>
let title = `Accomodations`;
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
