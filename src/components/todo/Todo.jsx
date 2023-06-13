import "./index.css";

const Todo = ({ data }) => {
  const whatClass = (plh) => {
    if (plh) {
      return "done";
    }
  };

  return (
    <>
      <li 
      key={data.id}
      className={` todo__li ${whatClass(data.completed)}`}
      id={data.id}>
        {data.todo}
      </li>
    </>
  );
};

export default Todo;


