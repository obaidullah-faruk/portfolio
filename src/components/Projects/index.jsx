import React, {useState} from 'react';
import { Element } from 'react-scroll'

const Index = () => {
  const [projects, setProjects] = useState ([
    {
      'name': 'Demo 1',
      'repo': "https://github.com/obaidullah-faruk",
      'preview': "https://github.com/obaidullah-faruk"
    }, 
    {
      'name': 'Demo 2',
      'repo': "https://github.com/obaidullah-faruk",
      'preview': "https://github.com/obaidullah-faruk"
    },
    {
      'name': 'Demo 3',
      'repo': "https://github.com/obaidullah-faruk",
      'preview': "https://github.com/obaidullah-faruk"
    },
    {
      'name': 'Demo 4',
      'repo': "https://github.com/obaidullah-faruk",
      'preview': "https://github.com/obaidullah-faruk"
    },
    {
      'name': 'Demo 5',
      'repo': "https://github.com/obaidullah-faruk",
      'preview': "https://github.com/obaidullah-faruk"
    },
    {
      'name': 'Developer Portfolio',
      'repo': "https://github.com/obaidullah-faruk",
      'preview': "https://github.com/obaidullah-faruk"
    }
  ]);

  return (
    <Element id="projects" className='section project-section'>
      <h1 className='section-title'>Projects </h1>
        <ul class="image-gallery">
        {projects.map((project, index) => (
            <li>
              <img src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt="" />
              <div class="overlay">
                <p className='project-name'>{project.name}</p>
                <p className='repo-link'> <a className='project-link' href={project.repo}>Repo</a></p>
                <p className='live-link'><a className='project-link' href={project.preview}>Preview</a></p>
              </div>
            </li>
          ))}
        </ul>
    </Element>
  )
}

export default Index;