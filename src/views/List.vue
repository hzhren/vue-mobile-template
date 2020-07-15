<template>
  <div class="container">
    <!-- <van-list v-model="loading" :finished="finished" @load="onLoad"> -->
    <!-- </van-list> -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" v-if="list.length">
      <div class="cell" v-for="(item,index) of list" :key="index">
        <van-tag color="rgba(76, 196, 158, 1)" v-if="item.auditType==='COMPLETE'" class="tag2">完成审批</van-tag>
        <van-tag color="rgba(233, 98, 65, 1)" v-if="item.auditType==='CHANGE'" class="tag2">变更审批</van-tag>
        <van-tag
          color="rgba(111, 127, 171, 1)"
          v-if="item.auditType==='TERMINATION'"
          class="tag2"
        >终止审批</van-tag>
        <div>
          <div class="laebl-1">计划项：</div>
          <div class="text-1">{{item.planContent}}</div>
        </div>
        <div class="flex-box">
          <div class="label-2">达成标准：</div>
          <div class="text-2">{{item.standardDescription}}</div>
        </div>
        <div
          class="btn-detail"
          v-if="item.auditType==='COMPLETE'"
        >查看详情</div>
        <div class="btn-detail" v-else>查看详情</div>
      </div>
    </van-pull-refresh>
    <div class="empty" v-if="list.length===0">
      <div class="img-box"></div>
      <div>从这里开始</div>
    </div>
    <div class="button-return" v-if="list.length===0">东原信息组@2020</div>
  </div>
</template>

<script>
import { getAuditList, getSysParam } from '@/api/interface'
export default {
  data () {
    return {
      loading: false,
      finished: false,
      userId: null,
      list: [],
      refreshing: false
    }
  },
  mounted () {
    getSysParam().then(res => {
      this.$ls.set('rebutType1', res.data.rebutType1)
      this.$ls.set('rebutType2', res.data.rebutType2)
    })
    this.onLoad()
  },
  methods: {
    // 获取url参数
    getQuery () {
      let query = window.location.hash.split('?')[1]
      if (query) {
        let myArr = query.split('&')
        myArr.forEach(item => {
          let arr = item.split('=')
          if (arr[0] === 'userId') {
            this.userId = arr[1]
          }
        })
      }
    },
    onLoad () {
      // 异步更新数据
      this.getQuery()
      let userId = this.userId || 'b13827fc-0358-44c5-be73-d27eb8f0ecd2'
      localStorage.setItem('h5-userId', userId)
      this.loading = false
      getAuditList(userId).then(res => {
        this.list = res.list
        this.finished = true
        let that = this
        setTimeout(function () {
          that.refreshing = false
        }, 1000)
      })
    },
    onRefresh () {
      this.onLoad()
      this.refreshing = true
    }
  }
}
</script>

<style scoped lang="less">
.container {
  background: rgba(250, 250, 250, 1);
  font-family: PingFang SC;
  // min-height: 99vh;
  .van-pull-refresh {
    min-height: 98vh;
  }
  .cell {
    width: 706px;
    // height: 341px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03);
    border-radius: 14px;
    position: relative;
    margin: 9px auto 0;
    font-size: 24px;
    font-weight: bold;
    box-sizing: border-box;
    padding: 30px 40px;
    line-height: 36px;
    .tag2 {
      position: absolute;
      right: 0;
      top: 0;
      // font-size: 20px;
    }
    .tag {
      width: 116px;
      height: 34px;
      border-radius: 4px;
      text-align: center;
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
      line-height: 34px;
      position: absolute;
      right: 0;
      top: 0;
      &.green {
        background: rgba(76, 196, 158, 1);
      }
      &.red {
        background: rgba(233, 98, 65, 1);
      }
      &.blue {
        background: rgba(111, 127, 171, 1);
      }
    }
    .btn-detail {
      width: 180px;
      height: 66px;
      border-radius: 14px;
      font-size: 24px;
      text-align: center;
      line-height: 66px;
      margin: 20px auto 0;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(111, 127, 171, 1);
      box-shadow: 3px 4px 10px 0px rgba(111, 127, 171, 0.24);
      box-sizing: border-box;
      color: #6f7fab;
      &:hover {
        background: linear-gradient(
          90deg,
          rgba(188, 230, 217, 1),
          rgba(111, 127, 171, 1)
        );
        box-shadow: 3px 4px 10px 0px rgba(76, 196, 158, 0.24);
        border: 0;
        color: #ffffff;
      }
    }
    .label-1 {
      color: #333333;
    }
    .text-1 {
      color: #6f7fab;
      line-height: 42px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /*用来限制在一个块元素显示的文本的行数。*/
      -webkit-box-orient: vertical;
    }
    .label-2 {
      color: #333333;
    }
    .text-2 {
      color: #666666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /*用来限制在一个块元素显示的文本的行数。*/
      -webkit-box-orient: vertical;
    }
  }
  .empty {
    margin-top: 40vh;
    text-align: center;
    background: #ffffff;
    .img-box {
      width: 134px;
      height: 90px;
      margin: 0 auto 12px;
      background: url("../asset/p1.png") no-repeat;
      background-size: contain;
    }
    color: #c5c8e1;
    font-size: 16px;
  }
  .button-return {
    width: 670px;
    height: 98px;
    background: linear-gradient(
      90deg,
      rgba(188, 230, 217, 1),
      rgba(111, 127, 171, 1)
    );
    box-shadow: 3px 4px 10px 0px rgba(76, 196, 158, 0.24);
    border-radius: 49px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 98px;
    position: fixed;
    bottom: 100px;
    left: 40px;
    text-align: center;
  }
}
</style>
