<template>
  <div class="px-10 mt-4">
    <NavTabs />
    <AvatarCard :items="cards" />
  </div>
</template>

<script>
import NavTabs from "@/components/NavTabs.vue";
import AvatarCard from "@/components/AvatarCard.vue";

export default {
  components: {
    NavTabs,
    AvatarCard,
  },
  data() {
    return {
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
    };
  },
};
</script>
