<template>
  <nav class="flex justify-between px-20 py-4 bg-gray-800 text-white">
    <router-link class="navbar-brand" to="/"
      ><h1>Restaurant Platform</h1></router-link
    >
    <div>
      <ul class="flex space-x-6">
        <li v-if="currentUser.isAdmin">
          <button>Admin</button>
        </li>

        <li v-if="isAuthenticated">HI,{{ currentUser.name || "使用者" }}</li>

        <li>
          <button>Profile</button>
        </li>

        <li v-if="isAuthenticated">
          <button>
            <font-awesome-icon icon="user" />
            <span class="pl-2">LogOut</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// seed data
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "NavBar",

  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },

  created() {
    //在created階段載入fetchUser
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        //key值相同時,dummyUser 會覆蓋thisUser資料
        //展開運算子
        ...this.currentUser,
        ...dummyUser.currentUser,
      };

      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
};
</script>
