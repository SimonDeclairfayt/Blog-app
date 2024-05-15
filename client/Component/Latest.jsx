import "./Blogpage/Blogpage.css";

function Latest() {
  const handleClick = () => {
    window.location.href = "/blog";
  };
  return (
    <div className="bloc-latest">
      <h2>Latest</h2>
      <div className="latest-caroussel">
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
