import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "../../utils/supabase/server";

// const skills = [
//   {
//     category: "Technical",
//     title: "Programming & Development",
//     items: [
//       "Java",
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React.js",
//       "Flutter",
//       "TailwindCSS",
//     ],
//   },
//   {
//     category: "Creative",
//     title: "Design & Creative Tools",
//     items: ["Adobe Photoshop", "Canva", "Figma", "Capcut"],
//   },
//   {
//     category: "Soft Skills",
//     title: "Communication Collaboration Adaptable",
//     items: [],
//   },
// ];

// const projects = [
//   {
//     image: "/images/image 6.svg",
//     title: "Library Management System",
//     description:
//       "A modern solution design to streamlined and enhance traditional library operations. It enables users to easily search, borrow and return materials through their mobile devices.",
//   },
//   {
//     image: "/images/Job tracking app 4.svg",
//     title: "Job Application Tracker",
//     description:
//       "A platform designed to assist job seekers in managing their applications efficiently. It features advanced job search filters, dashboard for tracking application progress and reminders for important dates such as deadlines and interviews.",
//   },
//   {
//     image: "/images/calculator.svg",
//     title: "Easy Calculator",
//     description:
//       "A simple mobile tools designed to perform everyday mathematical operations easily. It supports basic function addition, subtraction, multiplication and division along with advance features such as percentage calculations and complex expressions.",
//   },
// ];

// const education = [
//   {
//     title: "Universiti Malaysia Terengganu",
//     period: "2022 - Present",
//     course: "Bachelor of Computer Science (Mobile Computing) with Honors",
//     image: "/images/umt.jpeg",
//   },
//   {
//     title: "Kolej Matrikulasi Pahang",
//     period: "2021 - 2022",
//     course: "Science (Physical Science)",
//     image: "/images/matrik.jpeg",
//   },
// ];

// const about = [
//   {
//     image: "/images/chagee.jpg",
//     title: "Chagee lover",
//   },
//   {
//     image: "/images/travel.jpeg",
//     title: "Traveller",
//   },
//   {
//     image: "/images/happyme.jpeg",
//     title: "Happy Go Lucky",
//   },
// ];

export default async function Portfolio() {
  // skills
  interface Iskill {
    category: string;
    title: string;
    description: string;
  }

  // projects
  interface Iproject {
    title: string;
    description: string;
    image: string;
  }

  // education
  interface Iedu {
    title: string;
    period: string;
    course: string;
    image: string;
  }

  // about
  interface Ipersonal {
    title: string;
    image: string;
  }

  const supabase = await createClient();

  const { data: skill } = await supabase.from("skills").select();
  const { data: project } = await supabase.from("projects").select();
  const { data: edu } = await supabase.from("education").select();
  const { data: personal } = await supabase.from("personal").select();

  console.log(skill, project, edu, personal);

  return (
    <div className="min-h-screen bg-[#fdf0e9] flex flex-col items-center px-4">
      <Header />
      <div className="text-center mt-10">
        <div className="flex items-center justify-center gap-2 text-sm text-black tracking-widest font-poppins">
          HELLO
          <img
            src="/images/Vector 1.svg"
            width={20}
            height={20}
            className="mb-6"
          />
        </div>
        <div className="font-playfair text-4xl md:text-5xl font-bold mb-2">
          I&apos;m
          <span className="text-[#ef6d58]"> Sakinah Jusoh</span>,
          <br />
          Software Developer
        </div>
      </div>
      <div className="relative mt-[-125px] w-[300px] h-[300px] flex items-end justify-center">
        <div className="absolute bottom-0 w-[280px] h-[140px] bg-[#f7cc47] rounded-t-full z-0" />
        <img
          src="/images/kinah.svg"
          width={240}
          height={240}
          className="relative z-10 object-cover "
        />

        <a
          href="/Resume Sakinah.pdf"
          target="_blank"
          className="absolute bottom-4 z-20 px-6 py-2 rounded-full bg-[#ef6d58] text-white font-poppins font-medium hover:bg-[#e45c48] transition text-sm shadow-lg flex items-center gap-2"
        >
          Resume
          <img src="/images/up-right-arrow.png" className="w-3 h-3" />
        </a>
      </div>

      {/* skills */}

      <div className="max-w-6xl w-full bg-[#f9e5da] rounded-3xl p-10 text-center">
        <p className="text-sm text-[#ef6d58] font-poppins font-semibold tracking-wider mb-2">
          SKILLS
        </p>
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#391400] mb-10">
          Proficiency in the field
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {skill?.map((skills: Iskill, index) => (
            <div key={index} className="border border-[#f3d1bf] rounded-xl p-6">
              <p className="text-sm font-poppins font-medium mb-2">
                {skills.category}
              </p>
              <h3 className="font-poppins font-bold text-lg mb-2">
                {skills.title.split(",").map((word, i) => (
                  <React.Fragment key={i}>
                    <p>{word}</p>
                  </React.Fragment>
                ))}
              </h3>

              <p className="font-poppins text-sm text-gray-700">
                {skills?.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* projects */}

      <div className="max-w-6xl w-full text-center mt-10">
        <p className="text-sm text-[#ef6d58] font-poppins font-semibold tracking-wider mb-2">
          WORKS
        </p>
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#391400] mb-10">
          Past projets I've worked on
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project?.map((project: Iproject, index) => (
            <div key={index} className="text-left">
              <div className="w-full border border-[#f3d1bf] rounded-2xl p-3 overflow-hidden">
                <div className=" w-full aspect-[9/16] relative h-70 rounded-lg overflow-hidden ">
                  <img
                    src={project.image}
                    className=" w-full h-80 object-contain rounded-lg"
                  />
                </div>
              </div>
              <h3 className="font-poppins font-bold text-lg mt-6">
                {project.title}
              </h3>
              <p className="font-poppins text-sm text-gray-700 mt-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* education */}

        <div className="max-w-6xl w-full text-center mt-16">
          <p className="text-sm text-[#ef6d58] font-poppins font-semibold tracking-wider mb-2">
            EDUCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#391400] mb-10">
            Certified Academic Adventures
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {edu?.map((edu: Iedu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 bg-[#fdf0e9] border border-[#f3d1bf] rounded-2xl p-6"
              >
                <div className="md:w-1/2 text-left">
                  <p className="text-sm font-bayon font-normal uppercase tracking-wide">
                    {edu.period}
                  </p>
                  <h3 className="text-2xl font-playfair font-medium mt-5">
                    {edu.title}
                  </h3>
                  <p className="font-poppins text-md mt-6">{edu.course}</p>
                </div>
                <div className="md:w-1/2 rounded-lg overflow-hidden">
                  <img
                    src={edu.image}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div className="max-w-6xl w-full text-center mt-16">
          <p className="text-sm text-[#ef6d58] font-poppins font-semibold tracking-wider mb-2">
            ABOUT
          </p>

          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#391400] mb-10 flex items-center justify-center gap-2">
            Things That Define
            <span className="flex items-center gap-2">
              Me
              <img
                src="/images/Vector 1.svg"
                width={24}
                height={24}
                className="inline-block mb-6"
                alt="icon"
              />
            </span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
            {personal?.map((personal: Ipersonal, index) => (
              <div
                key={index}
                className="w-[300px] h-[360px] rounded-xl overflow-hidden shadow border border-[#f3d1bf] p-4"
              >
                <div
                  className="w-full h-[75%] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${personal.image})` }}
                />
                <h3 className="font-poppins font-bold text-xl text-black leading-[30px] mt-4">
                  {personal.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
