// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// 组件 this.$store.dispatch('changeCity')
export default {
  changeCity (context) {
    // 进行异步操作 再把数据提交到 mutations
    context.commit('changeCity', '北京')
  }
}
