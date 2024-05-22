import "./Blogpage.css";
import Latest from "../Latest";
import Header from "../Header";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import Blogpagehead from "./Blogpagehead";
import Blogpagecontent from "./Blogpagecontent";
import { useParams } from "react-router-dom";

function Blogpage() {
  const [liked, setLiked] = useState(false);
  const handleClickLike = () => {
    setLiked(!liked);
  };

  const [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog/${id}`);
        console.log("Data:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Fetching data failed:", error);
      }
    };
    fetchData();
  }, []);

  // Memoize the data transformation (if any)
  const memoizedData = useMemo(() => {
    // Perform any data transformations here if needed
    // For example: return data.items || some default value
    return data;
  }, [data]);

  return (
    <>
      <div className="blogpage-bloc">
        <Blogpagehead data={memoizedData} />
        <Blogpagecontent
          data={memoizedData}
          handleClickLike={handleClickLike}
          liked={liked}
        />
        <Latest />
      </div>
    </>
  );
}

export default Blogpage;
