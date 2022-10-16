<script setup lang="ts">
import { Ref, ref } from "vue";
import { topNavData } from "../../server";
import { styles } from "../../type";
import MioIcon from "../icon/MioIcon.vue";
const iconStyle: Ref<styles.Mstyles> = ref<styles.Mstyles>({
  width: "20px",
  height: "20px",
});
// 先 leftTitle这种本地数据统一放入 loca-data里
// 直接 import 导入 使用就可以了
</script>

<template>
  <div class="header">
    <!-- <router-link to="/home">home</router-link>
    <router-link to="/test">test</router-link> -->
    <!-- <mio-icon title="#icon-bilibili" /> -->
    <div class="left">
      <ul>
        <!-- 这其实每一个都是一个链接 -->
        <!-- key 不要用 index  -->
        <!-- 后面 right也是一样 -->
        <li v-for="item in topNavData.leftTitle" :key="item.key">
          <router-link :to="item.path">
            <div class="left-item">
              <mio-icon :title="item.ico" :style="iconStyle" v-if="item.ico" />
              <span>{{ item.title }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="center">
      <form action="" id="nav-searchform">
        <div class="nav-search-content">
          <input
            type="text"
            placeholder="游戏是怎样掏空你钱包的？"
            class="nav-search-input"
          />
        </div>
        <div class="nav-search-btn">
          <mio-icon title="#icon-sousuo" :style="iconStyle" />
        </div>
      </form>
    </div>
    <div class="right">
      <ul>
        <li>
          <a href="#">
            <div class="box">
              <span>登录</span>
            </div>
          </a>
        </li>
        <li v-for="(item, index) in topNavData.rightTitle" :key="index">
          <a href="#">
            <div class="container">
              <mio-icon
                :title="item.ico"
                class="ico"
                :style="iconStyle"
                v-if="item.ico"
              />
              <span>{{ item.title }}</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="contribution">
              <mio-icon title="#icon-shangchuan" :style="iconStyle" />
              <span>投稿</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../common/css/common.less";
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: @HEADERheight;
  z-index: 1;
  background-color: #f0cccc;
  .left {
    display: flex;
    flex-shrink: 0;
    .left-item {
      display: flex;
      justify-items: center;
      align-items: center;
      span {
        padding-left: 8px;
      }
      span:hover {
        animation: mymove 0.2s 1;
        -webkit-animation: mymove 0.2s 1;
      }
    }
  }
  .center {
    display: flex;
    flex: 1;
    justify-content: center;
    #nav-searchform {
      display: flex;
      align-items: center;
      position: relative;
      height: 40px;
      padding: 0 48px 0 4px;
      border: 1px solid #f1f2f3;
      background-color: #f1f2f3;
      border-radius: 8px;
      opacity: 0.6;
    }
    .nav-search-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 32px;
      padding: 0 8px;
      border: 2px solid transparent;
      border-radius: 8px;
    }
    .nav-search-input {
      padding-right: 8px;
      border: none;
      background-color: #f1f2f3;
    }
    .nav-search-btn {
      position: absolute;
      top: 8px;
      right: 12px;
    }
  }
  .right {
    display: flex;
    flex-shrink: 0;
    ul li {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    .box {
      width: 36px;
      height: 36px;
      background-color: #00aeec;
      color: white;
      line-height: 36px;
      text-align: center;
      border-radius: 50%;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .contribution {
      padding: 6px 16px;
      background-color: #fb7299;
      border-radius: 8px;
    }
    .ico:hover {
      animation: mymove 0.2s 1;
      -webkit-animation: mymove 0.2s 1;
    }
  }
}

ul {
  display: flex;
  list-style: none;
  li {
    text-align: center;
    padding: 6px;
  }
}
span {
  font-size: 14px;
  color: white;
  white-space: nowrap; //设置文字不换行\
}

@keyframes mymove {
  0% {
    top: 0px;
    left: 0px;
  }
  100% {
    transform: translateY(-4px);
  }
}

// less的用法 看我写的vue文件
</style>
