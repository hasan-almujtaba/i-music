<script
  setup
  lang="ts"
>
interface Props {
  to?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}

const variant = {
  primary: 'bg-purple-400 text-white',
  secondary: 'bg-slate-200 text-[#64748b]',
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  type: 'button',
  variant: 'primary',
})

const classes = computed(() => [
  'inline-flex items-center justify-center rounded-[20px] h-[40px] text-xs font-medium',
  variant[props.variant],
])
</script>

<template>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    :class="classes"
  >
    <slot />
  </RouterLink>

  <button
    v-else
    :class="classes"
    :type="type"
  >
    <slot />
  </button>
</template>
