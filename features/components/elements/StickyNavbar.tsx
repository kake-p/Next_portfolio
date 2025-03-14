type Props = {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: Props) {
  const sections = ['photograph', 'design', 'programming'];

  return (
    <nav className="fixed top-1/2 left-20 -z-0">
      <ul className="flex flex-col gap-12">
        {sections.map((section) => (
          <li key={section}>
            {activeSection === section ? 
            (<button
              onClick={() => scrollToSection(section)}
              className={`font-tangerine capitalize text-[#1E2327] text-4xl font-bold`}
            >
              -{section}
            </button>) : (
              <button
              onClick={() => scrollToSection(section)}
              className={`font-tangerine capitalize text-[#D2D2D2] text-4xl hover:text-[#A0A0A0] transition`}
            >
              {section}
            </button>
            )}
            
          </li>
        ))}
      </ul>
    </nav>
  );
}