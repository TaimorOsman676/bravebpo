import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Brave BPO – Connect with Our Team",
  description: "Get in touch with Brave BPO. Whether you're a client, candidate, or partner — we're ready to connect. Visit, call, or drop us a message today!",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We’re here to help you grow. Whether you have questions about our services or want to explore new opportunities with Brave BPO — just reach out."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
