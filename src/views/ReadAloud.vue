<template>
  <div style="width: 300px; margin-left: 100px; margin-top: 100px">
    <button @click="startSpeech">朗读</button>
    <button @click="cancel">取消朗读</button>
    <button @click="pauseSpeech">暂停</button>
    <button @click="resumeSpeech">继续</button>
  </div>
</template>

<script>
const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();
export default {
  methods: {
    startSpeech() {
      this.handleSpeak(
        "一天之计在于晨，一生之计在于勤，讲一串故事给你听，有志就在少年行，要问知识哪里来，书山有路勤为径，勤飞笨鸟先入林，勤跑骏马齐飞腾，勤学童心添智慧，勤思头脑变聪明，一天之计在于晨呀，一生之计在于勤呀，勤奋的少年知多少，古往今来数不清，一天之计在于晨，一生之计在于勤，啦啦啦啦啦，嘿"
      ); // 传入需要播放的文字
    },
    cancel() {
      this.handleStop();
    },
    pauseSpeech() {
      synth.pause();
    },
    resumeSpeech() {
      synth.resume();
    },
    // 语音播报的函数
    handleSpeak(text) {
      msg.text = text; // 文字内容: 小朋友，你是否有很多问号
      msg.lang = "zh-CN"; // 使用的语言:中文
      msg.volume = 1; // 声音音量：1
      msg.rate = 1; // 语速：1
      msg.pitch = 1; // 音高：1
      synth.speak(msg); // 播放
    },
    // 语音停止
    handleStop(e) {
      msg.text = e;
      msg.lang = "zh-CN";
      synth.cancel(msg);
    },
  },
};
</script>
