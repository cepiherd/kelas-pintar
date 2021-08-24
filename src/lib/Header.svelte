<script>
    import Icon from 'svelte-awesome/components/Icon.svelte'
    import { bars } from 'svelte-awesome/icons';
    import ToogleMenu from '../components/MenuBar/ToggleMenu.svelte'
    import { fade } from 'svelte/transition'
    const MenuLists = [
      {
        title: 'Solusi Murid',
        icon: '',
        parent: 1,
        child: [
          { title: 'Kelas Pintar Regular' },
          { title: 'Kelas Pintar Plus' },
          { title: 'TANYA' },
          { title: 'SOAL' },
          { title: 'SOAL Plus' },
          { title: 'Android TV' },
          { title: 'GURU' },
          { title: 'KOIN' },
        ],
      },
      { title: 'Solusi Guru', icon: '', parent: 0, child: [{}] },
      { title: 'Solusi Orang Tua', icon: '', parent: 0, child: [{}] },
      { title: 'Blog', icon: '', parent: 0, child: [{}] },
      { title: 'Event & Promo', icon: '', parent: 0, child: [{}] },
      { title: 'Masuk | Daftar', icon: '', parent: 0, child: [{}] },
      { title: 'Pencarian', icon: '', parent: 0, child: [{}] },
      { title: 'Keranjang', icon: '', parent: 0, child: [{}] },
      {
        title: 'BERLANGGANAN',
        icon: '',
        parent: 1,
        child: [
          { title: 'Paket Berlangganan Online' },
          { title: 'Voucher Aktivasi' },
          { title: 'Quick Pay' },
        ],
      },
    ]
    
    let handleOpenMenu = false
    let defaultIndex = 0
    let x , y

    let isScroll = false
      $: if(y > 150){
          isScroll = true
      } else {
          isScroll = false
      }

</script>
<svelte:window bind:scrollY={y}/>

<div class={`w-full border-b-2   bg-transparent ${isScroll === true ? "fixed bg-white text-black z-10	" : "text-white"}`} transition:fade>
        <div class="container mx-auto flex ">
        <button class="px-3 py-1 block sm:hidden md:hidden" on:click={()=> handleOpenMenu = !handleOpenMenu}>
            <Icon data={bars} scale={1}/>
        </button> 
        {#if isScroll === true}
        <img src="//cdn.extramarks.id/web/images/website_v7/kelas-pintar-logo.png" alt="kelas pintar" class="h-8 px-4 self-center "> 
        {:else}
        <img src="//cdn.extramarks.id/web/images/website_v7/kelas-pintar-white-logo.png" alt="kelas pintar" class="h-8 px-4 self-center "> 
        {/if}
        
        
        <div class="hidden md:flex sm:flex  sm:block md:block">
            {#each MenuLists as item}
            <div class={`px-3 p-8 text-xs self-center ${item.title.toLowerCase() === "berlangganan" ? "bg-white text-yellow-600" : ""}`}>
                {item.title}   
            </div>
            {/each}
        </div>
    </div>
</div>

<ToogleMenu isMenuShow={handleOpenMenu} isShowChildIndex={defaultIndex}/>