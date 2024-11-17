"use client"

import React, { useRef } from 'react';
import JobCard from '@/shared/JobCard/JobCard';
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import Button from '@/shared/Button/Button';
import { FaArrowRight } from "react-icons/fa";
import styles from './LatestJobs.module.scss';


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
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
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
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
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
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
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
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
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
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
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
      <div className="mt-4 px-4 d-flex justify-content-between">
        <div className='d-none d-lg-flex'>
          <MdArrowCircleLeft
            onClick={() => handleScroll("left")}
            className={`me-2 ${styles.arrow_icon}`}
          />
          <MdArrowCircleRight
            onClick={() => handleScroll("right")}
            className={`me-2 ${styles.arrow_icon}`}
          />
        </div>
        <div className="d-none d-lg-flex" style={{ cursor: "pointer" }}>
          View more jobs
        </div>
      </div>
      <div className='d-flex justify-content-center d-lg-none'>
        <Button className="shadow-sm w-auto gap-2" label='Jobs Page' backgroundColor='var(--color-blue)' color='white' icon={FaArrowRight} />
      </div>
    </div>
  );
};

export default LatestJobs;