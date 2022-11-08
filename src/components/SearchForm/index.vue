<script lang="ts">
export default {
  name: 'SearchForm',
}
</script>

<script
  setup
  lang="ts"
>
const emit = defineEmits(['submitted'])

const router = useRouter()

const query = ref('')

const onFormSubmit = () => {
  if (query.value === '') {
    return alert('Please enter a search query')
  }

  emit('submitted')

  router.push({
    name: 'result',
    query: {
      q: query.value,
    },
  })
}
</script>

<template>
  <form @submit.prevent="onFormSubmit">
    <Input
      v-model="query"
      class="mb-4 w-full"
      placeholder="Artist / Album / Title"
    />

    <Button
      type="submit"
      class="mb-6 w-full"
    >
      Search
    </Button>
  </form>
</template>
