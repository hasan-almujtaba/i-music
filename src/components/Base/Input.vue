<script
  setup
  lang="ts"
>
interface Props {
  placeholder?: string
  modelValue?: string
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    type="text"
    :placeholder="props.placeholder"
    class="rounded-[20px] h-[40px] placeholder:text-center text-[#64748b] placeholder:font-medium p-4"
    :value="modelValue"
    @input="updateValue"
  />
</template>
