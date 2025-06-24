import React from 'react';
import { Award, GraduationCap, Briefcase, Handshake, Zap, Gem, Users, Lightbulb } from 'lucide-react';
import Header from '@/components/layout/Header';

const WhoWeArePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />

      <main className="container mx-auto py-12 px-4 pt-[56px]">
        {/* Intro Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h1>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              At Beracode AI Ltd., we are at the forefront of the artificial intelligence revolution, dedicated to empowering businesses and organizations to thrive in an increasingly automated world. We specialize in the seamless integration of advanced AI agents into existing workflows, transforming operations, and significantly boosting efficiency.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-10 px-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-center">
            Our mission is to democratize the power of AI, making sophisticated intelligent automation accessible and practical for businesses of all sizes. We are committed to helping our clients navigate the complexities of AI adoption, ensuring a smooth transition that delivers tangible, measurable results.
          </p>
        </section>

        {/* Values Section */}
        <section className="py-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1: Innovation */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Lightbulb className="w-8 h-8 text-[#3bb3e6] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700 text-sm leading-relaxed">We relentlessly pursue new ideas and technologies to drive progress and deliver cutting-edge solutions that redefine what's possible.</p>
            </div>
            {/* Value 2: Integrity */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Handshake className="w-8 h-8 text-[#3bb3e6] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-700 text-sm leading-relaxed">We operate with unwavering honesty and transparency, building trust by saying what we mean and doing what we say.</p>
            </div>
            {/* Value 3: Client Success */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
               <Award className="w-8 h-8 text-[#3bb3e6] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Success</h3>
              <p className="text-gray-700 text-sm leading-relaxed">We are deeply committed to our clients' goals, measuring our success by the tangible value and growth we help them achieve.</p>
            </div>
             {/* Value 4: Excellence */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
               <Gem className="w-8 h-8 text-[#3bb3e6] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700 text-sm leading-relaxed">We hold ourselves to the highest standards, striving for exceptional quality, precision, and impact in every project we undertake.</p>
            </div>
            {/* Value 5: Collaboration */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
               <Users className="w-8 h-8 text-[#3bb3e6] mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-700 text-sm leading-relaxed">We believe the best solutions are born from partnership, working closely with our clients and each other to achieve shared goals.</p>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section - Existing content */}
        <section className="mt-16 py-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 space-y-12">
              {/* CEO Profile */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="w-full md:w-1/3 lg:w-1/4 rounded-full overflow-hidden flex-shrink-0 aspect-square mx-auto md:mx-0">
                  <img 
                    src="/IMG_4905-.png"
                    alt="Mr. Frank Ezuruike"
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Profile Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Frank Ezuruike</h3>
                  <p className="text-[#3bb3e6] font-semibold mb-4">CEO/Founder BeraCode AI Ltd</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#3bb3e6] mt-1" />
                      <p>
                        Mr. Frank Ezuruike serves as the CEO and Founder of BeraCode AI Ltd, a pioneering technology enterprise at the forefront of artificial intelligence innovation. He holds a Bachelor of Science degree in Computer Science from Covenant University and a Master's degree in Information Technology from the University of Lagos, equipping him with a strong foundation in both theoretical and practical aspects of technology.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#3bb3e6] mt-1" />
                      <p>
                        BeraCode AI Ltd is a technology company supporting financial services and telecommunication sectors. We specialize in delivering cutting-edge AI solutions that transform business operations, enhance efficiency, and drive innovation in these critical sectors. Our expertise in AI integration and automation helps organizations streamline their processes, reduce operational costs, and stay ahead in the rapidly evolving digital landscape.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#3bb3e6] mt-1" />
                      <div>
                        <p className="font-semibold mb-2">Professional Certifications:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Oracle Cloud Infrastructure Certified DevOps Professional</li>
                          <li>Oracle Exadata Database Machine X9M Certified Implementation Specialist</li>
                          <li>Hitachi Vantara Qualified Professional - Pre-sales Data Infrastructure Foundation Certified</li>
                          <li>Oracle Cloud Infrastructure Certified Security Professional</li>
                          <li>Oracle Cloud Database Services Certified Professional</li>
                          <li>Oracle Database Administration I & II</li>
                          <li>Oracle Cloud Infrastructure Developer Certified Associate</li>
                          <li>Oracle Cloud Infrastructure Cloud Operations Certified Associate</li>
                          <li>Oracle Cloud Platform Systems Management Certified Associate</li>
                          <li>Oracle Autonomous Database Cloud Certified Specialist</li>
                          <li>Oracle Cloud Platform Identity and Security Management Certified Associate</li>
                          <li>Oracle Cloud Infrastructure Certified Architect Associate & Professional</li>
                          <li>Oracle SRM Cloud Service Certified Implementation Specialist</li>
                          <li>Cisco Business Architecture Certified Analyst</li>
                          <li>Oracle Certified Associate & Professional, Oracle Solaris 11 System Administrator</li>
                          <li>Oracle Cloud Project Management Practitioner</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Co-Founder Profile */}
              <div className="flex flex-col md:flex-row gap-8 items-start pt-12 border-t border-gray-200">
                 {/* Profile Content (first on small screens, second on md+) */}
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Mrs. Berachah Iyke Ezuruike</h3>
                  <p className="text-[#3bb3e6] font-semibold mb-4">CO-Founder at BeraCode AI Ltd</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#3bb3e6] mt-1" />
                      <p>
                        Dr. Mrs. Berachah Iyke Ezuruike is the Co-Founder of BeraCode AI Ltd. A distinguished Medical Doctor by profession, she brings a unique perspective grounded in rigorous analysis and a deep understanding of complex systems. Her academic journey includes studies at Shengai University in China, where she honed her skills in the medical field. This diverse background equips her with valuable insights into real-world applications and the critical importance of precision and reliability – principles that are fundamental to the AI solutions developed at BeraCode AI.
                      </p>
                    </div>
                    {/* Add more sections like experience if needed */}
                  </div>
                </div>

                {/* Profile Image (second on small screens, first on md+) */}
                <div className="w-full md:w-1/3 lg:w-1/4 rounded-full overflow-hidden flex-shrink-0 aspect-square mx-auto md:mx-0 order-1 md:order-2">
                   {/* Placeholder for Co-Founder Image */}
                   <div className="w-full h-full rounded-full bg-[#3bb3e6]/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#3bb3e6]">BE</span>
                   </div>
                   {/* Replace with img tag and src like the CEO above when you have the image URL */}
                   {/* 
                   <img 
                     src="/YOUR_COFOUNDER_IMAGE_URL_HERE" // <-- REPLACE THIS WITH CO-FOUNDER'S IMAGE URL
                     alt="Dr. Mrs. Berachah Iyke Ezuruike"
                     className="object-cover w-full h-full"
                   />
                   */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships Section */}
        <section className="bg-white py-10 px-6 rounded-lg shadow-md mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Strategic Partnerships</h2>
          <div className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              With strong alliances and collaborations, we leverage years of reliable IT experience and stellar technology to deliver exceptional value to our customers. We partner with industry leaders to bring you the best-in-class AI solutions.
            </p>
            {/* Placeholder for partner logos or more details */}
          </div>
           <a href="#" className="mt-6 inline-block px-5 py-2 rounded-md bg-[#3bb3e6] text-white font-semibold shadow hover:bg-[#3bb3e6]/90 transition">JOIN THE LEAGUE</a>
        </section>

        {/* CTA Section */}
         <section className="py-10 px-6 text-center">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to join our league of satisfied customers?</h2>
           <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">We are committed to powering your progress with innovative AI solutions. Contact us today to learn how we can transform your business.</p>
           <a href="/contact-us" className="inline-block px-5 py-2 rounded-md bg-[#3bb3e6] text-white font-semibold shadow hover:bg-[#3bb3e6]/90 transition">Get Started</a>
         </section>

      </main>

      {/* Placeholder for Footer - assuming consistent footer across site */}
      {/* <Footer /> */}
    </div>
  );
};

export default WhoWeArePage; 