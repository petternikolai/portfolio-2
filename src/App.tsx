import "./styles/index.css";
import Layout from "./layout/Layout";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import MyWorkSection from "./sections/MyWorkSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <MyWorkSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
