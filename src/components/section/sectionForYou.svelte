<script>
  const listRecommended = [
    {
      title: 'https://www.kelaspintar.id/pembelian?category=kplus&grade=7',
      url:
        'https://cdn.extramarks.id/web/images/website_v7/kp-home-card-belajar-guru.png',
    },
    {
      title: 'https://www.kelaspintar.id/pembelian?category=kplus&grade=7',
      url:
        'https://cdn.extramarks.id/web/images/website_v7/kp-home-card-belajar-guru.png',
    },
    {
      title: 'https://www.kelaspintar.id/pembelian?category=kplus&grade=7',
      url:
        'https://cdn.extramarks.id/web/images/website_v7/kp-home-card-belajar-guru.png',
    },
    {
      title: 'https://www.kelaspintar.id/pembelian?category=kplus&grade=7',
      url:
        'https://cdn.extramarks.id/web/images/website_v7/kp-home-card-belajar-guru.png',
    },
    {
      title: 'https://www.kelaspintar.id/pembelian?category=kplus&grade=7',
      url:
        'https://cdn.extramarks.id/web/images/website_v7/kp-home-card-belajar-guru.png',
    },
    {
      title: 'https://www.kelaspintar.id/pembelian?category=kplus&grade=7',
      url:
        'https://cdn.extramarks.id/web/images/website_v7/kp-home-card-belajar-guru.png',
    },
  ]
</script>

<div class="container mx-auto text-center">
  <h1 class="py-6 text-kp-subtitle">Khusus untuk Kamu!</h1>
  <div class=" flex flex-nowrap max-w-full overflow-scroll mt-4 mb-6">
    {#each listRecommended as item}
      <!-- <a href={item.url} class=""> -->
        <img src={item.url} alt="#" class="px-2"/>
      <!-- </a> -->
    {/each}
  </div>
</div>
