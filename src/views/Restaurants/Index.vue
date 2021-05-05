<template>
  <div class="restaurants">
    <NavBar />
    <Card :items="articles[0]" />
    <!-- :tabs="articles[1]" -->
    <Tabs :tabs="articles[1]" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Card from "@/components/Card.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "Restaurants",
  components: {
    NavBar,
    Card,
    Tabs,
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
          { label: "Home", id: 1, text: "1" },
          { label: "News", id: 2, text: "2" },
          { label: "Top10", id: 3, text: "3" },
          { label: "Connoisseur", id: 4, text: "4" },
        ],
      ],
    };
  },
};
</script>
