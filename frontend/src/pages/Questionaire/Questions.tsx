import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { QuestionImage } from "../../assets";
import "./questions.css";

interface Question {
    id: number;
    quiz: string;
  }
  
  interface SelectedAnswers {
    [key: number]: string;
  }

const questionsTextData = [
  {
    quiz: "How do you handle difficult or unhappy customers?",
  },
  {
    quiz: "Can you describe a time when you demonstrated honesty and integrity in your work?",
  },
  {
    quiz: "How do you prioritize and manage your workload during busy periods?",
  },
  {
    quiz: "What sets your shop apart from other repair shops in the area?",
  },
  {
    quiz: "Have you ever made a mistake while repairing a device? How did you handle it?",
  },
  {
    quiz: "Can you describe a time when you went above and beyond for a customer?",
  },
];

const questionCheckBox:Question[] = [
  {id: 1, quiz: "Have you ever failed to complete a job you were hired to do?" },
  {id: 2, quiz: "Are you willing to offer a warranty or guarantee on your work?" },
  {id: 3, quiz: "Have you ever overcharged a customer for your services?" },
  {id: 4, quiz: "Have you ever provided substandard service to a customer?" },
];
const Questions = () => {

    const navigate = useNavigate()
    const [answers, setAnswers] = useState(
        questionsTextData.map(() => "")
      );

      const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

  const handleRadioChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedAnswers({ ...selectedAnswers, [name]: value });
  };

      const handleAnswerChange = (index:number, event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
      };

      const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(answers)
        console.log(selectedAnswers)
        navigate('/TechnicianSignUp', { state: { isTechnician: true } });
      }

      
  return (
    <section className="question-section">
      <div
        className="question-hero"
        style={{
          backgroundImage: `url(${QuestionImage})`,
        }}
      >
        <div className="absolute-container">
          <h2>Join Our Team</h2>
          <p>
            Want to become a technician on our platform? Start here! Complete
            your application by telling us more about yourself and your skills.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="questions-container">
        {questionsTextData.map((item , index)=>(<div className="question-card" key={index}>
            <p>Question {index+1}: </p>
            <label htmlFor={`answer-${index}`}>{item.quiz}</label>
            <textarea
           id={`answer-${index}`}
                  rows={5}
                  cols={30}
                  placeholder="Enter your answer here..."
                  value={answers[index]}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleAnswerChange(index, event)}
            />
        </div>))}
        
      {questionCheckBox.map(question=>(
       <div key={question.id}>
       <label htmlFor={`${question.id}`}>{question.quiz}</label>
       <div>
         <input
           type="radio"
           id={`${question.id}-yes`}
           name={`${question.id}`}
           value="yes"
           checked={selectedAnswers[question.id] === 'yes'}
           onChange={handleRadioChange}
         />
         <label htmlFor={`${question.id}-yes`}>Yes</label>
       </div>
       <div>
         <input
           type="radio"
           id={`${question.id}-no`}
           name={`${question.id}`}
           value="no"
           checked={selectedAnswers[question.id] === 'no'}
           onChange={handleRadioChange}
         />
         <label htmlFor={`${question.id}-no`}>No</label>
       </div>
     </div>
      ))}
         </div>  
         <button>  SUBMIT </button>
         </form>
    
    </section>
  );
};

export default Questions;
