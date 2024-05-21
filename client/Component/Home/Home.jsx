import "./Home.css";
import Categorys from "./Categorys";
import Latest from "../Latest";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sport-blog-app-f99d3e95c99d.herokuapp.com/"
        );
        console.log(response.data); // Handle success response
      } catch (error) {
        console.error("Fetching data failed:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);
  return (
    <div className="home">
      <Categorys name="Basket" data={data} />
      <Categorys name="Football" reverse={true} data={data} />
      <Categorys name="Tennis" data={data} />
      <Latest />
    </div>
  );
}

export default Home;
