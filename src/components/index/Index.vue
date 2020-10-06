<template>
  <div class="index-container">
    <div class="title1">距招新宣讲</div>
    <div class="time">
      <span class="num">{{ days }}</span> 天
      <span class="num">{{ hours }}</span> 时
      <span class="num">{{ minutes }}</span> 分
      <span class="num">{{ seconds }}</span> 秒
    </div>
    <div class="title2">ZeQi Wants You!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: '0',
      hours: '0',
      minutes: '0',
      seconds: '0',
    }
  },
  created() {
    this.countTime()
  },
  methods: {
    addZero: (n) => {
      return n < 10 ? '0' + n : n + ''
    },
    countTime: function () {
      var startTime = new Date().getTime()
      var endTime = new Date('2020/09/26 19:35:00').getTime()
      var leftTime = (endTime - startTime) / 1000
      console.log(leftTime)
      if (leftTime >= 0) {
        var d = Math.floor(leftTime / 60 / 60 / 24)
        var h = Math.floor((leftTime - d * (60 * 60 * 24)) / 60 / 60)
        var m = Math.floor((leftTime - d * (60 * 60 * 24) - h * 60 * 60) / 60)
        var s = Math.floor(leftTime - d * (60 * 60 * 24) - h * 60 * 60 - m * 60)
        this.days = this.addZero(d)
        this.hours = this.addZero(h)
        this.minutes = this.addZero(m)
        this.seconds = this.addZero(s)
      }
      setTimeout(this.countTime, 1000)
    },
  },
}
</script>

<style scoped>
.index-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 61px);
}

.title1 {
  font-size: 70px;
  font-weight: 700;
}

.time {
  font-size: 120px;
  font-weight: 900;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.num {
  color: rgb(214, 15, 15);
}
</style>
