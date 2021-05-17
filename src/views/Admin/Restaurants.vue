<template>
  <div class="restaurants">
    <div class="text-left">
      <h3>Backend</h3>
      <div class="flex space-x-2">
        <router-link
          to="/admin/Restaurants"
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
      <Button :buttons="articles[0].buttons" />
      <router-link to="/admin/Create">
        New Restaurant
      </router-link>
    </div>

    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-1/4">Id</th>
            <th class="w-1/4">Category</th>
            <th class="w-1/4">Name</th>
            <th class="w-1/4"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Category_1</td>
            <td>Restaurant_1</td>
            <td class="space-x-2">
              <Button :buttons="articles[1].buttons" />
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
          buttons: [
            {
              btnClass: "text-white bg-blue-800 rounded",
              label: "Show",
            },
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
              label: "Show",
            },
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
