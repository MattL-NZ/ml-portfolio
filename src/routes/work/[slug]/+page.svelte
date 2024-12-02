<script lang="ts">
  let { data } = $props();
  const { project } = data;

  function getTagFromStyle(style: ProcessedTextContent["style"]) {
    return style === "normal" ? "p" : style;
  }
</script>

<main class="default-margin mt-l">
  <h4>{project.company}</h4>
  <div class="underscore"></div>
  <h2 class="mb-s">{project.name}</h2>
  <img class="project-image" src={project.projectImageUrl} alt={project.name} />
  <div class="project-container mt-m">
    <div class="meta-data">
      <h3 class="semi-bold">Date</h3>
      <p>{project.dateAccomplished.slice(0, 7)}</p>
      <h3 class="semi-bold mt-m">Text Stack</h3>
      <ul>
        {#each project.stack as stack}
          <li>{stack}</li>
        {/each}
      </ul>
    </div>
    <div class="project-text">
      {#each project.content as block}
        {#if block.type === "text"}
          <svelte:element this={getTagFromStyle(block.style)}
            >{block.textToRender}</svelte:element
          >
        {:else}
          <img class="content-image" src={block.imageUrl} alt={project.name} />
        {/if}
      {/each}
    </div>
  </div>
</main>

<style>
  .work-page {
    padding-top: 80px;
    padding-bottom: 140px;
  }

  .project-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 10px;
  }

  .content-image {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    object-position: center top;
    border-radius: 10px;
  }

  .project-container {
    display: flex;
  }

  .meta-data {
    min-width: 200px;
  }
</style>
