import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';

import styled from 'react-emotion';
import { FaSuitcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from '@reach/router';

const VerticalTimelineElementTitle = styled.h3`
  font-size: 1.4em;
`;

const VerticalTimelineElementSubtitle = styled.h4`
  font-size: 0.9em;
  text-align: left;
`;

const VerticalTimelineElementDate = styled.p`
  font-size: 0.8em !important;
`;

const About = () => (
  <Layout>
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container type="text">
      <h1>Have a look to my working experiences</h1>
      <p>This shows my working experiences as a Software Developer and Architect. To have more details click on the link below each working experience.</p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          icon={<FaSuitcase />}
          position="left"
        >
          <VerticalTimelineElementTitle>
            Senior Web Developer and Architect @GoodsID
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            AWS ElasticBeanstalk, S3, CloudFront, Docker, Elixir/Phoenix, PostgreSQL, Angular 6
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2018 - present
          </VerticalTimelineElementDate>
          <p>
            <Link to="/goods-id-luxury-supply-chain">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          icon={<FaSuitcase />}
          position="right"
        >
          <VerticalTimelineElementTitle>
            Senior Web Developer @OuiCar
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            AWS SNS/SQS, RDS, ElasticCache, ElasticSearch, Docker, PHP/Symfony3, MySQL, React/Redux-saga
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2017 - 2018
          </VerticalTimelineElementDate>
          <p>
            <Link to="/oui-car-car-rental">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          icon={<FaSuitcase />}
          position="left"
        >
          <VerticalTimelineElementTitle>
            Web Consultant @ClubMed
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            Heroku, GraphQL, NodeJS, React/Redux
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2016 - 2017
          </VerticalTimelineElementDate>
          <p>
            <Link to="/club-med-all-inclusive-hotels">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          icon={<FaSuitcase />}
          position="right"
        >
          <VerticalTimelineElementTitle>
            Lead Web Developer @S4M
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            Varnish, Nginx, MariaDB, PHP/Symfony2, AngularJS, Javascript
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2014 - 2016
          </VerticalTimelineElementDate>
          <p>
            <Link to="/s-4-m-mobile-advertising">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          icon={<FaSuitcase />}
          position="left"
        >
          <VerticalTimelineElementTitle>
            Web Project Manager @DresdenPartners
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            AWS, Nodejitsu, Mysql, MongoDB, NodeJS, C# ASP.NET MVC, PHP/Symfony2 BackboneJS, HighchartJS, Telerik
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2012 - 2014
          </VerticalTimelineElementDate>
          <p>
            <Link to="/dresden-partners-it-services">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  </Layout>
);

export default About;
