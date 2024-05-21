import { useState, useEffect } from "react";
import axios from "axios";
function Blogpagehead({ data }) {
  const [name, setName] = useState(null);

  const convertStringToArray = (str) => {
    // Step 1: Replace single quotes with double quotes
    let jsonString = str.replace(/'/g, '"');

    // Step 2: Replace spaces between words with commas
    jsonString = jsonString.replace(/"\s+"/g, '","');

    // Step 3: Parse the JSON string to get the array
    const array = JSON.parse(jsonString);
    console.log(array);
    return array;
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("/api/user", {
          headers: {
            Authorization: `token ${token}`, // Add the token to the request headers
          },
        });
        setName({
          name: response.data.username,
          email: response.data.email,
          profilePicture: response.data.picture_url,
        });
      } catch (error) {
        console.error("Fetching data failed:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bloc-head">
      <h2>{data[0].title}</h2>
      <div className="bloc-img">
        <img src={data[0].picture_url} alt="" />
      </div>
      <div className="bloc-info">
        <div className="bloc-info-head">
          <div className="bloc-info-author">
            <img src={name.profilePicture} alt="" />
            <h4>{name.name}</h4>
          </div>
          <div className="bloc-info-author">
            <h4>06 may 2024</h4>
          </div>
        </div>
        <div className="bloc-info-foot">
          <ul>
            {convertStringToArray(data[0].tags).map((el) => {
              return (
                <li>
                  <div className="bloc-info-author">
                    <h4>{el}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blogpagehead;
