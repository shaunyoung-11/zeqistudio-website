<template>
  <div class="member-container">
    <div class="member-title">成员去向</div>
    <div class="member-content">
      <div class="member-item">
        <div class="avatar"></div>
        <div class="info"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.member-container {
  padding: 50px 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-title {
  font-size: 60px;
  font-weight: 800;
}

.member-title::after {
  content: '';
  display: block;
  width: 80%;
  transform: translateX(10%);
  background-color: #aedbca;
  height: 5px;
  margin-top: 5px;
}

.member-content {
  margin-top: 30px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
