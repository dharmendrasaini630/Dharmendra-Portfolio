import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Experience } from '../components/experience';
import { Skills } from '../components/skills';
import { Projects } from '../components/projects';
import { Certifications } from '../components/certifications';
import { Services } from '../components/services';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 