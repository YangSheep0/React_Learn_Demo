import React from 'react';
import './index.css'
/***
 * tic-tac-toe(三连棋)游戏的所有功能
    能够判定玩家何时获胜 √
    能够记录游戏进程 √
    允许玩家查看游戏的历史记录，也可以查看任意一个历史版本的游戏棋盘状态 √
    在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。 √
    在历史记录列表中加粗显示当前选择的项目。√
    使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。 √
    添加一个可以升序或降序显示历史记录的按钮。 √
    每当有人获胜时，高亮显示连成一线的 3 颗棋子。 √
    当无人获胜时，显示一个平局的消息。 √
 */
  function Square(props){
      return (
        <button className="square" onClick={props.onClick} style={props.styles}> 
            {props.value}
        </button>
      )
  }
  class Board extends React.Component {
    
    renderSquare(j) {
      const boardRaw = [];
      for(let i = 0;i < 3;i++){
          boardRaw.push(
            <Square 
                key={i+j*3}
                value={this.props.squares[i+j*3]} 
                onClick={()=>this.props.onClick(i+j*3)}
                styles={this.props.styles(i + j * 3)}
            />
          )
      }
      console.log(boardRaw);
      return boardRaw;
    }
    
    render() {
        const showBoard = [];
        for(let j = 0;j<3;j++){
            showBoard.push(
                <div className="board-row" key={j}>
                    {this.renderSquare(j)}
                </div>
            )
        }
      return showBoard;
    }
  }
  
  class Game extends React.Component {
    constructor(props){  //初始化阶段
        super(props);
        this.state={
            history:[{
                squares:Array(9).fill(null),
            }],
            xIsNext:true,
            stepNumber:0,
            //历史记录排序方式
            descOrder:false,
        }
    }
    handleWinnerStyle(winnerLine, i) {
      const styles = {
        background: "pink"
      };
      if (winnerLine && winnerLine.indexOf(i) > -1) {
        return styles;
      }
      return null;
    }
    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current =history[history.length-1];
        const squares = current.squares.slice();
        const currentColumn =(i+1) % 3 === 0 ? 3 :(i+1) % 3;
        const currentRaw = parseInt(i/3)+1;
        if(calculateWinner(squares) || squares[i]){
            console.log('别寄吧乱下');
            return;
        }
        squares[i]=this.state.xIsNext ?'X':'O';
        this.setState({
            history: history.concat([{
                squares:squares,
                //坐标 [列，行]
                nowCoordinate:[currentColumn,currentRaw]
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber:history.length,
            //历史记录排序方式
            descOrder:this.state.descOrder
        });
    }
    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0,
        })
    }
    
    /**
     * 
     * @function 改变历史记录正序/逆序显示的参数
     * @params descOrder
     */
     reverseHistory = ()=> {
        const { descOrder } = this.state;
        this.setState({
          descOrder :!descOrder
        })   
     }
    render() {  //挂载阶段
        // const history =this.state.history;
        const { history , stepNumber , descOrder} =this.state;
        const current = history[stepNumber];
        const winnerLine = calculateWinner(current.squares);

        const moves = history.map((step,move)=>{
            const desc = move ? `第${move}步 坐标[${step.nowCoordinate}]` : 'Game Remake';
            //加粗显示当先记录
            return (
                <li key={move}>
                    <button className={move === stepNumber ? 'currentButton' : 'button'} onClick={()=> this.jumpTo(move)}>{desc}</button>
                </li>
            )
             
        })
        //Game组件渲染执行
        if(descOrder){
          moves.reverse();
        }

        let status;
        if(winnerLine){
            //获胜
            const winner = current.squares[winnerLine[0]];
            status = `Winner : ${winner}!!`
        }else if(this.state.stepNumber==9){
          status = `平局`
        }
        else{
            status = `Next player: ${this.state.xIsNext?'X':'0'}`;
        }
        //获胜旗子高亮
        return (
          <div className="game">
            <div className="game-board">
              <Board
                squares ={current.squares}
                onClick = {(i)=> this.handleClick(i)}
                styles={(i) => this.handleWinnerStyle(winnerLine, i)}
              />
            </div>
            <div className="game-info">
              <div>{status}</div>

              <button
                className="button"
                onClick={() => this.reverseHistory()}
              >
                {descOrder ? '降序排列' : '升序排列'}
              </button>
              <ol>{moves}</ol>
            </div>
          </div>
        );
    }
  }
  
  /**
   * 判断获胜 
   * @param {} squares 
   * @returns lines[i] 获胜组合
   */
  function calculateWinner(squares){
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for(let i in lines){
          const [a,b,c] = lines[i];
          if(squares[a]&&squares[a] === squares[b] && squares[a]===squares[c]){
              return lines[i];
          }
      }
      return null;
  }
  // ========================================
  
export default Game
  