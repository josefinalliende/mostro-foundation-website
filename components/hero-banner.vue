<script setup lang="ts">

</script>
<template>
  <div class="shadow-xl bg-gradient-to-b from-primary-400 to-primary-600">
    <hero-banner-header />
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 lg:py-36">
        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Mostro Foundation
          </h1>
          <p class="mt-8 font-medium text-lg text-white sm:text-xl/8">
            We support Mostro developers in building peer-to-peer Bitcoin tools
          </p>
          <div class="mt-10 flex items-center justify-center gap-6 flex-col  md:flex-row">
            <base-button
              href="#contribute"
              theme="secondary"
              label="Learn more"
              scroll
            >
              <template #icon>
                <span aria-hidden="true">&darr;</span>
              </template>
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
