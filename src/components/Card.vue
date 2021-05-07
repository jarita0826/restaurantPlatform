<template>
  <article class="text-left">
    <article
      class="border-2 border-gray-200"
      v-for="(item, index) in items"
      :key="index"
      :class="topClass"
    >
      <img :src="item.src" :alt="item.alt" :class="imgClass" />
      <div class="px-4" :class="textClass">
        <h2 class="text-blue-800 text-3xl mb-2">{{ item.name }}</h2>
        <span class="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm">
          {{ item.catagory }}
        </span>
        <p class="mt-2">
          {{ item.info }}
        </p>
        <div class="space-x-2 flex">
          <Button :buttons="buttons" />
        </div>
      </div>
    </article>
  </article>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    buttons: {
      type: Array,
      default: () => [],
    },
    imgClass: {
      type: Array,
      default: () => [],
    },
    textClass: {
      type: Array,
      default: () => [],
    },
    topClass: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
