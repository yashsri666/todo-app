import './App.css';
import Todo from './Todo';
import React, { useEffect, useState  } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // This code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []); // if we leave the array empty, it will run once when the app component loads

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Todo App ⌚</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} size='small' variant="contained" color='primary' type="submit" onClick={addTodo}>Add</Button>
      </form>

      <ul>
        {todos.map(todo =>(
          <Todo text={todo}></Todo>
          // <li>{todo}</li>
        ))}
      </ul>
      </div>
  );
}

export default App;
