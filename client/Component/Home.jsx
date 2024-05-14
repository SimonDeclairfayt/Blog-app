import "./Home.css";
import Categorys from "./Categorys";
import Latest from "./Latest";

function Home() {
  return (
    <div className="home">
      <Categorys name="Basket" />
      <Latest />
      <Categorys name="Football" reverse={true} />
      <Categorys name="Tennis" />
    </div>
  );
}

export default Home;
