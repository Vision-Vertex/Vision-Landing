import React from 'react';

function ServicesPage() {
  return (
    <div className="font-sans bg-white min-h-screen py-10">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto gap-8 px-4">
        {/* Left */}
        <div className="flex-1 min-w-[320px] max-w-[540px]">
          <div className="text-[#F26522] font-semibold text-[15px] mb-2">Offshore Development Teams</div>
          <h1 className="text-[#1A2669] font-bold text-3xl md:text-4xl mb-4 leading-tight">
            Build High-Performance Global Teams Without the Overhead
          </h1>
          <p className="text-[#222] text-base mb-6">
            At Vision5 Tech, we help businesses scale rapidly and cost-effectively by providing dedicated offshore development teams from Ethiopia and India. Our network includes top-tier software developers, project managers, and QA specialists ready to work as an extension of your team—on your schedule, with your goals in mind.
          </p>
          <div className="flex gap-6 items-center mb-4">
            <button className="bg-[#1A2669] text-white rounded-lg px-6 py-2 font-semibold text-base hover:bg-[#16205a] transition">Get in touch</button>
            <button className="text-[#F26522] font-semibold text-base hover:underline">Start Now &gt;</button>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 min-w-[320px] max-w-[420px] flex justify-center">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" alt="Team working" className="w-full rounded-xl object-cover h-[260px] md:h-[300px]" />
        </div>
      </div>

      {/* Logo Row */}
      <div className="flex justify-center items-center gap-8 mt-12 mb-8 flex-wrap">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google logo"
            className="h-8 w-auto opacity-90"
          />
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-8">
        <h2 className="text-[#1A2669] font-bold text-2xl md:text-3xl mb-2">Why Choose Our Offshore Teams?</h2>
        <p className="text-[#222] text-base">
          At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
        </p>
      </div>

      
    </div>
  );
}

export default ServicesPage;
