import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of these sounds would you associate with the heart?",
      answers: [
        {
          text: "Tring Tring",
          correct: false,
        },
        {
          text: "Tap Tap",
          correct: false,
        },
        {
          text: "Click Click",
          correct: false,
        },
        {
          text: "Dhak Dhak",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the 'Bharat Ka Veer Putra Aaccording to the title of a 2013 TV Series?",
      answers: [
        {
          text: "Tipu Sultan",
          correct: false,
        },
        {
          text: "Chandragupta Maurya",
          correct: false,
        },
        {
          text: "Maharana Pratap",
          correct: true,
        },
        {
          text: "Ashoka",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "In 2013, where did the natural calamity known as Himalayan tsunami occur?",
      answers: [
        {
          text: "Uttrakhand",
          correct: true,
        },
        {
          text: "Arunachal Pradesh",
          correct: false,
        },
        {
          text: "Jammu and Kashmir",
          correct: false,
        },
        {
          text: "Sikkim",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which film is this song from?",
      answers: [
        {
          text: "Mere Dad Ki Maruti",
          correct: false,
        },
        {
          text: "Chennai Express",
          correct: true,
        },
        {
          text: "Ghanchakkar",
          correct: false,
        },
        {
          text: "Race 2",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me'?",
      answers: [
        {
          text: "Surpanakha",
          correct: false,
        },
        {
          text: "Khara",
          correct: false,
        },
        {
          text: "Maricha",
          correct: true,
        },
        {
          text: "Dushana",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the only leader to be elected Prime Minister of Pakistan three times?",
      answers: [
        {
          text: "Syed Yousaf Raza Gillani",
          correct: false,
        },
        {
          text: "Benazir Bhutto",
          correct: false,
        },
        {
          text: "Liaqat Ali Khan",
          correct: false,
        },
        {
          text: "Nawaz Sharif",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "The black widow, which eats the male counterpart after mating, as a female species of which animal?",
      answers: [
        {
          text: "Sloth",
          correct: false,
        },
        {
          text: "Ant",
          correct: false,
        },
        {
          text: "Spider",
          correct: true,
        },
        {
          text: "Termite",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Douglas Engelbert, who passed away in 2013, is credited as the inventor of which of these products?",
      answers: [
        {
          text: "Mobile Phone",
          correct: false,
        },
        {
          text: "Computer Mouse",
          correct: true,
        },
        {
          text: "Bluetooth Mouse",
          correct: false,
        },
        {
          text: "Digital camera",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In 1850, the first experimental electric telegraph line in India was set up between Calcutta and which place?",
      answers: [
        {
          text: "Diamond Harbour",
          correct: true,
        },
        {
          text: "Darjeeling",
          correct: false,
        },
        {
          text: "Murshidabad",
          correct: false,
        },
        {
          text: "Dhaka",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these persons has not walked on the Moon?",
      answers: [
        {
          text: "Charles Duke",
          correct: false,
        },
        {
          text: "James A Lovell",
          correct: true,
        },
        {
          text: "Alan Bean",
          correct: false,
        },
        {
          text: "Pete Conrad",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who was the chairman of the Indian Calendar Reform Committee that initiated the adoption of Saka calendar as the Indian national Calendar?",
      answers: [
        {
          text: "Meghnad Saha",
          correct: true,
        },
        {
          text: "Subrahmanyan Chandrasekhar",
          correct: false,
        },
        {
          text: "Prabodh Chandra Sengupta",
          correct: false,
        },
        {
          text: "Vainu Bappu",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The Phrase 100 crore Club', often mentioned in Indian media nowadays, refers to which one of the following?",
      answers: [
        {
          text: "Viewership of an IPL match",
          correct: false,
        },
        {
          text: "Election expenditure",
          correct: false,
        },
        {
          text: "Population of countries",
          correct: false,
        },
        {
          text: "Films box office collections",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "The 'sasural' of which of these international sports person from India is in Pakistan?",
      answers: [
        {
          text: "Saina Nehwal",
          correct: false,
        },
        {
          text: "Saina Mirza",
          correct: true,
        },
        {
          text: "Anisa Sayyed",
          correct: false,
        },
        {
          text: "Anjum Chopra",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which team retained the ashes Trophy in 2013?",
      answers: [
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "West Indies",
          correct: false,
        },
        {
          text: "England",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar'?",
      answers: [
        {
          text: "PAN Card",
          correct: false,
        },
        {
          text: "Voter ID Card",
          correct: true,
        },
        {
          text: "AADHAR Card",
          correct: false,
        },
        {
          text: "Ration Card",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "1000" },
        { id: 2, amount: "2500" },
        { id: 3, amount: "5000" },
        { id: 4, amount: "10,000" },
        { id: 5, amount: "20,000" },
        { id: 6, amount: "40,000" },
        { id: 7, amount: "80,000" },
        { id: 8, amount: "1,60,000" },
        { id: 9, amount: "3,20,000" },
        { id: 10, amount: "6,40,000" },
        { id: 11, amount: "12,50,000" },
        { id: 12, amount: "25,00,000" },
        { id: 13, amount: "50,00,000" },
        { id: 14, amount: "1,00,00,000" },
        { id: 15, amount: "5,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
