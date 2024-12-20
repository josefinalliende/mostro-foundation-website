<script setup lang="ts">
import { smoothScroll } from '../utils/scroll'
</script>
<template>
  <header class="absolute inset-x-0 top-0 z-50 w-screen">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex mr-4 lg:mr-0 lg:flex-1">
          <a href="#" class="m-2">
            <span class="sr-only">
              Mostro
            </span>
            <img
              class="w-8 lg:h-12"
              src="~/assets/icons/mostro-white.svg"
              alt="Mostro"
            >
          </a>
        </div>
        <div class="flex gap-x-4 md:gap-x-12">
          <a
            class="text-sm/6 font-semibold text-white"
            href="https://geyser.fund/project/mostro"
          >
            Donate
          </a>
          <a
            class="text-sm/6 font-semibold text-white"
            href="#about-us"
            @click.prevent="smoothScroll('#about-us')"
          >
            About Mostro
          </a>
          <a
            href="#contact"
            class="text-sm/6 font-semibold text-white"
            @click.prevent="smoothScroll('#contact')"
          >
            Follow us
          </a>
        </div>
      </nav>
    </header>
</template>
