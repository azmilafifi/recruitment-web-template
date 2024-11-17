import React from 'react';
import styles from './JobCard.module.scss';
import { FaLocationDot } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";

interface JobCardProps {
    jobtitle: string;
    description: string;
    tech: string;
    location: string;
    salary: string;
    datePosted: string;
    backgroundColor?: string;
    color?: string;
    style?: React.CSSProperties;
}

const JobCard: React.FC<JobCardProps> = ({
    jobtitle,
    description,
    tech,
    location,
    salary,
    datePosted,
    backgroundColor = '#064EA4',
    color = '#FFFFFF',
    style
}) => {
    return (
        <div
            className={`card ${styles.job_card}`}
            style={{ backgroundColor, color, ...style }}
        >
            <div>
                <span className={`${styles.badge}`}>
                    <FaPython className="me-1" style={{ width: '18px', height: '18px' }}/>
                    {tech}
                </span>
                <h5 className={`card-title mt-3 ${styles.title}`}>{jobtitle}</h5>
                <p className="card-text d-flex align-items-center mt-3">
                    <FaLocationDot style={{ width: '24px', height: '24px' }} className='me-2' />
                    {location}
                </p>
                <p className="card-text d-flex align-items-center">
                    <FaMoneyBill style={{ width: '24px', height: '24px' }} className='me-2'/>
                    {salary}
                </p>
                <p className="card-text mt-4">{description}</p>
                <button className={`btn btn-light mt-3 d-none d-md-flex ${styles.button}`}>View this job</button>
                <p className={`card-text mt-3`}>
                    <span className= "opacity-50">Posted on {datePosted}</span>
                </p>
            </div>
        </div>
    );
};

export default JobCard;
