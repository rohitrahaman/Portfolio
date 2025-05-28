import React from "react";

function Experience() {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center gap-6 py-4 lg:py-16 lg:mb-5">
          <div className="border border-b-black w-1/3"></div>
          <div className="lg:text-2xl">
            <span>Experience</span>
          </div>
          <div className="border border-b-black w-1/3"></div>
        </div>
      </section>
      <section>
        <div className=" gap-4 px-8 lg:py-10 flex flex-col lg:flex-row">
          <div className="lg:w-1/4 lg:justify-items-end mt-10">
            <div className="w-48">
              <div className="  lg:border lg:border-b-black lg:justify-items-end ">
                <div className="">
                  <div className="text-xl">
                    <span>Job Title</span>
                  </div>
                  <div className="text-xs">
                    <span>Company Name</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:justify-items-end mt-3">
              <h5>April 2020 - Dec 2022</h5>
            </div>
          </div>

          <div className="lg:w-3/4 lg:border lg:border-l-black lg:px-16">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, unde labore. Odio quam corporis voluptatibus nisi
              quos? Quibusdam fugit assumenda, facere laudantium quisquam
              necessitatibus illo, nobis voluptatibus corporis quaerat vitae!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, unde labore. Odio quam corporis voluptatibus nisi
              quos? Quibusdam fugit assumenda, facere laudantium quisquam
              necessitatibus illo, nobis voluptatibus corporis quaerat vitae!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, unde labore. Odio quam corporis voluptatibus nisi
              quos? Quibusdam fugit assumenda, facere laudantium quisquam
              necessitatibus illo, nobis voluptatibus corporis quaerat vitae!
            </li>
          </div>
        </div>
      </section>
      <section className="hidden lg:block">
        <div className=" gap-4 px-8 py-10 flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:border lg:border-r-black lg:px-16">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, unde labore. Odio quam corporis voluptatibus nisi
              quos? Quibusdam fugit assumenda, facere laudantium quisquam
              necessitatibus illo, nobis voluptatibus corporis quaerat vitae!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, unde labore. Odio quam corporis voluptatibus nisi
              quos? Quibusdam fugit assumenda, facere laudantium quisquam
              necessitatibus illo, nobis voluptatibus corporis quaerat vitae!
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, unde labore. Odio quam corporis voluptatibus nisi
              quos? Quibusdam fugit assumenda, facere laudantium quisquam
              necessitatibus illo, nobis voluptatibus corporis quaerat vitae!
            </li>
          </div>
          <div className="lg:w-1/4 lg:justify-items-start mt-10">
            <div className="w-48">
              <div className="  lg:border lg:border-b-black lg:justify-items-start ">
                <div className="">
                  <div className="text-xl">
                    <span>Job Title</span>
                  </div>
                  <div className="text-xs">
                    <span>Company Name</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:justify-items-end mt-3">
              <h5>April 2020 - Dec 2022</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
