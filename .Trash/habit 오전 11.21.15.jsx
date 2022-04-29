import React, { Component } from "react";
class Habit extends Component {
  state = { count: 0 }; //state 오브젝트란?}

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
    //새로운 오브젝트 count를 선언 -> count라는 이름의 변수에는 this.state.count +1 이 증가되는 값을 할당해준다.
    // state 를 바로 수정할 경우에는 인식하지 못하기 때문에 꼭 setState 함수를 이용해 호출해주어야한다.
 };

 handleDecrement = () => {
    const count = this.state.count -1
    this.setState({count: count < 0 ? 0 : count });
    //count를 변수로 선언해서 그안에 우리가 만들어줄 카운트를 넣고 그리고 셋 스테이트에
    //우리가 만든 이 카운트가 영보다 작으면 0을 출력하고 아니면 카운트 -되는거 계속 출력해~~

    //새로운 오브젝트 count를 선언 -> count라는 이름의 변수에는 this.state.count +1 이 증가되는 값을 할당해준다.
    // state 를 바로 수정할 경우에는 인식하지 못하기 때문에 꼭 setState 함수를 이용해 호출해주어야한다.
 };




  render() {
      console.log(this.props.habit);
    return (
      <li className="habit">
        <span className="habit-name"></span>
        <span className="habit-count">{this.state.count}</span>
        {/* state를 넣었을때는 0이들어가고 버튼을 실행할때 함수에서 인자값이 필요없음 단지 setState로 변경된 값을 넣어준다.  */}
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
        <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease"
            onClick={this.handleDecrement}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
