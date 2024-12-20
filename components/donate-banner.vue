<template>
<div class="py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-3xl sm:rounded-3xl sm:px-16 md:pt-24 flex flex-col-reverse lg:flex-row lg:gap-x-20 lg:px-24 lg:pt-0 bg-primary-500">
      <div class="w-full justify-center flex">
        <img class="h-96 self-center" src="~/assets/images/mobile-mockup.png" alt="App screenshot" >
      </div>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#5c951b" />
            <stop offset="1" stop-color="#334d1a" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:pt-16 lg:text-left">
        <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Help us keep funding Mostro projects
        </h2>
        <p class="mt-6 text-pretty font-light text-lg/8 text-white">
          This project's development has been made possible thanks to the incredible support from the community.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <base-button
            href="https://geyser.fund/project/mostro"
            theme="secondary"
            label="Donate today"
          >
            <template #icon>
              <span aria-hidden="true">&rarr;</span>
            </template>
          </base-button>
        </div>
      </div>
    </div>
</div>
</template>
