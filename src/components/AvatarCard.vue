<template>
  <article class="text-left grid grid-cols-2 md:grid-cols-4 gap-4">
    <article
      class="border-2 border-gray-200 text-center space-y-4"
      v-for="(item, index) in items"
      :key="index"
    >
      <!--   -->
      <div class="flex justify-center">
        <img :src="item.src" :alt="item.alt" class="w-1/2 h-1/2" />
      </div>
      <h3 class="font-semibold text-2xl">
        {{ item.name }}
      </h3>
      <span class="inline-block bg-gray-500 text-white px-2 py-1 rounded">
        followers:4
      </span>
      <br />
      <Button :items="button" />
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
  },
  data() {
    return {
      button: [
        {
          btnClass: "text-white bg-blue-800 rounded",
          label: "Follower",
        },
      ],
    };
  },
};
</script>
