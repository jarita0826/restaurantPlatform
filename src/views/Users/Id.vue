<template>
  <div class="id container mx-auto px-40">
    <h1>
      <br />
      {{ $route.params.id }}
    </h1>
    <div class="border border-gray-200 flex justify-between space-x-6 py-6">
      <div class="w-1/3 flex items-center">
        <img
          src="https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp"
          alt=""
        />
      </div>
      <div class="w-2/3 flex items-center">
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl font-bold">{{ $route.params.id }}</h2>
            <p>root@example.com</p>
          </div>
          <div>
            <p>8 已評論餐廳</p>
            <p>5 收藏的餐廳</p>
            <p>5 followings</p>
            <p>1 followers</p>
          </div>

          <Button :buttons="button" />
        </div>
      </div>
    </div>
    <div class="flex space-x-4 mt-6">
      <div class="w-2/5 space-y-6">
        <Followers :items="followers" />
      </div>
      <div class="w-3/5 space-y-6">
        <Followers :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Followers from "@/components/Followers.vue";

export default {
  components: {
    Button,
    Followers,
  },
  data() {
    return {
      button: [
        {
          btnClass: "text-white bg-blue-800 rounded",
          label: "Follower",
        },
      ],
      items: [
        {
          label: "已評論餐廳",
          images: [
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
          ],
        },
        {
          label: "收藏的餐廳",
          images: [
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
          ],
        },
      ],
      followers: [
        {
          label: "followings",
          images: [
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
          ],
        },
        {
          label: "followers",
          images: [
            {
              src:
                "https://i.insider.com/5cb8b133b8342c1b45130629?width=1300&format=jpeg&auto=webp",
              alt: "",
            },
          ],
        },
      ],
    };
  },
};
</script>
