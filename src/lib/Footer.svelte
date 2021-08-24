<script>
    import FloatingSection from "../components/floating/floatingSection.svelte";
    import { Envelope , Phone , Linkedin } from "svelte-bootstrap-icons"
</script>

<section>
    <div class="bg-kp-blue text-white text-xs p-10">
        <div class="breadcumb pb-10">Home /</div>
        <div class="contact leading-4">
            <h4 class="text-lg font-bold pb-4">Kelas Pintar Indonesia</h4>
            <p class="text-xs font-light pb-4">
                Satrio Tower Building 18th floor, Kuningan
            </p>
            <div class="flex text-xs ">
                <span class="px-2 flex" ><Envelope/>info@kelaspintar.id</span>
                <span class="px-2 flex"><Phone/> 021 4040 3999</span>
            </div>
            <div class="flex">
                <span><Linkedin/></span>
            </div>
        </div>

    </div>
</section>
<FloatingSection/>