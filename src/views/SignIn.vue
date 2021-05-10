<template>
  <div id="sign-in">
    <div class="py-5 border-2 border-black">
      <form @submit.prevent.stop="handleSubmit">
        <div class="text-center mb-4">
          <h1 class="font-bold text-2xl">Sign In</h1>
        </div>

        <div class="text-left container mx-auto">
          <div class="mb-3">
            <label for="email">email</label>
            <br />
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              class="border-2 w-full mt-2"
              placeholder="email"
              autocomplete="username"
              required
              autofocus
            />
          </div>

          <div class="mb-3">
            <label for="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              v-model="password"
              type="password"
              class="border-2 w-full mt-2"
              placeholder="Password"
              autocomplete="current-password"
              required
            />
          </div>

          <button
            class="text-white bg-blue-800 rounded w-full py-2"
            type="submit"
          >
            Submit
          </button>

          <div class="text-center mt-4 text-blue-800">
            <router-link to="/signup">Sign Up</router-link>
          </div>
        </div>

        <p class="mt-5 mb-3 text-center">&copy; 2017-2018</p>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  name: "sign-in",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    handleSubmit: function () {
      const data = JSON.stringify({
        email: this.email,
        password: this.password,
      });
      console.log("data", data);
    },
  },
};
</script>
