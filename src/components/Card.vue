<template>
  <article class="text-left grid grid-cols-1 md:grid-cols-3 gap-4">
    <article
      class="border-2 border-gray-200"
      v-for="(item, index) in items"
      :key="index"
    >
      <img :src="item.src" :alt="item.alt" class="w-full" />
      <div class="px-4 pb-4">
        <h2 class="text-blue-800 text-3xl mb-2">{{ item.name }}</h2>
        <span class="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm">
          {{ item.catagory }}
        </span>
        <p class="mt-2">
          {{ item.info }}
        </p>
        <button
          class="bg-blue-700 hover:bg-blue-800 px-3 py-1 text-white rounded mt-2"
        >
          +add
        </button>
      </div>
    </article>
  </article>
</template>
<script>
export default {
  name: "Card",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
