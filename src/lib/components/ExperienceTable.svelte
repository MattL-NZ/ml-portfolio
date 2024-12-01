<script lang="ts">
  import type { DevExperience } from "$cms/sanity.types";

  interface ExperienceTableProps {
    workExperience: DevExperience[];
  }

  const { workExperience }: ExperienceTableProps = $props();
</script>

<section class="default-margin work-experience mt-m">
  <ul class="work-experience-list">
    {#each workExperience as experience}
      <li class="work-item">
        <article>
          <h3 class="semi-bold mb-xs">{experience.jobTitle}</h3>
          <div class="company-and-date">
            <p>{experience.company}</p>
            <p class="dark-grey">{experience.dates}</p>
          </div>
        </article>
      </li>
    {/each}
  </ul>
  <h2 class="headline">Past Work <br /> Experiences</h2>
</section>

<style>
  .work-experience {
    display: flex;
    justify-content: space-between;
  }

  .work-experience-list {
    width: 50%;
  }

  .headline {
    text-align: right;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
  }
</style>
