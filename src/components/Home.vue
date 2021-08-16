<template>
  <header>
    <div class="inner">
      {{ title }}
    </div>
  </header>
  <main class="container w-80 max-w-4xl p-5 pb-0 ">
    <div class="bg-white rounded mb-5 flex gap-4 overflow-hidden py-2 px-3">
      <input type="text" class="focus:text-blue-400 col-span-10" placeholder="add todo item">
      <button type="button" class="flex-2 bg-gradient-to-r from-blue-400/70 to-purple-400/70 rounded p-2 shadow-indigo transform active:ring-2 active:ring-indigo-700/50 hover:scale-110">
        <PlusSmIcon class="w-5 mx-auto text-white"/>
      </button>
    </div>
    <ul class="-mx-5 divide-y divide-gray-100 bg-white">
      <li class="group flex gap-4 overflow-hidden" v-for="(item, key) in 3" :key="key">
        <p role="button" class="flex-auto p-5 flex items-center"
          @click="selectItem = key">
          <label role="button" class="bg-gradient-to-r from-blue-400/70 to-purple-400/70 relative">
            <span class="block w-4 h-4 bg-white rounded-full absolute left-1 top-1"
            v-show="selectItem !== key"></span>
            <CheckCircleIcon class="w-6 mix-blend-lighten bg-white text-black"/>
          </label>
          <span class="ml-2">todo list item</span>
        </p>
        <div class="btns pr-3.5 flex-4 flex flex-row-reverse translate-x-full opacity-0  group-hover:translate-x-0 group-hover:opacity-100">
          <button type="button"
            class="px-1.5 text-red-400 hover:text-red-500">
            <TrashIcon class="w-5 mx-auto"/>
          </button>
          <button type="button"
            class="px-1.5 text-blue-400 hover:text-blue-500">
            <PencilAltIcon class="w-5 mx-auto"/>
          </button>
        </div>
      </li>
      <li class="p-6 text-sm flex justify-around">
        <button type="button" class="tabs active">
          <span>All</span>
          <small>3</small>
        </button>
        <button type="button" class="tabs">
          <span>Active</span>
          <small>3</small>
        </button>
        <button type="button" class="tabs">
          <span>Completed</span>
          <small>3</small>
        </button>
        <button type="button"
          class="px-1 border-b-2 border-transparent
          text-red-500
          hover:text-red-500
          hover:border-red-500">
          Clear Completed
          </button>
      </li>
    </ul>
  </main>
</template>

<script>
import { ref } from 'vue'
import { PlusSmIcon, CheckCircleIcon } from '@heroicons/vue/outline'
import { PencilAltIcon, TrashIcon } from '@heroicons/vue/solid'
export default {
  props: {
    title: String
  },
  components: { PlusSmIcon, TrashIcon, PencilAltIcon, CheckCircleIcon },
  setup() {
    const selectItem = ref('')
    return {
      selectItem
    }
  }
}

</script>

<style lang="sass">
body
  @apply bg-gray-100 min-h-screen tracking-wide font-extralight font-sans pb-20
header
  @apply min-h-40 bg-no-repeat bg-header-image bg-cover bg-center
input
  @apply font-extralight font-sans bg-transparent w-full focus:outline-none
button, .btns
  @apply transition-all duration-300 ease-out
.inner
  @apply min-h-40 bg-gradient-to-r from-blue-400/70 to-purple-400/70 flex items-center justify-center text-4xl uppercase text-white font-extralight tracking-widest
.container
  margin-top: -10vh
  @apply mx-auto backdrop-blur shadow-2xl border border-opacity-30 rounded 
.tabs
  @apply flex
  span
    @apply block px-1 border-b-2 border-transparent hover:text-indigo-700 hover:border-indigo-700 duration-150
  small
    @apply w-5 h-5 rounded-full bg-indigo-100 text-xs flex items-center justify-center text-indigo-700
  &.active span
    @apply text-indigo-700 border-indigo-700
</style>
