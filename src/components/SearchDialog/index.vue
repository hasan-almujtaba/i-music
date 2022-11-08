<script
  setup
  lang="ts"
>
interface Props {
  modelValue?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <TransitionRoot
    :show="props.modelValue"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog class="absolute">
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
        as="template"
      >
        <div
          class="fixed inset-0 bg-black/70"
          aria-hidden="true"
        />
      </TransitionChild>

      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
        as="template"
      >
        <div class="fixed inset-0 flex items-center justify-center p-4">
          <button
            class="absolute right-5 top-5 text-white"
            @click="close"
          >
            <IMdiClose />
          </button>

          <DialogPanel class="w-full max-w-sm rounded">
            <h3 class="font-bold text-xl text-center text-white mb-[31px]">
              Search
            </h3>

            <SearchForm @submitted="close" />
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
