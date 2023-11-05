'use client';

import { CarDetailsProps } from '@/types';
import styles from './styles.module.scss';
import Image from 'next/image';

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  const { model, make, transmission } = car;
  let trans = transmission === 'a' ? 'automatic' : 'manual';
  return (
    <div className={isOpen ? styles.modalOpen : styles.modalClose}>
      <div onClick={closeModal} className={styles.bg} />
      <div className={styles.modal}>
        <button onClick={closeModal}>
          <Image src="/close.svg" width={20} height={20} alt="Close" />
        </button>
        <div className={styles.arrows_img} />
        <Image
          className={styles.main_photo}
          src="/hero.png"
          alt="Car"
          height={170}
          width={350}
        />
        <div className={styles.images}>
          <Image src="/hero.png" alt="Car" height={130} width={180} />
          <Image src="/hero.png" alt="Car" height={130} width={180} />
          <Image src="/hero.png" alt="Car" height={130} width={180} />
        </div>
        <h2>
          {make} {model}
        </h2>
        <div className={styles.details}>
          <div className={styles.key}>
            {Object.entries(car).map((arr) => (
              <div>{arr[0].replace(/_/, ' ')}</div>
            ))}
          </div>
          <div className={styles.value}>
            {Object.entries(car).map((arr) => {
              let value = arr[0] === 'transmission' ? trans : arr[1];
              return <div>{value}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
