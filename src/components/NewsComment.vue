<template>
  <article class="border border-gray text-left">
    <!-- title -->
    <h2 class="bg-gray-200 px-4 py-4 text-xl">{{ title }}</h2>
    <div class="divide-y px-4">
      <article
        v-for="(content, index) in contents"
        :key="content.id"
        class="py-4"
      >
        <div class="flex items-center space-x-4">
          <!-- label -->
          <h3 class="text-xl text-blue-700 font-semibold">
            {{ content.Restaurant.name }}
          </h3>
        </div>
        <!-- text if -->
        <p>{{ content.description }}</p>
        <p>
          <span v-if="content.User.name">
            by
            <a class="text-blue-700">{{ content.User.name }}</a>
          </span>
          at
          {{ fromNow[index] }}
        </p>
      </article>
    </div>
  </article>
</template>

<script>
import moment from "moment";
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
  computed: {
    fromNow() {
      return this.contents.map(function (item) {
        if (!item.updatedAt) {
          return "-";
        }
        return moment(item.updatedAt).fromNow();
      });
    },
  },
};
</script>
