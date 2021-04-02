<template lang="pug">
.skills
  .skill(v-for="skillGroup in skills" :key="skillGroup.id")
    .skill__title {{skillGroup.experienceGroup}}
    ul.skill__list 
      li.skill__item
        .skill__desk(v-for="skillPercent, skillName  in skillGroup.circles" :key="skillName")
          .skill__name 
            .skill__name-text {{skillName}}
          .skill__percent
            input.skill__percent-input(type="text" :placeholder="skillPercent" readonly)
            .skill__percent-pic
              img.skill__percent-pic-img(src="", alt="percent")
          .skill__edit
            a.skill__edit-pic(href="#")
              img.skill__edit-pic-img(src="", alt="pen")
          .skill__del
            a.skill__del-pic(href="#")
              img.skill__del-pic-img(src="", alt="del")
        form.skill__new
          input.skill__new-input(type="text", placeholder="Название" v-model="newSkillName")
          .skill__new-error(v-show="showError") Заполните поле
          button.skill__new-btn(type="submit", @click.prevent="addNewSkill") Добавить
</template>
<script>
export default {
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
  methods: {
    addNewSkill() {
        // this.skills[0].push(this.newSkillName)
        // JSON.stringify
        let kek = (JSON.stringify(this.skills[0]))
        // let newKek = kek.substr(0, kek.length-2) + ',' + this.newSkillName + '}}'
        let newKek = `${kek.substr(0, kek.length-2)},"${this.newSkillName}": 23}}`
        
        // console.log(JSON.parse(`${kek.substr(0, kek.length-2)}}}`))
        // console.log(`${this.newSkillName}`)
        this.skills[0] = JSON.parse(newKek)
        console.log(this.skills[0])
    },
  },
};
</script>

<style>
.skills {
  display: flex;
  flex-wrap: wrap;
}
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
.skill__desk {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
}
.skill__name {
  margin-right: 30px;
  flex: 1;
}
.skill__percent {
  display: flex;
  margin-right: 20px;
  align-items: center;
}
.skill__percent-input {
  margin-right: 20px;
  outline: none;
  width: 46px;
  height: 32px;
  border-radius: 5px;
  border: none;
  text-indent: 13px;
}
.skill__edit {
  margin-right: 20px;
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