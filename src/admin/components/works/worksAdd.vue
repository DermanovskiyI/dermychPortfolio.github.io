<template lang="pug">
.works__add
  .error {{ validation.firstError('newWork.title') }}
  input.works__add-input.works__add-input-name(
    type="text",
    placeholder="Название проекта",
    v-model="newWork.title",
    :class="{ 'valid-error': validation.hasError('newWork.title') }"
  )
  .error {{ validation.firstError('newWork.techs') }}
  input.works__add-input.works__add-input-tech(
    type="text",
    placeholder="Технологии",
    v-model="newWork.techs",
    :class="{ 'valid-error': validation.hasError('newWork.techs') }"
  )
  .error {{ validation.firstError('newWork.link') }}
  input.works__add-input.works__add-input-link(
    type="text",
    placeholder="Ссылка",
    v-model="newWork.link",
    :class="{ 'valid-error': validation.hasError('newWork.link') }"
  )
  .error {{ validation.firstError('newWork.description') }}
  textarea.works__add-input.works__add-input-desk(
    type="text",
    placeholder="Описание",
    v-model="newWork.description",
    :class="{ 'valid-error': validation.hasError('newWork.title') }"
  )

  label
    input.works__add-input.works__add-input-photo(
      type="file",
      @change="renderPic"
    )
    .works__add-input-photo-img
      img(src="../../../assets/images/Vector Smart Object.png")
      .works__add-input-photo-visible Загрузить картинку
  .new__photo
    img.new__photo-img(:src="editMode ? testMeth() : previewPic", alt="")
  button.works__add-btn(
    type="button",
    @click="editMode ? handleEditWork() : handleSetWork()"
  ) {{ editMode ? 'Изменить' : 'Добавить' }}
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "newWork.title"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newWork.techs"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newWork.description"(value) {
      return Validator.value(value).required("Заполните поле");
    },

    "newWork.link"(value) {
      return Validator.value(value)
        .url("ссылка должна быть в формате https://www.*адрес*.ру")
        .required("Заполните поле");
    },
  },
  props: {
    editMode: {
      type: Boolean,
      default: () => false,
    },
    newWork: {
      type: Object,
      default: () => {},
    },
    editedWorkId: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      previewPic: "",
    };
  },
  computed: {
    ...mapState({
      works: (state) => state.works.works,
    }),
  },
  methods: {
    ...mapActions(["setWork", "editWork"]),
    handleSetWork() {
      this.$validate().then((success) => {
        if (!success) return;
        this.setWork({
          title: this.newWork.title,
          techs: this.newWork.techs,
          photo: this.newWork.photo,
          link: this.newWork.link,
          description: this.newWork.description,
        });
        this.clearInputs();

        this.validation.reset();
      });
    },
    renderPic(e) {
      const file = e.target.files[0];
      const renderer = new FileReader();
      renderer.readAsDataURL(file);
      renderer.onloadend = () => {
        this.previewPic = renderer.result;
      };
      this.newWork.photo = file;
    },
    handleEditWork() {
      this.editWork({
        title: this.newWork.title,
        techs: this.newWork.techs,
        photo: this.newWork.photo,
        link: this.newWork.link,
        description: this.newWork.description,
        id: this.editedWorkId,
      });
      this.editMode = false;
      this.clearInputs();

      this.validation.reset();
    },
    clearInputs() {
      this.newWork.title = "";
      this.newWork.techs = "";
      this.newWork.photo = "";
      this.newWork.link = "";
      this.newWork.description = "";
      this.previewPic = "";
    },
    testMeth() {
      if (typeof this.newWork.photo == "string") {
        return this.newWork.photo;
      } else {
        const renderer = new FileReader();
        renderer.readAsDataURL(this.newWork.photo);
        renderer.onloadend = () => {
          this.newWork.photo = renderer.result;
        };
        // return this.newWork.photo
      }
      return this.newWork.photo;
    },
  },
};
</script>

<style scoped>
input,
textarea {
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
}

.works__add {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid transparent;
}
.works__add-input {
  width: 200px;
  margin-bottom: 20px;
}
.works__add-input-photo {
  display: none;
}
.works__add-input-photo-visible {
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  color: #6c9c5a;
  font-weight: 600;
}
.works__add-input-photo-img {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.works__add-input-desk {
  resize: none;
}
.works__add-btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.new__photo {
  width: 208px;
}
.new__photo-img {
  max-width: 100%;
}
.error {
  color: #e41c2a;
  font-size: 18px;
  font-weight: bold;
}
.valid-error {
  border-color: #e41c2a;
}
</style>