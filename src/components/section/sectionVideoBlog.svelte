<script>
import CardVideoBlog from '../video_blog/cardVideoBlog.svelte'
const blogData  = [
        {title: "MURID" , desc:"Murid dapat mengakses berbagai variasi materi pelajaran, latihan soal dan tes di Kelas Pintar, serta membuat Grup belajar dan mengerjakan Tugas dari guru." , img:"https://img.youtube.com/vi/P7f7uksXMNo/sddefault.jpg", btnValue:"KELAS PINTAR"},
        {title: "GURU" , desc:"Guru/Mentor dapat melakukan aktivitas belajar mengajar secara online, berinteraksi secara virtual, memberikan Tugas, PR, dan Project serta melakukan Ujian secara online yang dilengkapi fitur Monitoring" , img:"https://img.youtube.com/vi/aDNGqis666k/sddefault.jpg", btnValue:"SOLUSI GURU"},
        {title: "ORANG TUA" , desc:"Orang Tua dapat memantau perkembangan belajar anak, mulai dari jadwal belajar, penyelesaian tugas sampai ke performa nilai rata-rata anak untuk setiap mata pelajaran." , img:"https://img.youtube.com/vi/6U5XjdW_fpY/sddefault.jpg", btnValue:"SOLUSI ORANG TUA"}
        ]
</script>

<div class="container text-center mx-auto">
    <h1 class="text-kp-subtitle pb-5">
        Kemudahan bagi semua pihak
    </h1>
    <div class="flex flex-wrap md:flex-nowrap sm:flex-nowrap justify-center">
        {#each blogData as item}
             <CardVideoBlog title={item.title} desc={item.desc} img={item.img}  btnValue={item.btnValue} />
        {/each}
    </div>
</div>