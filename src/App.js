import { queryByTitle } from '@testing-library/react';
import './App.css';
import Card from './components/Card';
import{useState} from "react";

let arr=[{
  id:1,
  title:"dağ 1",
par:"explaination"},
{
  id:2,
  title:"dağ 1",
par:"explaination"},
{id:3,
  
  title:"dağ 1",
par:"explaination"},
{id:4,
  title:"dağ 1",
par:"explaination"},
{id:5,
  title:"dağ 1",
par:"explaination"},];

const App= () => {
  const[lesson,setLesson]=useState(11);

return( 
  <div>
<h1>baslik</h1>
<h2>{lesson}</h2>
<button onClick={() =>{ 
  setLesson(lesson +1);
}}
>
  ders arttir 
</button>
<button onClick={() =>{ 
  setLesson(lesson -1);
}}
>
  ders azalt

  
</button>

  <div className="Cards">
  {arr.map (({par,title},i) => (
<Card key={`index ${i}`}par={par} title={title} lesson={lesson} />
))}
  </div>
  </div>

);
  };
  

export default App;
