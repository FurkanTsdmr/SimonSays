import { useEffect, useState } from 'react'
import './App.css'

  function sleep (ms = 500){
    return new Promise((res) => setTimeout(res,ms));
  }

  const boardItem=[
    {id : 1, name : "green"},
    {id : 2, name : "blue"},
    {id : 3, name : "yellow"},
    {id : 4, name : "red"}
  ];

  function App() {

    const [score,setScore] = useState(0);
    const [isPlaying,setIsPlaying] = useState(false);
    const [compArr,setCompArr] = useState([]);
    const [useArr,setUserArr] = useState([]);
    const [turn,setTurn] = useState(true);

    const handleStart = ()=>{
      setIsPlaying(true);
      setCompArr([]);
      setUserArr([]);
      setScore(0);
      setTimeout(()=>{
        computerTurn();
      },1000)
    }

    const computerTurn=()=>{
    const random = Math.floor(Math.random()*4)+1;
    setCompArr ((prev) => [...prev,random]);
    }

    useEffect(() => {
      const animateCompArr = async () => {
        for (let i = 0; i < compArr.length; i++) {
          const pad = document.getElementById(compArr[i]);
          pad?.classList.add("active");
          await sleep();
          pad?.classList.remove("active");
          await sleep();
        }
        if (compArr.length !== 0) {
          setTurn(!turn);
        }
      };
      animateCompArr();
    }, [compArr]);


  return (
    <>
      
     </>
  )
}

export default App


/*



   









* */