import React, { useState } from 'react';
import data from './data';


function App() {
  const [people, setPeople] =useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
    <main className='container'>
      <h3>{people.length} birthdays Today</h3>
      <button onClick={ () => setPeople(data)}> Refresh</button>
     {people.map((person) =>{
       const {id, name, age, image} = person;
        return(
          <section  key = {id}>
            
             
             <article key={id} className="person">
               <img src= {image} alt ="" />
               <div>
               <h4> {name}</h4>
               <p>{age} years</p> 
               </div>
               
              </article>
              <button className= "btn" onClick={ () => removePerson(id)}>remove</button>
          </section>
        )
     })}
     <button onClick={ () => setPeople([])}> Clear All</button>
     </main>
    </> 
  );
}

export default App;
