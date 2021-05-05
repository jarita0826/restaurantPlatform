<template>
  <ul class="flex border-b-1.5 border-gray-200">
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      class="px-2 py-1 -mb-0.5 focus:outline-none"
      :class="{ 'border-b-1.5 border-red-200': currentTab == tab.id }"
    >
      <a @click="selectTab(tab.id)">{{ tab.label }}</a>
    </li>
  </ul>

  <div
    class="bg-gray-600 text-white mt-4"
    v-for="(tab, index) in tabs"
    :key="index"
  >
    <!-- v-if="currentTab == tab.id" -->

    <p>
      {{ tab.text }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  props: {
    value: String,
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentTab: 1,
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
  },
  computed: {},
};
</script>
