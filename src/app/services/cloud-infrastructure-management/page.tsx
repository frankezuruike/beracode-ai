"use client";
import { ArrowRight } from "lucide-react";

const whatWeOffer = [
  "Cloud Strategy & Consulting",
  "Cloud Migration",
  "Infrastructure as Code (IaC)",
  "DevOps Implementation",
  "Cloud Security",
  "Managed Cloud Services (AWS, Azure, OCI, GCP)"
];
const benefits = [
  "Cost savings",
  "Increased scalability",
  "Enhanced security",
  "Improved reliability",
  "Disaster recovery"
];

const CloudInfrastructureManagementPage = () => (
  <main className="min-h-screen bg-white py-16 px-4 flex flex-col items-center">
    <section className="max-w-3xl w-full text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#3bb3e6]">Cloud & Infrastructure Management</h1>
      <p className="text-lg text-gray-700 mb-6">
        Migrate, manage, and optimize your IT infrastructure in the cloud with BeraCode AI LTD. We ensure your systems are secure, scalable, and always available, allowing you to focus on your core business.
      </p>
    </section>
    <section className="max-w-3xl w-full mb-10">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">What We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 text-left">
        {whatWeOffer.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Benefits</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 text-left">
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
    <a href="/contact-us" className="inline-flex items-center bg-[#3bb3e6] hover:bg-[#2a9bd2] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg" tabIndex={0} aria-label="Contact us about Cloud & Infrastructure Management" onKeyDown={e => {if(e.key==='Enter'){window.location.href='/contact-us'}}}>
      Contact Us <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  </main>
);

export default CloudInfrastructureManagementPage; 