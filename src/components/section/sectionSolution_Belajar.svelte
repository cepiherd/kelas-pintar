<script>
import Card from '../solution_belajar/card.svelte'
const data  = [
    {
         mainImage : "https://cdn.extramarks.id/web/images/website_v7/kelas-pintar-thumbnail.png", subImage : "https://cdn.extramarks.id/web/images/website_v7/kelas-pintar-thumbnail-logo.png",desc : "Solusi belajar yang lengkap dengan video pembelajaran, soal latihan dan simulasi ujian"
    },
    {
         mainImage : "https://cdn.extramarks.id/web/images/website_v7/tanya-thumbnail.png", subImage : "https://cdn.extramarks.id/web/images/website_v7/tanya-thumbnail-logo.png",desc : "Butuh solusi cepat? Coba TANYA dari Kelas Pintar aja!"
    },
    {
         mainImage : "https://cdn.extramarks.id/web/images/website_v7/soal-thumbnail.png", subImage : "https://cdn.extramarks.id/web/images/website_v7/soal-thumbnail-logo-new.png",desc : "Belum siap mengikuti ujian? Temukan puluhan SOAL latihan dari Kelas Pintar!"
    },
    {
         mainImage : "https://cdn.extramarks.id/web/images/website_v7/guru-thumbnail.png", subImage : "https://cdn.extramarks.id/web/images/website_v7/guru-blue-text.png",desc : "Yakin kamu bisa belajar sendiri dirumah? Yuk didampingin GURU dari Kelas Pintar. GRATIS!"
    }
]
</script>



<div class="container mx-auto text-center">
    <h1 class="text-kp-subtitle pb-4 text-black">Temukan Solusi Belajar Online Kamu</h1>
    <p class="px-20 text-black text-sm max-w-4xl leading-5 mx-auto">Kelas Pintar merupakan solusi pembelajaran online yang siap membantu kegiatan belajar kamu kapanpun dan dimanapun. Melalui Metode Pintar, sistem yang terintegrasi dan teknologi interaktif, Kelas Pintar siap menjadi solusi belajar tanpa tatap muka. Dapatkan berbagai materi pembelajaran ter-update untuk pendidikan tingkat SD, SMP dan SMA. Jadi tunggu apalagi ayo belajar online bersama Kelas Pintar!</p>


    <div class="pt-10 flex flex-wrap md:flex-nowrap sm:flex-nowrap justify-center">
        {#each data as item}
             <Card mainImage={item.mainImage} subImage={item.subImage} desc={item.desc}/>
        {/each}
    </div>
</div>