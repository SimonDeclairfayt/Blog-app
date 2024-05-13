function Categorys({ name, reverse }) {
  const handleClick = () => {
    window.location.href = "/blog";
  };
  return (
    <div className="container-categorys">
      <h2>{name}</h2>
      <div className={`container-categorys-bloc ${reverse ? "reverse" : ""}`}>
        <div onClick={handleClick} className="container-categorys-blogs-big">
          <div className="blogs-blog-big">
            <div className="blogs-blog-big-img">
              <img src="../public/bascket.png" alt="" />
            </div>
            <h3>The Goat</h3>
          </div>
        </div>
        <div className="container-categorys-blogs-small">
          <div onClick={handleClick} className="blogs-blog">
            <div className="blogs-blog-img">
              <img src="../public/bascket.png" alt="" />
            </div>
            <h3>The Goat</h3>
          </div>
          <div onClick={handleClick} className="blogs-blog">
            <div className="blogs-blog-img">
              <img src="../public/bascket.png" alt="" />
            </div>
            <h3>The Goat</h3>
          </div>
          <div onClick={handleClick} className="blogs-blog">
            <div className="blogs-blog-img">
              <img src="../public/bascket.png" alt="" />
            </div>
            <h3>The Goat</h3>
          </div>
          <div onClick={handleClick} className="blogs-blog">
            <div className="blogs-blog-img">
              <img src="../public/bascket.png" alt="" />
            </div>
            <h3>The Goat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorys;
