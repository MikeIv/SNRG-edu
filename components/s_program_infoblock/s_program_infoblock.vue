<template>
  <section class="s-program-infoblock">
    <div class="s-program-infoblock__wrapper">
      <div class="s-program-infoblock__items">
        <swiper :options="swiperOptionProgramInfo">
          <swiper-slide v-for="item in items" :key="item.id" class="s-program-infoblock__item">
            <AFactoids :type="item.type" :title="item.title" :lineNumber="item.lineNumber" class="swiper-slide" />
          </swiper-slide>
        </swiper>
      </div>
      <span class="s-program-infoblock__arrow">
        <svg viewBox="0 0 259 482" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M259 482L240.794 353.75L180.22 297.382L119.645 241.014L240.794 128.28L259 0L0 240.987L259 482Z"
            fill="#FF0040"
          ></path>
        </svg>
      </span>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import AFactoids from '@/components/_ui/A-factoids/A-factoids';
import './s_program_infoblock.scss';

export default {
  name: 's_program_infoblock',

  components: {
    AFactoids,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOptionProgramInfo: {
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 32,
        resistance: true,
        resistanceRatio: 0,
        breakpoints: {
          576: {
            slidesPerView: 'auto',
            spaceBetween: 12,
          },
          768: {
            spaceBetween: 32,
          },
        },
      },

      items: [
        {
          id: 1,
          lineNumber: 'от 120 000 ₽',
          title: 'в год',
          type: 'line',
        },
        {
          id: 2,
          lineNumber: '20',
          title: 'бюджетных мест',
          type: 'line',
        },
        {
          id: 3,
          lineNumber: '60',
          title: 'платных мест',
          type: 'line',
        },
      ],
    };
  },
};
</script>
