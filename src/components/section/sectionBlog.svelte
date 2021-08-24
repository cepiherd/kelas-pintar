<script>
  import SwiperBlog from '../commons/Swiper.svelte'
 const data  = [
     {
      id:1,
      title:"Batasan-batasan yang Terbentuk Akibat Pergerakan Lempeng Tektonik",
      tgl:"23 Agustus 2021",
      img:"https://www.kelaspintar.id/blog/wp-content/uploads/2021/08/pexels-fauxels-3183153.jpg" ,
      desc:"Lempeng tektonik. Berbagai teori konspirasi tentang bumi menyebutkan bahwa planet yang ditinggali manusia dan makhluk lainnya ini memiliki beberapa bagian atau lapisan mulai dari inti hingga kerak bumi. Kerak bumi sendiri yang merupakan lapisan terluar yang membentuk permukaan bumi dan bentuknya..." ,
    },
    {
        id:2,
      title:"Batasan-batasan yang Terbentuk Akibat Pergerakan Lempeng Tektonik",
      tgl:"23 Agustus 2021",
      img:"https://www.kelaspintar.id/blog/wp-content/uploads/2021/08/pexels-wilson-malone-4558211.jpg" ,
      desc:"Lempeng tektonik. Berbagai teori konspirasi tentang bumi menyebutkan bahwa planet yang ditinggali manusia dan makhluk lainnya ini memiliki beberapa bagian atau lapisan mulai dari inti hingga kerak bumi. Kerak bumi sendiri yang merupakan lapisan terluar yang membentuk permukaan bumi dan bentuknya..." ,
    },
    {
        id:3,
      title:"Batasan-batasan yang Terbentuk Akibat Pergerakan Lempeng Tektonik",
      tgl:"23 Agustus 2021",
      img:"https://www.kelaspintar.id/blog/wp-content/uploads/2021/08/pexels-fauxels-3183153.jpg" ,
      desc:"Lempeng tektonik. Berbagai teori konspirasi tentang bumi menyebutkan bahwa planet yang ditinggali manusia dan makhluk lainnya ini memiliki beberapa bagian atau lapisan mulai dari inti hingga kerak bumi. Kerak bumi sendiri yang merupakan lapisan terluar yang membentuk permukaan bumi dan bentuknya..." ,
    },
     ]
</script>

<div class="container text-center">
    <h1 class="text-kp-subtitle py-10">Artikel Terpopuler</h1>
    <div >
        <SwiperBlog {data}/>
    </div>
</div>