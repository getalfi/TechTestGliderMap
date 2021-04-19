import React, { useState, useEffect } from 'react';

export default function Question1 (props) {
  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/
  

  ///Some Resources That Helped////
  /*
    https://stackoverflow.com/questions/47642449/initializing-react-number-input-control-with-blank-value
    https://jsonplaceholder.typicode.com/guide/
    https://jsonplaceholder.typicode.com/guide/
    https://reactjs.org/docs/hooks-state.html
  */
  
  /* State Var */
  const [state, stateCond] = useState({
    title: '',
    body: '',
    userId: 1337,
  });

  const {title, body, userId} = state;
  const errormessage = '';

  /* Helper Function */
  const updateState = e =>{
    const {name, value} = e.target;
    const newState = Object.assign({}, state);
    newState[name] = value;
    stateCond(newState);
  }

  useEffect(() => {
    if (state.title.length < 0) {
      errormessage = "You need to enter a title!"
    }
  }, [state.userId]);


  const handleSubmit = e => {

    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'post',
      data: JSON.toString({
        title,
        body,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div>
            Title:
          </div>
          <input name={state.title} defaultValue={title} onChange={updateState}/>
        </div>

        <div>
          <div>
            Body:
          </div>
          <input name={state.body} defaultValue={body} onChange={updateState}/>
        </div>

        <div>
          <div>
            UserId:
          </div>
          <select name={state.userId} defaultValue={userId} onChange={updateState}>
            <option>1337</option>
            <option>1234</option>
            <option>1066</option>
          </select>
        </div>
        
        <div>
          {errormessage}
        </div>

        <button type="submit" style={{margin: 10}}>Submit</button>
      </div>
    </form>
  )
}
