import "../css/project.css";
import meeismerkeziImage from "../images/mee.jpg";
import fsmImage from "../images/fsm.jpg";
import proargedestekImage from "../images/proargedestek.jpg";


function Projects() {

  const projectList = [
    {
      id: 1,
      image: meeismerkeziImage,
      url: "http://meeismerkezi.com/",
    },
    {
      id: 2,
      image: fsmImage,
      url: "https://www.fsmbilgi.com/",
    },
    {
      id: 3,
      image: proargedestekImage,
      url: "http://www.proargedestek.com/",
    },
  ];

  return (
    <div>
      <div id="projects" className="mb-12">
        <div id="introduce-title" className="mt-12 p-6 w-full">
          <h1 className="big-title text-cv-black text-5xl font-bold text-center py-4 cursor-default">
            PROJECTS
          </h1>
        </div>
        <div
          id="grid-container"
          className="grid grid-rows-1 grid-flow-col gap-4 justify-center items-center"
        >
          {projectList.map((list) => (
            <div key={list.id} className="inline-block w-[400px] h-[275px]">
              <div
                id="projects-card"
                className="m-6 border-8 border-solid border-cv-orange rounded-md inline-block"
              >
                <div id="project-images">
                  <div id="project-context" className="w-full flex justify-center items-center">
                    <a href={list.url} target="_blank" rel="noopener noreferrer"><img src={list.image} alt={`Project ${list.id}`} className="w-full h-full" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 id="more-on" className="mt-12 text-cv-black text-3xl font-semibold text-center block cursor-default">More on <span className="text-4xl font-bold text-cv-red"><a href="https://github.com/MYellowrock" target="_blank" rel="noopener noreferrer">GitHub</a></span></h2>
      </div>
    </div>
  );
}

export default Projects;
