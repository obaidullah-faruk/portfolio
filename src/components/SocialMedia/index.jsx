import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

const Index = () => {
  const socialMedias = [
    {
      'mediaName' : 'facebook',
      'url': 'https://www.facebook.com/Obaidullah.alfaruk/',
      'iconName': faFacebook
    },
    {
      'mediaName' : 'github',
      'url': 'https://github.com/obaidullah-faruk',
      'iconName': faGithub
    },
    {
      'mediaName' : 'linkedin',
      'url': 'https://www.linkedin.com/in/md-obaidullah-al-faruk-788b32a3/',
      'iconName': faLinkedin
    },
    {
      'mediaName' : 'stackOverflow',
      'url': 'https://stackoverflow.com/users/9603959/md-obaidullah-al-faruk',
      'iconName': faStackOverflow
    }
  ]
  return (
    <div className='social-media'>
      {socialMedias.map((media, index) => ( 
            <a href={media.url} target="_blank" rel="noreferrer" className='social-icon'><FontAwesomeIcon icon={media.iconName} className={media.mediaName}/></a>
      ))}
    </div>
  )
}

export default Index;