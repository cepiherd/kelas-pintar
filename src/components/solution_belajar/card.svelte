<script>
    import Button from '../commons/Button.svelte'
    export let mainImage , subImage , desc 
</script>

<div class="rounded-2xl p-2 shadow-kp w-auto bg-white max-w-kp min-w-kp mx-5 mb-10">
    <div class="mx-auto relative">
        <img src={mainImage} alt="#" class="mx-auto">
    </div>
    <div class=" mx-auto relative p-4 py-5">
        <img src={subImage} alt="#" class="mx-auto">
    </div>
    <div class="pb-10">
        <p>
            {desc}
        </p>
    </div>
    <Button title={"SELENGKAPNYA"} classColor={"bg-gradient-to-r from-yellow-500 to-yellow-400"} classTextColor={"text-white"}/>
</div>


<style>
    p{
        font-size:14px !important
    }    
</style>