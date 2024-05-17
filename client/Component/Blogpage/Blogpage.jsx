import "./Blogpage.css";
import Latest from "../Latest";
import Header from "../Header";
import { useState } from "react";
import Blogpagehead from "./Blogpagehead";
import Blogpagecontent from "./Blogpagecontent";

function Blogpage() {
  const [liked, setLiked] = useState(false);
  const handleClickLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="blogpage-bloc">
        <Blogpagehead />
        <Blogpagecontent handleClickLike={handleClickLike} liked={liked} />
        <Latest />
      </div>
    </>
  );
}

export default Blogpage;
