<script>
    import { slide } from 'svelte/transition'
    import Icon from 'svelte-awesome/components/Icon.svelte'
    import { chevronDown } from 'svelte-awesome/icons'
    export let isMenuShow = true
    const MenuLists = [
      { title: 'Keranjang Beranda', icon: '', parent: 0, child: [{}] },
      { title: 'Pencarian', icon: '', parent: 0, child: [{}] },
      {
        title: 'Berlangganan',
        icon: '',
        parent: 1,
        child: [
          { title: 'Paket Berlangganan Online' },
          { title: 'Voucher Aktivasi' },
          { title: 'Quick Pay' },
        ],
      },
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
    ]
    export let isShowChildIndex = 0
  </script>
  
  <style>
    .selected {
      display: block;
    }
  </style>
  
  {#if isMenuShow == true}
    <div class="pt-2 bg-kp-blue text-white text-xs absolute w-full" transition:slide>
      {#each MenuLists as menu, index}
        <div class="px-3 pl-8 py-3 flex">
          <span>{menu.title}</span>
          {#if menu.parent == 1}
            <span class="px-2 text-white" on:click={()=> isShowChildIndex = index}>
              <Icon data={chevronDown} />
            </span>
          {/if}
        </div>
        <div class:selected="{isShowChildIndex === index}" class="hidden">
          {#each menu.child as item}
            {#if item.title !== undefined}
              <div class="py-3 ml-16" transition:slide>{item.title}</div>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  {/if}
  