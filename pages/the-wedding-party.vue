<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <div class="weddingParty">
        <div class="partyMembers">
          <h3 class="alignCenter">Matron of Honor</h3>
          <div class="partyMember">
            <h4 class="alignCenter"></h4>
          </div>
        </div>
        <div class="divider">
          <div class="horizontalRule"></div>
        </div>
        <div class="partyMembers">
          <h3 class="alignCenter">Bridesmaids</h3>
          <div class="partyMember">
            <h4 class="alignCenter"></h4>
          </div>
        </div>
        <div class="divider">
          <div class="horizontalRule"></div>
        </div>
        <div class="partyMembers">
          <h3 class="alignCenter">Groomsmen</h3>
          <div class="partyMember">
            <h4 class="alignCenter"></h4>
          </div>
        </div>
        <div class="divider">
          <div class="horizontalRule"></div>
        </div>
        <div class="partyMembers">
          <h3 class="alignCenter">Ring Bearer</h3>
          <div class="partyMember">
            <h4 class="alignCenter">Bryer Cain</h4>
            <h5 class="alignCenter">Nephew</h5>
          </div>
        </div>
        <div class="divider">
          <div class="horizontalRule"></div>
        </div>
        <div class="partyMembers">
          <h3 class="alignCenter">Flower Girl</h3>
          <div class="partyMember">
            <h4 class="alignCenter">Nora Lynch</h4>
            <h5 class="alignCenter">Goddaughter</h5>
          </div>
          <div class="partymember divider">
            <h4 class="alignCenter">Brooklyn Cain</h4>
            <h5 class="alignCenter">Niece</h5>
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
