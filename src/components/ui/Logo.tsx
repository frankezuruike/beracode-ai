import * as React from "react";
import Image from 'next/image'; // Import the Image component from Next.js

export const Logo = () => (
  <div className="flex flex-col items-center gap-1 select-none">
    {/* Replaced SVG Icon with Image Component */}
    <Image 
      src="/website-logo.jpg" 
      alt="BeraCode AI LTD Logo" 
      width={100} // Adjust width for smaller logo
      height={100} // Adjust height for smaller logo
      className="object-contain"
    />
    {/* Removed Company Name and Tagline */}
  </div>
); 