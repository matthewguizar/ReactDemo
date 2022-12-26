import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Eat a pizza', rowAssigned: 'User Two'}
  ]

  function addTodo(){
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1, 
        rowDescription: "New Todo",
        rowAssigned: "User Three"
      };
      todos.push(newTodo);
      console.log(todos);
    }
  }

  return (
    //margin-top 5
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className="btn btn-primary" on  onClick={addTodo}>
            Add new Todo
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
