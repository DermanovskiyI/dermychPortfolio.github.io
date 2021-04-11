<template lang="pug">
form.newArticle__form
    .newArticle__row
        .newArticle__error
        input(type="text" placeholder="Название").newArticle__input
    .newArticle__row
        .newArticle__error
        input(type="date" placeholder="Дата").newArticle__input
    .newArticle__row
        .newArticle__error
        textarea(type="text").newArticle__area
    button.newArticle__btn(type="submit") Добавить
        
</template>
<script>
export default {
    
}
</script>

<style scoped>
.newArticle__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.newArticle__row {
    margin-bottom: 20px;
}
.newArticle__input {
    padding: 15px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
}
.newArticle__btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.newArticle__btn:focus {
  outline: none;
}
</style>