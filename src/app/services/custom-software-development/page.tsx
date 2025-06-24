"use client";
import { ArrowRight } from "lucide-react";

const whatWeOffer = [
  "Web Application Development",
  "Mobile App Development (iOS/Android)",
  "Enterprise Software Solutions",
  "SaaS Product Development",
  "UI/UX Design"
];
const benefits = [
  "Optimized workflows",
  "Improved productivity",
  "Competitive differentiation",
  "Enhanced user experience",
  "Future-proof solutions"
];

const CustomSoftwareDevelopmentPage = () => (
  <main className="min-h-screen bg-white py-16 px-4 flex flex-col items-center">
    <section className="max-w-3xl w-full text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#3bb3e6]">Custom Software Development</h1>
      <p className="text-lg text-gray-700 mb-6">
        From concept to deployment, we build scalable, secure, and user-friendly software applications tailored precisely to your business requirements. Say goodbye to off-the-shelf limitations and embrace solutions built for you.
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
    <a href="/contact-us" className="inline-flex items-center bg-[#3bb3e6] hover:bg-[#2a9bd2] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg" tabIndex={0} aria-label="Contact us about Custom Software Development" onKeyDown={e => {if(e.key==='Enter'){window.location.href='/contact-us'}}}>
      Contact Us <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  </main>
);

export default CustomSoftwareDevelopmentPage; 