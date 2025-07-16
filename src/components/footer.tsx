"use client";

const Footer = () => {
  return (
    <div className="bg-[#fdf0e9] border-t border-[#f3d1bf] py-12 relative w-[75%] mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-black">
            Get in touch!
          </h2>

          <div className="flex flex-col md:flex-row gap-36">
            <div>
              <p className="text-xs text-[#ef6d58] font-bayon font-normal tracking-widest mb-1">
                EMAIL
              </p>
              <p className="font-playfair text-lg text-black">
                sakinahjusoh.work@gmail.com
              </p>
            </div>
            <div>
              <p className="font-bayon text-xs text-[#ef6d58] font-normal tracking-widest mb-1">
                CONTACT NUMBER
              </p>
              <p className="font-playfair text-lg text-black">+6011 17757315</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="absolute right-6 top-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
        aria-label="back to top"
      >
        <img src="/images/up-arrow.png" className="h-4 w-4"></img>
      </a>
    </div>
  );
};

export default Footer;
