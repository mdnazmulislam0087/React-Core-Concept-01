import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'


function App() {

    const actors =['Kajal', 'Eliena', 'Deepika', 'Agrawal', 'Aroma', 'Katrina']
    const name = [
      {name : 'Aroma', age: 31},
      {name : 'Stephine', age: 31},
      {name : 'Propa', age: 31},
      {name : 'Willy', age: 31},
    ]

  return (
    <>

      <h1>Vite + React</h1>
      {
        name.map(n=> <Singer singer={n}></Singer>)
      }






      <Actor name={"Aishwarya"}></Actor>
      {
        actors.map(actor => <Actor name ={actor}></Actor>)
      }
      {/* <Todo
        task="Learn react" isDone={true}>

      </Todo>
      <Todo
        task="Explore Core Concept" isDone={false}>

      </Todo>
      <Todo
        task="JSX" isDone={true}>

      </Todo>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="55"></Device>
      <Device name="Cll phone" price="55"></Device>
      <Device></Device>
      <Device></Device>
      <Person></Person>


      <Student grade='7' score='99'></Student>
      <Student></Student>
      <Developer></Developer> */}


    </>
  )
}

function Device(props) {
  return (
    <h2>This Device: {props.name}</h2>
  )
}



function Person() {
  const age = 35
  const money = 20
  const person = {
    name: 'John',
    age: 12
  }
  return <h3>I am {person.name} and age {age + money}</h3>
}

// props we will use that way
function Student({ grade = 'NA', score = 0 }) {
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>Grade: {grade}</p>
      <p>Score:{score}</p>
      <p>Age:</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'

  }
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
