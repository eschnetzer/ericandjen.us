<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <div class="registries">
        <registry
          v-for="registry in registries"
          v-bind:key="registry.name"
          v-bind:registry="registry">
        </registry>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import Registry from '../components/registry.vue';

let title = `Registry`;
export default {
  components: {
    registry: Registry
  },
  data() {
    return {
      headerTitle: title,
      registries: [
        {
          url: `https://www.amazon.com/wedding/jennifer-cain-eric-schnetzer-wolfeboro-july-2019/registry/1RHIG1XFMDDPM`,
          image: `https://s3.amazonaws.com/eschnetzer/images/amazon.png`,
          name: `Amazon`
        },
        {
          url: `https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=546523010&eventType=Wedding`,
          image: `https://s3.amazonaws.com/eschnetzer/images/bed-bath-beyond.png`,
          name: `Bed, Bath, and Beyond`
        },
        {
          url: `https://www.macys.com/wgl/registry/guest/6977854`,
          image: `https://s3.amazonaws.com/eschnetzer/images/macys.png`,
          name: `Macy's`
        }
      ]
    }
  },
  head: {
    title: `${title} | Eric Schnetzer and Jennifer Cain | July 20, 2019`
  }
}
</script>
