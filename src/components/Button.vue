<template>
  <button
    class="px-4 py-2"
    :class="item.btnClass"
    v-for="item in items"
    :key="item.label"
  >
    {{ item.label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
