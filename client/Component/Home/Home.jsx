import "./Home.css";
import Categorys from "./Categorys";
import Latest from "../Latest";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/");
        console.log(response.data); // Handle success response
        setData(response.data);
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
