<template lang="pug">
.wrapper
  heading
  navigation
  maincontent
</template>

<script>
import heading from "./components/heading.vue";
import navigation from "./components/navigation.vue";
import maincontent from "./components/maincontent.vue";
export default {
  components: {
    heading,
    navigation,
    maincontent,
  },
};
</script>
<style lang="css">

/* @import "../main.min.css"; */
body,
html {
  height: 100%;
}
body {
  margin: 0;
}
.wrapper {
  background: url("../../dist/assets/images/water.jpg"),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7707457983193278) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  overflow: hidden;
  min-height: 100%;
  position: relative;
  font-family: Roboto;
  height: 100%;
  overflow-y: scroll;
}
</style>