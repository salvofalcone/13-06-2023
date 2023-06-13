import "./App.css";
import Todo from "./components/todo";
import Button from "./components/button";
import { todoList } from "./mocks/todos";

function App() {
  return (
    <>
      <div className="App">
        <Button />
        <h1 className="main__title"> To do list </h1>
        <ul className="todo__ul">
          {/* faccio un map su todoList e creo un componente list item per ogni elemento dell'array */}
          {todoList.map((todo) => (
            <Todo data={todo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
