<template lang="pug">
.skill__desk
  .skill__name 
    .skill__name-text {{ circle.skillName }}
  .skill__percent
    .skill__percent-error(v-show="percentError") максимальное значение 100
    input.skill__percent-input(
      type="text",
      :placeholder="circle.skillPercent",
      :readonly="circle.readonly",
      v-model="newSkillPercent",
      @keydown="filterKeys"
    )
    .skill__percent-pic
      img.skill__percent-pic-img(src="", alt="percent")
  .skill__edit 
    a.skill__edit-pic(href="#", @click.prevent="editPercentage(circle.id)")
      img.skill__edit-pic-img(src="", alt="pen")
  .skill__del
    a.skill__del-pic(href="#", @click.prevent="deleteSkill(circle.id)")
      img.skill__del-pic-img(src="", alt="del")
</template>

<script>
export default {
  props: {
    circle: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newSkillPercent: null,
      percentError: false,
    };
  },

  watch: {
    newSkillPercent(value) {
      if (value > 100) {
        this.percentError = true;
        this.newSkillPercent = value.slice(0, -1);
      }
    },
  },
  methods: {
    editPercentage() {
      this.circle.readonly = !this.circle.readonly;
    },
    deleteSkill() {
      this.$emit("deleteSkill", this.circle.id);
    },
    filterKeys(e) {
      let isDigit = false;
      let isControll = false;

      if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
      }
      if (e.key == "Backspace" || e.key == "Delete" || e.key == "ArrowLeft" || e.key == "ArrowRight") {
        isControll = true;
      }
      if (!isDigit && !isControll) {
        e.preventDefault();
      }
    },
  },
};
</script>
<style>
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
  position: relative;
}
.skill__percent-error {
  color: red;
  position: absolute;
  bottom: 110%;
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
</style>