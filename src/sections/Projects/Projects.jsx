import styles from "./ProjectsStyles.module.css";
import viber from "../../assets/netflix_favicon.ico";
import calc from "../../assets/calc-logo.jpg";
import hipster from "../../assets/hipster.png";
import fitLift from "../../assets/counter-app.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">PROJECTS</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://exquisite-taiyaki-1bcb57.netlify.app"
          h3="Netflix"
          p="A Netflix clone"
        />
        <ProjectCard
          src={calc}
          link="https://github.com/Hackyhus/calculator.git"
          h3="Calculator"
          p="A Calculator"
        />
        {/* <ProjectCard
          src={hipster}
          link="https://github.com/Hackyhus/"
          h3="Livestockapp"
          p="App that keeps livestock records"
        /> */}
        <ProjectCard
          src={fitLift}
          link="https://github.com/Hackyhus/Counter.git"
          h3="Counter"
          p="A counter app"
        />
      </div>
    </section>
  );
}

export default Projects;
