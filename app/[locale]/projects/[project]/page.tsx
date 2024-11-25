
import { Metadata } from "next";
import ProjectDetailed from "../ProjectDetailed";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: 'Projects - Bryan Deckers',
}

const ProjectDetailedPage = ({ params }: { params: { project: string } }) => {
  const locale = useLocale();

  const projectData = {
    internship: {
      title: "Internship project - Make it fly branded Doodle",
      shortdescription: "A custom-made scheduling application for Make it Fly, designed as a branded alternative to Doodle, tailored to the company's specific needs, with functionalities like event scheduling, participant voting, and Google Calendar integration.",
      description: [
        "This project was developed as part of my internship at Thomas More. The goal was to create a branded version of Doodle for Make it Fly, providing specific features to meet the company's requirements. The application offers the following functionalities:",
        "<strong>Organizer Features</strong>",
        "Create forms with a specified title, description, and location.",
        "Select multiple time slots and define the duration for each.",
        "Invite both external participants and employees.",
        "Send automated reminders to participants who haven't responded within a set number of days.",
        "<strong>Participant Features</strong>",
        "Choose one or multiple time slots from the form.",
        "Respond with options such as \"Yes,\" \"No,\" or \"If necessary.\"",
        "Automatically notify the organizer via email once the form is completed.",
        "<strong>Google Calendar Integration</strong>",
        "Organizers can easily check their availability while scheduling events.",
        "Time slots marked as \"Yes\" by participants are automatically blocked in their calendars.",
        "Once a time slot is finalized, other slots are removed, leaving only the confirmed event in the organizer's calendar.",
        "This project was built using modern technologies, including <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>TailwindCSS</strong>, and <strong>Figma</strong>, ensuring a robust, responsive, and user-friendly application tailored to Make it Fly's branding and functionality requirements."
      ],
      image: "/images/internship.png",
      technologies: ["NextJS", "Typescript", "Figma", "TailwindCSS"],
    },
    togaether: {
      title: "Demo Fabric - Togaether",
      shortdescription:
        "",
      description:
        "",
      image: "/images/togaether.png",
      technologies: ["Microsoft Fabric", "Apache Spark"],
    },
    bpmn: {
      title: "BPMN - Netropolix",
      shortdescription:
        "",
      description:
        "",
      image: "/images/netropolix.png",
      technologies: [],
    },
    waaiburg: {
      title: "Waaiburg",
      shortdescription:
        "The Waaiburg Webapp/App is a custom-made web application developed for The Waaiburg, an organization that supports young people in difficult home situations. This web app provides complete control over the associated mobile app, allowing The Waaiburg staff to manage functionality, user accounts, and gather valuable data to evaluate the app's effectiveness.",
      description: [
        "The Waaiburg Webapp/App project involved the redevelopment of the existing web application and mobile app for The Waaiburg organization. The goal was to expand <strong>functionality</strong> and improve the <strong>user experience</strong>. As a team of three, we used <strong>Laravel</strong>, <strong>Flutter</strong>, and <strong>TailwindCSS</strong> technologies.",
        "In this project, I was responsible for creating the <strong>initial structure</strong>, designing the <strong>user interface</strong>, and implementing the <strong>front-end</strong> using <strong>Laravel Blade</strong> and <strong>TailwindCSS</strong>. I also developed <strong>back-end functionalities</strong> with <strong>Laravel</strong>, including building <strong>controllers</strong> and <strong>APIs</strong>.",
        "We integrated <strong>SonarCloud</strong> to ensure <strong>code quality</strong> and to identify and resolve vulnerabilities or bugs quickly. This helped us maintain high standards throughout the project.",
        "The final result is a <strong>secure and robust web application</strong> built with <strong>Laravel</strong>, seamlessly integrated with the <strong>Flutter-based mobile app</strong>. The web application is <strong>fully functional</strong>, and the mobile app expansion is planned for the next year.",
        "The Waaiburg Webapp/App project allowed me to enhance my skills in <strong>web development</strong> and provided valuable insights into <strong>teamwork</strong> and creating <strong>user-friendly</strong> solutions for organizations supporting vulnerable populations."
      ],
      image: "/images/waaiburgdashboard.png",
      technologies: ["Laravel", "Flutter", "TailwindCSS"],
    },
    dartsfederatiekempen: {
      title: "Dartsfederatie Kempen",
      shortdescription:
        "The DFK project is a comprehensive solution created for Dartsfederatie Kempen, one of the largest, if not the largest, darts federations in the Kempen region. The goal was to develop a robust web application that enables them to efficiently manage and update their players, teams, and clubs, as well as schedule matches and input scores. This web application greatly streamlines their workflow, providing a user-friendly platform to enhance their administrative tasks.",
      description: [
        "The primary goal of this web application was to create a centralized platform for managing the operations of the federation. This included managing <strong>players, teams, and clubs</strong>, with features to <strong>create, edit, and delete</strong> these entities while ensuring they were seamlessly interconnected. The centralized system aimed to <strong>simplify administrative tasks</strong> and improve communication among federation members.",
        "Additionally, the application featured a <strong>competition management system</strong> to track and record match days for all participating teams. This data was used to generate individual <strong>rankings</strong> and create an accurate <strong>leaderboard</strong>.",
        "To build the application, we used <strong>Next.js</strong> for its scalability and performance, along with <strong>Tailwind CSS</strong> for styling. The backend was powered by <strong>Cloudflare's serverless architecture</strong>, including <strong>workers and key-value storage</strong>, which ensured a responsive and reliable application.",
        "In this project, my responsibilities included both <strong>front-end</strong> and <strong>back-end development</strong>. On the front end, I designed and implemented the <strong>user interface</strong>, focusing on creating an <strong>intuitive</strong> and visually appealing experience for federation members. I worked closely with a teammate to deliver a cohesive and polished design. On the back end, I focused on <strong>player, team, and club management</strong>, implementing features for their creation, editing, and deletion, as well as establishing the connections between these entities. This ensured smooth <strong>data flow</strong> and an optimal user experience.",
        "The final result is a fully functional web application that meets the federation&apos;s needs. The <strong>front end</strong> offers a user-friendly interface that represents the identity of the <strong>Dartsfederatie Kempen</strong>, while the <strong>back-end infrastructure</strong> ensures efficient data management and seamless interaction across the platform.",
        "The <strong>Dartsfederatie Kempen Web Application</strong> showcases our technical skills, teamwork, and dedication to delivering a high-quality solution. It empowers the federation to <strong>streamline operations</strong>, enhance <strong>member engagement</strong>, and elevate the darts experience in the Kempen region."
      ],
      image: "/images/dfkteams.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "Cloudflare",
        "TailwindCSS",
        "Figma",
      ],
    },
    bcdetailing: {
      title: "BC Detailing",
      shortdescription:
        "The BC Detailing project was developed for BC Detailing, a car detailing company based in Belgium. The goal was to create a comprehensive web application that would enable the company to manage their services, appointments, and customer data, while providing an intuitive and visually appealing platform for their clients.",
      description: [],
      image: "/images/bcdetailing.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
      ],
    },
    simpelke: {
      title: "Simpelke",
      shortdescription:
        "The Simpelke project was developed for Simpelke, a local business based in Belgium. The goal was to create a comprehensive web application that would enable the company to manage their services, appointments, and customer data, while providing an intuitive and visually appealing platform for their clients.",
      description: [],
      image: "/images/simpelke.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
      ],
    },
    racetothefuture: {
      title: "Race to the Future",
      shortdescription:
        "A fully autonomous car that can drive around a track and avoid obstacles. It uses a camera in combination with a trained AI model.",
      description: [],
      image: "/images/rttf.jpg",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
    },
    busma: {
      title: "Busma",
      shortdescription:
        "A platform that combines all the needs in order to manage events smoothly.",
      description: [],
      image: "/images/newbusma.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
      ],
    },
  };

  const projectDataNL = {
    internship: {
      title: "Test nl",
      shortdescription: "Een op maat gemaakte planningsapplicatie voor Make it Fly, ontworpen als een merkalternatief voor Doodle, afgestemd op de specifieke behoeften van het bedrijf, met functionaliteiten zoals het plannen van evenementen, stemmen door deelnemers en Google Calendar-integratie.",
      description: [
        "Dit project is ontwikkeld als onderdeel van mijn stage bij Thomas More. Het doel was om een gebrandmerkte versie van Doodle te creëren voor Make it Fly, met specifieke functies om te voldoen aan de eisen van het bedrijf. De applicatie biedt de volgende functionaliteiten:",
        "<strong>Organisator Functies</strong>",
        "Maak formulieren aan met een opgegeven titel, beschrijving en locatie.",
        "Selecteer meerdere tijdsloten en bepaal de duur voor elk tijdslot.",
        "Nodig zowel externe deelnemers als medewerkers uit.",
        "Stuur geautomatiseerde herinneringen naar deelnemers die niet hebben gereageerd binnen een vastgesteld aantal dagen.",
        "<strong>Deelnemer Functies</strong>",
        "Kies een of meerdere tijdsloten uit het formulier.",
        "Beantwoord met opties zoals \"Ja,\" \"Nee,\" of \"Indien nodig.\"",
        "Stuur automatisch een e-mail naar de organisator zodra het formulier is ingevuld.",
        "<strong>Google Calendar Integratie</strong>",
        "Organisatoren kunnen eenvoudig hun beschikbaarheid controleren tijdens het inplannen van evenementen.",
        "Tijdsloten die als \"Ja\" gemarkeerd zijn door deelnemers worden automatisch geblokkeerd in hun agenda's.",
        "Zodra een tijdslot is bevestigd, worden andere tijdsloten verwijderd, waardoor alleen het bevestigde evenement in de agenda van de organisator blijft staan.",
        "Dit project is gebouwd met moderne technologieën, waaronder <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>TailwindCSS</strong> en <strong>Figma</strong>, wat zorgt voor een robuuste, responsieve en gebruiksvriendelijke applicatie die is afgestemd op de branding en functionele vereisten van Make it Fly."
      ],
      image: "/images/internship.png",
      technologies: ["NextJS", "Typescript", "Figma", "TailwindCSS"],
    },
    togaether: {
      title: "Demo Fabric - Togaether",
      shortdescription:
        "",
      description:
        "",
      image: "/images/togaether.png",
      technologies: ["Microsoft Fabric", "Apache Spark"],
    },
    bpmn: {
      title: "BPMN - Netropolix",
      shortdescription:
        "",
      description:
        "",
      image: "/images/netropolix.png",
      technologies: [],
    },
    waaiburg: {
      title: "Waaiburg",
      shortdescription: "De Waaiburg Webapp/App is een op maat gemaakte webapplicatie ontwikkeld voor De Waaiburg, een organisatie die jongeren in moeilijke thuissituaties ondersteunt.Deze webapp biedt volledige controle over de bijbehorende mobiele app, waardoor het personeel van De Waaiburg de functionaliteit en gebruikersaccounts kan beheren en waardevolle gegevens kan verzamelen om de effectiviteit van de app te evalueren.",
      description: [
        "Het Waaiburg Webapp/App project ging over het herontwikkelen van de bestaande webapplicatie en mobiele app voor de Waaiburg-organisatie. Het doel was om de <strong>functionaliteit</strong> uit te breiden en de <strong>gebruikerservaring</strong> te verbeteren. Als team van drie maakten we gebruik van <strong>Laravel</strong>, <strong>Flutter</strong> en <strong>TailwindCSS</strong>.",
        "In dit project was ik verantwoordelijk voor het opzetten van de <strong>initiële structuur</strong>, het ontwerpen van de <strong>gebruikersinterface</strong>, en het implementeren van de <strong>front-end</strong> met <strong>Laravel Blade</strong> en <strong>TailwindCSS</strong>. Daarnaast ontwikkelde ik <strong>back-end functionaliteiten</strong> met <strong>Laravel</strong>, waaronder het maken van <strong>controllers</strong> en <strong>API's</strong>.",
        "We integreerden <strong>SonarCloud</strong> om <strong>codekwaliteit</strong> te waarborgen en kwetsbaarheden of bugs snel te detecteren en op te lossen. Dit hielp ons om hoge standaarden te behouden gedurende het project.",
        "Het eindresultaat is een <strong>veilige en robuuste webapplicatie</strong> gebouwd met <strong>Laravel</strong>, naadloos geïntegreerd met de <strong>Flutter-gebaseerde mobiele app</strong>. De webapplicatie is <strong>volledig functioneel</strong>, en de uitbreiding van de mobiele app staat gepland voor volgend jaar.",
        "Het Waaiburg Webapp/App project stelde me in staat om mijn vaardigheden in <strong>webontwikkeling</strong> te verbeteren en gaf me waardevolle inzichten in <strong>samenwerking</strong> en het creëren van <strong>gebruiksvriendelijke</strong> oplossingen voor organisaties die kwetsbare groepen ondersteunen."
      ],
      image: "/images/waaiburgdashboard.png",
      technologies: ["Laravel", "Flutter", "TailwindCSS"],
    },
    dartsfederatiekempen: {
      title: "Dartsfederatie Kempen",
      shortdescription: "Het DFK project is een uitgebreide oplossing gemaakt voor Dartsfederatie Kempen, één van de grootste, zo niet de grootste, dartsfederatie in de Kempen. Het doel was om een robuuste webapplicatie te ontwikkelen die hen in staat stelt om op een efficiënte manier hun spelers, teams en clubs te beheren en bij te werken, alsook wedstrijden te plannen en scores in te voeren. Deze webapplicatie stroomlijnt hun workflow aanzienlijk en biedt een gebruiksvriendelijk platform om hun administratieve taken te verbeteren.",
      description: [
        "Het primaire doel van deze webapplicatie was om een gecentraliseerd platform te creëren voor het beheren van de operaties van de federatie. Dit omvatte het beheren van <strong>spelers, teams en clubs</strong>, met functies om deze entiteiten te <strong>maken, bewerken en verwijderen</strong> en ervoor te zorgen dat ze naadloos met elkaar verbonden waren. Het gecentraliseerde systeem was bedoeld om <strong>administratieve taken te vereenvoudigen</strong> en de communicatie tussen de leden van de federatie te verbeteren.",
        "Daarnaast bevatte de applicatie een <strong>competitiebeheersysteem</strong> om wedstrijddagen van alle deelnemende teams bij te houden en vast te leggen. Deze gegevens werden gebruikt om individuele <strong>rankings</strong> te genereren en een nauwkeurig <strong>klassement</strong> te maken.",
        "Voor de ontwikkeling van de applicatie gebruikten we <strong>Next.js</strong> vanwege de schaalbaarheid en prestaties, samen met <strong>Tailwind CSS</strong> voor de styling. De backend werd aangedreven door <strong>Cloudflare's serverless architectuur</strong>, inclusief <strong>workers en key-value storage</strong>, wat zorgde voor een responsieve en betrouwbare applicatie.",
        "In dit project omvatten mijn verantwoordelijkheden zowel <strong>front-end</strong> als <strong>back-end ontwikkeling</strong>. Aan de front-end ontwierp en implementeerde ik de <strong>gebruikersinterface</strong>, met de focus op het creëren van een <strong>intuïtieve</strong> en visueel aantrekkelijke ervaring voor de leden van de federatie. Ik werkte nauw samen met een teamgenoot om een samenhangend en verfijnd ontwerp op te leveren. Aan de back-end richtte ik me op <strong>het beheer van spelers, teams en clubs</strong>, waarbij ik functies implementeerde voor het maken, bewerken en verwijderen van deze entiteiten, evenals het opzetten van de verbindingen tussen deze onderdelen. Dit zorgde voor een soepele <strong>gegevensstroom</strong> en een optimale gebruikerservaring.",
        "Het eindresultaat is een volledig functionele webapplicatie die voldoet aan de behoeften van de federatie. De <strong>front-end</strong> biedt een gebruiksvriendelijke interface die de identiteit van de <strong>Dartsfederatie Kempen</strong> weerspiegelt, terwijl de <strong>back-end infrastructuur</strong> zorgt voor efficiënte gegevensverwerking en naadloze interactie binnen het platform.",
        "De <strong>Dartsfederatie Kempen Webapplicatie</strong> toont onze technische vaardigheden, teamwerk en toewijding aan het leveren van een hoogwaardige oplossing. Het stelt de federatie in staat om <strong>operaties te stroomlijnen</strong>, de <strong>betrokkenheid van leden</strong> te vergroten en de dartservaring in de Kempen-regio te verbeteren."
      ],
      image: "/images/dfkteams.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "Cloudflare",
        "TailwindCSS",
        "Figma",
      ],
    },
    bcdetailing: {
      title: "BC Detailing",
      shortdescription: "Het BC Detailing project werd ontwikkeld voor een autodetailing bedrijf gevestigd in België. Het doel was om een uitgebreide webapplicatie te maken die het bedrijf in staat zou stellen om hun diensten, afspraken en klantgegevens te beheren en tegelijkertijd een intuïtief en visueel aantrekkelijk platform te bieden aan hun klanten.",
      description: [],
      image: "/images/bcdetailing.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
      ],
    },
    simpelke: {
      title: "Simpelke",
      shortdescription: "Het Simpelke project werd ontwikkeld voor Simpelke, een lokale frituur. Het doel was om een uitgebreide webapplicatie te maken die het bedrijf in staat zou stellen om hun diensten, afspraken en klantgegevens te beheren en tegelijkertijd een intuïtief en visueel aantrekkelijk platform te bieden aan hun klanten.",
      description: [],
      image: "/images/simpelke.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
      ],
    },
    racetothefuture: {
      title: "Race to the Future",
      shortdescription: "Een volledig autonome auto die over een circuit kan rijden en obstakels kan ontwijken. Het gebruikt een camera in combinatie met een getraind AI-model.",
      description: [],
      image: "/images/rttf.jpg",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
    },
    busma: {
      title: "Busma",
      shortdescription: "Een platform dat alle behoeften combineert om evenementen soepel te beheren",
      description: [],
      image: "/images/newbusma.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
      ],
    },
  };

  const projectName = params.project;

  const projectDataLanguage = locale === "nl" ? projectDataNL : projectData

  const project = projectDataLanguage[projectName as keyof typeof projectData];

  if (!project) {
    return (
      <div className="container px-10 lg:px-5  mt-40 text-2xl font-semibold mb-20">
        {locale === "nl" ? "Project niet gevonden" : "Project not found"}
      </div>
    );
  }

  return (
    project && (
      <ProjectDetailed
        project={
          project as {
            title: string;
            shortdescription: string;
            description: string;
            image: string;
            technologies: string[];
          }
        }
      />
    )
  );
};

export default ProjectDetailedPage;
