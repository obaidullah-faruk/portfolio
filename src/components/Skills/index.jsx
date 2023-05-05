import React from 'react';
import { Element } from 'react-scroll'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import python from './../../images/python.svg';
import ansible from './../../images/Ansible.png';
import aws from './../../images/aws.png';
import djangorest from './../../images/django-rest.png';
import django from './../../images/django.png';
import docker from './../../images/docker.png';
import express from './../../images/express.png';
import flask from './../../images/flask.png';
import frappe from './../../images/frappe.png';
import github from './../../images/github.png';
import influxdb from './../../images/influxdb.png';
import javascript from './../../images/javascript.png';
import nginx from './../../images/nginx.png';
import nodejs from './../../images/nodejs.png';
import postgresql from './../../images/postgresql.png';
import react from './../../images/react.svg';
import solidity from './../../images/solidity.png';
import sql from './../../images/sql.png';
import terraform from './../../images/terraform.png';
import web3 from './../../images/web3.png';

const Index = () => {

  const tech_skills = [
    {
      'name': 'Python',
      'image': python
    },
    {
      'name': 'Ansible',
      'image': ansible
    },
    {
      'name': 'AWS',
      'image': aws
    },{
      'name': 'django Rest',
      'image': djangorest
    },{
      'name': 'django',
      'image': django
    },{
      'name': 'docker',
      'image': docker
    },{
      'name': 'express',
      'image': express
    },{
      'name': 'flask',
      'image': flask
    },{
      'name': 'frappe',
      'image': frappe
    },{
      'name': 'github',
      'image': github
    },{
      'name': 'influxdb',
      'image': influxdb
    },{
      'name': 'javascript',
      'image': javascript
    },{
      'name': 'nginx',
      'image': nginx
    },{
      'name': 'nodejs',
      'image': nodejs
    },{
      'name': 'postgresql',
      'image': postgresql
    },{
      'name': 'react',
      'image': react
    },{
      'name': 'solidity',
      'image': solidity
    },{
      'name': 'sql',
      'image': sql
    },{
      'name': 'terraform',
      'image': terraform
    },{
      'name': 'web3',
      'image': web3
    }
  ];

  return (
    <Element id="skills" className='section skills-section'>
        <h1 className='section-title'>About My Skills </h1>
        <Container>
          <Row className='skills-row'>
            <Col xs={12} md={6} className='skills-set'>
              <p className='descriptions'>With over 3.5 years of experience in the software engineering field, 
                I have honed my skills in a variety of programming languages and technologies.
                My proficiency in Python, Django, Flask, Frappe, React.js, Node.js, CSS, JavaScript, AWS, and Nginx, 
                combined with my experience in server handling, make me a versatile and valuable asset to any software development team. 
                I am passionate about creating elegant, efficient, and effective solutions that exceed expectations and drive business success.</p>
            </Col>
            <Col xs={12} md={6} className='skills-set'>
              <div className='display-skills'>
                {
                  tech_skills.map(({name, image}) => {
                    return (
                      <div className='skills-content'>
                        <img className='skills-image' src={image} alt="" />
                        <p className='secondary-description'>{name}</p>
                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
        
    </Element>
  )
}

export default Index;