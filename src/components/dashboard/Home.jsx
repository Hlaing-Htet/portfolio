import React from "react";
import { Title } from "../Title";
import Photo from "../../assets/homeColor.png";
const Home = () => {
  return (
    <div className="dark:text-dark_textcolor  h-screen overflow-auto">
      <header className=" bg-dark_background  z-10  sticky top-0 py-5">
        <Title name={"Home Page"} />
      </header>
      <main className=" m-5  ">
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Work Title</h2>
          <div className=" bg-dark_background_soft p-5">
            <p className="opacity-80">FullStack Developer</p>
          </div>
        </div>
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Description</h2>
          <div className=" bg-dark_background_soft p-5">
            <p className="opacity-80">
              Love to create designs and coding . In good logical Thinking and
              Problem Solving
            </p>
          </div>
        </div>
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Typed Texts</h2>
          <div className=" bg-dark_background_soft p-5 ">
            <ul className=" list-disc opacity-80">
              <li>HLAING HTET</li>
              <li>WEB DEVELOPER</li>
            </ul>
          </div>
        </div>
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Photo</h2>
          <div className=" bg-dark_background_soft p-5 grid grid-cols-4">
            <figure className=" bg-dark_background">
              <img src={Photo} className=" block mx-auto" alt="" />
            </figure>
            <div className=" col-span-3 flex items-center justify-center flex-col">
              <input type="file" />
            </div>
          </div>
        </div>
        <div className=" mb-5">
          <h2 className=" text-xl font-medium mb-2">Socials</h2>
          <div className=" bg-dark_background_soft p-5">
            <p className="opacity-80">FullStack Developer</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
