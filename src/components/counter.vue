<script lang="ts" setup>
import { defineOptions, ref } from 'vue'

defineOptions({
	name: 'Counter',
})
const counter = createCounter()

interface Item {
	id: number
	name: string
}

// defineOptions({
//   name: 'MyComponent',
// });

// 使用reactive创建响应式数组
const items = ref<Item[]>([
	{ id: 1, name: 'Apple1' },
	{ id: 2, name: 'Banana1' },
	{ id: 3, name: 'Orange1' },
])
</script>
<template>
	<template>
		<div class="flex flex-wrap">
			<div v-for="(item, index) in items" :key="index" class="w-1/3 p-4">
				{{ item }}
			</div>
		</div>
		<div><p>-----------</p></div>
	</template>

	<div>
		<ul>
			<li v-for="item in items" :key="item.id">{{ item.name }}</li>
		</ul>
	</div>

	<button
		class="inline-block cursor-pointer rounded from-pink-500 via-red-500 to-yellow-500 bg-gradient-to-r px-8 py-2 text-sm text-white font-medium transition !border-0 !outline-none"
		hover="scale-110 shadow-xl"
		@click="counter.inc()"
	>
		{{ counter.count }}
	</button>
</template>
