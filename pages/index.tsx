import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="min-w-screen mt-[68px] h-[calc(100vh-68px)] w-[100vw] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <main
        id="home"
        className="flex flex-col container mx-auto min-h-[calc(100vh-68px)] w-[calc(100%-100px)] snap-start"
      >
        <div className="flex justify-between my-auto dark:text-gray-300">
          <div className="font-semibold">
            <h1 className="text-5xl">Hey, I&apos;m Bryan!</h1>
            <p className="text-2xl mt-4 mb-7">
              I am into full stack development.
            </p>
            <Link
              href="/about"
              className="text-lg px-10 py-2 bg-blue-700 dark:bg-blue-900 text-white dark:text-gray-300 font-semibold rounded-full hover:opacity-90"
            >
              About Me
            </Link>
            <div className="mt-32 flex gap-5">
              <Link
                href="https://www.linkedin.com/in/bryandeckers/"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  icon="fa-brands:linkedin"
                  className="bg-blue-700 dark:bg-blue-800 rounded-full p-3 text-white text-center cursor-pointer hover:opacity-90"
                />
              </Link>
              <Link
                href="https://github.com/bryandeckers"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  icon="fa-brands:github"
                  className="bg-gray-700 dark:bg-gray-800 rounded-full p-3 text-white text-center cursor-pointer hover:opacity-90"
                />
              </Link>
              <Link
                href="https://www.taskade.com/d/gnCzA8B1QYCckhpW?share=edit&edit=4vKCYuwG7NNkZgzw&as=list"
                target="_blank"
                rel="noopener"
              >
                <Icon
                  icon="logos:taskade"
                  className="bg-gray-700 dark:bg-gray-800 rounded-full p-3 text-white text-center cursor-pointer hover:opacity-90"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="home.jpg"
              alt="home background"
              width="600"
              height="600"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;