<script setup lang="ts">
import HeroBanner from './components/hero-banner.vue';
import ContributeBanner from './components/contribute-banner.vue';
import AboutUsBanner from './components/about-us-banner.vue';
import SponsorsBanner from './components/sponsors-banner.vue';
import DonateBanner from './components/donate-banner.vue';
import ContactBanner from './components/contact-banner.vue';

let my_const = 2;

</script>
<template>
  <div>
    <hero-banner/>
    <contribute-banner id="contribute"/>
    <donate-banner id="donate"/>
    <about-us-banner id="about-us" />
    <contact-banner id="contact"/>
    <sponsors-banner />
  </div>
</template>
