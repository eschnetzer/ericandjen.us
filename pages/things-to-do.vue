<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle">
        {{ headerTitle }}
      </h2>
      <h3>
        Come back soon.
      </h3>
    </div>
  </section>
</template>

<script>
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
