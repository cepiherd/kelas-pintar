<script>
    import Button from '../commons/Button.svelte'
</script>

<div class="container mx-auto flex flex-wrap py-20 md:flex md:flex-nowrap">
    <div class="p-2 flex-initial w-full md:w-5/12">
        <img src={"https://cdn.extramarks.id/web/images/website_v7/kp-siap-pintar.png"} alt="#" class="pb-6 w-full">
        <h3 class="kp-title-intro mb-6 text-center md:text-left">Bikin Nilai Cetar dan Ujian Gak Pake Gemetar</h3>
        <h4 class="mb-6 text-center mb:text-left sm:text-left">Solusi belajar di rumah dengan Guru Ahli dan materi yang
            sesuai dengan pelajaran di sekolah untuk SD-SMA</h4>
        <Button title={"COBA BELAJAR DENGAN KELAS PINTAR GRATIS !"} classColor={"bg-btn-yellow-intro"} classTextColor={"text-indigo-700 "}/>
        <br>
        <Button title={"INFO LENGKAP SIAP PINTAR"} classColor={"bg-btn-yellow-intro"} classTextColor={"text-indigo-700 w-full md:w-auto sm:w-auto"}/>
    </div>
    <div class="p2">
        <img src={"https://cdn.extramarks.id/web/images/website_v7/kp-home-thumbnail.png"} alt="#">
    </div>
</div>


<style>
    .kp-title-intro{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
    }
</style>