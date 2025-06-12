import React from 'react';

function AboutUsPage() {
  return (
    <div className="font-sans bg-white min-h-screen py-10">
      {/* Top Section with Images and Text */}
      <div className="flex flex-wrap justify-center items-start gap-8 max-w-6xl mx-auto">
        <div className="flex-1 min-w-[320px] max-w-[420px]">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Team" className="w-full rounded-xl object-cover h-[220px]" />
        </div>
        <div className="flex-1 min-w-[320px] max-w-[420px] mt-10">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5" alt="Happy Team" className="w-full rounded-xl object-cover h-[220px]" />
        </div>
        <div className="flex-2 min-w-[320px] max-w-[500px] ml-6">
          <div className="text-[#F26522] font-semibold text-[15px] mb-2">Offshore Development Teams</div>
          <div className="text-sm mb-2">
            <a href="#" className="font-semibold">
              At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
            </a>
          </div>
          <div className="text-sm">
            <a href="#" className="font-semibold">
              At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex items-center mt-16 max-w-6xl mx-auto gap-8">
        <div className="bg-[#1A2669] w-8 h-16 rounded-lg mr-4" />
        <h1 className="text-[#1A2669] font-bold text-4xl m-0">About Us</h1>
      </div>

      {/* Center Section with Text and Button */}
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto mt-8">
        <div className="flex-1 min-w-[320px] max-w-[420px]">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Group Smiling" className="w-full rounded-xl object-cover h-[220px]" />
        </div>
        <div className="flex-2 min-w-[320px] max-w-[500px]">
          <div className="text-[#222] text-[15px] mb-2">
            At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
          </div>
          <div className="text-[#222] text-[15px] mb-6">
            At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
          </div>
          <button className="bg-[#1A2669] text-white rounded-lg px-8 py-3 font-semibold text-lg hover:bg-[#16205a] transition">Learn More</button>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex flex-wrap justify-between gap-8 max-w-6xl mx-auto mt-16">
        {/* Mission */}
        <div className="bg-[#1A2669] text-white rounded-2xl p-8 flex-1 min-w-[320px] max-w-[470px]">
          <div className="text-[#F26522] font-semibold text-[15px] mb-2">Our Mission</div>
          <div className="font-bold text-lg mb-3">
            Elevating business success through forward thinking IT solutions, professional training, and technical partnerships
          </div>
          <div className="text-[15px]">
            At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
          </div>
        </div>
        {/* Vision */}
        <div className="bg-[#F26522] text-white rounded-2xl p-8 flex-1 min-w-[320px] max-w-[470px]">
          <div className="text-[#1A2669] font-semibold text-[15px] mb-2">Our Vision</div>
          <div className="font-bold text-lg mb-3">
            Elevating business success through forward thinking IT solutions, professional training, and technical partnerships
          </div>
          <div className="text-[15px]">
            At Vision5 Tech, we help businesses cut costs and scale faster with expert offshore development teams and tailored technology solutions. From Microsoft Power Platform to secure full stack development, we deliver innovation you can trust — at a fraction of the cost.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
