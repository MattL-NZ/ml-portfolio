<script>
  import AboutMeSection from "$components/Sections/AboutMeSection.svelte";
  import HeroSection from "$components/Sections/HeroSection.svelte";

  const { data } = $props();
  let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
