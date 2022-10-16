import { topNav } from "../../type";
// 顶部的 nav数据
// 现在写类型
// 使用接口
export const leftTitle: topNav.Mnav[] = [
  {
    title: "首页",
    path: "#",
    key: "0",
    // 自己加吧，每一个都加上key值，key不能重复
    ico: "#icon-bilibili1",
  },
  {
    title: "番剧",
    path: "#",
    key: "1",
  },
  {
    title: "直播",
    path: "#",
    key: "2",
  },
  {
    title: "游戏中心",
    path: "#",
    key: "3",
  },
  {
    title: "会员购",
    path: "#",
    key: "4",
  },
  {
    title: "漫画",
    path: "#",
    key: "5",
  },
  {
    title: "赛事",
    path: "#",
    key: "6",
  },
  {
    title: "s12",
    path: "#",
    key: "7",
  },
  {
    title: "下载客户端",
    ico: "#icon-xiazai",
    path: "#",
    key: "8",
  },
];

export const rightTitle: topNav.Mnav[] = [
  {
    title: "大会员",
    path: "#",
    ico: "#icon-wodedahuiyuan",
    key: "0",
  },
  {
    title: "消息",
    path: "#",
    ico: "#icon-xiaoxi",
    key: "1", // 这边是新的v-for 所以可以从0开始，同一个v-for里的key不能重复 继续改吧
  },
  {
    title: "收藏",
    path: "#",
    ico: "#icon-shoucang",
    key: "2",
  },
  {
    title: "历史",
    path: "#",
    ico: "#icon-lishi",
    key: "3",
  },
  {
    title: "创作中心",
    path: "#",
    ico: "#icon-chuangzuozhongxin",
    key: "4",
  },
];

// 现在演示一下提交代码
