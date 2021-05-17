<template>
  <div v-for="item in items" :key="item.id" class="border border-gray-200">
    <div class="border border-gray-200 bg-gray-300 px-4 py-2">
      {{ item.label }}
    </div>
    <div class="p-4 flex space-x-6">
      <div v-for="image in item.images" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="w-20 h-20" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
