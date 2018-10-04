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
      <div class="bspot leftAligned divider">
        <div class="bspotImage">
          <img src="https://s3.amazonaws.com/eschnetzer/images/july2019.png" alt="July 20, 2019">
        </div>
        <div class="bspotContent when">
          <h2>When</h2>
          <p>Join us on Saturday, July 20th, 2019. The ceremony will be at 1pm, with a cocktail hour at 4pm, and a reception beginning at 5pm.</p>
        </div>
      </div>
      <div class="divider">
        <div class="horizontalRule"></div>
      </div>
      <div class="bspot rightAligned">
        <div class="bspotImage">
          <img src="https://s3.amazonaws.com/eschnetzer/images/winni.png" alt="Lake Winnipesaukee">
        </div>
        <div class="bspotContent">
          <h2>Where</h2>
          <h3>Ceremony</h3>
          <p>
            St Katharine Drexel Parish,
            40 Hidden Springs Rd, Alton, NH 03809
          </p>
          <h3>Reception</h3>
          <p>
            Akwa Marina Yacht Club,
            95 Centenary Ave, Laconia, NH 03246
          </p>
        </div>
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
