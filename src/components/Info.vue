<!-- eslint-disable prettier/prettier -->
<template>
  <div v-for="(title, index) in dataTitle" :key="index" class="container">
    <div style="margin-bottom: 5px;margin-top: 5px;">
      <span style="margin-left: 10px;">{{ title.name }}</span>
    </div>
    <div>
      <ul style="overflow-y:auto;">
        <li style="display:flex;justify-content: space-between;margin-bottom: 5px;"
          v-for="(item, indext) in dataTitle[index].data" :key="item.id" @click="goToLink(item.link)">

          <span class="item-index" :class="{ 'red': indext === 0, 'orange': indext === 1, 'yellow': indext === 2 }">{{
            indext + 1 }}. </span>
          <span class="item-title" style="text-align: left;" :title=item.title>{{ item.title }}</span>
          <span class="item-extra">{{ item.extra }}</span>


        </li>
      </ul>
    </div>

  </div>
  <div class="floating-container" style="z-index: 1;">

    <el-calendar v-model="value"
      style="margin-top: 15px;margin-left: 15px;margin-right: 15px;background-color:  #6ca5ea;;" />
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>

<script  lang="ts">
import { defineComponent } from 'vue'
import { Datum2, Datum } from '@/stores/rootObject' // 假设你的类型定义文件是types.ts

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const value = ref(new Date())

    return {
      value
    }
  },
  data() {
    return {
      dataList: [] as Datum[],
      dataTitle: [] as Datum2[],
      itemClicked: false,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      http
        .get('/hot/list?type=0')
        .then((response) => {
          const data: Datum2[] = response.data
          const dataInfo: Datum[] = data[0].data
          this.dataList = dataInfo // 假设你只需要第一个data的内容
          this.dataTitle = data
          console.log("dataList", dataInfo)
          console.log("dataTitle", data)

        })
        .catch((error) => {
          console.error(error)
        })
    },
    goToLink(link: string) {
      // 使用Vue Router进行页面跳转
      window.open(link, '_blank')
    },

  },
})



</script>

<style   scoped>
.container {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 356px;
  height: 320px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  transition: background-color 0.3s;
}

/*定义整体的宽度*/
.container::-webkit-scrollbar {
  width: 5px;
  margin: 10 auto;
}

/*定义滚动条轨道*/
.container::-webkit-scrollbar-track {
  border-radius: 115px;
  background: transparent;
}

/*定义滑块*/
.container::-webkit-scrollbar-thumb {
  border-radius: 115px;
  background: rgba(27, 140, 236, 0.5);
}

.item {
  width: 30%;
  height: 100px;
  border: 1px solid #ccc;
  margin-bottom: 30px;
  margin-left: 20px;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}

.item:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.floating-container {
  position: fixed;
  /* 使用固定定位 */
  top: 53%;
  /* 距离顶部的距离 */
  right: 10px;
  /* 距离右侧的距离 */
  transform: translateY(-50%);
  /* 上下居中对齐 */
  width: 290px;
  height: 630px;
  border: 1px solid #ccc;
  border-radius: 15px;
}

.item-index {
  -webkit-font-smoothing: antialiased;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: inherit;
  padding-right: 3px;
  margin-left: 2px;
  margin-right: 2px;
}

.item-title {
  -webkit-font-smoothing: antialiased;
  list-style: none;
  color: #666;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: inherit;
  margin-right: auto;
  word-break: break-all;
  position: relative;
  /* 添加相对定位，使得后代伪元素使用绝对定位时，相对于.item-title进行定位 */
}

.item-title:hover {
  box-shadow: 0px 0px 6px #bbb;
}

.item-extra {
  -webkit-font-smoothing: antialiased;
  list-style: none;
  color: #666;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: inherit;
  font-size: .7rem;
  padding-left: 10px;
  white-space: nowrap;
  margin-right: 10px;
}

.red {
  color: red;
}

.orange {
  color: orange;
}

.yellow {
  color: rgb(166, 29, 184);
}

.selected-item {
  background-color: #ccc;
  /*添加一个选中样式*/
}
</style>
