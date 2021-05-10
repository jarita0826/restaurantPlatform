<template>
  <div id="nav">
    <NavBar />

    <router-view />
  </div>
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

