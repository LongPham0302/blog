<template>
  <div id="app">
    <app-heades />
    <app-footes />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style></style>
