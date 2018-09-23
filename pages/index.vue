<template>
  <section class="container">
    <no-ssr>
      <vueper-slides class="no-shadow" :touchable="false" :slide-ratio="0.3">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :content="slide.content"></vueper-slide>
      </vueper-slides>
    </no-ssr>
    <div class="content">
      <div class="bspot date">
        <img src="https://s3.amazonaws.com/eschnetzer/images/july2019.png" alt="July 20, 2019">
        <br>
        July 20, 2019
      </div>
      <div class="bspot location">
        <img src="https://s3.amazonaws.com/eschnetzer/images/winni.png" alt="Lake Winnipesaukee"><br>
        Lake Winnipesaukee
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        content: '<img src="https://s3.amazonaws.com/eschnetzer/images/rotator-1.png" alt="Photos of Us">'
      },
      {
        content: '<img src="https://s3.amazonaws.com/eschnetzer/images/rotator-2.png" alt="Photos of Us">'
      },
      {
        content: '<img src="https://s3.amazonaws.com/eschnetzer/images/rotator-3.png" alt="Photos of Us">'
      },
    ]
  })
}
</script>
