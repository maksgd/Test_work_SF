<template>
  <div>
    <form-sign-in />
  </div>
</template>

<script>
import FormSignIn from "./components/FormSignIn.vue";

export default {
  name: "App",

  components: {
    FormSignIn
  },

  data() {
    return {
      filter: ""
    };
  },

  created() {},

  mounted() {},

  beforeUnmount() {},

  computed: {},

  methods: {},

  watch: {}
};
</script>
