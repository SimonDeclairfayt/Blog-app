function Categorys({ name, reverse, data }) {
  const handleClick = () => {
    window.location.href = "/blog";
  };
  // Check if data exists and has at least one element
  if (!data || data.length === 0) {
    console.log("no data");
    return null; // Return null if data is undefined or empty
  }
  if (!Array.isArray(data) || data.length === 0) {
    console.log("data not an array");
    return null; // Return null if data is not an array or is empty
  }
  console.log("Categorys Component - Data:", data); // Debugging: Check the value of data
  // Rest of the component code
  return (
    <div className="container-categorys">
      <h2>{name}</h2>
      <div className={`container-categorys-bloc ${reverse ? "reverse" : ""}`}>
        <div onClick={handleClick} className="container-categorys-blogs-big">
          <div className="blogs-blog-big">
            <div className="blogs-blog-big-img">
              <img src={data[0].picture_url} alt="" />
            </div>
            <h3>{data[0].title}</h3>
          </div>
        </div>
        <div className="container-categorys-blogs-small">
          {data == null
            ? ""
            : data.slice(1, 5).map((el) => {
                return (
                  <div key={el.id} onClick={handleClick} className="blogs-blog">
                    <div className="blogs-blog-img">
                      <img src={el.picture_url} alt="" />
                    </div>
                    <h3>{el.title}</h3>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Categorys;
