<template>
  <section class="container">
    <div class="registries">
      <div class="registry amazon">
        <a v-bind:href="registry.amazon.url" target="_blank">
          <img v-bind:src="registry.amazon.image" v-bind:alt="registry.amazon.name">
        </a>
        <br>
        <a class="button button-green" v-bind:href="registry.amazon.url" target="_blank">
          View Registry
        </a>
      </div>
      <div class="registry bed-bath-and-beyond">
        <a v-bind:href="registry.bedBathAndBeyond.url" target="_blank">
          <img v-bind:src="registry.bedBathAndBeyond.image" v-bind:alt="registry.bedBathAndBeyond.name">
        </a>
        <br>
        <a class="button button-green" v-bind:href="registry.bedBathAndBeyond.url" target="_blank">
          View Registry
        </a>
      </div>
      <div class="registry macys">
        <a v-bind:href="registry.macys.url" target="_blank">
          <img v-bind:src="registry.macys.image" v-bind:alt="registry.macys.name">
        </a>
        <br>
        <a class="button button-green" v-bind:href="registry.macys.url" target="_blank">
          View Registry
        </a>
      </div>
    </div>
  </section>
</template>

<script>
let title = `Registry`;
export default {
  data() {
    return {
      headerTitle: title,
      registry: {
        amazon: {
          url: `https://www.amazon.com/wedding/jennifer-cain-eric-schnetzer-wolfeboro-july-2019/registry/1RHIG1XFMDDPM`,
          image: `https://s3.amazonaws.com/eschnetzer/images/amazon.png`,
          name: `Amazon`
        },
        bedBathAndBeyond: {
          url: `https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546523010&eventType=Wedding`,
          image: `https://s3.amazonaws.com/eschnetzer/images/bed-bath-beyond.png`,
          name: `Bed, Bath, and Beyond`
        },
        macys: {
          url: `https://www.macys.com/wgl/registry/guest/6977854`,
          image: `https://s3.amazonaws.com/eschnetzer/images/macys.png`,
          name: `Macy's`
        }
      }
    }
  },
  head: {
    title: `${title} | Eric Schnetzer and Jennifer Cain | July 20, 2019`
  }
}
</script>
