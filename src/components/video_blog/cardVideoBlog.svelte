<script>
   import Button from '../commons/Button.svelte'
   export let img , title , desc , btnValue

</script>

    <div class="p-2 mx-w-md">
        <div class="rounded-2xl kp-blog-img max-w-md relative bg-center bg-cover" style={`background-image: url(${img})`}>
            <img src="https://cdn.extramarks.id/web/images/website_v7/kp-icon-play.png" class="absolute bottom-0 left-0 right-0 top-0 m-auto " alt="#"/>
        </div>
        <div class="text-center pb-10">
            <h2 class="py-10 text-yellow-500">{title}</h2>
            <p class="text-sm px-12 max-w-md leading-7 max-h-28">{desc}</p>
        </div>
        <Button title={btnValue} classColor={"bg-gradient-to-r from-blue-900 to-blue-500"} classTextColor={"text-white"}/>
    </div>

<style>
    .kp-blog-img{
        padding:9rem 12rem 7rem 11rem
    }
</style>