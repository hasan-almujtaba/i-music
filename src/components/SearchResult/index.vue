<script lang="ts">
export default {
  name: 'SearchResult',
}
</script>

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
  <div>
    <TrackCard
      v-for="(item, i) in store.collections"
      v-bind="item"
      :key="i"
    />

    <div class="text-center">
      <Button
        class="mb-7 mt-5 mx-auto w-[120px]"
        variant="secondary"
      >
        Load More
      </Button>
    </div>
  </div>
</template>
