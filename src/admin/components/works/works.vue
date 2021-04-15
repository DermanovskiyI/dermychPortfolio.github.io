<template lang="pug">
.wrapper
    adminHeader
    adminNavigation
    .maincontent
        .page
            .page__title
                span.page__title-text Страница «Мои Работы»
            .page__changes


            
</template>

<script>
    import adminHeader from "../adminHeader.vue";
    import adminNavigation from "../adminNavigation.vue";
export default {
    components: {
        adminHeader,
        adminNavigation,
    }
    
}
</script>
<style scoped>

.wrapper {
  background: url("../../../assets/images/water.jpg"),
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
.page {
    padding-top: 50px;
    padding-left: 30px;
}
.page__title {
    font-size: 21px;
    color: #455a64;
    margin-bottom: 30px;
}
</style>