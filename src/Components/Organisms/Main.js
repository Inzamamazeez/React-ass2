import NextButton from "../Atoms/Nextbtn";
import SubmitButton from "../Molecules/Submitbtn";
import {useState} from 'react';

const questionsData=[
    {
        Question:"What is the capital of India.",
        Options:["Mumbai","Pune","Delhi","Hyderabad"],
        CorrectAnswer:"Delhi",
    },
    {
        Question:"What is the National Bird of India.",
        Options:["Peacock","Hen","Parrot","Piegon"],
        CorrectAnswer:"Peacock",
    },
    {
        Question:"What is the National Animal of India.",
        Options:["Lion","Tiger","Elephant","Kangroov"],
        CorrectAnswer:"Tiger",
    },
    {
        Question:"Who is the Prime minister of India.",
        Options:["Amith Shah","Kejriwal","Sri. Narendra Modi","Yogi Ji"],
        CorrectAnswer:"Sri. Narendra Modi",
    },
    {
        Question:"What is the Square Root of 25.",
        Options:["2","15","7","5"],
        CorrectAnswer:"5",
    },
    {
        Question:"Who is the Home Minister of India.",
        Options:["Kejriwal","Amith Shah","Yogi Ji","Rahul Gandhi"],
        CorrectAnswer:"Amith Shah",
    },
    {
        Question:"Who is the Founder of Google .",
        Options:["Elon Musk","Sunder Pichai","Hari Om Rai","Mark Zuckerberg"],
        CorrectAnswer:"Sunder Pichai",
    },
    {
        Question:"Who is the Prime Minister of United Kingdom.",
        Options:["Winston Churchill","Margaret Thatcher","Barack Obama","Rishi Sunak"],
        CorrectAnswer:"Rishi Sunak",
    },
    {
        Question:"Who is the Founder of Whatsapp.",
        Options:["Jan Koum","Mark ZuckerBurg","Elon Musk","Kevin Systrom"],
        CorrectAnswer:"Jan Koum",
    },
    {
        Question:"What is the Founder of Instagram.",
        Options:["Elon Musk","Jan Koum","Kevin Systrom","Jack Dorsey"],
        CorrectAnswer:"Kevin Systrom",
    }
];

const Quiz = () => {
    const [questionNumber,setQuestionNumber]=useState(0);
    const [selectAnswer,setSelectAnswer]=useState("");
    const [score,setScore]=useState(0);

    const NextQuestion = () => {
        const isCorrect= questionsData[questionNumber].CorrectAnswer===selectAnswer;
        if(isCorrect){
            setScore(score+2);
        }else{
            setQuestionNumber(questionNumber +1);
            setSelectAnswer("");
        }
        if(questionNumber < questionsData.length -1){
            setQuestionNumber(questionNumber+1);
            setSelectAnswer("");
        }
        
    };

    const handleSubmitQuiz = () => { 
         if(questionNumber === questionsData.length -1){
            alert(`Your Score is ${score} out of 20.`);
            if(score >= 12){
                alert("Congratulations! You passed the Quiz.");
            }else{
                alert("You failed the Quiz, please try again.");
            }
        }
    };
    return(
        <div className="design2">
            <h1>Quiz..!</h1>
            <h2>{questionsData[questionNumber].Question}</h2>
            {questionsData[questionNumber].Options.map((option,index)=>(
                    <div key={index}>
                        <input type="radio" name="answer" value={option}
                        checked={option===selectAnswer}
                        onChange={()=>setSelectAnswer(option)}/>
                        {option}
                    </div>
                ))}
        
             <NextButton onclick={NextQuestion}/>
            <SubmitButton onclick={handleSubmitQuiz}/> 
        </div>
    )
};
export default Quiz;