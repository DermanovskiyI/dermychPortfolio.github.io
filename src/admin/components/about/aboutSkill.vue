<template lang="pug">
.skill
  .skill__title {{ skillGroup.experienceGroup }}
  ul.skill__list 
    li.skill__item
      aboutCircles(
        :circle="circle",
        v-for="circle in circles",
        :key="circles.id",
        @deleteSkill="deleteSkill"
      ) 
      form.skill__new(@submit.prevent="addNewSkill")
        input.skill__new-input(
          type="text",
          placeholder="Название",
          :class="{'skill__new-input-errored': validation.hasError('newSkillName')}",
          v-model="newSkillName"
        )
        .skill__new-error {{validation.firstError('newSkillName')}}
        button.skill__new-btn(type="submit") Добавить
</template>

<script>
import { Validator } from "simple-vue-validator";
// const axios = require('axios');
import aboutCircles from "./aboutCircles";
export default {
  components: {
    aboutCircles,
  },
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    'newSkillName'(value) {
      return Validator.value(value).required('Поле не может быть пустым');
    }
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
      this.$validate().then(success => {
        if (!success) return;

        this.circles.push({
          id: this.id,
          skillName: this.newSkillName,
          skillPercent: 0,
          readonly: true,
        });
        // axios.post('https://webdev-api.loftschool.com/categories', {
        //   title: this.newSkillName
        // })
        // .then(function (response) {
        //    console.log(response);
        //   })
        //   .catch(function (error) {
        //   console.log(error.response);
        // });
        this.newSkillName = "";
        this.id++;
        this.showError = false;
        this.validation.reset();
      })
      // this.$set(this.circles, this.newSkillName, 0);
      
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
  /* color: #455a64; */
  color: black;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 22px;
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
  border: 1px solid transparent;
  outline: none;
  @media (max-width: 576px) {
    padding: 15px 0px;
  }
}
.skill__new-input-errored {
  border-color: firebrick;
}
.skill__new-error {
  position: absolute;
  bottom: 100%;
  left: 0%;
  color: firebrick;
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