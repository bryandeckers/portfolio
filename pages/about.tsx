import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div>
      <section
        id="about"
        className="flex flex-col container mx-auto min-h-[calc(100vh-68px)] w-[calc(100%-100px)] snap-start"
      >
        <div className="my-auto dark:text-gray-300">
          <div className="flex flex-wrap">
            <div>
              <h2 className="text-3xl mb-5 font-semibold">About me</h2>
              <div className="text-xl font-medium">
                <p>I&apos;m an 19 year old student from Belgium</p>
                <p>
                  Currently studying applied computer science at Thomas More
                </p>
              </div>
            </div>
            <div className="lg:mx-auto">
              <p className="text-3xl font-semibold mb-5 mx-auto mt-14 md:mt-0">
                Skills
              </p>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center">
                  <i className="fa-brands fa-html5 text-orange-700 text-4xl"></i>
                  <p className="text-xl ml-10 border-b-4 outline-offset-4 border-orange-700 rounded-sm">
                    HTML
                  </p>
                </li>
                <li className="flex items-center">
                  <i className="fa-brands fa-css3-alt text-blue-700 text-4xl"></i>
                  <p className="text-xl ml-10 border-b-4 outline-offset-4 border-blue-700 rounded-sm">
                    CSS
                  </p>
                </li>
                <li className="flex items-center">
                  <i className="fa-brands fa-js text-yellow-500 text-4xl"></i>
                  <p className="text-xl ml-9 border-b-4 outline-offset-4 border-yellow-500 rounded-sm">
                    Javascript
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
