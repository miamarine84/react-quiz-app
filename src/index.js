import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService/index";
import QuestionBox from "./components/questionBox";

class QuizBee extends Component {
  state = {
    questionBank: []
  };
  getQuestions = () =>{
    quizService().then(question=>{
      this.setState({
        questionBank: question
      })
    })
  }
  componentDidMount(){
    this.getQuestions();
  }

  render(){

    return (
      <div className="container">
        <div className="title">
          QuizBee
        </div>
        {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, correct, questionId}) => 
        <QuestionBox 
          question={question}
          options={answers}
          key={questionId}
        />

        )}
      </div>

    );
  }
}

ReactDOM.render(<QuizBee/>, document.getElementById("root"))
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
