<template>
  <div class="index-container">
    <div class="title1">距招新宣讲</div>
    <div class="time">
      <span class="num">{{ days }}</span> 天
      <span class="num">{{ hours }}</span> 时
      <span class="num">{{ seconds }}</span> 秒
    </div>
    <div class="title2">ZeQi Wants You!</div>
  </div>
</template>

<script>
export default {
  data() {
    console.log(endTime)
    return {}
  },
  methods: {
    addZero: n => {
      return n < 10 ? '0' + n : n + ''
    },
    countTime: () => {
      var startTime = new Date()
      var endTime = new Date('2020/09/25,16:20:00')
    }
  }
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
</style>
