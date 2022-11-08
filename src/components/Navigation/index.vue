<script lang="ts">
export default {
  name: 'Navigation',
}
</script>

<script
  setup
  lang="ts"
>
const searchOverlay = ref(false)
</script>

<template>
  <nav
    class="h-[60px] bg-gradient-to-r from-purple-700 to-purple-500 text-white py-[22px] px-[15px]"
  >
    <div class="flex justify-between">
      <button>
        <IMdiMenu />
      </button>

      <RouterLink to="/">
        <img
          src="/assets/ngmusic.svg"
          alt="ngmusic"
          class="w-[73px] h-[16px]"
        />
      </RouterLink>

      <button @click="searchOverlay = true">
        <IMdiMagnify />
      </button>
    </div>

    <SearchDialog v-model="searchOverlay" />
  </nav>
</template>
