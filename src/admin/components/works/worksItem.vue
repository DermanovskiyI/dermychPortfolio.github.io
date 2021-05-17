<template lang="pug">
li.works__current__item
  .works__current-text.works__current-text--title {{ work.title }}
  .works__current-text.works__current-text--techs {{ work.techs }}
  a.works__current-text.works__current-text--link(
    :href="work.link ? `http://${work.link}` : '#'"
  ) {{ work.link }}
  .works__current-text.works__current-text--photo
    img.current__photo-img(
      :src="`https://webdev-api.loftschool.com/${work.photo}`"
    )
  .works__current-btns
    a.edit(href="#", @click.prevent="edit(work.id)")
      img.edit__pic(src="../../../assets/images/pencil.png")
    a.delete(href="#", @click.prevent="handleDelete")
      img.delete__pic(src="../../../assets/images/cancel.png")
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    work: {
      type: Object,
      default: () => {},
    },
    newWork: {
      type: Object,
      default: () => {},
    },
    editMode: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    ...mapActions(["deleteWork"]),

    handleDelete() {
      this.deleteWork(this.work.id);
    },
    edit(workId) {
      this.$emit("handleEditMode", workId);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #6c9c5a;
}
.works__current__item {
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px 20px 10px 10px;
}
.works__current__item:nth-child(even) {
  background-color: #f9f9f9;
}
.works__current-text {
  flex: 1;
  text-align: center;
}
.works__current-text--photo {
  width: 220px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
}
.current__photo-img {
  max-width: 55%;
  padding: 10px 0;
}
.works__current-btns {
  display: flex;
  flex-direction: column;
}

.edit {
  margin-bottom: 10px;
}
</style>