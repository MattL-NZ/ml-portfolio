<script lang="ts">
  import type { Snippet } from "svelte";
  interface ButtonProps {
    children: Snippet;
    onclick?: ((e: MouseEvent) => void) | (() => void);
    className?: string;
  }
  let { children, onclick, className, ...props }: ButtonProps = $props();
</script>

<div class="button-wrapper">
  <div class="particles">
    {#each Array(75) as _, i}
      <span class="particle" style="--i:{i}"></span>
    {/each}
  </div>
  <button class="btn {className}" {...props} {onclick}>
    <span class="btn-content">
      {@render children()}
    </span>
    <span class="rainbow-border"></span>
  </button>
</div>

<style>
  .button-wrapper {
    position: relative;
    display: inline-block;
  }

  .btn {
    font-family: "Inter Tight", sans-serif;
    font-weight: 500;
    font-size: 24px;
    padding: 14px 40px;
    border-radius: 10px;
    position: relative;
    border: none;
    cursor: pointer;
    background: black;
    transition: all 0.3s ease;
    color: white;
    isolation: isolate;
    z-index: 2;
  }

  .rainbow-border {
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: 12px;
    background: black;
    transition: all 0.3s ease;
  }

  .rainbow-border::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 14px;
    background: linear-gradient(
      90deg,
      #ff4d00,
      #ff9100,
      #ff5500,
      #ff2200,
      #ff4d00
    );
    background-size: 200% 100%;
    animation: moveGradient 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: saturate(0.9) brightness(0.95);
  }

  .btn:hover .rainbow-border::before {
    opacity: 1;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .btn:hover .rainbow-border {
    background: transparent;
  }

  .btn:active {
    transform: translateY(1px);
  }

  /* Enhanced Particle effects */
  .particles {
    position: absolute;
    inset: -100px;
    z-index: 1;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    will-change: transform;
    left: 50%;
    top: 50%;
  }

  .particle:nth-child(5n) {
    background: #ff4d00;
    width: 4px;
    height: 4px;
    animation: particleFloat1 2.5s ease-in-out infinite;
  }

  .particle:nth-child(5n + 1) {
    background: #ff9100;
    width: 3px;
    height: 3px;
    animation: particleFloat2 3s ease-in-out infinite;
  }

  .particle:nth-child(5n + 2) {
    background: #ff5500;
    width: 5px;
    height: 5px;
    animation: particleFloat3 2.7s ease-in-out infinite;
  }

  .particle:nth-child(5n + 3) {
    background: #ff00c3;
    width: 2px;
    height: 2px;
    animation: particleFloat4 2.3s ease-in-out infinite;
  }

  .particle:nth-child(5n + 4) {
    background: #ff2200;
    width: 3.5px;
    height: 3.5px;
    animation: particleFloat5 2.9s ease-in-out infinite;
  }

  .button-wrapper:hover .particle {
    opacity: 0.6;
    animation-delay: calc(0.07s * var(--i));
  }

  @keyframes particleFloat1 {
    0%,
    100% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 60px),
        calc(sin(calc(var(--i) * 5deg)) * 60px)
      );
    }
    50% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 90px),
        calc(sin(calc(var(--i) * 5deg)) * 90px)
      );
    }
  }

  @keyframes particleFloat2 {
    0%,
    100% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 40px),
        calc(sin(calc(var(--i) * 5deg)) * 40px)
      );
    }
    50% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 100px),
        calc(sin(calc(var(--i) * 5deg)) * 100px)
      );
    }
  }

  @keyframes particleFloat3 {
    0%,
    100% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 70px),
        calc(sin(calc(var(--i) * 5deg)) * 70px)
      );
    }
    50% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 110px),
        calc(sin(calc(var(--i) * 5deg)) * 110px)
      );
    }
  }

  @keyframes particleFloat4 {
    0%,
    100% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 50px),
        calc(sin(calc(var(--i) * 5deg)) * 50px)
      );
    }
    50% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 80px),
        calc(sin(calc(var(--i) * 5deg)) * 80px)
      );
    }
  }

  @keyframes particleFloat5 {
    0%,
    100% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 65px),
        calc(sin(calc(var(--i) * 5deg)) * 65px)
      );
    }
    50% {
      transform: translate(
        calc(cos(calc(var(--i) * 5deg)) * 95px),
        calc(sin(calc(var(--i) * 5deg)) * 95px)
      );
    }
  }

  @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  .btn:hover {
    box-shadow:
      0 0 15px rgba(255, 0, 34, 0.2),
      0 0 25px rgba(255, 0, 4, 0.2),
      0 0 35px rgba(255, 0, 0, 0.2);
    animation: glowPulse 3s infinite;
  }

  @keyframes glowPulse {
    0%,
    100% {
      box-shadow:
        0 0 15px rgba(255, 0, 0, 0.2),
        0 0 25px rgba(255, 0, 0, 0.2),
        0 0 35px rgba(255, 0, 0, 0.2);
    }
    50% {
      box-shadow:
        0 0 20px rgba(255, 0, 0, 0.3),
        0 0 30px rgba(255, 0, 0, 0.3),
        0 0 40px rgba(255, 0, 0, 0.3);
    }
  }

  .nav-bar {
    padding: 10px 24px;
    font-size: 20px;
  }
</style>
