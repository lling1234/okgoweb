<template>
    <div>
        <div class="row">
            <div class="">
      <!-- <SwitchIcon unmount-persets /> -->
      <a>
        <span
          style="
            color: white;
            font-size: 14px;
            border-radius: 3px 0 0 3px;
            padding: 4px 4px 4px 4px;
            background: #00b894;
          "
          >okgo.pro</span
        >
        <span
          style="
            border-radius: 0 3px 3px 0;
            padding: 5px 10px 5px 2px;
            background: #00dc8220;
            font-size: 13px;
          "
          >欧狗肉
        </span>

        <span
          style="
            border-radius: 0 3px 3px 0;
            padding: 5px 10px 5px 2px;
            background: #00dc8220;
            font-size: 13px;
          "
          >欧狗肉
        </span>
      </a>
    </div>
  </div>
        <span v-for="(title, index) in dataTitle" :key="index">
      {{ index + 1 }}. {{ title.name }}
    </span>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { Datum2, Datum } from '@/stores/rootObject' // 假设你的类型定义文件是types.ts
  
  export default defineComponent({
    name: 'MyComponent',
    data() {
      return {
        dataList: [] as Datum[],
        dataTitle: [] as Datum2[],
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
            this.dataTitle=data
            console.log("dataList",dataInfo)
            console.log("dataTitle",data)
            
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

<style scoped>
</style>