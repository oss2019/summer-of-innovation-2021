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

    
    <section className="text-center my-5 ">
        <h1 className="h1-responsive font-weight-bold my-5 ">
          PRIZES
        </h1>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="certificate" size="3x" className="red-text" style={{color: '#0072ff'}} />
            <h5 className="font-weight-bold my-4 fontcss" style={{color: '#0072ff'}}>Certificate of Completion</h5>
            <p className="grey-text mb-md-0 mb-5 fontcss">
            For those who complete all the requirements of the problem statement at hand. 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="trophy" size="3x" className="cyan-text" style={{color: '#0072ff'}}/>
            <h5 className="font-weight-bold my-4 fontcss" style={{color: '#0072ff'}}>Certificate of Excellence:</h5>
            <p className="grey-text mb-md-0 mb-5 fontcss">
            For top 3 teams in the event. 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="user-plus" size="3x" className="orange-text" style={{color: '#0072ff'}} />
            <h5 className="font-weight-bold my-4 fontcss" style={{color: '#0072ff'}}>Certificate of participation:</h5>
            <p className="grey-text mb-md-0 mb-5 fontcss">
            For all those who solve at least one sub part of problem statement and 
            have their score above the following mark:<br /><b>Mean – 2*std.</b>
            </p>
          </MDBCol>
        </MDBRow>
      </section>
      
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
    <h4 className="vertical-timeline-element-title fontcss">Report For Case Study Would Be Required To Be Submitted</h4>
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