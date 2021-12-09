<template>
  <ul class="user-item">
    <li v-for="user in sortList" :key="user.id">
      <div class="users__row">
        <p :class="['user-item__item',{'user-item__item-addition' : user.children}]"> {{ user.name }}</p>
        <p class="user-item__item user-item__item-phone"> {{ user.phone }} </p>
      </div>
      <UsersItem v-if="user.children" :users="user.children" :sortBy="sortBy"/>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'UsersItem',
  props: {
    users: {
      type: Array
    },
    sortBy: {
      type: String
    }
  },
  computed: {
    sortList () {
      const sortByName = function (prev, next) {
        return (prev.name > next.name) ? 1 : -1
      }
      const sortByPhone = function (prev, next) {
        return (prev.phone > next.phone) ? 1 : -1
      }
      if (this.sortBy === 'name') {
        /* eslint-disable */
        this.users = this.users.sort(sortByName)
      } else if (this.sortBy === 'phone') {
        this.users = this.users.sort(sortByPhone)
      }
      return this.users
    }
  }
}
</script>

<style scoped>
.user-item {
  list-style: none;
  margin: 0;
}

.user-item__item {
  margin: 0;
  padding: 10px 20px;
}

.user-item__item-phone {
  width: 200px;
  border-left: 1px solid black;
}

.user-item__item-addition:before {
  content: '+';
}
</style>
