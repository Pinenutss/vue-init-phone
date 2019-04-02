<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    align-items center
    .header-left
      width: 0.8rem
      float: left
      .back-icon
        text-align: center
        font-size: 0.1867rem
    .header-input
      flex: 1
      height: 0.6667rem
      line-height: 0.6667rem
      background: #fff
      border-radius: 0.0667rem
      color: #ccc
      font-size 0.3733rem
      padding-left 0.2667rem
    .header-right
      font-size 0.3733rem
      min-width: 1.3333rem
      padding: 0 0.1333rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left:0.0533rem
        font-size: 0.1867rem
</style>
