<template>
  <div class="home">
    <h3 class="title">ABOUT ME</h3>
    <div class="container">
      <div class="img_box">
        <div class="to_top"></div>
        <div class="line">
          <div class="to_left"></div>
          <img src="../assets/images/maker.jpg" alt="" class="imgOne">
          <div class="to_right"></div>
        </div>
        <div class="to_bottom"></div>
      </div>
      <div class="handle_btns">
        <router-link class="link_btn waterfall_box" to="/waterfallPage">瀑布流-vue组件</router-link>
        <router-link class="link_btn wxapp_box" to="/wxapp">前端能力测试-小程序</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 100px 100px 0 100px;
  display: flex;
  justify-content: space-around;
}
.title {
  background:#74AF55;
  font-size:60px;
  color:#ccc;
  font-family:Arial, Helvetica, sans-serif;
  font-style: italic;
  text-align: center;
  padding:20px 0;
}
.imgOne {
  width: 250px;
  height: 250px;
  float: left;
}
.line {
  overflow: hidden;
  width: 100%;
  margin:0 auto;
}
.to_left {
  width: 0;
  height: 0;
  border-right: 30px solid #ffd900;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  float: left;
}
.to_right {
  width: 0;
  height: 0;
  border-left: 30px solid greenyellow;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  float: left;
}
.to_bottom {
  width: 0;
  height: 0;
  border-top: 30px solid skyblue;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
}
.to_top {
  width: 0;
  height: 0;
  border-bottom: 30px solid #FBA2B3;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
}
.link_btn {
  display: inline-block;
  margin-top: 50px;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border:3px solid #ccc;
  border-radius: 50%;
  font-size:25px;
  color: #333;
}
.handle_btns {
  width: 300px;
  padding-top: 50px;
}
</style>
