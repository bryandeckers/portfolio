"use client"
import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";
import Image from "next/image";

import { Icon } from "@iconify/react";
import Link from "next/link";

// TODO: cv toevoegen

const AboutPage: NextPage = () => {
  return (
    <main className="container mt-40 mb-5">
      <PageHeader title="About" />
      <p>Work in progress...</p>
      {/* <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-customblack text-white px-4 py-2 rounded-md"
      >
        Resume
      </Link> */}
    </main>
  );
};

export default AboutPage;
