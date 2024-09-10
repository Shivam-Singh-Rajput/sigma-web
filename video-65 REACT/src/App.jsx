import './App.css';
import { useState } from 'react';
import Hello from './Hello';
import First from './component/First';
import NewProduct from './component/NewProduct';

function App() {
// Here the another optimal approach for reuse the code through the help of object
const responce = [
  {
    name: "jully",
    eadge: "15",
    city: "chandauli",
    state: "Up",  
  },
  {
    name: "shivu",
    eadge: "16",
    city: "Gwalior",
    state: "MP",  
  },
  {
    name: "Rohit",
    eadge: "17",
    city: "Meghalay",
    state: "Assam",  
  }
]

  const [value, setValue] = useState(0) //value-->It is the name of state 
  //setValue--> It is function use for change the value of state
  // Like this variable which is we used in dom and we can change than we will say state
  
    function clickHandler(){
    console.log("button Clicked");
    }

    function productParrent(data){
      console.log("I am inside of App.js");
      console.log(data);
    }
  
  return (
    
    <div className="App">
      <div>
      <NewProduct pranay={productParrent} />
      </div>
       <div className='value'>{value}</div>
       <First name="Hey Jully"> What do you do gyes.</First>
       <Hello eadge='18' city="jaipur" state="Rajsthan"></Hello>

        <First name="How are you jully"></First>
        <Hello eadge='20' city="Varanasi" state="UP"></Hello>

        <First name="I am good shivu"></First>
        <Hello eadge='22' city="Bhopal" state="MP"></Hello>

        <First name="What about you"></First>
        <Hello eadge='25' city="Ahemdabad" state="Gujrat"></Hello>
       <button onClick={()=>{setValue(value+1)}}>Click me</button>
       
       <First name={responce[0].name}></First>
       <Hello eadge={responce[0].eadge} city={responce[0].city} state={responce[0].state}></Hello>

       <First name={responce[1].name}></First>
       <Hello eadge={responce[1].eadge} city={responce[1].city} state={responce[1].state}></Hello>
 
       <First name={responce[2].name}></First>
       <Hello eadge={responce[2].eadge} city={responce[2].city} state={responce[2].state}></Hello>
       <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
}

export default App;
