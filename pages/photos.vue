<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <no-ssr>
        <vueper-slides autoplay bullets-outside fixed-height=900px>
          <vueper-slide v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :content="slide.content"></vueper-slide>
        </vueper-slides>
      </no-ssr>
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
let title = `Photos`;
export default {
  data() {
    return {
      headerTitle: title,
      slides: [
        {
          title: 'Jen and Eric at the Docks in Meredith',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4083-X3.jpg" alt="Jen and Eric at the Docks in Meredith">'
        },
        {
          title: 'Eric telling Jen a secret',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4107-X3.jpg" alt="Eric telling Jen a secret">'
        },
        {
          title: 'Jen and Eric holding hands by the lake',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4132-X3.jpg" alt="Jen and Eric holding hands by the lake">'
        },
        {
          title: 'Eric kissing Jen on the cheek',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4169-X3.jpg" alt="Eric kissing Jen on the cheek">'
        },
        {
          title: 'In front of the Mount Washington docks',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4173-X3.jpg" alt="In front of the Mount Washington docks">'
        },
        {
          title: 'Holding each other',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4176-X3.jpg" alt="Holding each other">'
        },
        {
          title: 'The "Engaged" Pose',
          content: '<img src="https://s3.amazonaws.com/eschnetzer/images/engagement/710_4193-X3.jpg" alt="The "Engaged" Pose">'
        },
      ]
    }
  },
  head: {
    title: `${title} | Eric Schnetzer and Jennifer Cain | July 20, 2019`,
  }
}
</script>
