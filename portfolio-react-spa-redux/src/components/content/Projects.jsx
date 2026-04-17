import React, { useState } from 'react';
import AvatarImage from '../commons/AvatarImage.jsx';
import Modal from './Modal.jsx';

export default function Projects({ list }) {
    const [selectedProject, setSelectedProject] = useState(null);
    
    return (
        <>
            <ul className="projects">
                {
                    list?.map ((project, idx) =>
                        <li className="project" key={idx} onClick={()=>setSelectedProject(project)}>
                            <AvatarImage img={project.img} alt={project.alt} style="project_img" />
                            
                            <div className="project_meta">
                                <h3 className="project_meta_title">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </li>
                    )
                }
            </ul>

            { selectedProject &&
                <Modal project={selectedProject} onClose={()=> setSelectedProject(null)}/>
            }
        </>
    );
}

