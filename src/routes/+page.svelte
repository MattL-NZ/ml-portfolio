<script>
  import AboutMeSection from "$components/Sections/AboutMeSection.svelte";
  import HeroSection from "$components/Sections/HeroSection.svelte";
  import MyWorkSection from "$components/Sections/MyWorkSection.svelte";

  const { data } = $props();
  let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
