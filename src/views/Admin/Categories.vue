<template>
  <div class="restaurants container mx-auto px-40">
    <div class="text-left space-y-4 py-4">
      <h3 class="font-bold text-2xl">Backend</h3>
      <div class="flex space-x-2">
        <router-link
          to="/admin/restaurants"
          class="text-blue-600 hover:text-blue-900"
        >
          Restaurants
        </router-link>
        <p>|</p>
        <router-link
          to="/admin/categories"
          class="text-blue-600 hover:text-blue-900"
        >
          Categories
        </router-link>
      </div>
    </div>

    <div class="border-2 border-black">
      <table class="table-fixed w-full">
        <thead class="bg-gray-400 text-white">
          <tr>
            <th class="w-1/4 py-2">Id</th>
            <th class="w-1/4 py-2">Category_Name</th>
            <th class="w-1/4 py-2">#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">1</td>
            <td class="text-center">Category_1</td>
            <td class="space-x-2 flex justify-center">
              <Button :buttons="articles[0].buttons" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Restaurants",
  components: {
    Button,
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
              label: "Edit",
            },
            {
              btnClass: "text-white bg-blue-800 rounded",
              label: "Delete",
            },
          ],
        },
      ],
    };
  },
};
</script>
