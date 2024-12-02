<script lang="ts">
  import Footer from "$components/Footer.svelte";
  import Header from "$components/Header.svelte";
  import "../app.css";
  let { children } = $props();
</script>

<div class="main-container">
  <Header />
  {@render children()}
</div>
<Footer />

<style>
  .main-container {
    padding: 0% 5%;
  }

  @media (min-width: 768px) {
    .main-container {
      padding: 0% 10%;
    }
  }

  @media (min-width: 1024px) {
    .main-container {
      padding: 0% 15%;
    }
  }

  @media (min-width: 1440px) {
    .main-container {
      padding: 0% 15%;
    }
  }
</style>
