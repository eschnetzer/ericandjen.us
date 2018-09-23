<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle">
        {{ headerTitle }}
      </h2>
      <div class="wedding-party">
        <div class="party-members">
          <h3>Matron of Honor</h3>
          <div class="party-member">
            <h4></h4>
          </div>
        </div>
        <div class="party-members">
          <h3>Bridesmaids</h3>
          <div class="party-member">
            <h4></h4>
          </div>
        </div>
        <div class="party-members">
          <h3>Groomsmen</h3>
          <div class="party-member">
            <h4></h4>
          </div>
        </div>
        <div class="party-members">
          <h3>Ring Bearer</h3>
          <div class="party-member">
            <h4>Bryer Cain</h4>
            <h5>Nephew</h5>
          </div>
        </div>
        <div class="party-members">
          <h3>Flower Girl</h3>
          <div class="party-member">
            <h4>Nora Lynch</h4>
            <h5>Goddaughter</h5>
          </div>
          <div class="party-member">
            <h4>Brooklyn Cain</h4>
            <h5>Niece</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let title = `The Wedding Party`;
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
