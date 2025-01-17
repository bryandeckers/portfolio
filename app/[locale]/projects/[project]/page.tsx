import { Metadata } from "next";
import ProjectDetailed from "../ProjectDetailed";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Projects - Bryan Deckers",
};

const ProjectDetailedPage = ({ params }: { params: { project: string } }) => {
  const locale = useLocale();

  const projectData = {
    internship: {
      title: "Internship Project - Make it Fly Doodle",
      shortdescription:
        "A custom scheduling application for Make it Fly, designed as a branded alternative to Doodle, tailored to the company's specific needs, featuring functionalities such as event scheduling, participant voting, and Google Calendar integration.",
      description: [
        "This project was developed as part of my internship at Thomas More. The goal was to create a branded version of Doodle for Make it Fly. The application was designed to provide specific features that fully meet the company's requirements and needs. This resulted in an efficient and user-friendly scheduling tool that optimizes Make it Fly's internal processes.",
    
        "<strong>Functionalities</strong>",
        "The application offers a wide range of functionalities, divided into various user roles:",
        "<strong>Organizer Features</strong>",
        "Create forms with a specified title, description, and location.",
        "Select multiple time slots and determine the duration for each slot.",
        "Invite both external participants and employees.",
        "Send automated reminders to participants who haven't responded within a set number of days.",
        "<strong>Participant Features</strong>",
        "Choose one or more time slots from the form.",
        'Respond with options such as "Yes," "No," or "If necessary."',
        "Automatically send an email to the organizer once the form is completed.",
        "<strong>Google Calendar Integration</strong>",
        "Organizers can easily check their availability while scheduling events.",
        'Time slots marked as "Yes" by participants are automatically blocked in their calendars.',
        "Once a time slot is confirmed, other slots are removed, leaving only the confirmed event in the organizer's calendar. <br> <br>",
    
        "<strong>Project Execution</strong>",
        "I executed this project entirely independently, as it was my internship project. My approach began with a thorough research phase, analyzing existing scheduling and calendar tools. I created a weighted decision matrix to objectively determine which tool best matched Make it Fly's needs. This analysis not only provided insight into the strengths of existing tools but also highlighted the improvements needed for my own solution.",
        "Based on these insights, I designed a prototype in <strong>Figma</strong>. This visual design helped me clearly define the application's structure and functionality and served as a blueprint for the development phase. For implementation, I chose modern technologies such as <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>, ensuring a responsive and scalable application. During development, I ensured that Make it Fly's branding and functional requirements were fully adhered to. Regular feedback sessions with my internship supervisor ensured the project stayed on the right track.",
    
        "<strong>Conclusion</strong>",
        "I am very satisfied with the outcome of this project. All requirements were completed within the set deadlines, and I even managed to integrate additional features, such as automated reminders and an advanced Google Calendar integration. This project allowed me to further develop my skills in research, prototyping, and implementation. It strengthened my ability to work independently while providing valuable experience in creating software that meets a real client's needs. I am proud of the impact this project has had on Make it Fly's operational efficiency.",
    
        "<strong>Documents</strong>",
        "Plan of Approach (dutch) <a href='/documents/BryanDeckers_PlanVanAanpak_Makeitflydoodle.pdf' target='_blank' class='text-blue-500 hover:underline'>here</a>",
        "Realization (dutch) <a href='/documents/BryanDeckers_Realisatie_Makeitflydoodle.pdf' target='_blank' class='text-blue-500 hover:underline'>here</a>",
        "Reflection (dutch) <a href='/documents/BryanDeckers_Reflectie_Makeitflydoodle.pdf' target='_blank' class='text-blue-500 hover:underline'>here</a>",
      ],
      image: "/images/internship.png",
      technologies: ["NextJS", "Typescript", "Figma", "TailwindCSS"],
    }, 
    togaether: {
      title: "Demo Fabric - Togaether",
      shortdescription:
        "For Togaether, we had the opportunity to test and demonstrate the latest Microsoft Fabric tool, enabling them to showcase how data is processed and visualized through an advanced pipeline.",
      description: [
        "In this project, my fellow student Nathan Neve (<a href='https://nathanneve.be/' target='_blank' class='text-blue-500 hover:underline'>website</a>) and I collaborated to develop a demo for Togaether using the latest <strong>Microsoft Fabric</strong> tool. The goal was to create an advanced data pipeline that allows Togaether to demonstrate to their clients how data can be efficiently processed and visualized.",
    
        "<strong>Functionalities</strong>",
        "For this project, we worked with the <strong>Adventure Works dataset</strong>. The key functionalities and components of the pipeline include:",
        "<ul>",
        "<li>A <strong>master pipeline</strong> with various <strong>subpipelines</strong> to structure the data processing.</li>",
        "<li>Use of <strong>Apache Spark notebooks</strong> to clean, enrich, and store data in <strong>delta tables</strong>.</li>",
        "<li>Implementation of <strong>slowly changing dimensions</strong> (SCD) type 1 to accurately track data changes.</li>",
        "<li>Preparation of the data for seamless integration with <strong>Power BI</strong>, enabling the creation of visualizations.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "We started by taking a comprehensive course on <strong>Microsoft Fabric</strong> to gain a solid understanding of the new tool and learn how to set up an advanced pipeline. Next, we gathered the company’s requirements to ensure our solution fully aligned with their needs.",
        "During development, we adopted an iterative approach. We began by ingesting the data, followed by step-by-step setup of the data processing. Processing the data according to <strong>SCD type 1</strong> was a critical part of this process. Unfortunately, we didn’t have enough time to fully visualize the data, but the established structure makes this easily achievable in the future.",
    
        "<strong>Conclusion</strong>",
        "Nathan and I are very satisfied with the results of this project. Although we weren’t able to fully visualize the data within the given time, we built a robust and scalable pipeline. This project provided us with valuable experience with Microsoft Fabric and gave us insight into how advanced data processing can be applied in a business environment. The result is a demonstration that Togaether can use to showcase the power of this technology to their clients.",
      ],
      image: "/images/togaether.png",
      technologies: ["Microsoft Fabric", "Apache Spark"],
    },    
    bpmn: {
      title: "BPMN - Netropolix",
      shortdescription:
        "For Netropolix (now NTX), I visualized the recruitment process by creating a detailed BPMN model, showcasing every step a candidate might go through. This helps identify potential issues in the process.",
      description: [
        "In this project, I worked with my fellow students Nathan Neve (<a href='https://nathanneve.be/' target='_blank' class='text-blue-500 hover:underline'>website</a>) and Seppe Stroobants (<a href='https://www.seppestroobants.com/' target='_blank' class='text-blue-500 hover:underline'>website</a>) to visualize the recruitment process for Netropolix (now NTX). The goal of the project was to create a clear overview of the process and identify potential areas for improvement.",
    
        "<strong>Functionalities</strong>",
        "The main deliverable of this project was a detailed <strong>BPMN model</strong> that encompasses the entire recruitment process. Some aspects included in the model are:",
        "<ul>",
        "<li>The journey of a candidate from the initial application to the final hiring decision.</li>",
        "<li>A visual representation of all the steps in the process, such as screening, interviews, and evaluations.</li>",
        "<li>Identification of potential bottlenecks and inefficiencies that affect the process timeline.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "To carry out this project, we visited Netropolix and received a detailed explanation of their current recruitment process. During this meeting, we carefully noted all the steps and nuances involved. Based on this information, we visualized the process using the <strong>Bizagi</strong> tool, creating a clear and structured BPMN model.",
        "After completing the model, we presented it to the Netropolix team, where we discussed any potential improvements. The company’s feedback was incorporated into the model, resulting in a final version that fully aligned with their needs and provided insights into potential optimizations.",
    
        "<strong>Conclusion</strong>",
        "This project was a valuable experience in process analysis and teamwork. By closely collaborating with Nathan and Seppe, and directly communicating with the client, we delivered a result that was well-received. The BPMN model provides Netropolix with a powerful tool to better understand and improve their recruitment process. The project goal was fully achieved, and both the team and Netropolix were highly satisfied with the final result.",
      ],
      image: "/images/netropolix.png",
      technologies: ["Bizagi"],
    },    
    waaiburg: {
      title: "Waaiburg",
      shortdescription:
        "The Waaiburg Webapp/App is a custom-built web application developed for De Waaiburg, an organization that supports young people in difficult home situations. This web app offers full control over the associated mobile app, allowing De Waaiburg staff to manage functionality and user accounts, as well as collect valuable data to evaluate the app's effectiveness.",
      description: [
        "This project was carried out in collaboration with my fellow students Siebe Camerman (<a href='https://siebecamerman.be/' target='_blank' class='text-blue-500 hover:underline'>website</a>) and Sens Van Aert (<a href='https://sensvanaert.com/' target='_blank' class='text-blue-500 hover:underline'>website</a>). The goal was to completely redevelop and expand the existing web application and mobile app for De Waaiburg, based on the specific needs of the organization. De Waaiburg supports young people in difficult home situations and wanted a platform that not only helped them efficiently manage their clientele but also provided a playful and accessible way to discuss complex issues.",
    
        "<strong>Functionalities</strong>",
        "The key features and extensions we implemented are:",
        "<ul>",
        "<li>A <strong>web application</strong> that allows De Waaiburg staff to easily manage their clients and the content of the mobile app.</li>",
        "<li>Redesigning the <strong>mobile app</strong> with Flutter, including a new game that addresses difficult topics in a playful way.</li>",
        "<li>Full integration between the web application and the mobile app, ensuring changes in the web app are immediately visible in the mobile app.</li>",
        "<li>A secure and user-friendly interface, designed with <strong>Laravel Blade</strong> and <strong>TailwindCSS</strong>.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "We started the project with a thorough analysis of the existing application and discussions with De Waaiburg about their requirements and wishes. We then worked iteratively on rewriting the web application, expanding its functionality to meet the new requirements. Redesigning the mobile app was the second major phase, where we modernized the structure and added the gaming element.",
        "Throughout the project, we used <strong>Laravel</strong> for the web application and <strong>Flutter</strong> for the mobile app, with <strong>TailwindCSS</strong> for a modern and responsive UI. To ensure the quality of our code, we integrated <strong>SonarCloud</strong>, which helped us quickly address bugs and vulnerabilities and maintain a high standard.",
        "The project spanned two academic years, allowing us to carefully implement and test all features. Our team structure and collaboration were essential to successfully managing the scope of this project.",
    
        "<strong>Conclusion</strong>",
        "We are extremely pleased with the final result of this project. The web application is robust, secure, and fully functional, and the mobile app offers an updated experience with new features like the game element. De Waaiburg itself was very satisfied and considered the platform a significant improvement for their daily operations. This project not only provided us with technical growth but also valuable experience in collaboration, client communication, and developing solutions with social impact.",
      ],
      image: "/images/waaiburgdashboard.png",
      technologies: ["Laravel", "Flutter", "TailwindCSS"],
    },    
    dartsfederatiekempen: {
      title: "Dartsfederatie Kempen",
      shortdescription:
        "The DFK project is a comprehensive solution developed for Dartsfederatie Kempen, one of the largest darts federations in the Kempen region. The goal was to develop a robust web application that enables them to manage their players, teams, and clubs, schedule matches, and enter scores. This web application streamlines their workflow and provides a user-friendly platform to improve their administrative tasks.",
      description: [
        "This project was carried out in collaboration with my fellow student Syan Delbart (<a href='https://syandelbart.com/' target='_blank' class='text-blue-500 hover:underline'>website</a>). We reached out to Dartsfederatie Kempen (DFK) to understand their current challenges and requirements. It quickly became clear that their existing website no longer met their needs and required a full redevelopment. Our goal was to create a modern web application that would cover all aspects of their organization management and improve their administrative workflow.",
    
        "<strong>Functionalities</strong>",
        "The key features we developed include:",
        "<ul>",
        "<li>Management of <strong>players, teams, and clubs</strong>, including creating, editing, and deleting these entities.</li>",
        "<li>An integrated <strong>competition management system</strong> allowing users to set up competitions and automatically generate match schedules.</li>",
        "<li>The ability to enter scores for each player and match on a specific match day through an <strong>online scorecard</strong>.</li>",
        "<li>Automatic calculation of <strong>rankings</strong> and <strong>individual rankings</strong>, based on the entered match results.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "We started by creating prototypes in <strong>Figma</strong> to provide a visual overview of the new web application and received approval from DFK. We then began development in <strong>Next.js</strong>, chosen for its scalability and excellent performance. For styling, we used <strong>TailwindCSS</strong>, which helped us design a modern, responsive, and visually appealing interface.",
        "The backend of the application was built using <strong>Cloudflare's serverless architecture</strong>, including workers and key-value storage. This ensured a fast and reliable infrastructure that could scale to meet the federation's needs.",
        "In the project, we divided the responsibilities. My contributions included both <strong>front-end</strong> and <strong>back-end development</strong>. I designed and implemented the user interface and worked closely with my teammate to ensure that the front-end was consistent and user-friendly. For the back-end, I implemented features to manage players, teams, and competitions and ensured seamless integration of these components.",
    
        "<strong>Conclusion</strong>",
        "The final result is a robust and fully functional web application that meets the needs of Dartsfederatie Kempen. The new application has significantly simplified their administrative processes, while enabling them to manage matches more efficiently and track statistics. Both we and the DFK team were very satisfied with the achieved outcome. This project allowed us to enhance our technical skills and deliver a valuable solution that positively impacts the federation's operations.",
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
        "The BC Detailing project was developed for a car detailing company based in Belgium. The goal was to create a comprehensive web application that enabled the company to manage their services, appointments, and customer data, while providing an intuitive and visually appealing platform for their clients.",
      description: [
        "This project was executed as a <strong>student freelancer</strong> in web design. The client approached me with the request to develop a professional website for his mobile car detailing business. The website needed not only to provide information about the services offered, but also to include a platform that allowed customers to make appointments and gave the administrators an easy way to manage their data.",
    
        "<strong>Functionalities</strong>",
        "The main features of the website include:",
        "<ul>",
        "<li>A section with detailed information about the offered <strong>services</strong>.</li>",
        "<li>A <strong>photo gallery</strong> where the client can upload and manage photos of completed projects.</li>",
        "<li>A fully integrated <strong>booking system</strong>, allowing customers to view available dates and time slots and make appointments.</li>",
        "<li>A management module that allows the owner to set prices, working hours, and availability, providing full control over the booking system.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "I started with an extensive design in <strong>Figma</strong> to clearly capture the visual and functional requirements of the client. This design was approved and served as a guideline for development.",
        "The front-end of the web application was built with <strong>Next.js</strong> to ensure a responsive and high-performance user experience. For styling, I used <strong>TailwindCSS</strong>, which allowed me to create a sleek and professional design. The back-end was fully serverless and built on <strong>Cloudflare's infrastructure</strong>. This provided a scalable and reliable solution for managing data, including photo and booking information.",
    
        "<strong>Conclusion</strong>",
        "The final result was a professional and user-friendly website that fully met the client's requirements. The client was particularly satisfied with the final product, especially with the flexibility and functionality of the booking system. This project allowed me to improve my skills as a freelancer and deliver a solution that is both technically solid and visually appealing.",
      ],
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
        "The Simpelke project was developed for a local chip shop. The goal was to create a user-friendly and visually appealing website that provides customers with essential information such as opening hours, location, menu, and photos of dishes. Later, the functionality was extended to include a booking system for sandwich orders.",
      description: [
        "This project was executed as a <strong>student freelancer</strong> in web design. The client, a local chip shop, approached me with the request to develop a website that was not only informational but also functional and appealing to their customers. The website had to reflect the identity of the chip shop and provide a central place for customers to find information and place orders.",
    
        "<strong>Functionalities</strong>",
        "The website includes the following features:",
        "<ul>",
        "<li>Information about the chip shop's <strong>opening hours</strong> and <strong>location</strong>.</li>",
        "<li>An overview of the <strong>menu</strong>, including photos of the dishes, to give customers a visual impression of the meals offered.</li>",
        "<li>A <strong>mail-based booking system</strong> for sandwich orders, allowing customers to easily place their orders. The client can block certain days via a calendar where orders cannot be placed.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "The project began with an extensive design process in <strong>Figma</strong>, during which I regularly gathered and incorporated feedback from the client to ensure the design perfectly matched their requirements. Only after design approval did I begin development.",
        "The front-end of the website was built using <strong>Next.js</strong> to ensure a fast and responsive user experience. For styling, I chose <strong>TailwindCSS</strong>, which ensured a consistent and professional design. The back-end of the application is fully serverless and runs on <strong>Cloudflare</strong>, while the email system was implemented with the <strong>SendGrid API</strong>, allowing orders to be efficiently processed via email.",
    
        "<strong>Conclusion</strong>",
        "The final result was a complete and well-functioning website that fully met the client's needs. The client was particularly pleased with both the initial design and the final functionalities. The addition of the sandwich ordering system provides extra value and convenience for the chip shop's customers. This project highlights my ability to deliver customer-oriented solutions while meeting technical requirements.",
      ],
      image: "/images/simpelke.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
        "SendGrid API",
      ],
    },    
    racetothefuture: {
      title: "Race to the Future",
      shortdescription:
        "A fully autonomous RC car that can drive on a track and avoid obstacles. The car uses a camera and a trained AI model to navigate the course, developed with the Donkeycar library, TensorFlow, and Keras.",
      description: [
        "For the 'Race to the Future' project, our Digital Innovation class was split into two teams, each responsible for developing an autonomous RC car. The goal was to design a self-built car that could navigate a track completely autonomously. The team that won the race had to show not only speed but also precision in avoiding obstacles and following the track.",
    
        "<strong>Functionalities</strong>",
        "Our autonomous RC car was equipped with the following capabilities:",
        "<ul>",
        "<li>Fully autonomous navigation over the track using a <strong>camera</strong>.</li>",
        "<li>Use of a wide-angle lens to provide a broader field of view for better track perception.</li>",
        "<li>A custom 3D-printed chassis, specifically designed to support the hardware.</li>",
        "</ul>",
    
        "<strong>Project Execution</strong>",
        "We used the <strong>Donkeycar library</strong>, an open-source platform for building self-driving cars. This was installed on a <strong>Jetson Nano</strong>, a powerful edge computer mounted on the car.",
        "After installing the Donkeycar library, we started collecting data by manually driving the car over the track. The collected data was then used to train an AI model with <strong>TensorFlow</strong> and <strong>Keras</strong>. This model enabled the car to make autonomous decisions and follow the track.",
        "Our code was entirely written in <strong>Python</strong>, using <strong>OpenCV</strong> for image processing. The combination of hardware and software allowed our car to avoid obstacles and efficiently navigate the track.",
        "A crucial decision was adding a <strong>wide-angle lens</strong> to the camera. This significantly improved the car's view, enabling it to react faster and more precisely to the track and obstacles.",
    
        "<strong>Conclusion</strong>",
        "Thanks to our strategy, including the choice of a wide-angle lens, a well-trained AI model, and a sturdy 3D-printed chassis, our team won the race. This project was a valuable experience in combining hardware and AI technology. It emphasized the importance of data analysis, teamwork, and innovation. The results were more than satisfying, and the success of our autonomous car gave a glimpse of the possibilities of AI in mobility.",
      ],
      image: "/images/rttf.jpg",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Donkeycar", "Jetson Nano"],
    },    
  };

  const projectDataNL = {
    internship: {
      title: "Stage project - Make it fly Doodle",
      shortdescription:
        "Een op maat gemaakte planningsapplicatie voor Make it Fly, ontworpen als een merkalternatief voor Doodle, afgestemd op de specifieke behoeften van het bedrijf, met functionaliteiten zoals het plannen van evenementen, stemmen door deelnemers en Google Calendar-integratie.",
      description: [
        "Dit project is ontwikkeld als onderdeel van mijn stage bij Thomas More. Het doel was om een gebrandmerkte versie van Doodle te creëren voor Make it Fly. De applicatie werd ontworpen om specifieke functies te bieden die volledig aansluiten op de eisen en wensen van het bedrijf. Hiermee werd een efficiënte en gebruiksvriendelijke planningstool gerealiseerd die de interne processen van Make it Fly optimaliseert.",

        "<strong>Functionaliteiten</strong>",
        "De applicatie biedt een breed scala aan functionaliteiten, verdeeld over verschillende gebruikersrollen:",
        "<strong>Organisator Functies</strong>",
        "Maak formulieren aan met een opgegeven titel, beschrijving en locatie.",
        "Selecteer meerdere tijdsloten en bepaal de duur voor elk tijdslot.",
        "Nodig zowel externe deelnemers als medewerkers uit.",
        "Stuur geautomatiseerde herinneringen naar deelnemers die niet hebben gereageerd binnen een vastgesteld aantal dagen.",
        "<strong>Deelnemer Functies</strong>",
        "Kies een of meerdere tijdsloten uit het formulier.",
        'Beantwoord met opties zoals "Ja," "Nee," of "Indien nodig."',
        "Stuur automatisch een e-mail naar de organisator zodra het formulier is ingevuld.",
        "<strong>Google Calendar Integratie</strong>",
        "Organisatoren kunnen eenvoudig hun beschikbaarheid controleren tijdens het inplannen van evenementen.",
        'Tijdsloten die als "Ja" gemarkeerd zijn door deelnemers worden automatisch geblokkeerd in hun agenda\'s.',
        "Zodra een tijdslot is bevestigd, worden andere tijdsloten verwijderd, waardoor alleen het bevestigde evenement in de agenda van de organisator blijft staan. <br> <br>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "Dit project heb ik volledig zelfstandig uitgevoerd, aangezien het mijn stageproject was. Mijn aanpak begon met een grondige onderzoeksfase, waarin ik bestaande plannings- en agenda-tools analyseerde. Ik stelde een weighted decision matrix op om objectief te bepalen welke tool het beste aansloot op de behoeften van Make it Fly. Deze analyse gaf me niet alleen inzicht in de sterke punten van bestaande tools, maar liet me ook zien welke verbeteringen nodig waren voor mijn eigen oplossing.",
        "Op basis van deze inzichten ontwierp ik een prototype in <strong>Figma</strong>. Dit visuele ontwerp hielp me om de structuur en functionaliteit van de applicatie helder te definiëren en fungeerde als blauwdruk voor de ontwikkelingsfase. Voor de implementatie koos ik voor moderne technologieën zoals <strong>Next.js</strong>, <strong>TypeScript</strong>, en <strong>TailwindCSS</strong>, die zorgden voor een responsieve en schaalbare applicatie. Tijdens de ontwikkeling zorgde ik ervoor dat de branding en functionele vereisten van Make it Fly volledig werden nageleefd. Regelmatige feedbacksessies met mijn stagebegeleider zorgden ervoor dat het project voortdurend op de juiste koers bleef.",

        "<strong>Conclusie</strong>",
        "Ik ben zeer tevreden met het resultaat van dit project. Alle vereisten werden binnen de gestelde deadlines voltooid, en ik kon zelfs enkele aanvullende functionaliteiten integreren, zoals geautomatiseerde herinneringen en een geavanceerde Google Calendar-integratie. Dit project bood mij de kans om mijn vaardigheden in onderzoek, prototyping en implementatie verder te ontwikkelen. Het versterkte mijn vermogen om zelfstandig te werken en gaf mij tegelijkertijd waardevolle ervaring in het maken van software die voldoet aan de behoeften van een echte klant. Ik ben trots op de impact die dit project heeft gehad op de operationele efficiëntie van Make it Fly.",

        "<strong>Documenten</strong>",
        "Plan van aanpak <a href='/documents/BryanDeckers_PlanVanAanpak_Makeitflydoodle.pdf' target='_blank' class='text-blue-500 hover:underline'>hier</a>",
        "Realisatie <a href='/documents/BryanDeckers_Realisatie_Makeitflydoodle.pdf' target='_blank' class='text-blue-500 hover:underline'>hier</a>",
        "Reflectie <a href='/documents/BryanDeckers_Reflectie_Makeitflydoodle.pdf' target='_blank' class='text-blue-500 hover:underline'>hier</a>",
      ],
      image: "/images/internship.png",
      technologies: ["NextJS", "Typescript", "Figma", "TailwindCSS"],
    },
    togaether: {
      title: "Demo Fabric - Togaether",
      shortdescription:
        "Voor Togaether mochten we de nieuwste Microsoft Fabric-tool testen en demonstreren, waarmee ze hun klanten kunnen laten zien hoe data wordt verwerkt en gevisualiseerd via een geavanceerde pipeline.",
      description: [
        "In dit project hebben mijn medestudent Nathan Neve (<a href='https://nathanneve.be/' target='_blank' class='text-blue-500 hover:underline'>website</a>) en ik samengewerkt om een demo te ontwikkelen voor Togaether met de nieuwste <strong>Microsoft Fabric</strong>-tool. Het doel was om een geavanceerde data pipeline te creëren waarmee Togaether hun klanten kan laten zien hoe data efficiënt wordt verwerkt en gevisualiseerd.",

        "<strong>Functionaliteiten</strong>",
        "Voor dit project werkten we met de <strong>Adventure Works-dataset</strong>. De belangrijkste functionaliteiten en onderdelen van de pipeline zijn:",
        "<ul>",
        "<li>Een <strong>master pipeline</strong> met verschillende <strong>subpipelines</strong> om de dataverwerking te structureren.</li>",
        "<li>Gebruik van <strong>Apache Spark-notebooks</strong> om data op te schonen, verrijken en in <strong>delta-tabellen</strong> op te slaan.</li>",
        "<li>Implementatie van <strong>slowly changing dimensions</strong> (SCD) type 1 voor het nauwkeurig bijhouden van datawijzigingen.</li>",
        "<li>Voorbereiding van de data voor eenvoudige integratie in <strong>Power BI</strong>, waarmee visualisaties kunnen worden gemaakt.</li>",
        "</ul>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "We begonnen met het volgen van een uitgebreide cursus over <strong>Microsoft Fabric</strong> om de nieuwe tool goed te begrijpen en te leren hoe we een geavanceerde pipeline konden opzetten. Daarna hebben we de requirements van het bedrijf verzameld om ervoor te zorgen dat onze oplossing volledig aansloot bij hun behoeften.",
        "Tijdens de ontwikkeling hebben we een iteratieve aanpak gehanteerd. We begonnen met het inlezen van de data, waarna we stap voor stap de dataverwerking hebben opgezet. Het verwerken van de data volgens <strong>SCD type 1</strong> was een belangrijk onderdeel van dit proces. Helaas hadden we niet genoeg tijd om de data volledig te visualiseren, maar de opgezette structuur maakt dit in de toekomst eenvoudig mogelijk.",

        "<strong>Conclusie</strong>",
        "Nathan en ik zijn zeer tevreden met het behaalde resultaat van dit project. Hoewel we de data niet volledig hebben kunnen visualiseren binnen de beschikbare tijd, hebben we een robuuste en schaalbare pipeline opgezet. Dit project bood ons waardevolle ervaring met Microsoft Fabric en gaf ons inzicht in hoe geavanceerde dataverwerking kan worden toegepast in een bedrijfsomgeving. Het resultaat is een demonstratie die Togaether kan gebruiken om hun klanten te overtuigen van de kracht van deze technologie.",
      ],
      image: "/images/togaether.png",
      technologies: ["Microsoft Fabric", "Apache Spark"],
    },
    bpmn: {
      title: "BPMN - Netropolix",
      shortdescription:
        "Voor Netropolix (nu NTX) heb ik het recruteringsproces gevisualiseerd door een gedetailleerd BPMN-model te maken, waarbij elke stap die een kandidaat door kan lopen wordt getoond. Dit helpt mogelijke problemen in het proces te identificeren.",
      description: [
        "In dit project heb ik samen met mijn medestudenten Nathan Neve (<a href='https://nathanneve.be/' target='_blank' class='text-blue-500 hover:underline'>website</a>) en Seppe Stroobants (<a href='https://www.seppestroobants.com/' target='_blank' class='text-blue-500 hover:underline'>website</a>) gewerkt aan het visualiseren van het recruteringsproces van Netropolix (nu NTX). Het doel van het project was om een helder overzicht te creëren van het proces en mogelijke verbeterpunten te identificeren.",

        "<strong>Functionaliteiten</strong>",
        "De belangrijkste deliverable van dit project was een gedetailleerd <strong>BPMN-model</strong> dat het volledige recruteringsproces omvat. Enkele aspecten die in het model zijn opgenomen:",
        "<ul>",
        "<li>De reis van een kandidaat vanaf de eerste sollicitatie tot de uiteindelijke aanwervingsbeslissing.</li>",
        "<li>Visuele representatie van alle stappen in het proces, zoals screening, interviews en evaluaties.</li>",
        "<li>Identificatie van mogelijke knelpunten en inefficiënties die de doorlooptijd van het proces beïnvloeden.</li>",
        "</ul>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "Om dit project te realiseren, bezochten wij Netropolix en kregen we een gedetailleerde uitleg over hun huidige recruteringsproces. Tijdens dit gesprek hebben we alle stappen en nuances zorgvuldig genoteerd. Op basis van deze informatie hebben we het proces gevisualiseerd in de tool <strong>Bizagi</strong>, waarmee we een duidelijk en gestructureerd BPMN-model hebben opgesteld.",
        "Na het afronden van het model hebben we dit gepresenteerd aan het team van Netropolix, waarbij we samen eventuele verbeterpunten hebben besproken. De feedback van het bedrijf werd verwerkt in het model, wat resulteerde in een definitieve versie die volledig aansloot op hun behoeften en inzicht gaf in mogelijke optimalisaties.",

        "<strong>Conclusie</strong>",
        "Dit project was een waardevolle ervaring in procesanalyse en teamwerk. Door nauw samen te werken met Nathan en Seppe en direct met de klant te communiceren, hebben we een resultaat neergezet dat goed werd ontvangen. Het BPMN-model biedt Netropolix een krachtige tool om hun recruteringsproces beter te begrijpen en te verbeteren. Het projectdoel is volledig behaald, en zowel het team als Netropolix was zeer tevreden met het eindresultaat.",
      ],
      image: "/images/netropolix.png",
      technologies: ["Bizagi"],
    },
    waaiburg: {
      title: "Waaiburg",
      shortdescription:
        "De Waaiburg Webapp/App is een op maat gemaakte webapplicatie ontwikkeld voor De Waaiburg, een organisatie die jongeren in moeilijke thuissituaties ondersteunt. Deze webapp biedt volledige controle over de bijbehorende mobiele app, waardoor het personeel van De Waaiburg de functionaliteit en gebruikersaccounts kan beheren en waardevolle gegevens kan verzamelen om de effectiviteit van de app te evalueren.",
      description: [
        "Dit project is uitgevoerd in samenwerking met mijn medestudenten Siebe Camerman (<a href='https://siebecamerman.be/' target='_blank' class='text-blue-500 hover:underline'>website</a>) en Sens Van Aert (<a href='https://sensvanaert.com/' target='_blank' class='text-blue-500 hover:underline'>website</a>). Het doel was om de bestaande webapplicatie en mobiele app voor De Waaiburg volledig te herontwikkelen en uit te breiden, gebaseerd op de specifieke behoeften van de organisatie. De Waaiburg ondersteunt jongeren in moeilijke thuissituaties en wilde een platform dat hen niet alleen hielp om hun clientele efficiënt te beheren, maar ook een speelse en toegankelijke manier bood om complexe onderwerpen bespreekbaar te maken.",

        "<strong>Functionaliteiten</strong>",
        "De belangrijkste functies en uitbreidingen die we hebben gerealiseerd zijn:",
        "<ul>",
        "<li>Een <strong>webapplicatie</strong> waarmee het personeel van De Waaiburg eenvoudig hun cliënten en de inhoud van de mobiele app kan beheren.</li>",
        "<li>Het herontwikkelen van de <strong>mobiele app</strong> met Flutter, inclusief een nieuw spel dat moeilijke onderwerpen op een speelse manier bespreekbaar maakt.</li>",
        "<li>Volledige integratie tussen de webapplicatie en mobiele app, zodat wijzigingen in de webapp direct zichtbaar zijn in de app.</li>",
        "<li>Een veilige en gebruiksvriendelijke interface, ontworpen met <strong>Laravel Blade</strong> en <strong>TailwindCSS</strong>.</li>",
        "</ul>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "We begonnen het project met een grondige analyse van de bestaande applicatie en overlegden met De Waaiburg over hun eisen en wensen. Vervolgens werkten we iteratief aan het herschrijven van de webapplicatie, waarbij we de functionaliteit uitbreidden om te voldoen aan de nieuwe vereisten. Het herontwikkelen van de mobiele app was een tweede belangrijke fase, waarbij we de structuur moderniseerden en het spelelement toevoegden.",
        "Gedurende het project gebruikten we <strong>Laravel</strong> voor de webapplicatie en <strong>Flutter</strong> voor de mobiele app, met <strong>TailwindCSS</strong> voor een moderne en responsieve UI. Om de kwaliteit van onze code te waarborgen, integreerden we <strong>SonarCloud</strong>, wat ons hielp om bugs en kwetsbaarheden snel op te lossen en een hoge standaard te handhaven.",
        "Het project liep over twee academiejaren, wat ons de tijd gaf om alle functionaliteiten zorgvuldig te implementeren en te testen. Onze teamstructuur en samenwerking waren essentieel om de omvang van dit project succesvol te beheren.",

        "<strong>Conclusie</strong>",
        "We zijn enorm tevreden met het eindresultaat van dit project. De webapplicatie is robuust, veilig en volledig functioneel, en de mobiele app biedt een vernieuwde ervaring met nieuwe mogelijkheden zoals het spelelement. De Waaiburg zelf was zeer tevreden en beschouwde het platform als een belangrijke verbetering voor hun dagelijkse werking. Dit project bood ons niet alleen technische groei, maar ook waardevolle ervaring in samenwerking, communicatie met een klant en het ontwikkelen van oplossingen die een maatschappelijke impact hebben.",
      ],
      image: "/images/waaiburgdashboard.png",
      technologies: ["Laravel", "Flutter", "TailwindCSS"],
    },
    dartsfederatiekempen: {
      title: "Dartsfederatie Kempen",
      shortdescription:
        "Het DFK project is een uitgebreide oplossing gemaakt voor Dartsfederatie Kempen, één van de grootste dartsfederaties in de Kempen. Het doel was om een robuuste webapplicatie te ontwikkelen die hen in staat stelt om hun spelers, teams en clubs te beheren, wedstrijden te plannen en scores in te voeren. Deze webapplicatie stroomlijnt hun workflow en biedt een gebruiksvriendelijk platform om hun administratieve taken te verbeteren.",
      description: [
        "Dit project is uitgevoerd in samenwerking met mijn medestudent Syan Delbart (<a href='https://syandelbart.com/' target='_blank' class='text-blue-500 hover:underline'>website</a>). We namen contact op met de Dartsfederatie Kempen (DFK) om hun huidige uitdagingen en vereisten te begrijpen. Het werd al snel duidelijk dat hun bestaande website niet meer voldeed en een volledige herontwikkeling nodig was. Ons doel was om een moderne webapplicatie te creëren die alle aspecten van hun organisatiebeheer zou dekken en hun administratieve workflow zou verbeteren.",

        "<strong>Functionaliteiten</strong>",
        "De belangrijkste functies die we hebben ontwikkeld omvatten:",
        "<ul>",
        "<li>Beheer van <strong>spelers, teams en clubs</strong>, inclusief het maken, bewerken en verwijderen van deze entiteiten.</li>",
        "<li>Een geïntegreerd <strong>competitiebeheersysteem</strong> waarmee gebruikers competities kunnen opzetten en speelschema's automatisch kunnen genereren.</li>",
        "<li>Mogelijkheid om per speeldag via een <strong>online wedstrijdblad</strong> scores in te voeren van elke speler en wedstrijd.</li>",
        "<li>Automatische berekening van <strong>klassementen</strong> en <strong>individuele rankings</strong>, gebaseerd op de ingevoerde wedstrijdresultaten.</li>",
        "</ul>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "We begonnen met het maken van prototypes in <strong>Figma</strong> om een visueel overzicht te bieden van de nieuwe webapplicatie en kregen goedkeuring van de DFK. Daarna startten we met de ontwikkeling in <strong>Next.js</strong>, gekozen vanwege de schaalbaarheid en uitstekende prestaties. Voor de styling gebruikten we <strong>TailwindCSS</strong>, wat ons hielp om een moderne, responsieve en visueel aantrekkelijke interface te ontwerpen.",
        "De backend van de applicatie werd gebouwd met <strong>Cloudflare's serverless architectuur</strong>, inclusief workers en key-value storage. Dit zorgde voor een snelle en betrouwbare infrastructuur die schaalbaar was naar de behoeften van de federatie.",
        "In het project verdeelden we de verantwoordelijkheden. Mijn bijdragen omvatten zowel <strong>front-end</strong> als <strong>back-end ontwikkeling</strong>. Ik ontwierp en implementeerde de gebruikersinterface en werkte nauw samen met mijn teamgenoot om ervoor te zorgen dat de front-end consistent en gebruiksvriendelijk was. Voor de back-end implementeerde ik functies voor het beheren van spelers, teams en competities, en zorgde ik voor een naadloze integratie van deze onderdelen.",

        "<strong>Conclusie</strong>",
        "Het eindresultaat is een robuuste en volledig functionele webapplicatie die voldoet aan de behoeften van de Dartsfederatie Kempen. De nieuwe applicatie heeft hun administratieve processen aanzienlijk vereenvoudigd, terwijl het hen in staat stelt om wedstrijden efficiënter te beheren en statistieken bij te houden. Zowel wij als het team van de DFK waren zeer tevreden met het behaalde resultaat. Dit project stelde ons in staat om onze technische vaardigheden te verbeteren en een waardevolle oplossing te leveren die een positieve impact heeft op de werking van de federatie.",
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
        "Het BC Detailing project werd ontwikkeld voor een autodetailing bedrijf gevestigd in België. Het doel was om een uitgebreide webapplicatie te creëren die het bedrijf in staat stelde om hun diensten, afspraken en klantgegevens te beheren, en tegelijkertijd een intuïtief en visueel aantrekkelijk platform te bieden aan hun klanten.",
      description: [
        "Dit project heb ik uitgevoerd als <strong>student-zelfstandige</strong> in webdesign. De klant benaderde mij met de vraag om een professionele website te ontwikkelen voor zijn mobiele autodetailing bedrijf. De website moest niet alleen informatie bieden over de aangeboden diensten, maar ook een platform bevatten waarmee klanten afspraken konden maken en beheerders eenvoudig hun gegevens konden beheren.",

        "<strong>Functionaliteiten</strong>",
        "De belangrijkste functionaliteiten van de website zijn:",
        "<ul>",
        "<li>Een sectie met uitgebreide informatie over de aangeboden <strong>services</strong>.</li>",
        "<li>Een <strong>fotogalerij</strong> waarin de klant zelf foto's van voltooide projecten kan uploaden en beheren.</li>",
        "<li>Een volledig geïntegreerd <strong>boekingssysteem</strong>, waarmee klanten beschikbare datums en tijdslots kunnen bekijken en afspraken kunnen maken.</li>",
        "<li>Een beheermodule waarmee de eigenaar zelf prijzen, werkuren en beschikbaarheid kan instellen, wat maximale controle biedt over het boekingssysteem.</li>",
        "</ul>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "Ik ben begonnen met een uitgebreid ontwerp in <strong>Figma</strong> om de visuele en functionele eisen van de klant helder vast te leggen. Dit design werd goedgekeurd en diende als leidraad voor de ontwikkeling.",
        "De front-end van de webapplicatie werd gebouwd met <strong>Next.js</strong> voor een responsieve en performante gebruikerservaring. Voor de styling gebruikte ik <strong>TailwindCSS</strong>, waarmee ik een strak en professioneel design kon realiseren. De back-end was volledig serverless en gebouwd op <strong>Cloudflare's infrastructuur</strong>. Dit zorgde voor een schaalbare en betrouwbare oplossing voor het beheer van gegevens, inclusief de opslag van foto's en boekingsinformatie.",

        "<strong>Conclusie</strong>",
        "Het eindresultaat was een professionele en gebruiksvriendelijke website die volledig voldoet aan de eisen van de klant. De klant was bijzonder tevreden met het eindproduct, vooral met de flexibiliteit en functionaliteit van het boekingssysteem. Dit project heeft mij in staat gesteld om mijn vaardigheden als zelfstandige te verbeteren en een oplossing te leveren die zowel technisch solide als visueel aantrekkelijk is.",
      ],
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
        "Het Simpelke project werd ontwikkeld voor een lokale frituur. Het doel was om een gebruiksvriendelijke en visueel aantrekkelijke website te creëren die klanten voorziet van essentiële informatie zoals openingsuren, locatie, het menu en foto's van gerechten. Later werd de functionaliteit uitgebreid met een boekingssysteem voor broodjesbestellingen.",
      description: [
        "Dit project heb ik uitgevoerd als <strong>student-zelfstandige</strong> in webdesign. De klant, een lokale frituur, kwam naar mij toe met de vraag om een website te ontwikkelen die niet alleen informatief was, maar ook functioneel en aantrekkelijk voor hun klanten. De website moest de identiteit van de frituur weerspiegelen en een centrale plek bieden voor klanten om informatie te vinden en bestellingen te plaatsen.",

        "<strong>Functionaliteiten</strong>",
        "De website bevat de volgende functionaliteiten:",
        "<ul>",
        "<li>Informatie over de <strong>openingsuren</strong> en <strong>locatie</strong> van de frituur.</li>",
        "<li>Een overzicht van het <strong>menu</strong>, inclusief foto's van de gerechten, om klanten een visuele indruk te geven van de aangeboden maaltijden.</li>",
        "<li>Een <strong>mailgebaseerd boekingssysteem</strong> voor broodjesbestellingen, waarmee klanten hun bestellingen eenvoudig kunnen plaatsen. De klant kan via een agenda bepaalde dagen blokkeren waarop geen bestellingen mogelijk zijn.</li>",
        "</ul>",

        "<strong>Hoe het project is uitgevoerd</strong>",
        "Het project begon met een uitgebreid ontwerptraject in <strong>Figma</strong>, waarbij ik regelmatig feedback van de klant verzamelde en verwerkte om ervoor te zorgen dat het design perfect aansloot op hun wensen. Pas na de goedkeuring van het ontwerp begon ik met de ontwikkeling.",
        "De front-end van de website werd gebouwd met <strong>Next.js</strong> om een snelle en responsieve gebruikerservaring te garanderen. Voor de styling koos ik voor <strong>TailwindCSS</strong>, wat zorgde voor een consistent en professioneel design. De back-end van de applicatie is volledig serverless en draait op <strong>Cloudflare</strong>, terwijl het mailsysteem werd gerealiseerd met de <strong>SendGrid API</strong>, waardoor bestellingen efficiënt via e-mail worden verwerkt.",

        "<strong>Conclusie</strong>",
        "Het eindresultaat was een complete en goed functionerende website die volledig voldoet aan de behoeften van de klant. De klant was bijzonder tevreden met zowel het initiële ontwerp als de uiteindelijke functionaliteiten. De toevoeging van het broodjesbestelsysteem biedt extra waarde en gebruiksgemak voor de klanten van de frituur. Dit project benadrukt mijn vermogen om klantgerichte oplossingen te leveren en tegelijkertijd te voldoen aan technische eisen.",
      ],
      image: "/images/simpelke.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "TailwindCSS",
        "Figma",
        "Cloudflare",
        "SendGrid API",
      ],
    },
    racetothefuture: {
      title: "Race to the Future",
      shortdescription:
        "Een volledig autonome RC-auto die over een circuit kan rijden en obstakels kan ontwijken. De auto maakt gebruik van een camera en een getraind AI-model om het parcours te navigeren, ontwikkeld met behulp van de Donkeycar-library, TensorFlow en Keras.",
      description: [
        "Voor het project 'Race to the Future' werd onze klas van Digital Innovation opgesplitst in twee teams, elk verantwoordelijk voor de ontwikkeling van een autonome RC-auto. Het doel was om een zelfgemaakte auto te ontwerpen die volledig zelfstandig een circuit kon navigeren. Het team dat de race zou winnen, moest niet alleen snelheid maar ook precisie tonen bij het ontwijken van obstakels en het volgen van het parcours.",
    
        "<strong>Functionaliteiten</strong>",
        "Onze autonome RC-auto was uitgerust met de volgende mogelijkheden:",
        "<ul>",
        "<li>Volledig autonome navigatie over het circuit met behulp van een <strong>camera</strong>.</li>",
        "<li>Gebruik van een breedhoeklens om een breder gezichtsveld te bieden voor betere waarneming van het parcours.</li>",
        "<li>Een op maat gemaakte 3D-geprinte chassis, specifiek ontworpen om de hardware te ondersteunen.</li>",
        "</ul>",
    
        "<strong>Hoe het project is uitgevoerd</strong>",
        "We maakten gebruik van de <strong>Donkeycar-library</strong>, een open-sourceplatform voor het bouwen van zelfrijdende auto's. Deze werd geïnstalleerd op een <strong>Jetson Nano</strong>, een krachtige edge-computer die aan boord van de auto was gemonteerd.",
        "Na de installatie van de Donkeycar-library begonnen we met het verzamelen van data door de auto handmatig over het parcours te rijden. De verzamelde data werd vervolgens gebruikt om een AI-model te trainen met <strong>TensorFlow</strong> en <strong>Keras</strong>. Dit model stelde de auto in staat om zelfstandig beslissingen te nemen en het parcours te volgen.",
        "Onze code werd volledig geschreven in <strong>Python</strong>, met gebruik van <strong>OpenCV</strong> voor beeldverwerking. De combinatie van hardware en software zorgde ervoor dat onze auto obstakels kon ontwijken en efficiënt door het circuit kon navigeren.",
        "Een cruciale beslissing was het toevoegen van een <strong>breedhoeklens</strong> aan de camera. Dit verbeterde het zicht van de auto aanzienlijk, waardoor deze sneller en preciezer kon reageren op het circuit en obstakels.",
    
        "<strong>Conclusie</strong>",
        "Dankzij onze strategie, waaronder de keuze voor een breedhoeklens, een goed getraind AI-model en een stevig 3D-geprint chassis, won ons team de race. Dit project was een waardevolle ervaring in het combineren van hardware en AI-technologie. Het benadrukte het belang van data-analyse, teamwork en innovatie. De resultaten waren meer dan bevredigend, en het succes van onze autonome auto gaf een glimp van de mogelijkheden van AI in mobiliteit.",
      ],
      image: "/images/rttf.jpg",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Donkeycar", "Jetson Nano"],
    },    
  };

  const projectName = params.project;

  const projectDataLanguage = locale === "nl" ? projectDataNL : projectData;

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
            description: string[];
            image: string;
            technologies: string[];
          }
        }
      />
    )
  );
};

export default ProjectDetailedPage;
