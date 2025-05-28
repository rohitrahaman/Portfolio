import { ExternalLink, Github } from "lucide-react";
import React from "react";

export default function Other() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center gap-6 py-16 mb-5">
        <div className="border border-b-black w-1/3"></div>
        <div className="lg:text-2xl">
          <h1>
            <span className="hidden lg:inline">Other Project</span>
            <span className="inline lg:hidden">Others</span>
          </h1>
        </div>
        <div className="border border-b-black w-1/3"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:py-16 px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2">
            <img src="./img/o-p.png" alt="" />
          </div>
          <div className="lg:w-1/2">
            <div className="border border-b-black">
              <h1 className="text-xl">Project Name</h1>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sed sint hic neque accusantium magni,
              </span>
            </div>
            <div>
              <div>
                <ul className="flex gap-2 mb-2">
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
                </ul>
              </div>
              <div>
                <div>
                  <div className="flex gap-2">
                    <Github />
                    <ExternalLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2">
            <img src="./img/o-p.png" alt="" />
          </div>
          <div className="lg:w-1/2">
            <div className="border border-b-black">
              <h1 className="text-xl">Project Name</h1>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sed sint hic neque accusantium magni,
              </span>
            </div>
            <div>
              <div>
                <ul className="flex gap-2 mb-2">
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
                </ul>
              </div>
              <div>
                <div>
                  <div className="flex gap-2">
                    <Github />
                    <ExternalLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 py-5 lg:py-16 px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2">
            <img src="./img/o-p.png" alt="" />
          </div>
          <div className="lg:w-1/2">
            <div className="border border-b-black">
              <h1 className="text-xl">Project Name</h1>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sed sint hic neque accusantium magni,
              </span>
            </div>
            <div>
              <div>
                <ul className="flex gap-2 mb-2">
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
                </ul>
              </div>
              <div>
                <div>
                  <div className="flex gap-2">
                    <Github />
                    <ExternalLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2">
            <img src="./img/o-p.png" alt="" />
          </div>
          <div className="lg:w-1/2">
            <div className="border border-b-black">
              <h1 className="text-xl">Project Name</h1>
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                sed sint hic neque accusantium magni,
              </span>
            </div>
            <div>
              <div>
                <ul className="flex gap-2 mb-2">
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
                </ul>
              </div>
              <div>
                <div>
                  <div className="flex gap-2">
                    <Github />
                    <ExternalLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
