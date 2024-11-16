<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$components/Button.svelte";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello, I'm Matt</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a software dev manager</h1>
  <h1 class="dark-grey custom-underline">
    leading teams<span class="black no-underline">&nbsp;and creating</span>
  </h1>
  <h1 class="dark-grey custom-underline">
    web<span class="black no-underline">&nbsp;and&nbsp;</span>mobile<span
      class="black no-underline">&nbsp;experiences.</span
    >
  </h1>
  <Button {onclick}>Lets talk</Button>
</section>

<style>
  .hero-section {
    padding-top: 60px;
  }
  .custom-underline {
    text-decoration-line: underline;
    text-decoration-skip-ink: none;
  }
  span.no-underline {
    display: inline-block; /* This prevents inheritance of text-decoration */
    text-decoration: none;
  }
</style>
