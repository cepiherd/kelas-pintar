<script>
    import CardLangganan from '../langganan/CardLangganan.svelte'
    let listLangganan = [
        {via : "Melalui Merchant/Outlet",product:"Voucher Aktivasi",img : "https://cdn.extramarks.id/web/images/website_v7/kp-activate-voucher.png" , desc:"Yuk, kunjungi Merchant/Outlet untukmendapatkan Produk Kelas Pintar",btnValue:"BELI VOUCHER"},
        {via : "Melalui Web/Apps",product:"Paket Berlangganan Online",img : "https://cdn.extramarks.id/web/images/website_v7/kp-buy-online.png" , desc:"Males keluar rumah? Produk Kelas Pintar juga bisa dibeli secara online",btnValue:"PILIH PAKET"}
    ]
</script>

<div class="container mx-auto text-center">
    <h1 class="text-kp-subtitle py-10">Yuk Berlangganan!</h1>
    <div class="flex flex-wrap md:flex-nowrap sm:flex-nowrap justify-center">
        {#each listLangganan as item}
            <CardLangganan via={item.via} product={item.product} img={item.img} desc={item.desc} btnValue={item.btnValue}/>
        {/each}
    </div>
</div>