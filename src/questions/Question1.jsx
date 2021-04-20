import React, { useState } from 'react';

export default function Question1(
  props: [resultsEl, titleEl, bodyEl, userIdEl]
) {
  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('1337');

  const resultsEl = document.querySelector('#formResult');
  const titleEl = document.querySelector('#title');
  const bodyEl = document.querySelector('#body');
  const userIdEl = document.querySelector('#userId');

  let formInvalid = true;

  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [bodyErrorMessage, setBodyErrorMessage] = useState('');
  const [userIdErrorMessage, setUserIdErrorMessage] = useState('');

  const checkField = (field) => {
    field.value !== '' && field.value >= 3
      ? field.classList.add('validated') &&
        field.classList.remove('required-error')
      : (formInvalid = true);

    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleEl.value === '' || typeof titleEl.value === 'undefined') {
      console.log(titleEl.value);
      setTitleErrorMessage('A title is required');
      titleEl.classList.add('required-error');
      formInvalid = true;
      return;
    } else {
      formInvalid = false;
    }

    if (bodyEl.value === '' || typeof bodyEl.value === 'undefined') {
      setBodyErrorMessage('Body text is required');
      bodyEl.classList.add('required-error');
      formInvalid = true;
      return;
    } else {
      formInvalid = false;
    }

    if (userIdEl.value === '' || typeof userIdEl.value === 'undefined') {
      console.log(userIdEl.value);
      setUserIdErrorMessage('UserId is required');
      userIdEl.classList.add('required-error');
      formInvalid = true;
      return;
    } else {
      formInvalid = false;
    }
    formInvalid = false;

    if (formInvalid === false) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        data: JSON.stringify({
          title: titleEl.value,
          body: bodyEl.value,
          userId: userIdEl.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          document.querySelector('#formResult').innerHTML = JSON.stringify(
            json
          );
        });
    } else {
      return (document.querySelector('#formResult').innerHTML =
        'There are errors on this form. Please fix and send again.');
    }
  };

  return (
    <div className='container text-left'>
      <div className='row'>
        <form className='col-md-12 centered-300'>
          <div className='input-group p-2 w-100'>
            <label className='form-label w-100' htmlFor='title'>
              Title:
              <input
                id='title'
                name='title'
                type='text'
                className='form-control'
                placeholder='Enter a title.'
                value={title}
                required
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                onBlur={(event) => {
                  if (event.target.value.length >= 3) {
                    event.target.classList.remove('required-error');
                    event.target.classList.add('validated');
                  } else {
                    checkField(event.target);
                  }
                }}
              />
              <div className='error-message'>{titleErrorMessage}</div>
            </label>
          </div>
          <div className='input-group p-2 w-100'>
            <label className='form-label w-100' htmlFor='body'>
              Body:
              <input
                id='body'
                name='body'
                type='text'
                className='form-control'
                placeholder='Enter some text.'
                value={body}
                required
                onChange={(event) => {
                  setBody(event.target.value);
                }}
                onBlur={(event) => {
                  if (event.target.value.length >= 3) {
                    event.target.classList.remove('required-error');
                    event.target.classList.add('validated');
                  } else {
                    checkField(event.target);
                  }
                }}
              />
              <div className='error-message'>{bodyErrorMessage}</div>
            </label>
          </div>
          <div className='input-group p-2 w-100'>
            <label className='form-label w-100' htmlFor='userId'>
              UserId:
              <select
                id='userId'
                name='userId'
                className='form-control'
                required
                onChange={(event) => {
                  setUserId(event.target.value);
                  checkField(event.target);
                }}
                onFocusOut={(event) => checkField(event.target)}>
                <option value=''>Select an Id</option>
                <option value='1337'>1337</option>
                <option value='1234'>1234</option>
                <option value='1006'>1066</option>
              </select>
              <div className='error-message'>
                {({ userId }, userIdErrorMessage)}
              </div>
            </label>
          </div>
          <div className='row'>
            <div className='col-md-6 p-4 input-grouptext-align-left'>
              <button
                onClick={(e) => handleSubmit(e)}
                className='form-control submit w-100'>
                Submit
              </button>
            </div>
          </div>
          <div id='formResult' className='formResult'></div>
        </form>
      </div>
    </div>
  );
}
