<script lang="ts">
  import SectionHeadline from "$components/SectionHeadline.svelte";
  import image from "$assets/matt-modified.jpg";
  import Button from "$components/Button.svelte";
  import { goto } from "$app/navigation";
  import ExperienceTable from "$components/ExperienceTable.svelte";

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
  }

  const { workExperience }: AboutMeProps = $props();
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName="about-me">About me</SectionHeadline>
  <div class="content-container mt-m default-margin">
    <img class="image" src={image} alt="Matt" />
    <div class="text">
      <p class="text-l">
        Hey, I'm Matt – a software development manager who's passionate about
        building high-performing teams and crafting exceptional digital
        experiences.
      </p>
      <p class="text-l">
        With over a decade in tech, I've had the privilege of leading
        engineering teams, architecting web and mobile solutions, and helping
        talented developers grow into their full potential.
      </p>
      <p class="mb-m text-l">
        I thrive on fostering environments where innovation meets pragmatism. My
        approach centers on open collaboration, clear communication, and
        continuous improvement – both for our products and our processes.
      </p>
      <Button onclick={() => goto("/#contact-form")}
        >Let's talk about your project</Button
      >
    </div>
  </div>
  <ExperienceTable {workExperience} />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }

  .text-l {
    font-size: 20px;
  }
</style>
