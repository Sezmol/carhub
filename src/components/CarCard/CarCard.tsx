'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { CarProps } from '@/types';
import styles from './styles.module.scss';
import CustomButton from '../CustomButton/CustomButton';
import CarDetails from '../CarDetails/CarDetails';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, make, model, transmission } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <h2>
        {make} {model}
      </h2>
      <div className={styles.price}>
        <span className={styles.dollar}>$</span>
        <span className={styles.cost}>54</span>
        <span className={styles.day}>/day</span>
      </div>

      <Image
        className={styles.image}
        src="/hero.png"
        alt="Car"
        width={300}
        height={200}
      />

      <div className={styles.details}>
        <div className={styles.detail}>
          <Image
            src="/steering-wheel.svg"
            alt="Steering Wheel"
            height={25}
            width={25}
          />
          <span>{transmission === 'a' ? 'Automatic' : 'Manual'}</span>
        </div>
        <div className={styles.detail}>
          <Image src="/tire.svg" alt="Tire" height={25} width={25} />
          <span>{drive.toUpperCase()}</span>
        </div>
        <div className={styles.detail}>
          <Image src="/gas.svg" alt="Gas" height={25} width={25} />
          <span>{city_mpg} MPG</span>
        </div>
        <div className={styles.view_more_btn}>
          <CustomButton
            title="View More"
            color="blue"
            max_width
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
