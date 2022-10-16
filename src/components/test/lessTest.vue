<script setup lang="ts"></script>

<template>
  <div class="less">
    <div class="child">
      <div class="h2">第二级</div>
      <div class="son">
        <h3>第三级</h3>
      </div>
    </div>
    <div class="child-2">
      <h2>childe2</h2>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 导入 less变量
@import "../../common/css/common.less";

// 最高级别，然后在里面套就可以了
.less {
  // 同级别的 并列写 ，然后里面还可以嵌套
  .child {
    .son {
      // 使用
      height: @HEADERheight;
      background-color: red;
    }
  }
  .child-2 {
  }
}
</style>
