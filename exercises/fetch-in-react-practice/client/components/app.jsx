import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the JSON is received and parsed,
     * update state with the received todos.
     */

     fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  addTodo(newTodo) {
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the JSON is received and parsed,
     * add the created todo to state.
     * Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */

     fetch('/api/todos', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(newTodo)
      })
    .then(res => res.json())
    .then(data => {
      let createdTodo = data
      let arr = [...this.state.todos]
      arr.push(createdTodo)
      this.setState({ todos: arr })
    })
  }

  toggleCompleted(todoId) {
    /**
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the JSON is received and parsed,
     * replace the updated todo in state.
     * Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    let targetId = null
    let stateTodos = [...this.state.todos]
    stateTodos.map(todo => {
      if(todo.id === todoId){
        todo.isCompleted = (!todo.isCompleted)
        targetId = todo.id
      }
    })
    let newBoolean = (!this.state.todos[targetId]['isCompleted'])

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isCompleted: newBoolean})
    })
    .then(res => res.json())
    .then(data=>{
      this.setState({ todos: stateTodos})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
