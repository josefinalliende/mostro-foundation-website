<script setup lang="ts">
import HeroBannerHeader from './hero-banner-header.vue';
import { smoothScroll } from '../utils/scroll'

</script>
<template>
  <div class="shadow-xl bg-gradient-to-b from-primary-400 to-primary-600">
    <hero-banner-header />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 lg:py-36">
        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Mostro foundation
          </h1>
          <p class="mt-8 font-medium text-lg text-white sm:text-xl/8">
            We fund mostro proyects and decentralized bitcoin p2p tools
          </p>
          <div class="mt-10 flex items-center justify-center gap-6 flex-col  md:flex-row">
            <button
              class="font-semibold bg-secondary-400 hover:bg-secondary-500 shadow-lg  text-tertiary-700 px-10 py-2 rounded-full transition-all duration-400 ease-in-out"
              @click="smoothScroll('#contribute')"
            >
              Learn more
              <span aria-hidden="true">&darr;</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
