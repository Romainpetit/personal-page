<template>
  <div>
    <!-- <div class="bg-main py1">
      <div class="container">
        <div class="title-1 m0 center">Romain Petit</div>
      </div>
    </div> -->

    <div class="bg-main py1 pb0">
      <div class="container"></div>
    </div>

    <div class="bg-white">
      <div class="container mt1 center-align-xs left-align-md">
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xl-offset-1 align-self-center"
          >
            <img
              class="img-rounded"
              src="https://cdn.jsdelivr.net/gh/Romainpetit/images-cdn/img/7c92425edb21fa54a6437d78c32a4f91bcc34dd4d8e2ae9d098ab07c5a74c6e9.png"
              alt="romain petit"
            />
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-8 col-lg-9 col-xl-8 align-self-center mt1 mt0-sm"
          >
            <h1 class="copy">
              <strong>Romain Petit 👋<br /></strong>
              I'm into front-end developement since 2010.<br />
            </h1>
          </div>
        </div>
      </div>
      <div class="container">
        <nuxt-content :document="resume" />
      </div>

      <!-- <nuxt-link to="/articles">Articles</nuxt-link> -->
      <!-- <nuxt-link to="/products">Products</nuxt-link> -->

      <!-- Missions menu -->
      <!-- <ul>
      <li v-for="mission in missions" :key="mission.slug">
        <nuxt-link :to="mission.path">{{ mission.title }}</nuxt-link>
      </li>
    </ul> -->

      <!-- Training listing -->

      <div class="container">
        <div class="title-2 center">Teaching web development.</div>

        <h2 class="light text-inline">
          Teams training in topics I love: Vue.js, Nuxt, Modern JavaScript,
          Accessibility & CSS. With
          <span v-for="formation in formations" :key="formation.slug">
            <span v-if="formation.active" class="title-1 text-inline">
              <a
                class="link"
                :href="formation.client.website"
                target="_blank"
                rel="nofollow"
              >
                {{ formation.client.name }}</a
              >.
            </span>
          </span>
        </h2>

        <p class="mt1 mb0 title-uppercase">Previous:</p>
        <ul>
          <li
            v-for="(formation, index) in formations"
            :key="formation.slug"
            class="text-inline faded"
          >
            <span v-if="!formation.active" class="title-1 text-inline">
              <a
                class="link text-inline"
                :href="formation.client.website"
                target="_blank"
                rel="nofollow"
                >{{ formation.client.name }}</a
              ><span v-if="index + 1 !== formations.length">, </span
              ><span v-else>.</span>
            </span>
          </li>
        </ul>
      </div>

      <!-- Missions listing -->

      <div class="container">
        <div class="title-2 center">Building web products.</div>
        <h2 class="light text-inline">
          Front-end developement with a strong focus on accessibility, in the
          Vue.js ecosystem. For
          <span v-for="mission in missions" :key="mission.slug">
            <span v-if="mission.active" class="title-1 text-inline">
              <a
                class="link"
                :href="mission.client.website"
                target="_blank"
                rel="nofollow"
              >
                {{ mission.client.name }}</a
              >.
            </span>
          </span>
        </h2>

        <p class="mt1 mb0 title-uppercase">Previous:</p>
        <ul>
          <li
            v-for="(mission, index) in missions"
            :key="mission.slug"
            class="text-inline faded"
          >
            <span v-if="!mission.active" class="title-1 text-inline">
              <a
                class="link text-inline"
                :href="mission.client.website"
                target="_blank"
                rel="nofollow"
                >{{ mission.client.name }}</a
              ><span v-if="index + 1 !== missions.length">, </span
              ><span v-else>.</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="bg-main bg-main-reverse">
        <div class="container mt3">
          <div class="row">
            <div
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 main-content mt2 mb3 center"
            >
              <h2 class="light mb1">
                For the last <strong>12 years</strong>, I have been building
                digital products.
              </h2>
              <h3 class="light mb1 text-xs color-white-faded">
                Based in Grenoble, working from
                <a
                  class="link"
                  href="https://www.mediastere.fr/"
                  target="_blank"
                  rel="nofollow"
                  >Le Médiastère</a
                >, the self-managed coworking space.
              </h3>
              <div class="platforms">
                <a
                  id="linkedin"
                  class="mr1 ml0 platforms-link"
                  href="https://www.linkedin.com/in/romainfpetit/en"
                  target="_blank"
                >
                  <svg
                    width="36px"
                    height="36px"
                    viewBox="0 0 50 50"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g class="icon" sketch:type="MSArtboardGroup">
                      <path
                        id="Shape"
                        d="M41.2230769,6 L8.77692308,6 C7.16923077,6 6,7.16923077 6,8.77692308 L6,41.2230769 C6,42.6846154 7.31538462,44 8.77692308,44 L41.2230769,44 C42.8307692,44 44,42.8307692 44,41.2230769 L44,8.77692308 C44,7.16923077 42.6846154,6 41.2230769,6 L41.2230769,6 L41.2230769,6 Z M17.6923077,38.1538462 L11.8461538,38.1538462 L11.8461538,20.6153846 L17.6923077,20.6153846 L17.6923077,38.1538462 L17.6923077,38.1538462 L17.6923077,38.1538462 Z M14.7692308,18.2769231 C12.8692308,18.2769231 11.2615385,16.6692308 11.2615385,14.7692308 C11.2615385,12.8692308 12.8692308,11.2615385 14.7692308,11.2615385 C16.6692308,11.2615385 18.2769231,12.8692308 18.2769231,14.7692308 C18.2769231,16.6692308 16.6692308,18.2769231 14.7692308,18.2769231 L14.7692308,18.2769231 L14.7692308,18.2769231 Z M38.1538462,38.1538462 L32.3076923,38.1538462 L32.3076923,29.3846154 C32.3076923,27.0461538 31.7230769,24.7076923 29.3846154,24.7076923 C27.0461538,24.7076923 26.4615385,27.0461538 26.4615385,29.3846154 L26.4615385,38.1538462 L20.6153846,38.1538462 L20.6153846,20.6153846 L26.4615385,20.6153846 L26.4615385,22.6615385 L26.7538462,22.6615385 C27.4846154,21.2 29.3846154,20.0307692 31.5769231,20.0307692 C36.9846154,20.0307692 38.1538462,23.5384615 38.1538462,27.9230769 L38.1538462,38.1538462 L38.1538462,38.1538462 L38.1538462,38.1538462 Z"
                        sketch:type="MSShapeGroup"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  id="github"
                  class="mr1 ml1 platforms-link"
                  href="https://github.com/romainpetit"
                  target="_blank"
                  ><svg
                    width="36px"
                    height="36px"
                    viewBox="0 0 50 50"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g class="icon" sketch:type="MSArtboardGroup">
                      <path
                        id="Fill-3"
                        d="M4,25.0194429 C4,34.3059335 10.0219607,42.1833859 18.3742538,44.9627523 C19.4258711,45.1563015 19.8090985,44.5072666 19.8090985,43.9498449 C19.8090985,43.4517783 19.7910339,42.1291921 19.7807113,40.3756363 C13.9342352,41.6453191 12.7006816,37.55756 12.7006816,37.55756 C11.7445486,35.1291627 10.3664783,34.4827084 10.3664783,34.4827084 C8.4580832,33.1794772 10.510995,33.2052837 10.510995,33.2052837 C12.6206813,33.3536714 13.7303634,35.3717444 13.7303634,35.3717444 C15.6052099,38.5833708 18.650384,37.6556249 19.8478084,37.1175582 C20.0387769,35.7601331 20.582005,34.8336776 21.1820075,34.3085141 C16.5148912,33.7781893 11.6077738,31.9743108 11.6077738,23.9200835 C11.6077738,21.6258803 12.4271321,19.7484531 13.7716539,18.2800599 C13.5548788,17.7484447 12.8335854,15.6103712 13.9781063,12.7174559 C13.9781063,12.7174559 15.7419847,12.1522922 19.7574854,14.8723036 C21.4336215,14.4052049 23.2323387,14.1729459 25.0194429,14.1639136 C26.8052569,14.1729459 28.6026838,14.4052049 30.2814005,14.8723036 C34.2943205,12.1522922 36.0556182,12.7174559 36.0556182,12.7174559 C37.2027198,15.6103712 36.4814265,17.7484447 36.2659417,18.2800599 C37.6130441,19.7484531 38.4259508,21.6258803 38.4259508,23.9200835 C38.4259508,31.9949561 33.5110914,33.7717377 28.8297815,34.2917399 C29.583333,34.9407749 30.2555939,36.2233609 30.2555939,38.1846594 C30.2555939,40.9937035 30.2297874,43.2608097 30.2297874,43.9498449 C30.2297874,44.5124279 30.6091438,45.1666242 31.6749547,44.961462 C40.0207961,42.1756439 46.0375956,34.3033528 46.0375956,25.0194429 C46.0375956,13.410362 36.6259432,4 25.0168623,4 C13.4116524,4 4,13.410362 4,25.0194429 Z"
                        sketch:type="MSShapeGroup"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  id="twitter"
                  class="mr0 ml1 platforms-link"
                  href="https://twitter.com/romainfpetit"
                  target="_blank"
                >
                  <svg
                    width="36px"
                    height="36px"
                    viewBox="0 0 50 50"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g class="icon" sketch:type="MSArtboardGroup">
                      <path
                        id="path22"
                        d="M46.1937857,14.9807422 C44.6789194,15.6561786 43.049843,16.1126863 41.3406085,16.318354 C43.0851004,15.2670662 44.4245834,13.6031959 45.0556019,11.6209691 C43.4229093,12.5943557 41.6148334,13.3004015 39.6889312,13.680976 C38.1481491,12.0312145 35.9516382,11 33.5209815,11 C28.8534335,11 25.0703359,14.8012031 25.0703359,19.4904133 C25.0703359,20.156131 25.1443766,20.8043489 25.2890528,21.4253786 C18.2652805,21.0717501 12.038267,17.6904808 7.87004933,12.5540881 C7.14256998,13.8075314 6.72586874,15.2658552 6.72586874,16.8221534 C6.72586874,19.7682902 8.21719991,22.3666721 10.4854613,23.8898782 C9.10020392,23.846371 7.79691266,23.4642525 6.6574632,22.8278424 C6.65616742,22.8635685 6.65616742,22.8989314 6.65616742,22.9344153 C6.65616742,27.0489793 9.56958043,30.4799019 13.4352468,31.2604277 C12.7267221,31.4544995 11.9803182,31.5571365 11.2095053,31.5571365 C10.6644005,31.5571365 10.1358698,31.5053336 9.61897104,31.4057545 C10.6951077,34.7788492 13.8155153,37.2339632 17.5142359,37.3026906 C14.6195666,39.5803848 10.9762334,40.9370707 7.01654708,40.9370707 C6.33487232,40.9370707 5.66166539,40.8967425 5,40.81869 C8.74151179,43.2277232 13.1830503,44.6329119 17.9560694,44.6329119 C33.5000982,44.6329119 41.9992604,31.6954997 41.9992604,20.4744571 C41.9992604,20.1065079 41.9908228,19.7410717 41.9754541,19.3769373 C43.6259261,18.1788695 45.0585249,16.6838508 46.1921885,14.9808028"
                        sketch:type="MSShapeGroup"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="clear center">
                <a
                  id="email"
                  class="button mt1"
                  target="_top"
                  href="mailto:contact@romainpetit.com?Subject=Oh%20I%20would%20love%20to%20work%20with%20you%20Romain"
                  >Drop a line</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }) {
    const resume = await $content('resume').fetch()

    const queryMissions = $content('missions', { deep: true }).sortBy(
      'date-finish',
      'desc'
    )

    const queryFormations = $content('formations', { deep: true }).sortBy(
      'date-finish',
      'desc'
    )
    const missions = await queryMissions.fetch()
    const formations = await queryFormations.fetch()

    return {
      resume,
      missions,
      formations
    }
  },
  head() {
    return {
      title: 'Romain Petit - Front-end web developer'
    }
  }
}
</script>
