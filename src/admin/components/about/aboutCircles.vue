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
      :class="[{'skill__percent-input--error': this.percentError == true, 'skill__percent-input--active' : this.circle.readonly == false && this.percentError == false}]"
      v-model="newSkillPercent",
      @keydown="filterKeys"
    )
    .skill__percent-pic 
      img.skill__percent-pic-img(src="../../../assets/images/percent.png", alt="percent") 
  .skill__edit 
    a.skill__edit-pic(href="#", @click.prevent="editPercentage(circle.id)")
      img.skill__edit-pic-img(src="../../../assets/images/pencil.png", alt="pen" title="изменить")
  .skill__del
    a.skill__del-pic(href="#", @click.prevent="deleteSkill(circle.id)")
      img.skill__del-pic-img(src="../../../assets/images/cancel.png", alt="del" title="удалить")
  .skill__save
    button(type="button" @click="addNewSkill(newSkill)").skill__save-btn сохранить
</template>

<script>
import { mapActions } from 'vuex'

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

      newSkill: {
        title: this.circle.skillName,
        percent: "2",
        category: 0,
      }
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
      if(this.percentError) {
        this.percentError = !this.percentError
      }
      // this.percentError = !this.percentError;
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
      ...mapActions({
        addNewSkill: "skills/add"
    })
  },
};
</script>
<style>
.skill__desk {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
}
.skill__name {
  margin-right: 30px;
  flex: 1;
  font-size: 21px;
  color: darkslategrey;
}
.skill__percent {
  display: flex;
  margin-right: 20px;
  align-items: center;
  position: relative;
}
.skill__percent-error {
  color: firebrick;
  position: absolute;
  bottom: 110%;
}
.skill__percent-input {
  margin-right: 5px;
  outline: none;
  width: 46px;
  height: 32px;
  border-radius: 5px;
  border: 2px solid transparent;
  text-indent: 13px;
}
.skill__percent-input--error {
  border: 2px solid firebrick;
}
.skill__percent-input--active {
  border-color: #121b94;
}
.skill__edit {
  margin-right: 20px;
}
.skill__del {
  margin-right: 20px;
}
.skill__save-link {
  color: darkslategrey;
  cursor: pointer;
}
</style>