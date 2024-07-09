<template>
   <SeoComponent />
  <section id="home">
    <Container class="bg-light py-5 mb-5">
      <!-- Header Start -->

      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <h1 class="display-4 mb-3 animated slideInDown">
            {{$t('home.Welcome')}} {{$t('in')}} Solana Staking Services
          </h1>
          <p class="animated slideInDown">
            {{$t('home.Welcome_text')}}
          </p>
          <a href="" class="btn btn-primary py-3 px-4 animated slideInDown">
            {{ $t('home.Explore_more') }}
          </a>
        </div>
        <div class="col-lg-6 animated fadeIn">
          <NuxtImg loading="lazy"
            class="img-fluid animated pulse infinite"
            style="animation-duration: 3s"
            src="/images/hero-1.png"
            alt="" />
        </div>
      </div>

      <!-- Header End -->
    </Container>
  </section>
</template>
