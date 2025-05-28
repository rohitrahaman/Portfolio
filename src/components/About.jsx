import React from "react";

function About() {
  return (
    <div className="bg-gray-300 ">
      <div className="flex justify-center items-center gap-2 lg:gap-6 py-16 mb-5">
        <div className="border border-b-black w-1/3"></div>
        <div className="lg:text-2xl">
          <span>About Me</span>
        </div>
        <div className="border border-b-black w-1/3"></div>
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-5">
          <div className="px-4 lg:text-left lg:w-[551px] ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
              gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc
              bibendum sed. Donec tincidunt tellus sed libero ultricies, eu
              semper enim molestie. Etiam lorem quam, tincidunt nec malesuada
              eu, interdum nec leo. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Morbi placerat
              tortor sed felis tristique. Nunc aliquam magna ut nunc vestibulum,
              ut dictum nulla sagittis. Cras egestas magna sed nisl
              pellentesque, sed lobortis felis convallis. Phasellus eget ex at
              est lobortis iaculis eget non risus. Etiam ultricies at est sit
              amet condimentum.
            </p>
          </div>
          <div className="mb-2">
            <img className="h-72 w-72" src="./img/about.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
