function Blogpagehead() {
  return (
    <div className="bloc-head">
      <h2>
        NBA delivers record-breaking season across social, digital platforms.
      </h2>
      <h3>
        Cleveland presents a bigger obstacle than Miami, but Boston remains the
        heavy favorite as the playoffs continue.
      </h3>
      <div className="bloc-img">
        <img src="../public/bascket.png" alt="" />
      </div>
      <div className="bloc-info">
        <div className="bloc-info-head">
          <div className="bloc-info-author">
            <img src="../public/avatar.png" alt="" />
            <h4>Jogn Doe</h4>
          </div>
          <div className="bloc-info-author">
            <h4>06 may 2024</h4>
          </div>
        </div>
        <div className="bloc-info-foot">
          <ul>
            <li>
              <div className="bloc-info-author">
                <h4>football</h4>
              </div>
            </li>
            <li>
              <div className="bloc-info-author">
                <h4>bascketball</h4>
              </div>
            </li>
            <li>
              <div className="bloc-info-author">
                <h4>tennis</h4>
              </div>
            </li>
            <li>
              <div className="bloc-info-author">
                <h4>golf</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blogpagehead;
