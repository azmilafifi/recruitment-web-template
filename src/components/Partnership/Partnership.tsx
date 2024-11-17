import React from 'react'
import Image from 'next/image'
import styles from './Partnership.module.scss'

const Partnership = () => {
  return (
    <div className={styles.partnership_container}>
      <div className={styles.title}>Who we work with</div>
      <div className={styles.partnership_icons}>
        <Image
          src="/images/Microsoft.svg"
          alt="Partner 1"
          width={0}
          height={0}
          className={styles.icon} />
        <Image
          src="/images/Oracle.svg"
          alt="Partner 2"
          width={0}
          height={0}
          className={styles.icon} />
        <Image
          src="/images/Atlassian.svg"
          alt="Partner 3"
          width={0}
          height={0}
          className={styles.icon} />
        <Image
          src="/images/Cloudfare.svg"
          alt="Partner 4"
          width={0}
          height={0}
          className={styles.icon} />
        <Image
          src="/images/VMware.svg"
          alt="Partner 5"
          width={0}
          height={0}
          className={styles.icon} />
      </div>
    </div>
  )
}

export default Partnership