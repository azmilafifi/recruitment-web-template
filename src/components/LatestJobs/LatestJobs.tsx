"use client"

import React, { useRef } from 'react';
import styles from './LatestJobs.module.scss';
import JobCard from '@/shared/JobCard/JobCard';
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";


const LatestJobs = () => {


  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: 'right' | 'left') => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -window.innerWidth : window.innerWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.main_container}>
      <h2 className='text-center'>Latest Jobs</h2>
      <div className={styles.carousel_container} ref={carouselRef}>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
          <JobCard
            jobtitle='Software Engineer'
            description='Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.'
            tech='Python'
            salary='£55,000'
            datePosted='29/08/2023'
            location='London'
            backgroundColor='var(--color-yellow)'
            color='var(--color-blue)'
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
          <JobCard
            jobtitle='Software Engineer'
            description='Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.'
            tech='Python'
            salary='£55,000'
            datePosted='29/08/2023'
            location='London'
            backgroundColor='var(--color-blue)'
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
          <JobCard
            jobtitle='Software Engineer'
            description='Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.'
            tech='Python'
            salary='£55,000'
            datePosted='29/08/2023'
            location='London'
            backgroundColor='var(--color-peach)'
            color='var(--color-blue)'
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
          <JobCard
            jobtitle='Software Engineer'
            description='Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.'
            tech='Python'
            salary='£55,000'
            datePosted='29/08/2023'
            location='London'
            backgroundColor='var(--color-peach)'
            color='var(--color-blue)'
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
          <JobCard
            jobtitle='Software Engineer'
            description='Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.'
            tech='Python'
            salary='£55,000'
            datePosted='29/08/2023'
            location='London'
            backgroundColor='var(--color-peach)'
            color='var(--color-blue)'
          />
        </div>
      </div>
      <div className="mt-4 px-4" style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <MdArrowCircleLeft
            onClick={() => handleScroll("left")}
            className={`me-2 ${styles.arrow_icon}`}
          />
          <MdArrowCircleRight
            onClick={() => handleScroll("right")}
            className={`me-2 ${styles.arrow_icon}`}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          View more jobs
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;