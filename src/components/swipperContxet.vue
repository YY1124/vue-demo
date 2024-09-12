<template>
    <!-- https://swiper.com.cn/ -->
    <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    >
        <swiper-slide><img src="../assets/logo.png"></swiper-slide>
        <swiper-slide><img src="../assets/logo.png"></swiper-slide>
        <swiper-slide><img src="../assets/logo.png"></swiper-slide>
        ...
    </swiper>
  </template>
  
  <script>
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css';
  export default {
    name: 'lifeSpan',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
  </script>
  
  <style scoped>
  img{
    width:100%;
  }
  </style>