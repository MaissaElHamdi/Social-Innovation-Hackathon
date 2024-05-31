import React from "react";
import icontime from "../Assets/icontime.svg"
import { BiAlarm } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { AiFillApple } from "react-icons/ai";
function Timeline() {
  return (
    <React.Fragment>
      <div className="body-timeline">
     <div className="text-centered-agenda2">Agenda</div>
     <div>
        <VerticalTimeline >
           
      
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
           
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="08H00"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#E0DED2" }}
            icon={<BiAlarm />}
          >
           
            <h3 className="vertical-timeline-element-title">
            Accueil et enregistrement des participants
            </h3>
            <p className="vertical-timeline-element-title">
            Journaliste Express FM, Tunisie
            </p>
            <h4 className="vertical-timeline-element-title">Maître de cérémonie: M. Wassim BEN LARBI</h4>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="09H15 - 10H15"
            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
            icon={<BiAlarm />}          >
            <h3 className="vertical-timeline-element-title">Pause café</h3>
           
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="09H45 - 10H15 "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#E0DED2" }}
            icon={<BiAlarm />}
          >
            <h3 className="vertical-timeline-element-title">Keynote 1 : L’importance stratégique de la transition verte et le rôle crucial du numérique et de l’innovation.</h3>
            <p className="vertical-timeline-element-title"> Président du conseil chez Centre Financier aux Entrepreneurs Tunisie S.A.</p>
            <h4 className="vertical-timeline-element-title">
            Radhi MEDDEB
            </h4>
           
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="10H10- 10H30"
            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
            icon={<BiAlarm />}
          >
            <h3 className="vertical-timeline-element-title">Keynote 2 : Baromètre des entreprises</h3>
            <p className="vertical-timeline-element-title">Partner EY Consulting</p>
            <h4 className="vertical-timeline-element-title">
            M. Sami ZAOUI
            </h4>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="10H30 - 11H15"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#E0DED2" }}
            icon={<BiAlarm />}
          >
            <h3 className="vertical-timeline-element-title">
            Inauguration officielle et remise des trophées
            </h3>
            <p className="vertical-timeline-element-title">Président Directeur Général et fondateur de TDS</p>
            <h4 className="vertical-timeline-element-title">
            M. Skander HADDAR
            </h4>
            <p className="vertical-timeline-element-title">Ministre des Technologies de la communication</p>
            <h4 className="vertical-timeline-element-title">
            M. Nizar BEN NEJI
            </h4>
            <p className="vertical-timeline-element-title"> Ministre de l'Economie et de la Planification</p>
            <h4 className="vertical-timeline-element-title">
            M. Samir SAID
            </h4>
            <br></br>
            <h3 className="vertical-timeline-element-title">
            Remise des trophées par La Cheffe du Gouvernement
            </h3>
           
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="11H15 - 12H00"
            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
            icon={<BiAlarm />}
          >
            <h3 className="vertical-timeline-element-title">
            Panel 1 : Politiques énergétiques, environnementales et digitales
            </h3>
            <p className="vertical-timeline-element-title">Directeur général, ANME, Tunisie</p>
            <h4 className="vertical-timeline-element-title">
            M. Fathi HANCHI
            </h4>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
            date="12H00 - 12H45"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#E0DED2" }}
            icon={<BiAlarm />}
          >
            <h3 className="vertical-timeline-element-title">
            Panel 2 :  Economie verte  : les opportunités de financement et d’investissement
            </h3>
            <p className="vertical-timeline-element-title">Directeur général, CDC, Tunisie</p>
            <h4 className="vertical-timeline-element-title">
            Mme. Nejia GHARBI
            </h4>
            
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
      </div>
     
    </React.Fragment>
  );
}

export default Timeline;

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
    date="2011 - present"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">
      Content Marketing for Web, Mobile and Social Media
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>Strategy, Social Media</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">
      Agile Development Scrum Master
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>Creative Direction, User Experience, Visual Design</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
    icon={<BiAlarm />}
  >
    <h3 className="vertical-timeline-element-title">
      Bachelor of Science in Interactive Digital Media Visual Imaging
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>Creative Direction, Visual Design</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
    icon={<BiAlarm />}
  />
</VerticalTimeline>;
