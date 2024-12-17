<script setup lang="ts">
import { computed } from 'vue';
import { smoothScroll } from '@/utils/scroll';

type Theme = 'primary' | 'secondary' | 'tertiary';

type Props = {
  href: string;
  theme: Theme;
  label: string;
  scroll?: boolean;
}

type ThemeClasses = {
  [key in Theme]: string;
}

const themeClasses : ThemeClasses = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-secondary-400 hover:bg-secondary-500 text-tertiary-700',
  tertiary: 'bg-white border border-primary-700 hover:bg-primary-700/10 text-primary-700',
};

const props = withDefaults(defineProps<Props>(), {
  scroll: false,
});

const buttonStyles = computed(() => {
  return ([
    "flex text-center items-center gap-2 font-semibold shadow-lg px-10 py-2 rounded-full transition-all duration-400 ease-in-out",
    themeClasses[props.theme],
  ]);
});
</script>

<template>
  <a
    v-if="scroll"
    :class="buttonStyles"
    :href="href"
    @click.prevent="smoothScroll(href)"
  >
    {{ label }}
    <slot name="icon" />
  </a>
  <a
    v-else
    :class="buttonStyles"
    :href="href"
  >
    {{ label }}
    <slot name="icon" />
  </a>
</template>
  
