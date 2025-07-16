"use client";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  console.log(pathName);

  const socialMedia = [
    {
      image: "/images/instagram1.svg",
      link: "https://www.instagram.com",
    },
    {
      image: "/images/linkedin1.svg",
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <header className="w-full flex  bg-[#fdf0e9] px-6 py-4 items-center justify-between">
      <h1 className="font-playfair font-bold text-4xl text-black ">Sakinah.</h1>

      <div className="flex  gap-4">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.image} width={30} height={30} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
