import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import "./index.css";

interface IState {
  startDate: string;
  endDate: string;
}

export default class Index extends Component<IState, {}> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    startDate: "",
    endDate: ""
  } as IState;

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onDateChange(prop, e) {
    this.setState({
      [prop]: e.detail.value
    });
  }

  render() {
    const { startDate, endDate } = this.state;
    return (
      <View className="index">
        <View className="page-section">
          <View>
            <Picker
              mode="date"
              onChange={this.onDateChange.bind(this, "startDate")}
              end={endDate}
              value={startDate}
            >
              <View className="picker">开始日期: {startDate}</View>
            </Picker>
          </View>
        </View>
        <View className="page-section">
          <View>
            <Picker
              mode="date"
              onChange={this.onDateChange.bind(this, "endDate")}
              start={startDate}
              value={endDate}
            >
              <View className="picker">结束日期: {endDate}</View>
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}
