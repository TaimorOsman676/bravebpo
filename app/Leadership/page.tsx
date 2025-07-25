import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
const teamMembers = [
  {
    name: "Mr. Imran Khan Sadri",
    title: "Founder CEO | Brave BPO",
    image: "/images/Team/imran-khan.jpg",
  },
  {
    name: "Mr. Shehzad Khan",
    title: "Director Operations",
    image: "/images/Team/shehzad-khan.jpg",
  },
  {
    name: "Mr. Akbar Khan",
    title: "Director Operations",
    image: "/images/Team/akbar-khan.jpg",
  },
  {
    name: "Ms. Zainab Shahid",
    title: "HR Manager – Brave BPO",
    image: "/images/Team/zainab-shahid.jpg",
  },
  {
    name: "Mr. Muhammad Shahryar",
    title: "Operations Manager | Brave BPO 1.0",
    image: "/images/Team/shahryar.jpg",
  },
  {
    name: "Mr. Mashal Khan Sadri",
    title: "Operations Manager | Brave BPO 2.0",
    image: "/images/Team/mashal-khan.jpg",
  },
  {
    name: "Mr. Zia Ullah Khan",
    title: "Compliance Manager – Brave BPO 2.0",
    image: "/images/Team/zia-ullah.jpg",
  },
  {
    name: "Mr. Muhammad Usman",
    title: "Software Project Manager – Brave BPO",
    image: "/images/Team/muhammad-usman.png",
  },
   {
    name: "Mr. Taimor Osman Khan",
    title: "Web and Digital Media Manager – Brave BPO",
    image: "/images/Team/taimor-osman.jpg",
  },
  {
    name: "Ms. Sumbal Shahid",
    title: "Finance Manager – Brave BPO 2.0",
    image: "/images/Team/sumbal-shahid.jpg",
  },
   {
    name: "Ms. Neha Zaheer",
    title: "Front Desk Officer – Brave BPO 2.0",
    image: "/images/Team/neha-zaheer.jpg",
  },
 
  {
    name: "Mr. Zaman Khan",
    title: "QA Manager – Brave BPO",
    image: "/images/Team/zaman-khan.jpg",
  },

  {
    name: "Mr. Rehman Khan",
    title: "Business Development Manager – Brave BPO",
    image: "/images/Team/rehman-khan.png",
  },
  {
    name: "Mr. Faraz",
    title: "Director. Business Development",
    image: "/images/Team/maqsood.jpg",
  },
  {
    name: "Mr. Taimor Ahmad",
    title: "Project Manager – Brave BPO",
    image: "/images/Team/taimor-ahmad.jpg",
  },
  {
    name: "Mr. Liaquat Khan",
    title: "Compliance Executive – Brave BPO",
    image: "/images/Team/liaquat-khan.jpg",
  },
  {
    name: "Mr. Bilawal Sajjad",
    title: "Information Technology Manager – Brave BPO",
    image: "/images/Team/bilawal-sajjad.jpg",
  },
  {
    name: "Mr. Muhammad Irtza",
    title: "Team Lead – Brave BPO 2.0",
    image: "/images/Team/muhammad-irtza.jpg",
  },
  {
    name: "Mr. Muhammad Saif",
    title: "Team Lead – Brave BPO 2.0",
    image: "/images/Team/muhammad-saif.jpg",
  },
  {
    name: "Mr. Fawad Khan",
    title: "Team Lead – Brave BPO 2.0",
    image: "/images/Team/fawad-khan.jpg",
  },
  {
    name: "Mr. Umer-Bin-Tariq",
    title: "Digital Media Specialist – Brave BPO",
    image: "/images/Team/umer-bin-tariq.jpg",
  },
 
  {
    name: "Mr. Ali Asghar",
    title: "IT Support – Brave BPO 1.0",
    image: "/images/Team/ali-asghar.jpeg",
  },
  {
    name: "Mr. Muhammad Shakeel",
    title: "Admin & Facilities Supervisor – Brave BPO",
    image: "/images/Team/muhammad-shakeel.jpg",
  },
  {
    name: "Mr. Alaudin Khan",
    title: "Security Supervisor – Brave BPO 2.0",
    image: "/images/Team/alaudin-khan.jpg",
  },
];

const Leadership = () => {
  return (
    <>
      <section
        id="leadership"
        className="to-[#0b001a] text-white bg-gradient-to-b from-[#0b001a] via-[#14002b] pt-16 md:pt-20 lg:pt-28"
      >
        <div className="container">
          <SectionTitle
            title="Meet Our Leadership"
            paragraph="The strength of Brave BPO lies in its people. Meet the incredible team driving our mission, vision, and success."
            mb="44px"
          />

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-[#87CEEB] bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-[#17023C]"
              >
                <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 "
                  />
                </div>
                <h3
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 to-pink-500 bg-clip-text text-transparent
"
                >
                  {member.name}
                </h3>
                <p className="mt-1 text-center text-sm text-body-color dark:text-gray-400">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
