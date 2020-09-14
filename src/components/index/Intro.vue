<template>
  <div class="intro-container">
    <div class="intro-top">
      <div class="slides">
        <el-carousel trigger="click" class="slide" height="400px">
          <el-carousel-item v-for="item in imgSrc" :key="item">
            <img :src="item" class="slide-img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="info">
        <img
          class="logo"
          src="https://gitee.com/zeqistudio/zeqistudio/raw/master/image/icon/Logo1.png"
          alt=""
        />
        <h1 class="title">择栖工作室</h1>
      </div>
    </div>
    <div class="intro-text">
      <div class="summary intro-text-area">
        <h1 class="intro-title">概况</h1>
        <div class="intro-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
          deleniti asperiores? Accusantium harum nobis incidunt! Ea magni totam
          ex sed nam omnis beatae maiores magnam consequuntur quibusdam, ipsum
          voluptates.
        </div>
      </div>
      <div class="spirit intro-text-area">
        <h1 class="intro-title">文化精神</h1>
        <div class="intro-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempora doloremque dolorum, ratione labore ex quia iusto, esse veniam
          vitae optio eveniet iure quam consequuntur, earum temporibus. Fuga,
          facilis sapiente!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599886732635&di=130da6ea6f27b83b3c3e73f7d53fda0b&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190731%2F20%2F1564576654-bCShdNQlDG.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599886732635&di=78746c11492b6688dd7af7b4287be2c7&imgtype=0&src=http%3A%2F%2Fimg.meitumeixiu.com%2FImages%2FDongWu%2FImages%2F9%2F113.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599886732634&di=da85518ba2306e34bcaf8227d9bf9dfa&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fv2%2F5j%2FQJ8788042617.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.intro-container {
  width: 100%;
  min-height: calc(100vh - 61px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 7vw;
}

.intro-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  width: 100%;
}

.slides {
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide {
  width: 100%;
  position: relative;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
}

.logo {
  width: 234px;
  height: 270px;
}

.title {
  font-size: 70px;
  font-weight: 800;
}

.intro-text {
  padding: 50px 7vw;
}

.intro-text-area {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-title {
}

.intro-title::after {
  content: '';
  display: block;
  width: 80%;
  height: 5px;
  background-color: #aedbca;
  margin-top: 2px;
  transform: translateX(10%);
  border-radius: 3px;
}

.intro-content {
  margin-top: 10px;
  font-size: 20px;
  text-align: justify;
  text-indent: 36px;
}
</style>
