const echarts = window.echarts
export default {
  data() {
    this.chart = null // 图表实例
    this.option = {} // 图表参数
    this.isInitEvent = false // 是否完成事件绑定
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    /**
     * 初始化图表实例
     */
    init() {
      if (!this.$refs.chart) {
        throw new Error('请指定一个属性ref为chart的容器')
      }
      this.chart = echarts.init(this.$refs.chart)
    },
    /**
     * 设置图表配置数据、绑定事件
     */
    render(option) {
      this.$nextTick(() => {
        // 设置图表实例的配置项以及数据
        this.chart.setOption(option)
        // 绑定图表事件
        if (this.isInitEvent) {
          this.isInitEvent = true
          this.events()
        }
      })
    },
    rerender(option) {
      this.chart.dispose()
      this.init()
      this.render(option)
    },
    /**
     * 图表绑定的事件
     */
    events() {
      // ...
    },
    /**
     * 在容器宽高变化时调用 resize 方法
     */
    resize() {
      this.$nextTick(() => {
        this.chart.resize()
      })
    },
    linearGradient(...rest) {
      return new echarts.graphic.LinearGradient(...rest)
    },
    genRandomData(n, max) {
      const rows = []
      for (let i = 0; i < n; i++) {
        const count = Math.floor(Math.random() * max)
        rows.push(count)
      }
      return rows
    }
  }
}
