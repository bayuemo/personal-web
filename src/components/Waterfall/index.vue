<script>
  export default {
    name: 'Waterfall',
    props: {
      column: {
        type: Number,
        default: 4,
      },
      dataSource: {
        type: Array,
        default: ()=>{
          return []
        },
      }
    },
    data(){
      return {
        // 初始化一个二维数组
        columnArr: new Array(this.column).fill([]), 
      }
    },
    watch: {
      dataSource(){
        this.renderSlots()
      }
    },
    mounted() {
      if(this.$slots.default){
        this.renderSlots()
      }
    },
    methods: {
      renderSlots(){
        this.columnArr=new Array(this.column).fill([])
        this.$slots.default.forEach((item)=>{
            setTimeout(() => {
              const minIndex = this.getMinHeightLineIndex();
              // 这种方法不会触发vue重新渲染，换用$set
              // this.columnArr[minIndex].push(item)
              this.$set(this.columnArr, minIndex, [...this.columnArr[minIndex], item])
            }, 0)
        })
      },
      getMinHeightLineIndex () {
          let aLins = this.columnArr.map((item, index)=>{
              return this.$refs[`column${index}`];
          })
          let minIndex = 0;
          let minHeight = aLins[0].offsetHeight;
          for(var i=1;i < aLins.length;i++) {
              if (aLins[i].offsetHeight < minHeight) {
                  minHeight = aLins[i].offsetHeight;
                  minIndex = i;
              }
          }
          return minIndex;
      },
      renderColumn() {
        return this.columnArr.map((item, index) => (
          <div class="column" ref={`column${index}`} key={index}>
            {item}
          </div>
        ))
      },
    },
    render(h){
      return (
        <div class="box">
          {this.renderColumn()}
        </div>
      )
    }
  }
</script>
<style scoped>
.box {
    display: flex;
    align-items: flex-start;
}
.column {
    width: 25%;
}
</style>