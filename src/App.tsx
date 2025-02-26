import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';

function App() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Django',
    'Flask', 'Docker', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
    'DevOps', 'Git/GitHub'
  ];

  const projects = [
    {
      title: 'DentiaPro',
      description: 'As the co-founder of DentiaPro CRM, I spearheaded the development of an innovative, high-performance solution designed specifically for dental clinics. By optimizing backend architecture and implementing advanced DevOps practices, I ensured a secure, scalable, and efficient platform that streamlines operations and enhances patient management. DentiaPro enables dental professionals to focus on delivering exceptional care while our technology seamlessly manages the rest. Discover how DentiaPro is transforming dental clinic management with cutting-edge technology.',
      technologies: ['React', 'PostgreSQL', 'Django Rest Framework'],
      githubLink: 'github.com',
      demoLink: 'https://dentia-pro-landing.vercel.app/'
    },
    {
      title: 'TechBlog',
      description: 'As the co-founder of TechBlog, I am proud to introduce a professional blogging platform tailored for the tech industry, designed to empower developers, engineers, and tech enthusiasts to share their expertise, industry insights, and innovations. Built with a modern, scalable tech stack, TechBlog offers a seamless and engaging user experience, featuring intuitive navigation, responsive design, and robust performance. Our platform supports rich content creation, enabling users to publish in-depth articles, integrate multimedia, and foster meaningful discussions. With user authentication, post management, and interactive community features, TechBlog is set to become a go-to space for thought leadership in technology. We’re excited to launch soon—stay tuned.',
      technologies: ['Next.js', 'PostgreSQL', 'Django Rest Framework'],
      githubLink: 'https://github.com/Outtacosmos-ai/TechBlog_MVP-Project',
      demoLink: '#'
    },
    {
      title: 'Unix Shell',
      description: 'Developed in C, this custom Linux/Bash shell is a fully functional command-line interpreter capable of executing Linux and Bash commands. Through this project, I honed my problem-solving skills and deepened my understanding of complex data structures such as binary trees, linked lists, and hash tables. Additionally, I gained invaluable insights into operating system fundamentals, including process management, memory allocation, system calls, and the intricate interaction between software and hardware. Implementing features like command parsing, redirections, pipes, and background process execution, I explored the inner workings of the UNIX kernel and developed a deeper appreciation for low-level programming and system security. This project was a significant milestone in my journey as a software engineer, reinforcing my expertise in C programming, operating system design, and performance optimization.',
      technologies: ['C', 'Linux', 'Unix'],
      githubLink: 'https://github.com/oussama7chaouki/simple_shell'
    }
  ];

  return (
    <div className="bg-[#1A202C] text-[#E2E8F0] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/public/background.jpg')` }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent cursor-pointer"
          >
            Yahya Oubedda
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl mb-8 text-gray-300"
          >
            <span className="block text-shadow-md">
              Hi, I’m <span className="font-bold">Yahya Oubedda</span>.
            </span>
            <span className="block text-shadow-md">
              I’m a <span className="font-bold">Full Stack Software Engineer</span> passionate about
              <br className="hidden md:block" />
              crafting innovative solutions and driving technological impact.
            </span>
            <span className="block text-shadow-md">
              Let’s <span className="font-bold">build the future</span> together.
            </span>
          </motion.h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/velvetvi123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/oubedda-yahya-2a6872285"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:yahya.oub@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">About Me</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row items-center gap-8"
          >
            <motion.img
              initial={{ scale: 0.8, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
              whileInView={{
                scale: [0.8, 1.05, 1],
                boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 0.8 }}
              src="./public/yahya.jpg"
              alt="Yahya Oubedda"
              className="w-[200px] h-auto rounded-full object-cover transform"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-300 text-left md:text-right"
            >
              <p className="leading-relaxed">
                Hello, I'm Yahya Oubedda. As a Full Stack Software Engineer, I specialize in crafting <span className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">cutting-edge</span> web applications and <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">streamlined</span> automated systems.
              </p>
              <p className="mt-4 leading-relaxed">
                My journey in tech has been fueled by a passion for <span className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">innovation</span> and a commitment to <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">excellence</span>. I thrive on transforming complex challenges into <span className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">elegant</span> solutions.
              </p>
              <p className="mt-4 leading-relaxed">
                Beyond development, I am dedicated to <span className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">mentoring</span> aspiring developers and fostering a culture of <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">continuous learning</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#1A202C] bg-opacity-90">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0.8, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
                  whileHover={{
                    scale: [0.8, 1.05, 1],
                    boxShadow: '0px 4px 16px rgba(0,0,0,0.2)',
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 0.8 }}
                  className="bg-[#2D3748] rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#1A202C] bg-opacity-90">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:yahya.oub@gmail.com"
                className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Email Me
              </a>
              <a
                href="tel:+212619159531"
                className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Call Me
              </a>
              <a
                href="https://linkedin.com/in/oubedda-yahya-2a6872285"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;