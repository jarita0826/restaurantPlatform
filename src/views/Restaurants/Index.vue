<template>
  <div class="restaurants">
    <div class="px-10 mt-4">
      <NavTabs />
    </div>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
  },
  data() {
    return {
      articles: [
        [
          {
            name: "name",
            catagory: "catagory",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            src:
              "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
            alt: "food",
          },
          {
            name: "name",
            catagory: "catagory",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            src:
              "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
            alt: "food",
          },
          {
            name: "name",
            catagory: "catagory",
            info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            src:
              "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
            alt: "food",
          },
        ],
        [
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
          {
            name: "UserName",
            src:
              "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
          },
        ],
      ],
    };
  },
};
</script>
