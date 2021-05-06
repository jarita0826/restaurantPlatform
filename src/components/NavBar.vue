<template>
  <div class="flex justify-between px-20 py-4 bg-gray-800 text-white">
    <div><h1>Restaurant Platform</h1></div>
    <div>
      <ul class="flex space-x-6">
        <li>
          <button>Admin</button>
        </li>
        <li>HI,</li>
        <li>
          <button>Profile</button>
        </li>
        <li>
          <button>
            <font-awesome-icon icon="user" />
            <span class="pl-2">LogOut</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  //   props: {
  //     msg: String
  //   }
};
</script>
