<script
  setup
  lang="ts"
>
import { useCollection } from '~/stores/collection'

const route = useRoute()

const store = useCollection()

onMounted(() => {
  store.search(route.query.q as string)
})
</script>

<template>
  <div class="px-[15px]">
    <SearchResult />
  </div>
</template>
