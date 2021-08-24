<script>
	import Header from './lib/Header.svelte'
	import Footer from './lib/Footer.svelte'
	import SectionIntro from './components/section/sectionIntro.svelte'
	import SectionForYou from './components/section/sectionForYou.svelte'
	import SectionSolution from './components/section/sectionSolution.svelte'
	import SectionSolutionBelajar from './components/section/sectionSolution_Belajar.svelte'
	import SectionLangganan from './components/section/sectionLangganan.svelte'
	import SectionVideoBlog from './components/section/sectionVideoBlog.svelte'
	import SectionAwards from './components/section/sectionAwards.svelte'
	import SectionBlog from './components/section/sectionBlog.svelte'
</script>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
  </style> 

<main class="font-poppins p-0">
	<div class="text-white bg-norepeat " style="background:url(https://cdn.extramarks.id/web/images/website_v7/kp-home-main-bg-static.png)">
		<Header />
		<SectionIntro/>
	</div>
		<SectionForYou/>
		<SectionSolution/> 
	<div class="bg-norepeat text-white mt-24 bg-kp-center pb-60 " style="background:url(https://cdn.extramarks.id/web/images/website_v7/kp-home-bg.png)">
		<SectionSolutionBelajar/>
		<SectionLangganan/>
	</div>
	<SectionVideoBlog/>
	<SectionAwards/>
	<SectionBlog/>
	<Footer/>
</main>

