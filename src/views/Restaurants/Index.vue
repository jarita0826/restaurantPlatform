<template>
  <div class="restaurants">
    <NavBar />
    <div class="px-10 mt-4">
      <TabsWrapper>
        <Tab title="Home" class="mt-4"><Card :items="articles[0]" /></Tab>
        <Tab title="News">
          <h2>最新動態</h2>
        </Tab>
        <Tab title="Top10"><Top /></Tab>
        <Tab title="Connoisseur" class="mt-4"
          ><AvatarCard :items="articles[1]"
        /></Tab>
      </TabsWrapper>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Card from "@/components/Card.vue";
import Tab from "@/components/Tab.vue";
import TabsWrapper from "@/components/TabsWrapper.vue";
import AvatarCard from "@/components/AvatarCard.vue";
import Top from "@/views/Restaurants/Top.vue";

export default {
  name: "Restaurants",
  components: {
    NavBar,
    TabsWrapper,
    Card,
    Tab,
    AvatarCard,
    Top,
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
