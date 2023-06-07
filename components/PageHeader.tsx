import Head from "next/head";
import { FunctionComponent } from "react";

type PageHeaderData = {
  title?: string;
};

const PageHeader: FunctionComponent<PageHeaderData> = ({ title }) => {
  return (
    <>
      <Head>
        <title>Bryan Deckers {title && "- " + title}</title>
      </Head>
      {title && <h1 className="text-6xl font-bold mb-20">{title}</h1>}
    </>
  );
};

export default PageHeader;
