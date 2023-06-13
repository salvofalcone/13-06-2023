import "./index.css";

const Button = () => {
  function sayHello() {
    alert("Non serve a nulla, sorry");
  }

  return (
    <>
      <button onClick={sayHello}>Clicca Qui</button>
    </>
  );
};

export default Button;


// da implementare per filtro todo non completati