<template lang="pug">
.wrapper
    adminHeader
    adminNavigation
    login
    //- .maincontent
    //-     about

</template>

<script>
    import adminHeader from "./adminHeader";
    import adminNavigation from "./adminNavigation.vue";
    import about from "./about/about.vue"
    import login from "./login/login.vue"

export default {

    components: {
        adminHeader, 
        adminNavigation, 
        about,
        login
    }
}
</script>
<style>

.wrapper {
  background: url("../../assets/images/water.jpg"),
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
.maincontent {
    background-color: rgba(#ffffff, .7);
    min-height: 100%;

}
</style>
