<template>
  <div>

    <div> {{pageNo}} {{pageSize}}</div>
    <div class="wrapper"
      ref="wrapper">
      <div>

        <div class="top-tip">
          <span>下拉刷新</span>
        </div>

        <ul class="content">
          <li v-for="(item,i) in items"
            :key='i'>{{item}}</li>
        </ul>

        <div class="bottom-tip">
          <span>查看更多</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { setTimeout } from 'timers'
export default {
  name: 'scroll',
  data () {
    return {
      pageNo: 1,
      pageSize: 5,
      totalPage: 100,
      items: []
    }
  },
  mounted () {
    for (let i = 0; i < 20; i++) {
      this.items.push(i + '列表' + Math.random())
    }
    this.init_scroll()
  },
  methods: {
    init_scroll () {
      // new Bscroll(),初始化容器；
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollY: true,
        probeType: 3,
        click: true,
        pullDownRefresh: {
          threshold: 80, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 40 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -80 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        }
      })
      // 初始化上拉加载
      this.scroll.on('pullingUp', () => {
        if (this.totalPage >= this.pageNo) {
          this.pageNo++ // 通过pageNo增加，加载第二页的数据
          this.loading = true
          this.getList()
        } else {
          this.loading = false
          this.loadingOver = true
        }
      })

      // 初始化下拉刷新
      this.scroll.on('pullingDown', () => {
        this.pageNo = 1
        this.items.shift()
        console.log('下拉刷新')

        setTimeout(() => {
          this.scroll.finishPullDown() // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
        }, 600)
      })
    },
    getList () {
      console.log('获取数据')
      // setTimeout(() => {
      this.items.push('yyyyyyyyyyyyy')
      this.items.push('sssssssssssss')
      this.items.push('qqqqqqqqqqqqq')
      this.items.push('wwwwwwwwwwwww')
      this.items.push('yyyyyyyyyyyyy')
      this.items.push('sssssssssssss')
      this.items.push('qqqqqqqqqqqqq')
      this.items.push('wwwwwwwwwwwww')
      this.items.push('yyyyyyyyyyyyy')
      this.items.push('sssssssssssss')
      this.items.push('qqqqqqqqqqqqq')
      this.items.push('wwwwwwwwwwwww')
      // }, 1000)

      this.scroll.refresh()
      this.scroll.finishPullUp() // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
    }
  }
}
</script>

<style>
html {
  background-color: #f1f1f1;
}

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.top-tip {
  position: absolute;
  top: -1rem;
  display: flex;
  width: 100%;
  height: 1.3333rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bottom-tip {
  position: absolute;
  bottom: -1rem;
  display: flex;
  width: 100%;
  height: 1.3333rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

li {
  display: flex;
  height: 1.3333rem;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
</style>
