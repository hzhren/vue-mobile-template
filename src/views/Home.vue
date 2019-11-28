<template>
  <div class="home">
    <div class="header">
      <div class="logo"></div>
    </div>
    <div class="content">
      <div class="cell-1">
        <div class="p1"></div>
        <div class="p2">
          <div class="text text-1">倒计时</div>
          <div class="day">
            <div class="day-box num-0" v-if="day1===0"></div>
            <div class="day-box num-1" v-else-if="day1===1"></div>
            <div class="day-box num-2" v-else-if="day1===2"></div>
            <div class="day-box num-3" v-else-if="day1===3"></div>
            <div class="day-box num-4" v-else-if="day1===4"></div>
            <div class="day-box num-5" v-else-if="day1===5"></div>
            <div class="day-box num-6" v-else-if="day1===6"></div>
            <div class="day-box num-7" v-else-if="day1===7"></div>
            <div class="day-box num-8" v-else-if="day1===8"></div>
            <div class="day-box num-9" v-else></div>
            <div class="day-box num-0" v-if="day2===0"></div>
            <div class="day-box num-1" v-else-if="day2===1"></div>
            <div class="day-box num-2" v-else-if="day2===2"></div>
            <div class="day-box num-3" v-else-if="day2===3"></div>
            <div class="day-box num-4" v-else-if="day2===4"></div>
            <div class="day-box num-5" v-else-if="day2===5"></div>
            <div class="day-box num-6" v-else-if="day2===6"></div>
            <div class="day-box num-7" v-else-if="day2===7"></div>
            <div class="day-box num-8" v-else-if="day2===8"></div>
            <div class="day-box num-9" v-else></div>
          </div>
          <div class="text text-2">天</div>
        </div>
        <div class="p3">
          <div class="item">
            <div class="text-1">自有项目</div>
            <div class="text-2">{{all_inside+'%'}}</div>
          </div>
          <div class="item">
            <div class="text-1">距离目标</div>
            <div class="text-2">{{(95-all_inside).toFixed(2)+'%'}}</div>
          </div>
          <div class="item mt-35">
            <div class="text-1">外拓项目</div>
            <div class="text-2">{{all_outside+'%'}}</div>
          </div>
          <div class="item mt-35">
            <div class="text-1">距离目标</div>
            <div class="text-2">{{(85-all_outside).toFixed(2)+'%'}}</div>
          </div>
        </div>
      </div>
      <div class="cell-2">
        <div class="p-1"></div>
      </div>
      <div class="cell-3">
        <div class="col col-1">
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第1周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第2周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第3周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第4周</div>
            <div class="text-3">虚位以待</div>
          </div>
        </div>
        <div class="col col-2">
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第1周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第2周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第3周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第4周</div>
            <div class="text-3">虚位以待</div>
          </div>
        </div>
        <div class="col col-3">
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第1周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第2周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第3周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第4周</div>
            <div class="text-3">虚位以待</div>
          </div>
        </div>
        <div class="col col-4">
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第1周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第2周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第3周</div>
            <div class="text-3">虚位以待</div>
          </div>
          <div class="style style-2">
            <div class="text-1"></div>
            <div class="text-2">第4周</div>
            <div class="text-3">虚位以待</div>
          </div>
        </div>
      </div>
      <div class="cell-4">
        <div class="list-box">
          <div class="item item-1">
            <div class="company-icon"></div>
            <div>
              <div class="progress">
                <div class="progress-title yellow">自</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color yellow" :style="{width:width.cq.inside+'vw'}">
                    <div class="progress-color-text">{{cq.inside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">95.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
              <div class="progress">
                <div class="progress-title pink">外</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color pink" :style="{width:width.cq.outside+'vw'}">
                    <div class="progress-color-text">{{cq.outside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">85.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item item-2">
            <div class="company-icon"></div>
            <div>
              <div class="progress">
                <div class="progress-title yellow">自</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color yellow" :style="{width:width.sc.inside+'vw'}">
                    <div class="progress-color-text">{{sc.inside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">95.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
              <div class="progress">
                <div class="progress-title pink">外</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color pink">
                    <div class="progress-color-text"></div>
                    <!-- <i></i> -->
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">85.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item item-3">
            <div class="company-icon"></div>
            <div>
              <div class="progress">
                <div class="progress-title yellow">自</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color yellow" :style="{width:width.wh.inside+'vw'}">
                    <div class="progress-color-text">{{wh.inside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">95.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
              <div class="progress">
                <div class="progress-title pink">外</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color pink" :style="{width:width.wh.outside+'vw'}">
                    <div class="progress-color-text">{{wh.outside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">85.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item item-4">
            <div class="company-icon"></div>
            <div>
              <div class="progress">
                <div class="progress-title yellow">自</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color yellow" :style="{width:width.sh.inside+'vw'}">
                    <div class="progress-color-text">{{sh.inside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">95.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
              <div class="progress">
                <div class="progress-title pink">外</div>
                <div>
                  <div class="progress-bg"></div>
                  <div class="progress-color pink" :style="{width:width.sh.outside+'vw'}">
                    <div class="progress-color-text">{{sh.outside.rate}}</div>
                    <i></i>
                  </div>
                </div>
                <div class="progress-target">
                  <div class="progress-text">85.00%</div>
                  <div class="target-cup"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollectionRate, getContrastData } from '../api/poster'
export default {
  name: 'home',
  data () {
    return {
      day1: 1,
      day2: 1,
      cq: {
        inside: {
          total: 0,
          actual: 0,
          rate: ''
        },
        outside: {
          total: 0,
          actual: 0,
          rate: ''
        }
      },
      sc: {
        inside: {
          total: 0,
          actual: 0,
          rate: ''
        },
        outside: {
          total: 0,
          actual: 0,
          rate: ''
        }
      },
      wh: {
        inside: {
          total: 0,
          actual: 0,
          rate: ''
        },
        outside: {
          total: 0,
          actual: 0,
          rate: ''
        }
      },
      sh: {
        inside: {
          total: 0,
          actual: 0,
          rate: ''
        },
        outside: {
          total: 0,
          actual: 0,
          rate: ''
        }
      },
      width: {
        cq: {
          inside: '',
          outside: ''
        },
        sc: {
          inside: '',
          outside: ''
        },
        wh: {
          inside: '',
          outside: ''
        },
        sh: {
          inside: '',
          outside: ''
        }
      }
    }
  },
  computed: {
    all_inside () {
      let total =
        this.cq.inside.total +
        this.sc.inside.total +
        this.wh.inside.total +
        this.sh.inside.total
      let actual =
        this.cq.inside.actual +
        this.sc.inside.actual +
        this.wh.inside.actual +
        this.sh.inside.actual
      return ((actual / total) * 100).toFixed(2)
    },
    all_outside () {
      let total =
        this.cq.outside.total +
        this.wh.outside.total +
        this.sh.outside.total
      let actual =
        this.cq.outside.actual +
        this.wh.outside.actual +
        this.sh.outside.actual
      return ((actual / total) * 100).toFixed(2)
    }
  },
  created () {
    this.getRate()
    getContrastData(1).then(res => {
      console.log(res.data)
    })
    this.getDay()
  },
  methods: {
    // 截止目标日期2020-1-1
    getDay () {
      let leftDays = 0
      let date = new Date()
      let month = date.getMonth() + 1
      let dayNow = date.getDate()
      if (month === 11) {
        leftDays = 30 - dayNow + 31
      } else {
        leftDays = 31 - dayNow
      }
      this.day1 = parseInt(leftDays / 10)
      this.day2 = leftDays % 10
    },
    // 进度条宽度计算
    getProgress () {
      this.width.cq.inside = (
        ((parseFloat(this.cq.inside.rate) / 95) * 328) /
        7.5
      ).toFixed(2)
      this.width.cq.outside = (
        ((parseFloat(this.cq.outside.rate) / 85) * 328) /
        7.5
      ).toFixed(2)
      this.width.sc.inside = (
        ((parseFloat(this.sc.inside.rate) / 95) * 328) /
        7.5
      ).toFixed(2)
      this.width.wh.inside = (
        ((parseFloat(this.wh.inside.rate) / 95) * 328) /
        7.5
      ).toFixed(2)
      this.width.wh.outside = (
        ((parseFloat(this.wh.outside.rate) / 85) * 328) /
        7.5
      ).toFixed(2)
      this.width.sh.inside = (
        ((parseFloat(this.sh.inside.rate) / 95) * 328) /
        7.5
      ).toFixed(2)
      this.width.sh.outside = (
        ((parseFloat(this.sh.outside.rate) / 85) * 328) /
        7.5
      ).toFixed(2)
    },
    getRate () {
      getCollectionRate().then(res => {
        let cq = res.data.cq
        let sc = res.data.sc
        let wh = res.data.wh
        let sh = res.data.sh
        this.cq.inside.total = cq.ownReceivable
        this.cq.inside.actual = cq.ownReceipts
        this.cq.inside.rate = (cq.ownReceipts / cq.ownReceivable * 100).toFixed(2) + '%'
        this.cq.outside.total = cq.extReceivable
        this.cq.outside.actual = cq.extReceipts
        this.cq.outside.rate = (cq.extReceipts / cq.extReceivable * 100).toFixed(2) + '%'

        this.sc.inside.total = sc.ownReceivable
        this.sc.inside.actual = sc.ownReceipts
        this.sc.inside.rate = (sc.ownReceipts / sc.ownReceivable * 100).toFixed(2) + '%'

        this.wh.inside.total = wh.ownReceivable
        this.wh.inside.actual = wh.ownReceipts
        this.wh.inside.rate = (wh.ownReceipts / wh.ownReceivable * 100).toFixed(2) + '%'
        this.wh.outside.total = wh.extReceivable
        this.wh.outside.actual = wh.extReceipts
        this.wh.outside.rate = (wh.extReceipts / wh.extReceivable * 100).toFixed(2) + '%'

        this.sh.inside.total = sh.ownReceivable
        this.sh.inside.actual = sh.ownReceipts
        this.sh.inside.rate = (sh.ownReceipts / sh.ownReceivable * 100).toFixed(2) + '%'
        this.sh.outside.total = sh.extReceivable
        this.sh.outside.actual = sh.extReceipts
        this.sh.outside.rate = (sh.extReceipts / sh.extReceivable * 100).toFixed(2) + '%'
        this.getProgress()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.mt-35 {
  margin-top: 35px;
}
.home {
  height: 5300px;
  background: #b01c1d url("../assets/bg1.png") no-repeat;
  background-size: cover;
  .header {
    padding: 16px;
    .logo {
      width: 250px;
      height: 43px;
      background: url("../assets/logo.png") no-repeat;
      background-size: cover;
    }
  }
  .content {
    .cell-1 {
      .p1 {
        margin: 80px auto 0;
        width: 587px;
        height: 524px;
        background: url("../assets/冲刺加油.png") no-repeat;
        background-size: cover;
      }
      .p2 {
        display: flex;
        align-items: center;
        div {
          display: inline-block;
        }
        .text {
          font-size: 36px;
          font-family: PingFang SC;
          font-weight: 800;
          color: rgba(255, 255, 255, 1);
          line-height: 88px;
          &.text-1 {
            margin: 0 24px 0 126px;
          }
          &.text-2 {
            margin: 0 0 0 24px;
          }
        }
        .day-box + .day-box {
          margin-left: 10px;
        }
        .day-box {
          width: 120px;
          height: 158px;
          &.num-0 {
            background: url("../assets/0.png") no-repeat;
            background-size: cover;
          }
          &.num-1 {
            background: url("../assets/1.png") no-repeat;
            background-size: cover;
          }
          &.num-2 {
            background: url("../assets/2.png") no-repeat;
            background-size: cover;
          }
          &.num-3 {
            background: url("../assets/3.png") no-repeat;
            background-size: cover;
          }
          &.num-4 {
            background: url("../assets/4.png") no-repeat;
            background-size: cover;
          }
          &.num-5 {
            background: url("../assets/5.png") no-repeat;
            background-size: cover;
          }
          &.num-6 {
            background: url("../assets/6.png") no-repeat;
            background-size: cover;
          }
          &.num-7 {
            background: url("../assets/7.png") no-repeat;
            background-size: cover;
          }
          &.num-8 {
            background: url("../assets/8.png") no-repeat;
            background-size: cover;
          }
          &.num-9 {
            background: url("../assets/9.png") no-repeat;
            background-size: cover;
          }
        }
      }
      .p3 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 65px auto 0;
        .item {
          width: 356px;
          height: 177px;
          background: url("../assets/项目类型背景.png") no-repeat;
          background-size: cover;
          .text-1 {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(255, 199, 199, 1);
            text-align: center;
          }
          .text-2 {
            margin-top: 30px;
            font-size: 48px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(78, 77, 78, 1);
            line-height: 88px;
            text-align: center;
          }
        }
      }
    }
    .cell-2 {
      .p-1 {
        height: 560px;
        background: url("../assets/虚位以待.png") no-repeat;
        background-size: cover;
      }
    }
    .cell-3 {
      position: relative;
      width: 750px;
      height: 2108px;
      background: url("../assets/城市排行榜背景.png") no-repeat;
      background-size: cover;
      box-sizing: border-box;
      .col {
        display: flex;
        justify-content: center;
        align-items: center;
        &.col-1 {
          position: absolute;
          top: 370px;
          left: 49px;
        }
        &.col-2 {
          position: absolute;
          top: 740px;
          left: 49px;
        }
        &.col-3 {
          position: absolute;
          top: 1290px;
          left: 49px;
        }
        &.col-4 {
          position: absolute;
          top: 1660px;
          left: 49px;
        }
        .style {
          width: 144px;
          height: 220px;
          .text-1 {
            font-size: 24px;
            line-height: 34px;
            height: 34px;
            font-family: PingFang SC;
            font-weight: 800;
            color: rgba(78, 77, 78, 1);
            text-align: center;
            margin-top: 40px;
          }
          .text-2 {
            margin-top: 40px;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 800;
            color: rgba(255, 233, 161, 1);
            text-align: center;
          }
          .text-3 {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 800;
            color: rgba(255, 233, 161, 1);
            margin-top: 40px;
            text-align: center;
          }
        }
        .style + .style {
          margin-left: 24px;
        }
        .style-1 {
          background: url("../assets/冠军底座1.png") no-repeat;
          background-size: contain;
        }
        .style-2 {
          background: url("../assets/冠军底座2.png") no-repeat;
          background-size: contain;
        }
      }
    }
    .cell-4 {
      position: relative;
      width: 750px;
      height: 1334px;
      background: url("../assets/英雄榜.png") no-repeat;
      background-size: contain;
      .item {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 60px;
        &.item-1 {
          top: 590px;
          .company-icon {
            background: url("../assets/重庆.png") no-repeat;
            background-size: contain;
            width: 162px;
            height: 142px;
          }
        }
        &.item-2 {
          top: 740px;
          .company-icon {
            background: url("../assets/成都.png") no-repeat;
            background-size: contain;
            width: 162px;
            height: 142px;
          }
        }
        &.item-3 {
          top: 890px;
          .company-icon {
            background: url("../assets/武汉.png") no-repeat;
            background-size: contain;
            width: 162px;
            height: 142px;
          }
        }
        &.item-4 {
          top: 1040px;
          .company-icon {
            background: url("../assets/上海.png") no-repeat;
            background-size: contain;
            width: 162px;
            height: 142px;
          }
        }
        .progress + .progress {
          margin-top: 20px;
        }
        .progress {
          display: flex;
          position: relative;
          align-items: flex-end;
          .progress-title {
            &.yellow {
              background: rgba(245, 191, 74, 1);
              border: 1px solid rgba(240, 209, 142, 1);
            }
            &.pink {
              background: rgba(254, 154, 156, 1);
              border: 1px solid rgba(255, 186, 187, 1);
            }
            width: 60px;
            height: 50px;
            box-shadow: 0px 0px 5px 0px rgba(131, 49, 49, 0.61);
            border-radius: 4px;
            text-align: center;
            line-height: 50px;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 800;
            color: rgba(78, 77, 78, 1);
          }
          .progress-bg {
            margin-left: 10px;
            width: 328px;
            height: 12px;
            background: rgba(255, 255, 255, 1);
            border-radius: 5px;
          }
          .progress-color {
            &.yellow {
              background: rgba(245, 191, 74, 1);
              color: rgba(245, 191, 74, 1);
              i {
                border-top: 10px solid rgba(245, 191, 74, 1);
              }
            }
            &.pink {
              background: rgba(254, 154, 156, 1);
              color: rgba(254, 154, 156, 1);
              i {
                border-top: 10px solid rgba(254, 154, 156, 1);
              }
            }
            position: absolute;
            bottom: 0;
            left: 70px;
            width: 0px;
            height: 12px;
            border-radius: 5px;
            .progress-color-text {
              position: absolute;
              right: 10px;
              bottom: 20px;
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 800;
            }
            i {
              position: absolute;
              right: -8px;
              bottom: 16px;
              display: inline-block;
              width: 0;
              height: 0;
              border-bottom: 10px solid transparent;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
            }
          }
          .progress-target {
            .progress-text {
              position: relative;
              bottom: -2px;
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 800;
              color: rgba(255, 255, 255, 1);
            }
            .target-cup {
              position: relative;
              bottom: -10px;
              width: 22px;
              height: 22px;
              margin-left: 10px;
              background: url("../assets/奖杯.png") no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
</style>
