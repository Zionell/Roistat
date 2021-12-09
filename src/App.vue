<template>
  <div id="app">
    <button class="show-modal__btn" @click="toggleShowModal">Добавить</button>
    <Users/>
    <transition name="show">
      <ModalWindow v-show="modalIsShow" @close="toggleShowModal"/>
    </transition>
  </div>
</template>

<script>
import Users from './components/Users'
import ModalWindow from './components/ModalWindow'

export default {
  name: 'App',
  components: {
    Users,
    ModalWindow
  },
  data: () => ({
    modalIsShow: false
  }),
  methods: {
    toggleShowModal () {
      this.modalIsShow = !this.modalIsShow
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-modal__btn {
  background: #5b5bff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
}

.show-enter-active, .show-leave-active {
  transition: opacity .5s;
}

.show-enter, .show-leave-to {
  opacity: 0;
}
</style>
