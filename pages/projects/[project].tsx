import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectDetailedPage: NextPage = () => {
  const { query } = useRouter();

  const projectData = {
    waaiburg: {
      title: "Waaiburg",
      shortdescription:
        "The Waaiburg Webapp/App is a custom-made web application developed for The Waaiburg, an organization that supports young people in difficult home situations. This web app provides complete control over the associated mobile app, allowing The Waaiburg staff to manage functionality, user accounts, and gather valuable data to evaluate the app's effectiveness.",
      description: "The Waaiburg Webapp/App project involved the redevelopment of the existing web application and mobile app for The Waaiburg organization. The goal was to expand the functionality and enhance the user experience. To achieve this, we collaborated as a team of three, utilizing Laravel, Flutter, and TailwindCSS technologies. " + 
        "In my role within the project, along with my two fellow students, we successfully tackled various aspects of the development process. I took charge of creating the initial structure, designing the user interface, and implementing the front-end using Laravel Blade and TailwindCSS. Additionally, I played a crucial role in developing the back-end functionalities using Laravel, including the creation of controllers and APIs. " +
        "Collaborating closely, we were able to ensure code quality and continuous improvement. To accomplish this, we integrated SonarCloud, a code inspection tool, to regularly analyze and check the codebase for any potential issues. This allowed us to maintain high code standards and detect and address any vulnerabilities or bugs in a timely manner. " +
        "The final result of our collaborative efforts is a secure and robust web application built with Laravel. It provides a seamless integration with the associated Flutter-based mobile app, allowing users to access essential features and functionality. The web application has been thoroughly tested and is fully functional, while the expansion of the mobile app is planned for the upcoming year. " +
        "Overall, the Waaiburg Webapp/App project was a challenging and rewarding experience. It not only allowed me to enhance my skills in web application development but also provided me with valuable insights into the importance of teamwork and creating user-friendly and impactful solutions for organizations supporting vulnerable populations.",
      image: "/images/waaiburgdashboard.png",
      technologies: ["Laravel", "Flutter", "TailwindCSS"],
    },
    dartsfederatiekempen: {
      title: "Dartsfederatie Kempen",
      shortdescription:
        "The Dartsfederatie Kempen Web Application project is a comprehensive solution created for Dartsfederatie Kempen, one of the largest, if not the largest, darts federations in the Kempen region. The goal was to develop a robust web application that enables them to efficiently manage and update their players, teams, and clubs, as well as schedule matches and input scores. This web application greatly streamlines their workflow, providing a user-friendly platform to enhance their administrative tasks.",
      description: [
        "Dartsfederatie Kempen is widely recognized as one of the largest, if not the largest, darts federations in the Kempen region. With a remarkable membership base of approximately 1000 individuals and a consistent annual growth rate of around 20%, it stands as a testament to the popularity and enthusiasm for darts in the local community.",
        "To streamline their operations and enhance the overall experience for their members, the federation embarked on a mission to develop a sophisticated web application. The primary objective of this web application was to provide a comprehensive platform for managing various aspects of the federation's operations. This included the creation, editing, and deletion of players, teams, and clubs, allowing them to be seamlessly interconnected. By having a centralized system, the federation aimed to simplify administrative tasks and facilitate efficient communication among its members.",
        "Furthermore, the application needed to incorporate a robust competition system that would track and record match days for all the participating teams. This data would be crucial for generating individual rankings and creating an accurate leaderboard.",
        "To bring this ambitious project to life, our team leveraged the power of NextJS, a cutting-edge JavaScript framework known for its scalability and performance, along with the versatility of Tailwind CSS for styling. The backend infrastructure was built using Cloudflare, utilizing its Serverless architecture, workers, and key-value (KV) storage features. This combination allowed us to develop a dynamic and responsive web application that met the federation's requirements while ensuring optimal performance and reliability.",
        "Within the project, my role encompassed a wide range of responsibilities and tasks. As a front-end developer, I took charge of designing and implementing the user interface, focusing on creating an intuitive and visually appealing experience for the federation's members. Collaborating closely with a fellow student throughout the development process, we seamlessly merged our skills and expertise to deliver a cohesive and polished front-end solution. Additionally, I actively contributed to the back-end development, with a particular emphasis on the functionality related to player, team, and club management. This involved implementing features for creating, editing, and deleting these entities, as well as establishing the necessary connections between them. By meticulously addressing these aspects, I aimed to ensure smooth data flow and optimal user experience.",
        "The end result of our collective efforts is a fully functional web application that achieves the federation's objectives. The front-end component of the website has been meticulously crafted, offering an immersive and user-friendly interface that reflects the unique identity of the Dartsfederatie Kempen. Moreover, a significant portion of the back-end infrastructure, including my dedicated contributions, has been successfully implemented, enabling efficient data management and seamless interactivity throughout the application.",
        "Overall, the Dartsfederatie Kempen Web Application stands as a testament to our team's technical proficiency, collaborative spirit, and commitment to delivering a high-quality solution. By creating an intuitive and robust platform, we have empowered the federation to streamline their operations, enhance member engagement, and elevate the overall darts experience within the Kempen region.",
      ],
      image: "/images/dfkteams.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "Cloudflare",
        "TailwindCSS",
        "Figma",
      ],
    }
    
  };

  const project = projectData[query.project as keyof typeof projectData];

  if (!project?.title) {
    return <div>Project not found</div>;
  }

  return (
    <main className="container px-30 lg:px-60 mt-20">
      <PageHeader title={project.title} noTitleText={true} />
      <Link href="/projects" className="hover:underline">
        Back to projects
      </Link>
      <div className="flex flex-col items-center md:items-start gap-20 mb-20 mt-5">
        <div className="flex flex-col items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl">{project.shortdescription}</p>
            <div className="flex flex-wrap gap-5">
              {project.technologies.map((technology) => (
                <div key={technology} className="flex items-center gap-2">
                  <Icon icon={"devicon:" + technology.toLowerCase()} />
                  <p>{technology}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col relative w-full aspect-video items-center md:items-start gap-5">
            <Image
              src={project.image}
              alt={project.title}
              fill
            />
          </div>
          <p className="text-lg text-justify">{project.description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailedPage;
