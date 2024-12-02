<script lang="ts">
  import SectionHeadline from "$components/SectionHeadline.svelte";

  interface SkillsSectionProps {
    skills: Skill[];
  }

  let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
  <SectionHeadline sectionName="skills">Skills</SectionHeadline>
  <div class="wrapper default-margin">
    <div class="skills-container">
      {#each skills as skill}
        <div class="skill">
          <i class={skill.iconClass}></i>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-container {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 16px;
    column-gap: 10px;
  }

  i {
    font-size: 80px;
    color: black;
  }
</style>
