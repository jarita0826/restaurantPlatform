<template>
  <ul class="mb-4 flex space-x-4 border-b-1.5 border-gray-200 px-4">
    <li v-for="item in paths" :key="item.id">
      <router-link :to="item.path" class="px-4 py-1 -mb-0.5 focus:outline-none">
        <!-- :class="{
          'border-b-1.5 border-red-200 text-red-700 font-bold':
            this.local === item.path,
        }" -->
        {{ item.label }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      local: "",
      paths: [
        {
          id: uuidv4(),
          label: "HOME",
          path: "/restaurants",
        },
        {
          id: uuidv4(),
          label: "NEWS",
          path: "/restaurants/feeds",
        },
        {
          id: uuidv4(),
          label: "TOP 10",
          path: "/restaurants/top",
        },
        {
          id: uuidv4(),
          label: "CONNOISSEUR",
          path: "/users/top",
        },
      ],
    };
  },

  // created: function () {
  //   this.local = location.pathname;
  // },
};
</script>