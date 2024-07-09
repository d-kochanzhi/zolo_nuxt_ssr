<template>
  <SeoComponent />
  <section id="about">
    <Container class="bg-light py-5 mb-5">
      <!-- About Start -->

      <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <NuxtImg  class="img-fluid" src="/images/about.png" alt="" />
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="h-100">
            <h1 class="display-6">{{$t('about.About')}}</h1>
            <p class="text-primary fs-5 mb-4">
              The Most Trusted Cryptocurrency Platform
            </p>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <div class="d-flex align-items-center mb-2">
              <i
                class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
              <span>Tempor erat elitr rebum at clita</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i
                class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
              <span>Tempor erat elitr rebum at clita</span>
            </div>
            <div class="d-flex align-items-center mb-4">
              <i
                class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
              <span>Tempor erat elitr rebum at clita</span>
            </div>
            <a class="btn btn-primary py-3 px-4" href="">Read More</a>
          </div>
        </div>
      </div>

      <!-- About End -->
    </Container>
  </section>
</template>
