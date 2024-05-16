import "./App.css";

function App() {
  return (
    <>
      <form action="POST">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="tags" placeholder="tags" />
        <input type="text" name="content" placeholder="content" />
        <input type="file" name="picture" />
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default App;
