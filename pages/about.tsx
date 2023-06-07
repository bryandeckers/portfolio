import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";

// TODO: cv en bij about me chatgpt tekst laten schrijven waarbij ik vertel over student zelfstandige, etc

const AboutPage: NextPage = () => {
  return (
    <main className="container px-60 mt-20">
      <PageHeader title="About" />

      <h2 className="mb-5">Welcome! I&apos;m Bryan Deckers, and I&apos;m delighted to have you here on my portfolio page. Let me share a bit about myself. I&apos;m currently studying Digital Innovation, and I must say, it&apos;s a program that truly resonates with me. One of the aspects I appreciate the most is its project-based learning approach, which enables me to work with real clients. It&apos;s a refreshing departure from the traditional classroom setup, as it allows me to apply my skills and knowledge in practical, real-world scenarios.</h2>
      <h2 className="mb-5">Outside of my studies, I find great satisfaction in working on my car. It&apos;s a hands-on hobby that allows me to explore my creative side and put my DIY skills to the test. From painting to various modifications, I&apos;ve invested time and effort in personalizing my car, making it a unique reflection of my taste and personality.</h2>
      <h2 className="mb-5">In terms of coding, I&apos;ve developed proficiency in several languages and frameworks. I&apos;m well-versed in HTML, JavaScript, and TypeScript, which I frequently use alongside React/Next.js to build dynamic and responsive web applications. Python is another language I enjoy working with, and I&apos;ve also gained familiarity with Java. To streamline collaboration and ensure smooth development processes, I rely on tools like GitHub and Figma. Additionally, I&apos;m skilled in using Postman for API testing. When it comes to styling, I rely on the versatility of Tailwind CSS to create visually appealing and user-friendly interfaces.</h2>
      <h2 className="mb-5">In essence, I&apos;m a dedicated individual who thrives on challenges and opportunities for growth. I&apos;m always eager to expand my knowledge and skills, both professionally and personally. If you have any questions or are interested in potential collaborations, please don&apos;t hesitate to reach out.</h2>
      <h2 className="mb-5"></h2>
    </main>
  );
};

export default AboutPage;
