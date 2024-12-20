<template>
  <div class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="text-base/7 font-semibold text-primary-500">
          About Mostro
        </p>
        <div class="flex gap-4 items-center justify-center">
          <h2 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-tertiary-900 sm:text-5xl lg:text-balance">
            Why Mostro impacts
          </h2>
          <img
            class="size-14"
            src="~/assets/icons/mostro-green.svg"
          >
        </div>
        <p class="mt-6 text-lg/8 text-tertiary-600">
          Mostro facilitates peer-to-peer Bitcoin exchanges through the Lightning Network on Nostr, offering a private, decentralized, and censorship-resistant platform.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div class="relative pl-16">
            <dt class="text-base/7 font-semibold text-tertiary-900">
              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary-500">
                <img
                  class="size-6"
                  src="~/assets/icons/detective.svg"
                >
              </div>
              No KYC
            </dt>
            <dd class="mt-2 text-base/7 text-tertiary-600 font-light">
              The project supports Bitcoin adoption by enabling buying and selling without compromising personal data.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base/7 font-semibold text-tertiary-900">
              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary-500">
                <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              Censorship resistant
            </dt>
            <dd class="mt-2 text-base/7 text-tertiary-600 font-light">
              Mostro manages communications on top of Nostr, creating a decentralized platform that enhances resistance to censorship and surveillance.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base/7 font-semibold text-tertiary-900">
              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary-500">
                <img
                  class="size-6"
                  src="~/assets/icons/handshake.svg"
                >
              </div>
              P2P
            </dt>
            <dd class="mt-2 text-base/7 text-tertiary-600 font-light">
              Mostro enables secure p2p Bitcoin exchanges via Lightning escrow, holding Sats briefly to minimize risk for both parties.
            </dd>
          </div>
          <div class="relative pl-16">
            <dt class="text-base/7 font-semibold text-tertiary-900">
              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary-500">
                <img
                  class="size-6"
                  src="~/assets/icons/giving-hand.svg"
                >
              </div>
              Open source
            </dt>
            <dd class="mt-2 text-base/7 text-tertiary-600 font-light">
              Mostro is an open-source project, inviting community collaboration to enhance secure, decentralized Bitcoin exchanges.
            </dd>
          </div>
        </dl>
      </div>
      <div class="flex flex-col gap-y-4 items-center justify-center pt-8 md:pt-16">
        <p class="text-tertiary-600 font-light">
          Interested? Want to learn more?
        </p>
        <base-button
          href="https://mostro.network/"
          theme="secondary"
          label="Visit the Mostro website"
        >
        <template #icon>
          <span aria-hidden="true">&rarr;</span>
        </template>
      </base-button>
      </div>
    </div>
  </div>
</template>
