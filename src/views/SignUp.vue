<template>
  <div id="sign-up">
    <div class="py-5">
      <form class="w-100" @submit.prevent.stop="handleSubmit">
        <div class="text-center mb-4">
          <h1 class="font-bold text-2xl">Sign up</h1>
        </div>

        <!-- InputText -->
        <div
          class="text-left space-y-4 container mx-auto border-2 border-black"
        >
          <InputText :items="article[0]" />

          <button
            class="text-white bg-blue-800 rounded w-full py-2"
            type="submit"
          >
            Submit
          </button>

          <div class="text-center mb-3">
            <router-link to="/signup">Sign Up</router-link>
          </div>
        </div>

        <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
      </form>
    </div>
  </div>
</template>



<script>
import InputText from "../components/InputText.vue";
export default {
  name: "sign-up",
  components: {
    InputText,
  },

  data() {
    return {
      article: [
        [
          {
            label: "Name",
            id: "name",
            type: "text",
            placeholder: "name",
            value: "",
          },
          {
            label: "Email",
            id: "email",
            type: "email",
            placeholder: "email",
            value: "",
          },
          {
            label: "Password",
            id: "Password",
            type: "password",
            placeholder: "password",
            value: "",
          },
          {
            label: "Password Check",
            id: "PasswordCheck",
            type: "password",
            placeholder: "password",
            value: "",
          },
        ],
      ],
    };
  },

  methods: {
    handleSubmit: function () {
      let info = this.article[0].map((x) => x.value);
      const data = {
        name: info[0],
        email: info[1],
        password: info[2],
        check: info[3],
      };
      console.log("data", data);
    },
  },
};
</script>
