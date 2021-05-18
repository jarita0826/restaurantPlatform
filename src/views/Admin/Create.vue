<template>
  <div class="container mx-auto px-40">
    <InputText :items="article[0].input" />
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import InputText from "@/components/InputText.vue";

export default {
  name: "Create",
  components: {
    Button,
    InputText,
  },
  data() {
    return {
      articles: [
        {
          input: [
            {
              label: "Name",
              id: "name",
              type: "text",
              placeholder: "name",
              value: "",
            },
            {
              label: "Category",
              id: "category",
              type: "text",
              placeholder: "category",
              value: "",
            },
            {
              label: "Tel",
              id: "tel",
              type: "tel",
              placeholder: "tel",
              value: "",
            },
            {
              label: "Address",
              id: "address",
              type: "address",
              placeholder: "address",
              value: "",
            },
            {
              label: "Opening Hours",
              id: "Hours",
              type: "text",
              placeholder: "Opening Hours",
              value: "",
            },
          ],
        },
        {
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
