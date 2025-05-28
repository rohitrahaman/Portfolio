import { ExternalLink, Github } from "lucide-react";

export default function Featured() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center gap-4 lg:gap-6 py-16 mb-5">
        <div className="border border-b-black w-1/3"></div>
        <div className="lg:text-2xl">
          <h1>
            <span className="hidden lg:inline">Featured Project</span>
            <span className="inline lg:hidden">Project</span>
          </h1>
        </div>
        <div className="border border-b-black w-1/3"></div>
      </div>
      <section>
        <div className="">
          <div className="justify-center items-center flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2">
              <div>
                <div className="border border-b-black lg:text-end ml-5">
                  <h1 className="text-2xl">Project Name</h1>
                  <h5 className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, ipsam qui quasi omnis explicabo consequuntur
                    iste, in possimus ea deleniti asperiores quam, maxime eum
                    expedita magni. Inventore mollitia vero consectetur.
                  </h5>
                </div>
              </div>
              <div className="ml-5 lg:justify-items-end">
                <ul className="flex gap-2">
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      JS
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      Figma
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      React
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-4 lg:justify-items-end mt-2">
                <div className="flex gap-2">
                  <Github />
                  <ExternalLink />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="./img/p1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <div className="justify-center items-center flex flex-col lg:flex-row gap-4 mt-8">
            <div className="lg:w-1/2">
              <img src="./img/p1.png" alt="" />
            </div>
            <div className="lg:w-1/2">
              <div className="mr-5">
                <div className="border border-b-black">
                  <h1 className="text-2xl">Project Name</h1>
                  <h5 className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos, ipsam qui quasi omnis explicabo consequuntur
                    iste, in possimus ea deleniti asperiores quam, maxime eum
                    expedita magni. Inventore mollitia vero consectetur.
                  </h5>
                </div>
              </div>
              <div className="justify-items-start">
                <ul className="flex gap-2">
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      CSS
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      JS
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      Figma
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-500" href="#">
                      React
                    </a>
                  </li>
                </ul>
              </div>
              <div className="justify-items-start mt-2">
                <div className="flex gap-2">
                  <Github />
                  <ExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
