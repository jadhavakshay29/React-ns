import './App.css';
// import Greet from "./Components/Greet/Greet";
import Header from "./Components/Header/Header";
// import Welcome from './Components/Welcome/Welcome';
// import List from './Components/List/List';
// import ToDoList from './Components/ToDoList/ToDoList';
import styled from 'styled-components';
// import Event from './Components/Events/Event';
// import Register from './Components/Register/Register';
// import UpdatingState from './Components/UpdatingState/UpdatingState';
// import Binding from './Components/Binding/Binding';
import DashBoard from './Components/ChildParentCompCommunication/DashBoard/DashBoard';
import ControlledUncontrolledComp from './Components/ControlledUncontrolledComp/ControlledUncontrolledComp';
   
  //now using styled we can use Heading in place of h1 as a component
const Heading = styled.h1`
color: ${(props)=>{
  return props.percent> 50 ? "brown" : "red";
}}; 
background:skyblue;
font-size:30px;
`;

// A new component based on Heading, but with some override styles
const Tomato = styled(Heading)`
    background : #25aa85;
    font-size: 25px;
    color: blue;
`; 

function App() {
  // const users =[
  //   {fname:"tony", lname:"stark", age:25},
  //   {fname:"Steve", lname:"Rogers", age:500},
  //   {fname:"Thor", lname:"Odinson", age:1000},
  // ];  

  return (

    <div className="App"> 
      <Header/>
      {/* <Heading percent={60}>Heading from styled component</Heading>
      <Tomato>Extending styles:refer- https://styled-components.com/docs/basics </Tomato> */}
      {/* <Welcome name={"akshay"} event={{
        hardware:"mouse",
        type:"click",
        }}/> */}
        {/* <Register/>
        <UpdatingState/>
        <Binding/> */}
        <DashBoard/>
        <ControlledUncontrolledComp/>
      {/* <Event />  */}
      {/* <ToDoList/> */}
      {/* <List /> */}
      {/* {
        users.map((user)=>{
          return  <Greet key={user.fname} {...user}/>
        })
      } */}
{/*       
       <Greet fname={"Steve"} lname={"Rogers"} age={18} />
       <Greet fname={"Thor"} lname={"Odinson"} age={1000} /> */}
       
    </div>
  );
}

export default App;
