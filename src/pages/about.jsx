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
  text-align: justify;
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
          contentStyle={{ border: "1px solid #ddd" }}
          contentArrowStyle={{ borderRight: '7px solid  #ddd' }}
          icon={<FaSuitcase />}
          position="left"
        >
          <VerticalTimelineElementTitle>
            Senior Web Developer and Architect @GoodsID
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            GoodsID is a company that want to bring the block chain to the luxury and art industry. Helping customers to trace each good supply chain it provides a way to limit counterfeiting and improve good value.
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2018 - 2020
          </VerticalTimelineElementDate>
          <p className="vertical-timeline-element--link">
            <Link to="/goods-id-luxury-supply-chain">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          contentStyle={{ border: "1px solid #ddd" }}
          contentArrowStyle={{ borderRight: '7px solid  #ddd' }}
          icon={<FaSuitcase />}
          position="right"
        >
          <VerticalTimelineElementTitle>
            Senior Web Developer @OuiCar
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            OuiCar is a company that allows customers to rent their own car. They so can register their car in the system and, on the other side, customers can search and book the car they want
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2017 - 2018
          </VerticalTimelineElementDate>
          <p className="vertical-timeline-element--link">
            <Link to="/oui-car-car-rental">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          contentStyle={{ border: "1px solid #ddd" }}
          contentArrowStyle={{ borderRight: '7px solid  #ddd' }}
          icon={<FaSuitcase />}
          position="left"
        >
          <VerticalTimelineElementTitle>
            Web Consultant @ClubMed
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            Club Méditerranée is an all inclusive hotel accommodation company. I've worked there as part of the front end shopping 5 members team being part of the full 20 front end team
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2016 - 2017
          </VerticalTimelineElementDate>
          <p className="vertical-timeline-element--link">
            <Link to="/club-med-all-inclusive-hotels">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          contentStyle={{ border: "1px solid #ddd" }}
          contentArrowStyle={{ borderRight: '7px solid  #ddd' }}
          icon={<FaSuitcase />}
          position="right"
        >
          <VerticalTimelineElementTitle>
            Lead Web Developer @S4M
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            S4M is a digital advertising company focused on mobile devices. We managed internally three projects, one to manage advertising campaigns, one for mobile application reputation on stores and another for KPI analytic
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2014 - 2016
          </VerticalTimelineElementDate>
          <p className="vertical-timeline-element--link">
            <Link to="/s-4-m-mobile-advertising">
              More details
            </Link>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#7b8acc', color: '#fff' }}
          contentStyle={{ border: "1px solid #ddd" }}
          contentArrowStyle={{ borderRight: '7px solid  #ddd' }}
          icon={<FaSuitcase />}
          position="left"
        >
          <VerticalTimelineElementTitle>
            Web Project Manager @DresdenPartners
          </VerticalTimelineElementTitle>
          <VerticalTimelineElementSubtitle>
            Dresden Partners is an IT Consulting company based in Mexico city and San Francisco making mobile and web applications for advertising, logistics and more...
          </VerticalTimelineElementSubtitle>
          <VerticalTimelineElementDate>
            2012 - 2014
          </VerticalTimelineElementDate>
          <p className="vertical-timeline-element--link">
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
