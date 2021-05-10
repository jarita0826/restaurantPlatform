<template>
  <div class="px-10 mt-4">
    <NavTabs />
    <h2 class="text-left mt-6 text-3xl font-bold border-b pb-2">NEWS</h2>
    <div class="mt-8 flex space-x-8 items-start">
      <News
        :contents="articles[0].news"
        :title="articles[0].newsTitle"
        :class="['w-1/2']"
      />
      <News
        :contents="articles[1].comments"
        :title="articles[1].commentTitle"
        :class="['w-1/2']"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue";
import News from "@/components/News.vue";

export default {
  components: {
    NavTabs,
    News,
  },
  data() {
    return {
      articles: [
        {
          newsTitle: "New restaurants",
          news: [
            {
              label: "restaurants Name",
              catagory: "catagory",
              time: "3 month ago",
            },
            {
              label: "restaurants Name",
              catagory: "catagory",
              time: "3 month ago",
            },
          ],
        },
        {
          commentTitle: "New comments",
          comments: [
            {
              label: "restaurants Name",
              text:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptates aperiam a, at unde quam, laboriosam voluptatem placeat rem fuga!",
              time: "3 month ago",
              user: "User",
            },
            {
              label: "restaurants Name",
              text:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptates aperiam a, at unde quam, laboriosam voluptatem placeat rem fuga!",
              time: "3 month ago",
              user: "User",
            },
          ],
        },
      ],
    };
  },
};
</script>
