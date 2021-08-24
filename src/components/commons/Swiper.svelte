<script>
  import SwiperCore, { Virtual } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/svelte'
  import "swiper/swiper-bundle.min.css";
  export let data 
  SwiperCore.use([Virtual])
//   const virtualSlides = Array.from({ length: 1000 }).map((el, index) => `Slide ${index + 1}`);
</script>

<Swiper spaceBetween={50}
 slidesPerView={1}
 virtual={{ slides: data }}
 let:virtualData={{ slides, offset, from }}>
  {#each slides as slide, index (from + index)}
    <SwiperSlide virtualIndex={from + index} style={`left:${offset}`}>
      <img src={slide.img} alt={slide.title}/>
    </SwiperSlide>
  {/each}
</Swiper>
