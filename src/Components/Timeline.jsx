import React from 'react';
import Bottom from './Bottom.jsx';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GrWorkshop as WorkIcon} from 'react-icons/gr'
import {MdEventAvailable} from 'react-icons/md'
import {BiCheck,BiCodeAlt} from 'react-icons/bi'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import './Timeline.css';
import Header from './header';

const Timeline=()=>{

return(


<div className="backgroundcss">
    <div style={{backgroundColor: '#0072ff'}}>
    <Header />
    </div>
      
    <div className="timelinecss">
    <h1 className="h1-responsive font-weight-bold my-5 ">TIMELINE</h1>

    <VerticalTimeline className={'check'}>
    

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='12th of May'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<WorkIcon />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events Begin</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='20th of May'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<MdEventAvailable className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss fontcss">Last Day to Register</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='13th of June'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BiCodeAlt className="colorcss"/>}
     >
    <h4 className="vertical-timeline-element-title fontcss">Codechef Chapters Contest</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='1st of July'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<AiOutlineLink className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Release Of Submission Link For Case Study</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='12th of July'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BiCheck className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Last Date To Submit Case Study Report</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='1st of August'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<AiOutlineLink className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss"> Release Of Submission Link For Remaining Events</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#0072ff', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #0072ff' }}
    date='12th of August'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BsTrophy className="colorcss"/>}
     >
    <h4 className="vertical-timeline-element-title fontcss">Final Date Of Submission For Each Of The Events</h4>
    </VerticalTimelineElement>

    </VerticalTimeline>

    <h3 className="fontcss">*All updates shall also be given on the Instagram handle for the event.</h3>


    </div>
    <Bottom />
</div>
    );
};

export default Timeline;