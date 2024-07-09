<template>
   <SeoComponent />
  <section id="services">
    <Container class="bg-light py-5 mb-5">
      <!-- Service Start -->

      <div
        class="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 500px">
        <h1 class="display-6">{{ $t('service.Services') }}</h1>
        <p class="text-primary fs-5 mb-5">
          {{ $t('service.Services_slogan') }}
        </p>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item bg-white p-5">
            <NuxtImg  class="img-fluid mb-4" src="/images/icon-7.png" alt="" loading="lazy" />
            <h5 class="mb-3">{{$t('service.Currency_Wallet')}}</h5>
            <p>
             {{$t('service.Currency_Wallet_text')}}
            </p>
            <a href="">
              {{$t('Read_more')}}
              <i class="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item bg-white p-5">
            <NuxtImg  class="img-fluid mb-4" src="/images/icon-3.png" alt="" loading="lazy" />
            <h5 class="mb-3">{{$t('service.Currency_Transaction')}}</h5>
            <p>
              {{$t('service.Currency_Transaction_text')}}
            </p>
            <a href="">
              {{$t('Read_more')}}
              <i class="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-white p-5">
            <NuxtImg  class="img-fluid mb-4" src="/images/icon-9.png" alt="" loading="lazy" />
            <h5 class="mb-3">{{$t('service.Bitcoin_Investment')}}</h5>
            <p>
              {{$t('service.Bitcoin_Investment_text')}}
            </p>
            <a href="">
              {{$t('Read_more')}}
              <i class="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item bg-white p-5">
            <NuxtImg  class="img-fluid mb-4" src="/images/icon-5.png" alt="" loading="lazy" />
            <h5 class="mb-3">{{$t('service.Currency_Exchange')}}</h5>
            <p>
              {{$t('service.Currency_Exchange_text')}}
            </p>
            <a href="">
              {{$t('Read_more')}}
              <i class="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item bg-white p-5">
            <NuxtImg  class="img-fluid mb-4" src="/images/icon-2.png" alt="" loading="lazy" />
            <h5 class="mb-3">{{$t('service.Bitcoin_Escrow')}}</h5>
            <p>
              {{$t('service.Bitcoin_Escrow_text')}}
            </p>
            <a href="">
              {{$t('Read_more')}}
              <i class="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-white p-5">
            <NuxtImg  class="img-fluid mb-4" src="/images/icon-8.png" alt="" loading="lazy" />
            <h5 class="mb-3">{{$t('service.Token_Sale')}}</h5>
            <p>
              {{$t('service.Token_Sale_text')}}
            </p>
            <a href="">
              {{$t('Read_more')}}
              <i class="fa fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Service End -->
    </Container>
  </section>
</template>
