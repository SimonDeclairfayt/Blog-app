import "./Home.css";
import Categorys from "./Categorys";
import Latest from "../Latest";

function Home() {
  return (
    <div className="home">
      <Categorys name="Basket" />
      <Categorys name="Football" reverse={true} />
      <Categorys name="Tennis" />
      <Latest />
    </div>
  );
}

export default Home;
