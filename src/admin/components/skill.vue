<template lang="pug">
.skill
  .skill__title {{ skillGroup.experienceGroup }}
  ul.skill__list 
    li.skill__item
      circles(
        :circle="circle",
        v-for="circle in circles",
        :key="circles.id",
        @deleteSkill="deleteSkill"
      ) 
      form.skill__new(@submit.prevent="addNewSkill")
        input.skill__new-input(
          type="text",
          placeholder="Название",
          v-model="newSkillName"
        )
        .skill__new-error(v-show="showError") Заполните поле
        button.skill__new-btn(type="submit") Добавить
</template>

<script>
import circles from "./circles";
export default {
  components: {
    circles,
  },
  props: {
    skillGroup: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      circles: [],
      newSkillName: "",
      // newSkillPercent: 0,
      id: 0,
      showError: false,
    };
  },
  methods: {
    addNewSkill() {
      // this.$set(this.circles, this.newSkillName, 0);
      if (this.newSkillName == "") {
        this.showError = true;
      } else {
        this.circles.push({
          id: this.id,
          skillName: this.newSkillName,
          skillPercent: 0,
          readonly: true,
        });
        this.newSkillName = "";
        this.id++;
        this.showError = false;
      }
    },

    deleteSkill(id) {
      this.circles.forEach((circle, index) => {
        if (circle.id == id) {
          this.circles.splice(index, 1);
        }
      });
    },
  },
};
</script>
 
<style>
.skill {
  margin-right: 130px;
  margin-bottom: 40px;
  @media (max-width: 576px) {
    margin-right: 0;
  }
}
.skill__title {
  color: #455a64;
  margin-bottom: 30px;
}
.skill__list {
  list-style-type: none;
  margin: 0;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    padding: 0;
  }
}
.skill__list:last-child {
  margin-bottom: 0;
}

.skill__new {
  display: flex;
  position: relative;
}

.skill__new-input {
  margin-right: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  @media (max-width: 576px) {
    padding: 15px 0px;
  }
}
.skill__new-error {
  position: absolute;
  top: 100%;
  left: 12%;
  color: red;
  font-weight: 600;
  font-size: 20px;
}
.skill__new-btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.skill__new-btn:focus {
  outline: none;
}
</style>