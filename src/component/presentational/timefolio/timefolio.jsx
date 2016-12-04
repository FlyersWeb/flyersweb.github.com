import React from 'react'
import Timeline from 'react-image-timeline'
import ReactMarkdown from 'react-markdown';
import moment from 'moment'

import Jumbotron from '../jumbotron/customjumbotron.jsx'

require('react-image-timeline/dist/timeline.css')

const CustomBody = (props) => {
  const {text} = props.event;

  return (
    <ReactMarkdown source={text} />
  )
}

const CustomFooter = (props) => {
  return (
    <div>
    </div>
  )
}

const Timefolio = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron
            title="Career Timeline"
            content={`I am a professional web developer, manager and architect. I'm focused on cutting edge technologies that match the on-demand project needs. 
            You'll find in this timefolio my pasts professional experiences so you'll have an idea of my practical skills that may match with your needs.`}
          />
          <Timeline 
            reverseOrder={true} 
            customTextBody={CustomBody}
            customFooter={CustomFooter}
            events={[
              {
                date: moment('2016-04-20'),
                title: 'FullStack Developer @ClubMed',
                text: `
- Website improvements and new features
- Migration system development and improvements
- Review App deployment and improvements
- Components testings and improvements
- Search Engine features


> ReactJS, NodeJS, GraphQL, ES6, Git
                `,
                imageUrl: require("../../../assets/logos/clubmed.jpg")
              },
              {
                date: moment('2016-03-01'),
                title: 'FullStack Consultant @OceaneConsulting',
                text: `
- Full Stack Contract Web Developer
- PoC developments and researchs


> ElasticSearch, AngularJS, NodeJS
                `,
                imageUrl: require("../../../assets/logos/oceane.jpg")
              },
              {
                date: moment('2014-04-01'),
                title: 'Lead Web Developer @S4M',
                text: `
- Research and Developments for new features
- Analytics platform improvements and level 3 support
- Interfacing with others Analytics platform like Google Adwords or Facebook 
- Features Testings and Acceptances
- Time based series spam detection


> PHP5, Symfony2, MariaDB, AngularJS, Jquery, Javascript
                `,
                imageUrl: require("../../../assets/logos/s4m.png")
              },
              {
                date: moment('2012-12-01'),
                title: 'Project Manager @DresdenPartners',            
                text: `
- Clients Definition of needs
- Project scoping
- Technical documentation and requirements
- Domains and hosting management using AWS EC2 and ElasticBeanStalk
- 5 person team management

> AngularJS, BackboneJS, Jquery, Sass and Grunt
> 
> PHP/Symfony, Javascript/NodeJS, C#/.Net
> 
> Nodejitsu, Amazon EC2, ElasticBeanStalk 


Project examples :
- Eweclid: Mobile learning application with 
- Evamerc : Web marketing dashboard 
- ADOMovil : Scoping web api needs for the mobile application
- Sensis Agency : Events landing pages 
                `,
                imageUrl: require("../../../assets/logos/dresden.png")
              },
              {
                date: moment('2012-03-01'),
                title: 'Web Developer @TikiMove',            
                text: `
- Project management web application using JQuery and JQueryUI
- Web services for events mobile applications
- NoSQL database management


> Google App Engine, Django, Python, Big Table, Jquery, Facebook API
                `,
                imageUrl: require("../../../assets/logos/tikimove.jpg")
              }
            ]}
          />
        </div>
      </div>
    )
  }
})

module.exports = Timefolio