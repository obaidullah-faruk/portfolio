
import React, {useState} from 'react';
import { Element } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptop, faCertificate } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  
  const [portfolioLists, setPortfolioLists] = useState ([
    {
      'title': 'Software Engineer',
      'name': 'Brotecs Technologies Limited',
      'time-period': '2021-present',
      'roles': 'Reseach and development',
      'icon': faLaptop,
      'link': "https://www.brotecs.com/"
    }, 
    {
      'title': 'Jr. Software Engineer',
      'name': 'Brotecs Technologies Limited',
      'time-period': '2020-2021',
      'roles': 'Programming well-designed, testable, efficient code, Reseach and development',
      'icon': faLaptop,
      'link': "https://www.brotecs.com/"
    }, 
    {
      'title': 'Intern Software Engineer',
      'name': 'Brotecs Technologies Limited',
      'time-period': '2019-2020',
      'roles': 'Reseach and development',
      'icon': faLaptop,
      'link': "https://www.brotecs.com/"
    }, 
    {
      'title': 'B.Sc In Computer Scirence & Engineering',
      'name': 'East West University',
      'time-period': '2013-2017',
      'roles': 'Courses name',
      'icon': faGraduationCap,
      'link': "https://www.brotecs.com/"
    },
    {
      'title': 'Research Publications',
      'name': 'Springer',
      'time-period': '2018',
      'roles': 'BFM: a forward backward string matching algorithm with improved shifting for information retrieval',
      'icon': faCertificate,
      'link': "https://link.springer.com/article/10.1007/s41870-019-00371-1"
    }
  ]);

  return (
    <Element id="experience" className='section experience-section'>
        <h2 className='section-title'>Where I Have Worked</h2>
        <Container >
          <VerticalTimeline>
            {portfolioLists.map((portfolio, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(10 39 62)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(10 39 62)' }}
                date={portfolio['time-period']}
                iconStyle={{ background: 'rgb(10 39 62)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={portfolio.icon} className="contact-icon"/>}
              >
                <h3 className="vertical-timeline-element-title work-position">{portfolio.title}</h3>
                <h4 className="vertical-timeline-element-subtitle work-place"> @ <a className='work-place-link' href="">{portfolio.name}</a></h4>
                <p className='work-role'>
                  {portfolio.roles}
                </p>
              </VerticalTimelineElement>
            ))}
            
          </VerticalTimeline>
        </Container>

    </Element>
  )
}

export default Index;