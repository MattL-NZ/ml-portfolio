<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";
</script>

<!-- USER INTERFACE -->
<nav class="navbar default-margin">
  <a href="/" class="logo">ML</a>
  <div class="navbar-links">
    <a href="/#about-me">About</a>
    <a href="/#projects">Projects</a>
    <Button className="nav-bar-button" onclick={() => goto("/#contact-form")}>
      Contact
    </Button>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }

  .logo {
    font-size: 35px;
    font-weight: bold;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>
