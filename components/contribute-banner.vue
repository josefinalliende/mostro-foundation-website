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
          <a href="#" class="text-primary-600 underline">
            Mostro
          </a>
        </span>
        a decentralized payment tool built on top of Lightning and Nostr.
      </p>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="text-base/7 flex-col flex md:flex-row items-center justify-center md:justify-start gap-4">
        <a
          class="bg-white flex text-center px-10 items-center gap-2 font-semibold border border-primary-700 hover:bg-primary-700/10 shadow-lg text-primary-700 py-2 rounded-full transition-all duration-400 ease-in-out"
          href="https://github.com/MostroP2P"
        >
          <span> Contribute </span>
          <img class="h-5" src="~/assets/icons/github.svg" />
        </a>
        <a
          class="font-semibold bg-primary-500 hover:bg-primary-600 shadow-lg  text-white px-10 py-2 rounded-full transition-all duration-400 ease-in-out"
          href="https://geyser.fund/project/mostro"
        >
          Support us
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
    </div>
    <div class="hidden lg:flex w-full items-center justify-center">
      <img class="h-80 self-center" src="~/assets/images/developer.png" />
    </div>
  </div>
</div>
</template>
