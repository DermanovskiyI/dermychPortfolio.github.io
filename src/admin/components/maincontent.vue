<template lang="pug">
    .maincontent
        .page
            .page__title
                span.page__title-text Страница «Обо мне»
            .page__changes
                skills
</template>


<script>
import skills from './skills.vue'
export default {
  components: {
    skills,
  }
};
</script>
<style>
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
.page__changes {
    display: flex;
    flex-wrap: wrap;
}
</style>