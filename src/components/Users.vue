<template>
  <div class='users'>
    <div class='users__row'>
      <h2 :class="['users__column-title',{'users__column-title--clicked' : sortBy==='name'}]"
          @click="setSortBy('name')">
        Имя</h2>
      <h2 :class="['users__column-title',{'users__column-title--clicked' : sortBy==='phone'}]"
          @click="setSortBy('phone')">Телефон</h2>
    </div>
    <UsersItem :users='getUsers' :sortBy='sortBy'/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import UsersItem from './UsersItem'

export default {
  name: 'Users',
  components: {UsersItem},
  data () {
    return {
      sortBy: ''
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  },
  methods: {
    ...mapActions(['fetchDataUsers']),
    setSortBy (sortBYType) {
      this.sortBy = sortBYType
    }
  },
  mounted () {
    this.fetchDataUsers()
  }
}
</script>

<style>
.users {
  margin: 50px;
}

.users__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
}

.users__column-title {
  margin: 0;
  width: 200px;
  padding: 10px 20px;
  cursor: pointer;
}

.users__column-title--clicked {
  text-decoration: underline;
}

.users__column-title:last-child {
  border-left: 1px solid black;
}
</style>
