<template>
  <article class="border border-gray text-left">
    <!-- title -->
    <h2 class="bg-gray-200 px-4 py-4 text-xl">{{ title }}</h2>
    <div class="divide-y px-4">
      <article v-for="content in contents" :key="content.label" class="py-4">
        <div class="flex items-center space-x-4">
          <!-- label -->
          <h3 class="text-xl text-blue-700 font-semibold">
            {{ content.label }}
          </h3>
          <!-- catagory -->
          <p v-if="content.catagory">{{ content.catagory }}</p>
        </div>
        <!-- text if -->
        <p v-if="content.text">{{ content.text }}</p>
        <p>
          <span v-if="content.user">
            by
            <a class="text-blue-700">{{ content.user }}</a>
          </span>
          {{ content.time }}
        </p>
      </article>
    </div>
  </article>
</template>

<script>
export default {
  name: "News",
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: undefined,
    },
  },
};
</script>
