import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Briefcase,
  Code,
  GraduationCap,
  Heart,
} from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        'hero',
        'about',
        'skills',
        'professional',
        'personal',
        'experience',
        'education',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = {
    professional: [
      {
        name: 'La Lorraine Bakery Group - Main Website',
        tech: 'Next.js, Contentful, Algolia',
        description:
          'Main corporate website with headless CMS integration and advanced search capabilities',
      },
      {
        name: 'La Lorraine Bakery Group - Careers Website',
        tech: 'Next.js, Contentful, Algolia',
        description:
          'Dedicated careers portal with job search and application system',
      },
      {
        name: 'Diptyque - E-commerce',
        tech: 'Nuxt.js, Vue.js',
        description:
          'Luxury fragrance e-commerce platform with elegant user experience',
      },
      {
        name: 'Swiss Sense - E-commerce',
        tech: 'Next.js, React.js',
        description:
          'Bed and mattress e-commerce platform with product configurator',
      },
      {
        name: 'Runnings - E-commerce',
        tech: 'PWA-Studio, Magento',
        description:
          'Progressive web app for outdoor and sporting goods retail',
      },
      {
        name: 'Vitissimo Sport - E-commerce',
        tech: 'PWA-Studio, Magento',
        description:
          'Sports equipment e-commerce with advanced filtering and search',
      },
    ],
    personal: [
      {
        name: 'Personal Blog Platform',
        tech: 'Next.js, MDX',
        description:
          'Custom blog for writing articles about development and creative hobbies',
        status: 'In Progress',
      },
      {
        name: 'Creative Portfolio Showcase',
        tech: 'React.js, Three.js',
        description:
          '3D interactive gallery for diamond painting and embroidery work',
        status: 'Planning',
      },
    ],
  };

  const skills = [
    { name: 'HTML & CSS', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'React.js & Next.js', level: 90 },
    { name: 'Vue.js & Nuxt.js', level: 75 },
    { name: 'Contentful CMS', level: 85 },
    { name: 'Algolia', level: 50 },
    { name: 'Git', level: 90 },
    { name: 'PHP', level: 10 },
    { name: 'Python', level: 5 },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white'>
      {/* Floating Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-500/20'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
            MB
          </h1>
          <div className='hidden md:flex gap-6'>
            {['About', 'Skills', 'Professional', 'Personal', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='hero'
        className='min-h-screen flex items-center justify-center relative overflow-hidden'
      >
        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className='text-center z-10 px-6'>
          <div
            className='mb-8'
            style={{
              opacity: Math.max(0, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h1 className='text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse'>
              Martine Boulanger
            </h1>
            <p className='text-2xl md:text-4xl text-cyan-300 mb-6'>
              Front-End Developer
            </p>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
              Crafting beautiful, accessible, and performant web experiences
              with modern technologies
            </p>
            <div className='flex gap-4 justify-center mt-8'>
              <a
                href='mailto:martine.boulanger@gmail.com'
                className='p-3 bg-cyan-500/20 rounded-full hover:bg-blue-500/40 transition-all hover:scale-110'
              >
                <Mail size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/martine-boulanger/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-cyan-500/20 rounded-full hover:bg-blue-500/40 transition-all hover:scale-110'
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className='animate-bounce mt-12'
          >
            <ChevronDown size={40} className='text-cyan-400' />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='min-h-screen flex items-center py-20 px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
            About Me
          </h2>
          <div className='bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 shadow-2xl'>
            <p className='text-xl text-gray-300 leading-relaxed mb-6'>
              Dynamic Front-end Developer with 4 years of experience in creating
              innovative web solutions and enhancing user experiences.
              Proficient in HTML, CSS, and JavaScript, leveraging frameworks
              such as Next.js and React.js to deliver high-quality websites.
            </p>
            <p className='text-xl text-gray-300 leading-relaxed mb-8'>
              Known for a collaborative spirit and a problem-solving mindset,
              consistently striving to master new technologies and contribute
              effectively in team environments.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='flex items-center gap-3 text-gray-300'>
                <MapPin className='text-cyan-400' size={20} />
                <span>Hermalle-sous-Argenteau, Belgium</span>
              </div>
              <div className='flex items-center gap-3 text-gray-300'>
                <Phone className='text-cyan-400' size={20} />
                <span>+32 496/90 85 87</span>
              </div>
              <div className='flex items-center gap-3 text-gray-300'>
                <Mail className='text-cyan-400' size={20} />
                <span>martine.boulanger@gmail.com</span>
              </div>
              <div className='flex items-center gap-3 text-gray-300'>
                <span className='text-cyan-400'>🌐</span>
                <span>Nederlands, English, Français</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id='skills'
        className='min-h-screen flex items-center py-20 px-6 bg-slate-900/50'
      >
        <div className='max-w-6xl mx-auto w-full'>
          <h2 className='text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className='space-y-2'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex justify-between text-gray-300'>
                  <span className='font-semibold'>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className='h-3 bg-slate-700 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section
        id='professional'
        className='min-h-screen flex items-center py-20 px-6'
      >
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex items-center gap-3 mb-12'>
            <Briefcase className='text-cyan-400' size={40} />
            <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Professional Projects
            </h2>
          </div>
          <p className='text-gray-400 mb-8 text-lg'>
            Projects developed during my time at Vaimo (May 2021 - June 2025)
          </p>
          <div className='grid md:grid-cols-2 gap-6'>
            {projects.professional.map((project, index) => (
              <div
                key={index}
                className='bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'
              >
                <h3 className='text-2xl font-bold mb-3 text-cyan-300'>
                  {project.name}
                </h3>
                <p className='text-blue-400 mb-3 font-mono text-sm'>
                  {project.tech}
                </p>
                <p className='text-gray-300'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section
        id='personal'
        className='min-h-screen flex items-center py-20 px-6 bg-slate-900/50'
      >
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex items-center gap-3 mb-12'>
            <Code className='text-cyan-400' size={40} />
            <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Personal Projects
            </h2>
          </div>
          <p className='text-gray-400 mb-8 text-lg'>
            Side projects and experiments to explore new technologies and
            creative ideas
          </p>
          <div className='grid md:grid-cols-2 gap-6'>
            {projects.personal.map((project, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/40 hover:border-cyan-500/60 transition-all hover:scale-105'
              >
                <div className='flex justify-between items-start mb-3'>
                  <h3 className='text-2xl font-bold text-cyan-200'>
                    {project.name}
                  </h3>
                  {project.status && (
                    <span className='text-xs bg-cyan-500/30 px-3 py-1 rounded-full'>
                      {project.status}
                    </span>
                  )}
                </div>
                <p className='text-blue-300 mb-3 font-mono text-sm'>
                  {project.tech}
                </p>
                <p className='text-gray-200'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='min-h-screen flex items-center py-20 px-6'
      >
        <div className='max-w-4xl mx-auto w-full'>
          <h2 className='text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
            Experience
          </h2>
          <div className='space-y-8'>
            <div className='bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-bold text-cyan-300'>
                    Front-end Developer
                  </h3>
                  <p className='text-xl text-gray-300'>Vaimo, Genk</p>
                </div>
                <span className='text-blue-400'>May 2021 - June 2025</span>
              </div>
              <ul className='space-y-2 text-gray-300'>
                <li>
                  • Creating integrations for Contentful, Algolia, and other
                  platforms
                </li>
                <li>
                  • Implementing GTM and GA integrations as third-party contact
                  person
                </li>
                <li>• Bug fixing and issue resolution</li>
                <li>• Testing implementation with Jest</li>
                <li>
                  • Ensuring excellent folder architecture, composable
                  components, performance, and accessibility
                </li>
                <li>
                  • Contributing innovative solutions for client requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id='education'
        className='min-h-screen flex items-center py-20 px-6 bg-slate-900/50'
      >
        <div className='max-w-4xl mx-auto w-full'>
          <div className='flex items-center gap-3 mb-12'>
            <GraduationCap className='text-cyan-400' size={40} />
            <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Education
            </h2>
          </div>
          <div className='space-y-6'>
            <div className='bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20'>
              <h3 className='text-xl font-bold text-cyan-300 mb-2'>
                Front-End Developer
              </h3>
              <p className='text-gray-300'>
                CVO de Verdieping, Heusden-Zolder • 2020-2021
              </p>
            </div>
            <div className='bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20'>
              <h3 className='text-xl font-bold text-cyan-300 mb-2'>
                HBO5 Graduaat Informatica
              </h3>
              <p className='text-gray-300'>PCVO Limburg, Hasselt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id='hobbies' className='py-20 px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center gap-3 mb-12'>
            <Heart className='text-cyan-400' size={40} />
            <h2 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
              Hobbies & Interests
            </h2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              'Gaming',
              'Writing & Reading',
              'Painting & Drawing',
              'Diamond Painting',
              'Embroidery',
              'Music',
              'Films & Series',
              'Traveling & History',
            ].map((hobby, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-blue-900/30 to-stale-900/30 backdrop-blur-lg rounded-lg p-4 border border-cyan-500/20 text-center hover:scale-105 transition-transform'
              >
                <p className='text-gray-200'>{hobby}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='min-h-screen flex items-center py-20 px-6 bg-slate-900/50'
      >
        <div className='max-w-4xl mx-auto w-full text-center'>
          <h2 className='text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
            Let's Connect
          </h2>
          <p className='text-xl text-gray-300 mb-12'>
            I'm currently open to new opportunities and exciting projects!
          </p>
          <div className='flex flex-col md:flex-row gap-6 justify-center'>
            <a
              href='mailto:martine.boulanger@gmail.com'
              className='bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/50'
            >
              Send me an email
            </a>
            <a
              href='https://www.linkedin.com/in/martine-boulanger/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform border border-cyan-500/30'
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className='mt-12 text-gray-400'>
            <p>
              Reference available upon request, please contact me for reference
              details.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-950 py-8 text-center text-gray-400 border-t border-cyan-500/20'>
        <p>
          © {new Date().getFullYear()} Martine Boulanger. Built with React.js &
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
