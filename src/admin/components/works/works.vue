<template lang="pug">
.maincontent
  .title Страница «Мои Работы»
  .page
    .page__changes
      .subtitle Добавить работу
      worksAdd(
        :editMode="editMode",
        :newWork="newWork",
        :editedWorkId="editedWorkId"
      )
    .page__current
      .subtitle Последние работы
      .works__current 
        ul.works__current-list
          li.works__current-item
            div Название
            div Технологии
            div Ссылка
            div Превью
          works-item(
            v-for="work in works",
            :key="work.id",
            :work="work",
            :newWork="newWork",
            :editMode="editMode",
            @handleEditMode="switchEditMode"
          )
</template>

<script>
import worksAdd from "./worksAdd";
import worksCurrent from "./worksCurrent";
import worksItem from "./worksItem";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    worksAdd,
    worksCurrent,
    worksItem,
  },
  data() {
    return {
      editMode: false,
      editedWorkId: 0,
      newWork: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapState({
      works: (state) => state.works.works,
    }),
  },
  created() {
    this.upLoadWorks();
  },
  methods: {
    ...mapActions(["upLoadWorks"]),

    switchEditMode(workId) {
      if (this.editedWorkId === workId) {
        this.editMode = false;
        this.editedWorkId = 0;
      } else {
        this.editedWorkId = workId;
        this.editMode = true;
      }
      if (this.editMode === true) {
        this.works.forEach((work) => {
          if (work.id === workId) {
            this.newWork.title = work.title;
            this.newWork.techs = work.techs;
            this.newWork.photo = `https://webdev-api.loftschool.com/${work.photo}`;
            this.newWork.link = work.link;
            this.newWork.description = work.description;
          }
        });
      } else {
        this.newWork.techs = "";
        this.newWork.title = "";
        this.newWork.photo = "";
        this.newWork.link = "";
        this.newWork.description = "";
      }
    },
  },
};
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
  background-color: rgba(#ffffff, 0.7);
  min-height: 100%;
  font-size: 21px;
  color: #455a64;
  padding: 50px 50px 0 50px;
}
.page {
  display: flex;
}
.title {
  font-size: 21px;
  color: #455a64;
  margin-bottom: 30px;
}
.subtitle {
  margin-bottom: 40px;
}
.page__changes,
.page__current {
  flex: 1;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.works__current-list {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
.works__current-item {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.works__current-item::after {
  width: 100%;
  content: "";
  height: 1px;
  background-color: #6c9c5a;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>