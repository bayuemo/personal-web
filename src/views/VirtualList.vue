<template>
  <div>
    <div ref="list" class="v-scroll" @scroll="scrollEvent($event)">
      <div class="infinite-list" :style="{ height: listHeight + 'px' }"></div>

      <div class="scroll-list" :style="{ transform: getTransform }">
        <div
          ref="items"
          class="scroll-item"
          v-for="item in visibleData"
          :key="item.id"
          :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
        >
          {{ item.msg }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let listData = [];
for (let i = 1; i <= 10000; i++) {
  listData.push({
    id: i,
    msg: i + "************",
  });
}
export default {
  data() {
    return {
      listData: listData,
      itemHeight: 60,
      //可视区域高度
      screenHeight: 600,
      //偏移量
      startOffset: 0,
      //起始索引
      start: 0,
      //结束索引
      end: null,
    };
  },
  computed: {
    //列表总高度
    listHeight() {
      return this.listData.length * this.itemHeight;
    },
    //可显示的列表项数
    visibleCount() {
      return Math.ceil(this.screenHeight / this.itemHeight);
    },
    //偏移量对应的style
    getTransform() {
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    //获取真实显示列表数据
    visibleData() {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      );
    },
  },
  mounted() {
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
  methods: {
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemHeight);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemHeight);
    },
  },
};
</script>
<style>
.v-scroll {
  height: 600px;
  width: 400px;
  border: 3px solid palevioletred;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.scroll-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.scroll-item {
  padding: 10px;
  color: #000;
  background: peachpuff;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
