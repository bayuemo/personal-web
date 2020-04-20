<template>
    <div>
        <Waterfall :dataSource="list">
            <div class="item_content" v-for="item in list" :key="item.id">
                <div class="title_author_tip">
                    <div class="titleImg">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="title_center">
                        <div class="title_name">
                            {{item.title}}
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="content">
                    <span class="content_num">{{item.id}}：</span>
                    {{item.content}}
                </div>
            </div>
        </Waterfall>
    </div>
</template>

<script>
import list from '../../data/waterfalllist.js'
import Waterfall from '../components/Waterfall/index'
export default {
    components: {
        Waterfall
    },
    data(){
        return {
            list,
        }
    }
}
</script>

<style scoped lang="less">
.item_content {
    margin-right: 10px;
    margin-top:10px;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #ccc;
    .title_author_tip {
        display: flex;
        padding: 10px 10px 0 10px;
    }
    .titleImg img {
        width:80px;
    }
    .title_center {
        flex-grow: 5;
    }
    .title_name {
        font-size:14px;
        font-weight: bold;
    }
    .line {
        padding: 10px 0;
    }
    .content {
        padding-top:20px
    }
    .content_num {
        font-size: 30px;
    }
}
</style>