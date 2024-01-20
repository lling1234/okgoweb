<template>
    <div v-for="item of 12" :key="item" class="container">
        <div>
            <p>11</p>
        </div>
        <div>
            <div>
                <ul>
                    <li v-for="item in dataList" :key="item.id" @click="goToLink(item.link)">
                        {{ item.title }}--{{ item.extra }}
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <div class="floating-container" style="z-index: 6;">
        <span>1111</span>
        <!-- 悬浮容器的内容 -->
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
    transition: background-color .3s;
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
    top: 56%;
    /* 距离顶部的距离 */
    right: 10px;
    /* 距离右侧的距离 */
    transform: translateY(-50%);
    /* 上下居中对齐 */
    width: 290px;
    height: 640px;
    border: 1px solid #ccc;
    border-radius: 15px;

}
</style>
