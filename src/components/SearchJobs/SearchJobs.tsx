import React from 'react';
import Image from 'next/image';
import styles from './SearchJobs.module.scss';

const SearchJobs = () => {
    return (
        <div className={styles.search_container}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={`${styles.contentWrapper} row col-12 align-items-center`}>
                <div className="col-md-6 text-white mb-5">
                    <div className={styles.subtitle}>Software Recruitment </div>
                    <h1 className={styles.title}>Elevate your career now</h1>
                    <div className={styles.searchForm}>
                        <input
                            type="text"
                            placeholder="E.g. networking"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.searchButton}>
                            Search jobs
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.imageWrapper}>
                        <Image src="/images/SearchJobImage.png" alt="Job Search" width={500} height={500} className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchJobs;