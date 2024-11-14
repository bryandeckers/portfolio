import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: 'Contact - Bryan Deckers',
}

const Contact = () => {
  return (
    <ContactPage />
  );
};

export default Contact;
