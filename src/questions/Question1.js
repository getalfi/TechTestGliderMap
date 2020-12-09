import React, { useState, useEffect } from 'react';

export default function Question1 (props) {
  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

  const state = {
    title: '',
    body: '',
    userId: 1337,
  }
  const errormessage = '';

  useEffect(() => {
    if (state.title.length < 0) {
      errormessage = "You need to enter a title!"
    }
  }, [state.username]);

  const handleSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'post',
      data: JSON.toString({
        title: state.title,
        body: state.body,
        userId: state.UserId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  return (
    <div>
      <div>
        <div>
          Title:
        </div>
        <input name={state.title}/>
      </div>

      <div>
        <div>
          Body:
        </div>
        <input name={state.body}/>
      </div>

      <div>
        <div>
          UserId:
        </div>
        <select name={state.userId}>
          <option>1337</option>
          <option>1234</option>
          <option>1066</option>
        </select>
      </div>

      <div>
        {errormessage}
      </div>

      <button onClick={handleSubmit()} style={{margin: 10}}>Submit</button>
    </div>

  )
}
