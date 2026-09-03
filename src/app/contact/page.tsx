import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description: "Contactez Syslearn Group pour un projet informatique, une expertise C++/Qt ou une question RH.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactClient />;
}