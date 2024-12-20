<template>
<div class="py-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="px-6 py-16 shadow-3xl rounded-xl sm:rounded-3xl sm:px-16 flex flex-col gap-y-4 items-center lg:gap-x-20 lg:px-24 bg-gradient-to-tr from-primary-600 to-primary-400">
    <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-2xl">
      Follow us!
    </h2>
    <div class="flex w-full justify-center gap-x-6 lg:gap-x-8">
      <a
        href="https://x.com/MostroP2P"
        target="_blank"
        rel="noopener noreferrer"
         class="contact-link"

      >
        <img class="h-8 lg:h-10" src="~/assets/icons/x.svg" alt="X">
      </a>

      <a
        href="https://primal.net/p/npub1m0str0d7z2ww8rdh20t2n9lx520xjwhaq24p68umqp06wwrwtsnqen40un"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link"
      >
        <img class="h-8 lg:h-10" src="~/assets/icons/nostr.svg" alt="Nostr">
      </a>

      <a
        href="https://t.me/mostrop2p"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link"
      >
        <img class="h-8 lg:h-10" src="~/assets/icons/telegram.svg" alt="Telegram">
      </a>
    </div>
  </div>
</div>
</template>
<style>
 .contact-link {
   @apply h-12 lg:h-16 rounded-full bg-secondary-400 hover:bg-secondary-300 shadow-lg flex aspect-square items-center justify-center;
}
</style>
