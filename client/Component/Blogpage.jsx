import "./Blogpage.css";
import Latest from "./Latest";
import Header from "./Header";
import { useState } from "react";

function Blogpage() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  return (
    <>
      <div className="blogpage-bloc">
        <div className="bloc-head">
          <h2>
            NBA delivers record-breaking season across social, digital
            platforms.
          </h2>
          <h3>
            Cleveland presents a bigger obstacle than Miami, but Boston remains
            the heavy favorite as the playoffs continue.
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
        <div className="bloc-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae sit quo voluptates dolore ut expedita ipsum, magnam
            error facere corporis quisquam similique, ullam officia. Fuga amet
            in laboriosam, veritatis adipisci atque voluptate sunt non ipsa
            distinctio delectus veniam ducimus, libero exercitationem.
            Inventore, consectetur est eaque, porro doloribus officiis ex esse
            fugit error ea dolorem, numquam possimus molestiae. Quia nostrum
            earum, ipsum voluptas aspernatur cupiditate magni sint sapiente ipsa
            deleniti sed dolore dolorem iusto autem sunt ab asperiores rem
            obcaecati ex reiciendis ut nobis minus dolor? Magnam perferendis
            cumque a officia id aspernatur consequatur numquam sequi vel
            voluptatibus reiciendis ullam, deleniti perspiciatis atque dolor ea
            velit eligendi, quidem tempore soluta optio tempora nesciunt! Hic
            consequuntur molestias nostrum nihil deleniti ex architecto quaerat
            debitis iusto ipsam. Enim ducimus est consectetur cupiditate illo
            reiciendis voluptatibus odio corporis ullam quibusdam inventore,
            possimus nesciunt aut iste natus error facere ab, debitis illum
            maxime eligendi distinctio, velit consequuntur deleniti? Repellendus
            incidunt saepe nostrum atque molestias ad magnam dicta repudiandae,
            nam adipisci, perferendis obcaecati, earum soluta reprehenderit. Et
            quo quidem repellendus, tenetur nobis perferendis quaerat impedit
            laboriosam nisi aut reprehenderit consectetur voluptatum voluptatem
            vero rem asperiores debitis praesentium eius dolore. Incidunt
            commodi ut atque quam architecto aliquam at cum, fuga nulla illum
            dolore facilis dolorum soluta sint eum quidem saepe. Quae minus
            doloremque porro. Consequuntur ducimus sed expedita aliquam maxime!
            Architecto iste et tempore culpa. A maiores incidunt iste ullam hic.
            Molestiae vero assumenda quidem enim illo, dicta repellat earum
            pariatur dolorum accusantium sapiente officiis facere minima!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            alias, perferendis soluta dignissimos, modi saepe distinctio
            possimus aperiam officiis quaerat porro odit similique asperiores
            mollitia vel velit quas! Enim laudantium velit animi repellendus
            quia, amet quo itaque tempore? Sit consequatur magnam error
            exercitationem, amet odit voluptatem harum ut praesentium quas,
            natus molestiae illum? Minima doloribus ipsam ex consequatur
            veritatis laboriosam id nulla inventore dolore. Alias maiores
            tempora nam dignissimos magni corporis harum aut, corrupti, optio
            cum eos nihil repellendus, enim laudantium iusto nisi. Suscipit
            alias libero repellendus nostrum assumenda officiis delectus quis
            consequatur et, voluptatibus accusamus maiores odio doloribus
            impedit tenetur nisi eaque optio sequi. Veniam a autem consectetur
            commodi, iste animi eligendi corporis consequuntur! Sequi et
            doloribus perspiciatis, aut quae commodi. Esse, eligendi facere
            doloremque odit cumque placeat repudiandae totam at enim ab nisi
            natus! Laborum non cum nam blanditiis quam fuga ipsum voluptatum
            maxime odio distinctio, natus voluptate?
          </p>
          <div className="bloc-content-like">
            <img
              src="/heart.png"
              alt="like"
              className={isActive ? "red-heart" : "heart"}
              onClick={handleClick}
            />
            <p>1,458 likes</p>
          </div>
        </div>
        <div className="bloc-comments">
          <h2>Comment section</h2>
          <form action="submit">
            <textarea type="text" />
          </form>
        </div>
        <Latest />
      </div>
    </>
  );
}

export default Blogpage;
