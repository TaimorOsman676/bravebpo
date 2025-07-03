import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Imran Khan Sadri",
    title: "Founder CEO | Brave BPO",
    image: "/images/team/imran-khan.jpg",
  },
  {
    name: "Mr. Shehzad Khan",
    title: "Director Operations",
    image: "/images/team/shehzad-khan.jpg",
  },
  {
    name: "Mr. Akbar Khan",
    title: "Director Operations",
    image: "/images/team/akbar-khan.jpg",
  },
  {
    name: "Ms. Zainab Shahid",
    title: "HR Manager – Brave BPO",
    image: "/images/team/zainab-shahid.jpg",
  },
  {
    name: "Mr. Muhammad Shahryar",
    title: "Operational Manager | Brave BPO",
    image: "/images/team/shahryar.jpg",
  },
  {
    name: "Mr. Mashal Khan Sadri",
    title: "Project Manager – Brave BPO 1.0",
    image: "/images/team/mashal-khan.png",
  },
  {
    name: "Mr. Zia Ullah Khan",
    title: "Compliance Manager – Brave BPO 2.0",
    image: "/images/team/zia-ullah.jpg",
  },
    {
    name: "Mr. Muhammad Usman",
    title: "Software Project Manager – Brave BPO",
    image: "/images/team/muhammad-usman.png",
  },
  {
    name: "Ms. Sumbal Shahid",
    title: "Finance Manager – Brave BPO 2.0",
    image: "/images/team/sumbal-shahid.jpg",
  },
  {
    name: "Mr. Taimor Osman Khan",
    title: "Web and Digital Media Manager – Brave BPO",
    image: "/images/team/taimor-osman.jpg",
  },
  {
    name: "Mr. Zaman Khan",
    title: "QA Manager – Brave BPO",
    image: "/images/team/zaman-khan.jpg",
  },

  {
    name: "Mr. Rehman Khan",
    title: "Business Development Manager – Brave BPO",
    image: "/images/team/rehman-khan.png",
  },
  {
    name: "Mr. Maqsood",
    title: "Business Development Manager – Brave BPO",
    image: "/images/team/maqsood.jpg",
  },
  {
    name: "Mr. Taimor Ahmad",
    title: "Project Manager – Brave BPO",
    image: "/images/team/taimor-ahmad.jpg",
  },
  {
    name: "Mr. Liaquat Khan",
    title: "Compliance Executive – Brave BPO",
    image: "/images/team/liaquat-khan.png",
  },
  {
    name: "Mr. Bilawal Sajjad",
    title: "Information Technology Manager – Brave BPO",
    image: "/images/team/bilawal-sajjad.jpg",
  },
  {
    name: "Mr. Muhammad Irtza",
    title: "Team Lead – Brave BPO 2.0",
    image: "/images/team/muhammad-irtza.jpg",
  },
  {
    name: "Mr. Muhammad Saif",
    title: "Team Lead – Brave BPO 2.0",
    image: "/images/team/muhammad-saif.jpg",
  },
  {
    name: "Mr. Fawad Khan",
    title: "Team Lead – Brave BPO 2.0",
    image: "/images/team/fawad-khan.jpg",
  },
  {
    name: "Mr. Umer-Bin-Tariq",
    title: "Digital Media Specialist – Brave BPO",
    image: "/images/team/umer-bin-tariq.jpg",
  },
  {
    name: "Ms. Neha Zaheer",
    title: "Front Desk Officer – Brave BPO 2.0",
    image: "/images/team/neha-zaheer.jpg",
  },
  {
    name: "Mr. Ali Asghar",
    title: "IT Support – Brave BPO 1.0",
    image: "/images/team/ali-asghar.jpeg",
  },
  {
    name: "Mr. Muhammad Shakeel",
    title: "Admin & Facilities Supervisor – Brave BPO",
    image: "/images/team/muhammad-shakeel.jpg",
  },
  {
    name: "Mr. Alaudin Khan",
    title: "Security Supervisor – Brave BPO 2.0",
    image: "/images/team/alaudin-khan.jpg",
  },
];

const Leadership = () => {
  return (
<>
    
    <section id="leadership" className="pt-16 md:pt-20 lg:pt-28 bg-gradient-to-b from-[#0b001a] via-[#14002b] to-[#0b001a] text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            title="Meet Our Leadership "
            paragraph="The strength of Brave BPO lies in its people. Meet the incredible team driving our mission, vision, and success."
            mb="44px"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-[#87CEEB] bg-white dark:bg-[#17023C] p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"  
                />
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white text-center">
                {member.name}
              </h3>
              <p className="text-sm text-body-color dark:text-gray-400 text-center mt-1">
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