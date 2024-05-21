import "./Blogpage/Blogpage.css";

function Latest({ data }) {
  const handleClick = () => {
    window.location.href = "/blog";
  };
  // Check if data is null or undefined before mapping over it
  if (!data) {
    console.log("NULLLLLLLLLLLLLLLL"); // or you can return a loading indicator or a message
  }
  return (
    <div className="bloc-latest">
      <h2>Latest</h2>
      <div className="latest-caroussel">
        {data.map((el) => {
          return (
            <div key={el.id} onClick={handleClick} className="caroussel-card">
              <div className="card-img">
                <img src={el.picture_url} alt="" />
              </div>
              <h3>{el.title}</h3>
            </div>
          );
        })}

        <div onClick={handleClick} className="caroussel-card">
          <div className="card-img">
            <img src="/bascket.png" alt="" />
          </div>
          <h3>card title</h3>
        </div>
        <div onClick={handleClick} className="caroussel-card">
          <div className="card-img">
            <img src="/bascket.png" alt="" />
          </div>
          <h3>card title</h3>
        </div>
        <div onClick={handleClick} className="caroussel-card">
          <div className="card-img">
            <img src="/bascket.png" alt="" />
          </div>
          <h3>card title</h3>
        </div>
        <div onClick={handleClick} className="caroussel-card">
          <div className="card-img">
            <img src="/bascket.png" alt="" />
          </div>
          <h3>card title</h3>
        </div>
        <div onClick={handleClick} className="caroussel-card">
          <div className="card-img">
            <img src="/bascket.png" alt="" />
          </div>
          <h3>card title</h3>
        </div>
        <div onClick={handleClick} className="caroussel-card">
          <div className="card-img">
            <img src="/bascket.png" alt="" />
          </div>
          <h3>card title</h3>
        </div>
      </div>
    </div>
  );
}

export default Latest;
