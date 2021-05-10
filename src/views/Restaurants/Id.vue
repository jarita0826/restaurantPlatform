<template>
  <div class="id text-left">
    {{ $route.params.id }}
    <!-- info -->
    <div class="mx-10 py-4 border-b-2 space-y-3">
      <h2 class="text-3xl font-extrabold">Restaurant Name</h2>
      <span> catagory </span>

      <div class="flex space-x-4">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="space-x-4">
            <Button :items="article[0]" />
          </div>
        </div>
      </div>

      <div>
        <p class="font-semibold">
          Open Hour:
          <span class="font-normal">08:00</span>
        </p>
        <p class="font-semibold">
          Tel:
          <span class="font-normal">099-860-0630</span>
        </p>
        <p class="font-semibold">
          Address:
          <span class="font-normal">4262 HENARI TRAI</span>
        </p>
      </div>
    </div>

    <!-- comment -->

    <div class="mx-10 py-4">
      <h3 class="text-2xl font-bold">Comments:</h3>

      <div class="divide-y divide-fuchsia-300 space-y-3">
        <div class="flex justify-between py-4">
          <div>
            <p class="text-xl text-blue-500 font-semibold">User Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>-3 months ago</p>
          </div>
          <div class="flex items-center">
            <Button :items="article[1]" />
          </div>
        </div>
        <div class="flex justify-between py-4">
          <div>
            <p class="text-xl text-blue-500 font-semibold">User Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>-3 months ago</p>
          </div>
          <div class="flex items-center">
            <Button :items="article[1]" />
          </div>
        </div>
      </div>

      <form class="space-y-4">
        <label for="w3review" class="block">Add a Comment:</label>
        <textarea
          id=""
          name=""
          rows="4"
          cols="50"
          class="border-2 block w-full"
        ></textarea>
        <Button :items="article[2]" />
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Id",
  components: {
    Button,
  },
  data() {
    return {
      article: [
        [
          {
            btnClass: "text-white bg-blue-800 rounded",
            label: "Dashboard",
          },
          {
            btnClass: "text-white bg-blue-800 rounded",
            label: "+add",
          },
        ],
        [
          {
            btnClass: "text-white bg-red-800 rounded",
            label: "Delete",
          },
        ],
        [
          {
            btnClass: "text-white bg-blue-800 rounded",
            label: "Submit",
          },
        ],
      ],
    };
  },
};
</script>
