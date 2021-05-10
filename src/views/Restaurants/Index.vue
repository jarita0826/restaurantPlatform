<template>
  <div class="restaurants">
    <div class="px-10 mt-4">
      <NavTabs />
      <Card
        :items="articles[0].cards"
        :buttons="articles[0].buttons"
        :textClass="['py-4', 'space-y-2']"
        :class="['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4']"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    Card,
    // NavBar,
    // TabsWrapper,
    // Tab,
    // AvatarCard,
    // News,
    // Top,
  },
  data() {
    return {
      articles: [
        {
          cards: [
            {
              name: "name",
              catagory: "catagory",
              info:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
              src:
                "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
              alt: "food",
            },
            {
              name: "name",
              catagory: "catagory",
              info:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
              src:
                "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
              alt: "food",
            },
            {
              name: "name",
              catagory: "catagory",
              info:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
              src:
                "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
              alt: "food",
            },
          ],
          buttons: [
            {
              btnClass: "text-white bg-blue-800 rounded",
              label: "+add",
            },
          ],
        },
      ],
    };
  },
  //
};
</script>
