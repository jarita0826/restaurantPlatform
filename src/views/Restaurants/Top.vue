<template>
  <div class="px-10 mt-4">
    <NavTabs />
    <Card
      :items="articles[0].cards"
      :buttons="articles[0].buttons"
      :class="['space-y-4']"
      :imgClass="['w-2/5']"
      :textClass="[
        'flex',
        'flex-col',
        'items-start',
        'justify-center',
        'space-y-2',
      ]"
      :topClass="['flex', 'justify-between']"
    />
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    NavTabs,
    Card,
  },
  data() {
    return {
      articles: [
        {
          cards: [
            {
              name: "UserName",
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              topClass: "flex",
              catagory: "catagory",
              info:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptates aperiam a, at unde quam, laboriosam voluptatem placeat rem fuga!",
            },
            {
              name: "UserName",
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              catagory: "catagory",
              info:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptates aperiam a, at unde quam, laboriosam voluptatem placeat rem fuga!",
            },
          ],
          buttons: [
            {
              btnClass: "text-white bg-blue-800 rounded",
              label: "Show",
            },
            {
              btnClass: "text-white bg-blue-800 rounded",
              label: "+add",
            },
          ],
        },
      ],
    };
  },
};
</script>
