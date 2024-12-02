<script>
  import Header from "$components/Header.svelte";
  import AboutMeSection from "$components/Sections/AboutMeSection.svelte";
  import ContactSection from "$components/Sections/ContactSection.svelte";
  import HeroSection from "$components/Sections/HeroSection.svelte";
  import MyWorkSection from "$components/Sections/MyWorkSection.svelte";
  import SkillsSection from "$components/Sections/SkillsSection.svelte";

  const { data } = $props();
  let { workExperience, projects, skills } = data;
  $inspect(skills);
</script>

<main>
  <HeroSection />
  <AboutMeSection {workExperience} />
  <MyWorkSection {projects} />
  <SkillsSection {skills} />
  <ContactSection />
</main>
