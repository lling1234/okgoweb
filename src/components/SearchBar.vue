<template>
  <Search style="height: 2em; margin-right: 1px" />
  <div class="search-bar">
    <input v-model="searchText" type="text" @keydown.enter="openBingSearch" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    openBingSearch() {
      const query = encodeURIComponent(this.searchText)
      const url = `/bing/search?q=${query}`

      window.open(url, '_blank')
    },
  },
})
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  width: 155px;
  height: 22px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
}

input[type='text'] {
  /* flex: 1; */
  border: none;
  outline: none;
  font-size: 5px;
  border-radius: 5px;
}

.fa-search {
  color: #0b0b0b;
  cursor: pointer;
}
</style>
