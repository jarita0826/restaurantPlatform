<template>
  <div class="restaurants">
    <NavBar />
    <div class="px-10 mt-4">
      <TabsWrapper>
        <Tab title="Home" class="mt-4"
          ><Card
            :items="articles[0].cards"
            :buttons="articles[0].buttons"
            :textClass="['py-4', 'space-y-2']"
            :class="['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4']"
        /></Tab>
        <Tab title="News">
          <h2 class="text-left mt-6 text-3xl font-bold border-b pb-2">NEWS</h2>
          <div class="mt-8 flex space-x-8 items-start">
            <News
              :contents="articles[3].news"
              :title="articles[3].newsTitle"
              :class="['w-1/2']"
            />
            <News
              :contents="articles[3].comments"
              :title="articles[3].commentTitle"
              :class="['w-1/2']"
            />
          </div>
        </Tab>
        <Tab title="Top10" class="mt-4"
          ><Card
            :items="articles[2].cards"
            :buttons="articles[2].buttons"
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
        /></Tab>
        <Tab title="Connoisseur" class="mt-4"
          ><AvatarCard :items="articles[1].cards"
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
import News from "@/components/News.vue";

// import Top from "@/views/Restaurants/Top.vue";

export default {
  name: "Restaurants",
  components: {
    NavBar,
    TabsWrapper,
    Card,
    Tab,
    AvatarCard,
    News,
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
        {
          cards: [
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
        },
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
          commentTitle: "New comments",
          comments: [
            {
              label: "restaurants Name",
              text:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae voluptates aperiam a, at unde quam, laboriosam voluptatem placeat rem fuga!",
              time: "3 month ago",
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
