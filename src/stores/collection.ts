import { acceptHMRUpdate, defineStore } from 'pinia'
import api from '~/apis/index'

interface Collection {
  artistName: string
  artworkUrl100: string
  trackPrice: string
  primaryGenreName: string
  trackName: string
}

export const useCollection = defineStore('collection', () => {
  const collections = ref<Collection[]>([])

  const search = async (query: string) => {
    const { data } = await api.get(`/search?term=${query}&limit=10&entity=song`)
    collections.value = data.results
  }

  return {
    collections,
    search,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCollection, import.meta.hot))
