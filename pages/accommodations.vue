<template>
  <section class="container">
    <div class="content">
      <h2 class="subtitle alignCenter divider">
        {{ headerTitle }}
      </h2>
      <p>It’s summertime in the Lakes Region and it’s also Nascar race weekend so some places are considering it a holiday and may have a 2 to 3 night minimum. Airbnb or Homeaway are always good options to find unique places to stay.</p>

      <div>
        <h3 class="alignCenter divider">
          In Laconia
        </h3>

        <h4 class="alignCenter">
          <a href="http://weirsbeachmotel.com/word/" target="_blank">
            Weirs Beach Motel & Cottages
          </a>
        </h4>
        <p>
          Definitely rustic and a bit outdated but the cottages are cute! If you are just looking for a place to crash, this is the closest! It is only 700 feet from the reception area and some rooms are pet friendly!
        </p>

        <br />

        <h4 class="alignCenter">
          <a href="http://www.baytop.com/" target="_blank">
            Bay Top Motel
          </a>
        </h4>
        <p>
          Located just 1/2 mile from Weirs Beach, our hotel rooms have free wifi, microwaves, refrigerators, new showers and TV's. <br />In Laconia, New Hampshire.
        </p>

        <br />

        <p>If you want to stay a little longer and make it a getaway, here are some other options that have a 3 night minimum!</p>

        <p>
          <a href="http://grandviewnh.com/" target="_blank">
            Grandview Motel and Cottages
          </a>
        </p>
        <p>
          <a href="https://lazyemotorinn.com/" target="_blank">
            Lazy E Motor Inn
          </a>
        </p>
        <p>
          <a href="https://www.cozyinn-nh.com/" target="_blank">
            Lakeview House &amp; Cottages
          </a>
        </p>
        <p>
          <a href="https://naswa.com/" target="_blank">
            The NASWA Resort
          </a>
        </p>

      </div>

      <div>
        <h3 class="alignCenter divider">
          In Wolfeboro
        </h3>


        <h4 class="alignCenter">
          Lake Wentworth Inn
        </h4>
        <p>
          Formerly known as the Allen A Motor Inn, this motel was recently bought by new owners who are doing lots of renovations. The Grand Opening will be Memorial Day weekend and it has 42 rooms available at a reasonable price.  We are looking into getting a block of rooms so please let us know if you are interested in staying here.
        </p>

        <br />

        <h4 class="alignCenter">
          <a href="https://www.crescentlakeinn.com/" target="_blank">
            Crescent Lake Inn &amp; Suites
          </a>
        </h4>

        <p>
          Located in the beautiful Lake Winnipesaukee area in Wolfeboro, NH, Crescent Lake Inn &amp; Suites feature guest rooms situated on expansive lawns overlooking Crescent Lake.
        </p>

      </div>

    </div>
  </section>
</template>

<script>
let title = `Accommodations`;
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
