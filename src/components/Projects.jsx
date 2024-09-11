import useFetchProjects from "./FetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return <section className="loading"></section>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h1>Projects</h1>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, img } = project;
          return (
            <a
              key={id}
              href={url}
              rel="norefferer"
              target="_blank"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
