<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <no-ssr>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
      </no-ssr>
      <div
        class="photo"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
      <div class="photoCredit divider">
        Photos by Steven Hutchins / Hutchinshotit Photography
        <br>
        <br>
        <a class="button buttonDefault" target="_blank" href="https://hutchinshotit99.smugmug.com/">
          SmugMug
        </a>
        <a class="button buttonDefault" target="_blank" href="https://www.facebook.com/NorthboundPhoto99/">
          Facebook
        </a>
        <a class="button buttonDefault" target="_blank" href="https://www.instagram.com/hutchinshotit/">
          Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import VueGallery from 'vue-gallery';
let title = `Photos`;
export default {
  data() {
    return {
      headerTitle: title,
      images: [
        'https://s3.amazonaws.com/eschnetzer/images/engagement/710_4083-X3.jpg',
        'https://s3.amazonaws.com/eschnetzer/images/engagement/710_4107-X3.jpg',
        'https://s3.amazonaws.com/eschnetzer/images/engagement/710_4132-X3.jpg',
        'https://s3.amazonaws.com/eschnetzer/images/engagement/710_4169-X3.jpg',
        'https://s3.amazonaws.com/eschnetzer/images/engagement/710_4173-X3.jpg',
        'https://s3.amazonaws.com/eschnetzer/images/engagement/710_4176-X3.jpg'
      ],
      index: null
    }
  },
  components: {
    'gallery': VueGallery
  },
  head: {
    title: `${title} | Eric Schnetzer and Jennifer Cain | July 20, 2019`,
  }
}
</script>
