import '../styles/global.scss'
import '../styles/components/timeline.scss'
import React from 'react'
import TimelineMDX from '../../content/sections/timeline'
import timelineData from '../../content/data/timeline.json'

const TimelineItem = ({ eventData }) => {
    return (
        <li className="timeline-item">
            <div className="timeline-badge">
                <i className="glyphicon glyphicon-check"></i>
            </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h3 className="timeline-title">{eventData.title}</h3>
                    <span className="timeline-detail-container">
                        <span className="timeline-detail-text timeline-place">
                            {eventData.place}
                        </span>
                        <span className="timeline-detail-text timeline-spacer">|</span>
                        <span className="timeline-detail-text timeline-date">
                            {eventData.time}
                        </span>
                    </span>
                </div>
                <div className="timeline-body">
                    <p>{eventData.description}</p>
                </div>
            </div>
        </li>
    )
}

const Timeline = () =>
    <div className="section-container" id="timeline">
        <div>
            <TimelineMDX />
        </div>
        <div className="timeline-container">
            <ul className="timeline">
                {timelineData.map((data) =>
                    <TimelineItem eventData={data} key={data.title + data.time} />,
                )}
            </ul>
        </div>
    </div>


export default Timeline
