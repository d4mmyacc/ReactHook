// import React, {useState} from 'react'
import './App.css';
// import BasicForm from './components/Forms/BasicForm';
// import RulesHooks from './components/RulesHooks';
// import UseStateArray from './components/UseStateArray';
// import BasicToDo from './components/BasicToDo';
// import ShortCirEval from './components/ShortCirEval';
// import UseStateObject from './UseStateObject';
// import UseEffect1 from './components/Forms/UseEffects/UseEffect1';
// import UseEffect2 from './components/Forms/UseEffects/UseEffect2';
import UseEffectAPI from './components/Forms/UseEffects/UseEffectAPI';

const App = () => {
  // var val="hello world";
  // console.log(useState('sisir'));
  // const myfirstval=useState('react is awesome')
  // console.log(myfirstval);

  // useState takes an initial value and a function inside an array
  // here val is the initial value and setval is a function with which we can update the value
  // const [val, setval]=useState('hello world')
  // const changeName=()=>{
  //   let value=val;
  //   if (value==='hello world'){
  //   setval('namaste world');
  //   } else
  //   setval('hello world')
    // console.log(val);
  // }
  // console.log(val);
  return (
    <div>
      {/* <h1>{val}</h1>
      <button className='btn' onClick={changeName}>click me</button> */}
      {/* <RulesHooks/> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject/> */}
      {/* <BasicToDo/> */}
      {/* <ShortCirEval/> */}
      {/* <BasicForm/> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      <UseEffectAPI/>
    </div>
  )
}

export default App