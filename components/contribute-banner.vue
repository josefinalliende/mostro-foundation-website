<template>
<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 px-19">
  <div class="flex items-center gap-8 mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-semibold tracking-tight text-tertiary-700 sm:text-5xl">
        Great software is built by skilled, well supported people
      </h2>
      <p class="mt-8 text-pretty text-lg font-medium text-tertiary-700 sm:text-xl/8">
        Our foundation is a non-profit organization supporting the builders of
        <span>
          <a href="https://mostro.network/" target="_blank" class="text-primary-600 underline">
            Mostro
          </a>
        </span>
        a decentralized payment tool built on top of Lightning and Nostr.
      </p>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="text-base/7 flex-col flex md:flex-row items-center justify-center md:justify-start gap-4">
        <base-button
          href="https://github.com/MostroP2P"
          theme="tertiary"
          label="Contribute"
        >
          <template #icon>
            <img
              class="h-5"
              src="~/assets/icons/github.svg"
              alt="GitHub logo">
            >
          </template>
        </base-button>

        <base-button
          href="https://geyser.fund/project/mostro"
          theme="primary"
          label="Support us"
        >
          <template #icon>
            <span aria-hidden="true" aria-label="Right arrow">
              &rarr;
            </span>
          </template>
        </base-button>
      </div>
    </div>
    </div>
    <div class="hidden lg:flex w-full items-center justify-center">
      <img class="h-80 self-center" src="~/assets/images/developer.png" >
    </div>
  </div>
</div>
</template>
