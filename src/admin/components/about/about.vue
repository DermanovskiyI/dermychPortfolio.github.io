<template lang="pug">
.page
    .page__title
        span.page__title-text Страница «Обо мне»
    .page__changes
      .skills
        aboutSkill(:skillGroup="skillGroup" v-for="skillGroup in skills" :key="skillGroup.id")

</template>
<script>
import aboutSkill from './aboutSkill.vue'

export default {
  components: {
    aboutSkill
  },
  data() {
    return {
      skills: [],
      newSkillName: "",
      showError: false,
    };
  },
  created() {
    return (this.skills = require("../../data/skills.json"));
  },


};
</script>

<style>
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
.skills {
  display: flex;
  flex-wrap: wrap;
}
</style>