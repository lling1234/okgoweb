<!-- 热门推荐 -->
<template>
	<section class="index-recommend-hot-outer">
		<div class="i-r-t-inner">
			<div class="i-r-title">
				<div class="i-r-title-line"><i class="right i-r-title-icon"></i></div>
				<h1>热门推荐</h1>
				<div class="i-r-title-line"><i class="i-r-title-icon left"></i></div>
			</div>

			<div id="recommendHotWrap">
				<ul class="i-r-t-hotel-group">
					<div class="flex flex-wrap">
						<div v-for="(item, index) in items" :key="index" class="w-1/3 p-4">
							{{ item.id }}{{ item.name }}
						</div>
					</div>
				</ul>

				<ul class="i-r-t-hotel-group">
					<div class="flex flex-wrap">
						<div v-for="(item, index) in items" :key="index" class="w-1/3 p-4">
							{{ item }}
						</div>
					</div>
				</ul>

				<ul class="i-r-t-hotel-group">
					<div class="flex flex-wrap">
						<div v-for="(item, index) in items" :key="index" class="w-1/3 p-4">
							{{ item }}
						</div>
					</div>
				</ul>

				<!-- <div class="i-recommend-btn">
            <a class="bottom-one" style="display:none;">查看全部<i class="i-check-more-icon"></i></a>
        </div> -->
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
interface Item {
	id: number
	name: string
}
// 使用reactive创建响应式数组
const items = ref<Item[]>([
	{ id: 1, name: 'Apple1' },
	{ id: 2, name: 'Banana1' },
	{ id: 3, name: 'Orange1' },
])
</script>

<!-- <style scoped lang="scss">
// 热门推荐

.index-recommend-hot-outer{
    background: white;
    margin-bottom: -20px;

    @at-root #recommendHotWrap{
        min-height: 570px;
    }

    @at-root .i-r-h-hotel-item{
        float: left;
        width: 386px;
        height: 220px;
        margin: 0 20px 20px 0;
        transition: all .2s linear;

        &:hover{
            box-shadow: 0 0 10px rgba(82, 80, 84, .9);
            transform: translate3d(-2px, -2px, 0)
        }

        @at-root .irh-bottom-line-mask{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 50px;
            width: 100%;
            background: black;
            opacity: .6;
            filter: Alpha(opacity=60);

        }

        @at-root .irh-bottom-line{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 365px;
            height: 50px;
            line-height: 50px;
            margin: 0 10px;
            transform: translateZ(0);

            b{
                color: white;
                font-size: 18px;
            }

            @at-root .irh-price-wrap{
                float: right;
                font-size: 12px;
                background: orange;
                color: white;
                height: 36px;
                line-height: 36px;
                border-radius: 5px;
                width: 100px;
                text-align: center;
                margin-top: 7px;
            }

            @at-root .irh-price-num{
                font-size: 20px;
            }
        }
    }
}
</style> -->
