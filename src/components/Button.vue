<template>
  <button
    class="px-4 py-2"
    :class="button.btnClass"
    v-for="button in buttons"
    :key="button.label"
  >
    {{ button.label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
