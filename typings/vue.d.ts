import Vue from 'vue'

// 扩展vue接口
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $app: any
    $dict: any
    $layout: string
    $filter: any
    $common: any
    $window: any
  }
}
