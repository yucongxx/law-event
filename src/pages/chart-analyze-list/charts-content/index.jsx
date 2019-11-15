import React from 'react';
import { withRouter } from 'react-router'
import { Spin, message } from 'antd'
import { getEchartsList } from '../../../common/utils/http'
import queryString from 'query-string'
import ReactEcharts from 'echarts-for-react'
import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep'
import './index.less'


const circleChartOption = {
    title:{
        text:''
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:[]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[]
        }
    ]
}

const clomnChartOption = {
    title: {
        text: '',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: []
    },
    series: []
}

@withRouter
class EchartsContent extends React.Component {
    constructor(props) {
        super(props)
        this.circleChartOptions = circleChartOption
        this.clomnChartOptions = clomnChartOption
        this.timer = null
        this.state = {
            searchValue: '',
            echartsData: []
        }
    }

    componentDidMount() {
        let { location: { search } } = this.props
        const parseObj = queryString.parse(search)

        // this.loginCheck(parseObj)
        this.getEchartsData(parseObj)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    loginCheck = (parseObj) =>{
        let isLogin  = localStorage.getItem('loginInfo')

        if(!isLogin){
            message.error('请先登录')
            this.timer = setTimeout(()=> {
                window.location.href = 'http://www.goingai.com/api/oauth2/authorization/weixin'
            },1000)
            return 
        }

        this.setState({
            searchValue: parseObj.inputValue
        })
    }

    getEchartsData = (parseObj) => {
        const { onEvent } = this.props
        let postData = parseObj && parseObj.inputValue


        getEchartsList(postData).then(res => {

            onEvent('searchCharts')
            this.setState({
                echartsData: res.data && res.data.data
            })
        })
    }

    EventsDict = () => {

    }

    onChartReadyCallback = () => {

    }

    getOption = (data) => {
        let circleData = []
        let legendData = []
        let clomnData = []
        let yAxisData = []

        switch (data.title) {
            case "anLiAnJianLeiXing":
            case "案例案件类型":
            case "anLiSheJiFaYuanCengJi":
            case "案例涉及法院层级":
            case "anLiShenPanChengXu":
            case "案例审判程序":
            
            this.circleChartOptions = cloneDeep(this.circleChartOptions)

                for(let key in data.config){
                    circleData.push({
                        value:data.config[key],
                        name:key
                    })
                    legendData.push(key)
                }

                this.circleChartOptions.title.text = data.title
                this.circleChartOptions.series[0].data = circleData
                this.circleChartOptions.legend.data = legendData
               
                return this.circleChartOptions
            
            default:
                this.clomnChartOptions = cloneDeep(this.clomnChartOptions)
            
                for(let key in data.config){
                    clomnData.push(data.config[key])
                    yAxisData.push(key)
                }

                this.clomnChartOptions.title.text = data.title
                this.clomnChartOptions.yAxis.data = yAxisData
                this.clomnChartOptions.series[0] = {
                    name:data.title,
                    type:'bar',
                    data: clomnData
                }

                return this.clomnChartOptions
        }

    }

    render() {
        const { echartsData } = this.state

        return (
            <div className="echarts-list-content-wrap">
                {
                    !isEmpty(echartsData) && echartsData.map((item,index) => {
                        return (
                            <div className="echarts-item" key={index}>
                                <ReactEcharts
                                    option={this.getOption(item,index)}
                                    notMerge={true}
                                    lazyUpdate={true}
                                    theme={"theme_name"}
                                    onChartReady={this.onChartReadyCallback}
                                    onEvents={this.EventsDict}
                                />
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}


export default EchartsContent