<script>
    export let via,img, product , desc , btnValue
    import Button from '../commons/Button.svelte'
</script>

<div class="p-2 max-w-md">
    <img src={img} alt="#"/>
    <h5 class="pt-3 text-xs">{via}</h5>
    <h3 class="py-3 text-yellow-500 font-bold text-lg">{product}</h3>
    <p class="px-12 text-sm pb-5 leading-8">{desc}</p>
    <Button title="{btnValue}" classColor={"bg-gradient-to-r from-yellow-500 to-yellow-400"} classTextColor={"text-white"}/>
</div>