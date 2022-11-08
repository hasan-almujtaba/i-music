<script
  setup
  lang="ts"
>
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="pt-[256px] px-[30px]">
    <img
      src="/assets/logo.svg"
      alt="Logo"
      class="mx-auto w-[73px] h-[85px] mb-[220px]"
    />

    <div class="text-center md:space-x-2">
      <SearchForm />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: landing
</route>
