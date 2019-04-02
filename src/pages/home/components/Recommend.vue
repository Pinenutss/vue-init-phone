<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id">
        <img class="item-img"
          :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.16rem;
  line-height: 1.0667rem;
  background: #eee;
  text-indent: 15px;
  font-size: 0.48rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 2.6667rem;
  align-items: center;
  justify-content: space-between;

  .item-img {
    width: 1.8667rem;
    height: 1.8667rem;
    padding: 0.2667rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1333rem;
    min-width: 0;

    .item-title {
      line-height: 0.6667rem;
      font-size: 0.48rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.5333rem;
      color: #ccc;
      ellipsis();
      font-size: 0.3733rem;
    }

    .item-button {
      line-height: 0.5867rem;
      margin-top: 0.2133rem;
      background: #ff9300;
      padding: 0 0.1333rem;
      border-radius: 0.0667rem;
      color: #fff;
      font-size: 0.3733rem;
    }
  }
}
</style>
