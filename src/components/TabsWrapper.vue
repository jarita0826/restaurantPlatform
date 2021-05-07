<template>
  <div>
    <ul class="flex border-b-1.5 border-gray-200">
      <li
        v-for="(title, index) in tabTitles"
        :key="index"
        class="px-4 py-1 -mb-0.5 focus:outline-none"
        @click="selectedTitle = title"
        :class="{
          'border-b-1.5 border-red-200 text-red-700 font-bold':
            title === selectedTitle,
        }"
      >
        <a>{{ title }}</a>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  // select slots title
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);
    provide("selectedTitle", selectedTitle);
    return { tabTitles, selectedTitle };
  },
};
</script>
