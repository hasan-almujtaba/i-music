<script lang="ts">
export default {
  name: 'TrackCard',
}
</script>

<script
  setup
  lang="ts"
>
interface Props {
  artistName: string
  artworkUrl100: string
  trackPrice: string | number
  primaryGenreName: string
  trackName: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="p-3 flex gap-x-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-[10px]"
  >
    <img
      :src="props.artworkUrl100"
      class="rounded-[10px] w-[100px] h-[100px]"
    />

    <div class="flex flex-col flex-1">
      <div>
        <div class="text-[10px] font-medium text-[#334155] mb-[5px]">
          {{ props.artistName }}
        </div>
        <h2 class="text-sm text-[#334155] font-bold">{{ props.trackName }}</h2>
      </div>

      <div class="flex-grow"></div>

      <div class="flex justify-between items-center">
        <Chip>{{ props.primaryGenreName }}</Chip>

        <div class="flex gap-x-1.5 items-center">
          <img
            src="/assets/currency-dollar.svg"
            alt="Currency"
            class="w-4 h-4"
          />

          <span class="text-currency text-[12px] font-bold">
            {{ props.trackPrice }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
