<template>
  <select @change="selectItem" class="select-parent">
    <option v-for="user in getSelectUsers" :key="user.id" :value="user.id">{{ user.name }}</option>
  </select>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Select',
  methods: {
    selectItem (e) {
      this.$emit('parent', e.target.value)
    }
  },
  computed: {
    ...mapGetters(['getSelectUsers'])
  }
}
</script>

<style scoped>
.select-parent{
  width: 214px;
}
</style>
