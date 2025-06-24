"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart2, Layers, Users, CheckCircle, Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // You might want to control video playback based on user interaction or visibility
  // For now, it will autoplay as per YouTube embed parameters
  const handleVideoPlayPause = () => {
    setIsVideoPlaying(!isVideoPlaying);
    // In a real scenario, you'd interact with the iframe API to play/pause
  };

  return (
    <>
      {/* Header */}
      <Header />

      <main className="min-h-screen bg-white">
        <div className="mt-20">
          {/* Hero Section - Olla Systems Design Inspired with Image Background */}
          <section className="h-[calc(100vh-80px)] relative overflow-hidden flex items-center justify-center">
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="/header-img.png"
                alt="Background of humans and technology"
                className="w-full h-full object-cover"
              />
              {/* Optional: Overlay for better text readability - Adjusted opacity and color */}
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg text-white">
                Revolutionizing Development: <br/><span className="text-[#a8e0f9]">AI-Powered</span> Solutions by BeraCode
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
                Unleash the future of software creation. BeraCode AI empowers your teams to build smarter, faster, and with unparalleled intelligence, automating complex tasks and optimizing workflows.
              </p>
              <button className="bg-[#3bb3e6] hover:bg-[#2a9bd2] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg flex items-center justify-center mx-auto">
                Discover Our AI Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </section>
        </div>

        {/* Our Services Section - Olla Systems Design Inspired */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We empower businesses with cutting-edge IT services and solutions tailored to your unique needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AI-Powered Solutions */}
              <a href="/services/ai-powered-solutions" className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3bb3e6] focus:outline-none focus:ring-2 focus:ring-[#3bb3e6]" tabIndex={0} aria-label="AI-Powered Solutions" onKeyDown={e => {if(e.key==='Enter'){window.location.href='/services/ai-powered-solutions'}}}>
                <BarChart2 className="w-12 h-12 text-[#3bb3e6] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Solutions</h3>
                <p className="text-gray-600">Unlock the true potential of your data with advanced AI systems that learn, adapt, and make informed decisions.</p>
              </a>
              {/* Custom Software Development */}
              <a href="/services/custom-software-development" className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3bb3e6] focus:outline-none focus:ring-2 focus:ring-[#3bb3e6]" tabIndex={0} aria-label="Custom Software Development" onKeyDown={e => {if(e.key==='Enter'){window.location.href='/services/custom-software-development'}}}>
                <Layers className="w-12 h-12 text-[#3bb3e6] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Software Development</h3>
                <p className="text-gray-600">Scalable, secure, and user-friendly software applications tailored to your business needs.</p>
              </a>
              {/* Cloud & Infrastructure Management */}
              <a href="/services/cloud-infrastructure-management" className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3bb3e6] focus:outline-none focus:ring-2 focus:ring-[#3bb3e6]" tabIndex={0} aria-label="Cloud & Infrastructure Management" onKeyDown={e => {if(e.key==='Enter'){window.location.href='/services/cloud-infrastructure-management'}}}>
                <Users className="w-12 h-12 text-[#3bb3e6] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud & Infrastructure Management</h3>
                <p className="text-gray-600">Migrate, manage, and optimize your IT infrastructure in the cloud with security and scalability.</p>
              </a>
              {/* Data Analytics & Business Intelligence */}
              <a href="/services/data-analytics-business-intelligence" className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3bb3e6] focus:outline-none focus:ring-2 focus:ring-[#3bb3e6]" tabIndex={0} aria-label="Data Analytics & Business Intelligence" onKeyDown={e => {if(e.key==='Enter'){window.location.href='/services/data-analytics-business-intelligence'}}}>
                <BarChart2 className="w-12 h-12 text-[#3bb3e6] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analytics & Business Intelligence</h3>
                <p className="text-gray-600">Transform your raw data into actionable insights and make data-driven decisions.</p>
              </a>
            </div>
          </div>
        </section>

        {/* About Us / Features Section - Olla Systems Design Inspired */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img src="/why_choose_us-removebg-preview.png" alt="Why Choose Us" className="rounded-lg shadow-xl object-cover w-full h-96" />
            </div>
            <div className="md:order-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                At BeraCode AI LTD, we are committed to delivering unparalleled IT solutions that drive real business growth and innovation.
              </p>
              <ul className="text-left text-gray-700 space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#3bb3e6] mr-2 flex-shrink-0" /> Tailored solutions for your unique challenges
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#3bb3e6] mr-2 flex-shrink-0" /> Expertise in cutting-edge AI and IT technologies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#3bb3e6] mr-2 flex-shrink-0" /> Dedicated support and partnership for long-term success
                </li>
              </ul>
              <button className="bg-[#3bb3e6] hover:bg-[#2a9bd2] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Olla Systems Design Inspired */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-t-4 border-[#3bb3e6]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400" />)}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  "BeraCode AI transformed our operations. Their solutions are truly innovative and their support is exceptional."
                </p>
                <div className="flex items-center justify-center">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client 1" className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">John Doe</p>
                    <p className="text-gray-500 text-sm">CEO, Tech Innovators</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-t-4 border-[#3bb3e6]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400" />)}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  "Highly recommend BeraCode AI for their expertise and ability to deliver tangible results. A true partner."
                </p>
                <div className="flex items-center justify-center">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client 2" className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Jane Smith</p>
                    <p className="text-gray-500 text-sm">CTO, Global Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Strategic Partnerships</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              With strong alliances and collaborations, we leverage years of reliable IT experience and stellar technology to deliver exceptional value to our customers. We partner with industry leaders to bring you the best-in-class AI solutions.
            </p>
            {/* Partner Logos - Placeholder */}
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-12">
              <div className="text-4xl font-bold text-gray-400 grayscale opacity-70 hover:opacity-100 transition-opacity">PartnerOne</div>
              <div className="text-4xl font-bold text-gray-400 grayscale opacity-70 hover:opacity-100 transition-opacity">LogoHere</div>
              <div className="text-4xl font-bold text-gray-400 grayscale opacity-70 hover:opacity-100 transition-opacity">InnovateCorp</div>
              <div className="text-4xl font-bold text-gray-400 grayscale opacity-70 hover:opacity-100 transition-opacity">TechGiant</div>
              <div className="text-4xl font-bold text-gray-400 grayscale opacity-70 hover:opacity-100 transition-opacity">Solution-Sys</div>
            </div>
            <button className="bg-[#3bb3e6] hover:bg-[#2a9bd2] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg">
              JOIN THE LEAGUE
            </button>
          </div>
        </section>

        {/* Call to Action / Contact Section - Olla Systems Design Inspired */}
        <section className="py-20 px-4 bg-[#3bb3e6] text-white text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our IT solutions can drive your success.
            </p>
            <button className="bg-white hover:bg-gray-200 text-[#3bb3e6] font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer - Olla Systems Design Inspired */}
        <footer className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <Logo />
                <div className="mt-2">
                  <p className="font-extrabold text-lg tracking-widest text-[#3bb3e6]">BERACODE AI LTD</p>
                  <p className="uppercase text-xs tracking-widest text-gray-400 mt-1">Your Partner in Intelligent Transformation</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                We exist to bridge the gap between therapeutics and technology via delivering human centered solutions that heal, train, and prepare individuals and institutions to thrive under real-world pressure.
              </p>
            </div>

            {/* Company Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="/about-us/who-we-are" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Login</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help Center</a></li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Healthcare Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partnerships</a></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="mr-2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect width="4" height="12" x="2" y="9" rx="2" /></svg> LinkedIn</a></li>
                <li><a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="mr-2"><path d="M21.543 7.104A7.491 7.491 0 0019.166 4.727c-.47-.342-.98-.553-1.5-.634-1.29-.21-4.25-.21-4.25-.21h-.002s-2.96 0-4.25.21c-.52.081-1.03.292-1.5.634A7.491 7.491 0 002.457 7.104C1.987 7.734 1.701 8.423 1.554 9.176c-.147.753-.219 1.574-.219 2.457v.734c0 .883.072 1.704.219 2.457.147.753.433 1.442.903 2.072A7.491 7.491 0 004.727 19.166c.342.47.553.98.634 1.5.21 1.29.21 4.25.21 4.25h.734s0-2.96.21-4.25c.081-.52.292-1.03.634-1.5A7.491 7.491 0 0011.896 21.543c.63-.47 1.319-.701 2.072-.848.753-.147 1.574-.219 2.457-.219h.734c.883 0 1.704.072 2.457.219.753.147 1.442.433 2.072.903A7.491 7.491 0 0021.543 16.896c.47-.63.701-1.319.848-2.072.147-.753.219-1.574.219-2.457v-.734c0-.883-.072-1.704-.219-2.457-.147-.753-.433-1.442-.903-2.072zM10.999 15.999l5.001-3.999-5.001-3.999v7.998z\"/></svg> YouTube</a></li>
                <li><a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="mr-2"><path d="M17 1H7C3.691 1 1 3.691 1 7v10c0 3.309 2.691 6 6 6h10c3.309 0 6-2.691 6-6V7c0-3.309-2.691-6-6-6zm-2.828 7.375L13 12h3.5l-.83 3.659h-2.67V23H9.172v-7.341H7.5V12h1.672L8.5 8.375h2.672L12 5h2.5zm0 0\"/></svg> Facebook</a></li>
                <li><a href="#" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="mr-2"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.036 17.518h-2.182v-6.398h2.182c.451 1.776 2.054 3.036 3.998 3.036 2.378 0 4.303-1.925 4.303-4.303s-1.925-4.303-4.303-4.303c-1.944 0-3.547 1.26-3.998 3.036h-2.182c.451-2.909 2.871-5.182 5.768-5.182 3.197 0 5.795 2.598 5.795 5.795s-2.598 5.795-5.795 5.795c-3.197 0-5.617-2.273-6.068-5.182z\"/></svg> TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto text-center text-gray-500 text-xs mt-12">
            © {new Date().getFullYear()} BeraCode. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}