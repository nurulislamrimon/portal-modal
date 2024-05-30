import "./App.css";

function App() {
  const handleOpen = () => {
    alert("This is Portal Modal App");
  };
  return (
    <section className="half-screen">
      <div>This is Portal Modal App</div>
      <button onClick={handleOpen}>Open Modal</button>
    </section>
  );
}

export default App;
