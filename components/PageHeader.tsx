import Head from "next/head";
import { FunctionComponent } from "react";

type PageHeaderData = {
  title?: string;
  noTitleText?: boolean;
};

const PageHeader: FunctionComponent<PageHeaderData> = ({ title, noTitleText }) => {
  return (
    <>
      <Head>
        <title>Bryan Deckers {title && "- " + title}</title>
      </Head>
      {title && !noTitleText && <h1 className="text-4xl font-bold mb-20">{title}</h1>}
    </>
  );
};

export default PageHeader;
