<template lang="pug">
.skills
  skill(:skillGroup="skillGroup" v-for="skillGroup in skills" :key="skillGroup.id")

</template>
<script>
import skill from './skill.vue'
export default {
  components: {
    skill
  },
  data() {
    return {
      skills: [],
      newSkillName: "",
      showError: false,
    };
  },
  created() {
    return (this.skills = require("../data/skills.json"));
  },


};
</script>

<style>
.skills {
  display: flex;
  flex-wrap: wrap;
}
</style>