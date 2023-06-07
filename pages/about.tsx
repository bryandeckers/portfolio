import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";

// TODO: cv en bij about me chatgpt tekst laten schrijven waarbij ik vertel over student zelfstandige, etc

const AboutPage: NextPage = () => {
  return (
    <main className="container px-60 mt-20">
      <PageHeader title="About" />
    </main>
  );
};

export default AboutPage;
