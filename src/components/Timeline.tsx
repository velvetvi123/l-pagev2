import { motion } from 'framer-motion';

interface TimelineItemProps {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
}

const TimelineItem = ({
  company,
  role,
  date,
  location,
  description,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-full" />
        <div className="w-0.5 h-full bg-gray-700" />
      </div>
      <div className="bg-[#2D3748] rounded-lg p-6 flex-1">
        <h3 className="text-xl font-bold text-white mb-1">{company}</h3>
        <h4 className="text-lg text-gray-300 mb-2">{role}</h4>
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>{date}</span>
          <span>{location}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      company: 'Blackswan Technology',
      role: 'Software Engineer',
      date: '2024–2025',
      location: 'Casablanca, Morocco',
      description: ["Developed scalable, high-performance applications",
      "Integrated and adapted systems with Odoo and HubSpot for seamless workflows",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Focused on innovation and adaptability to drive growth and performance."
    ]
      
    },
    {
      company: 'ALX AFRICA',
      role: 'Software Engineer',
      date: '2023–2024',
      location: 'Casablanca, Morocco (Hybrid)',
      description: [
        "Developed and maintained multiple web applications ",
        "Collaborated with UX team to implement responsive designs ",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: 'Ceriab',
      role: 'Automation Engineer',
      date: '2022–2023',
      location: 'El Jadida–Casablanca, Morocco',
      description: [
        "Designed and developed an intelligent Industry 4.0 system",
        "Programmed an intelligent board (Arduino) integrated with an ESP8266 Wi-Fi module using C++",
        "Built a real-time data visualization website to monitor and display system performance",
        "Delivered innovative, IoT-based solutions to enhance automation and efficiency"
      ]
    },
  ];

  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <TimelineItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Timeline;