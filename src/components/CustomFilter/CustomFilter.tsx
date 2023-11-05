'use client';

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Listbox } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value);

    router.push(newPathName);
  };

  return (
    <Listbox
      value={selectedOption}
      onChange={(e) => {
        setSelectedOption(e);
        handleUpdateParams(e);
      }}
    >
      <div className={styles.listbox}>
        <Listbox.Button className={styles.button}>
          {selectedOption.title}
          <Image
            src="/chevron-up-down.svg"
            width={20}
            height={20}
            alt="Chevron Up Down"
          />
          <Listbox.Options className={styles.ul}>
            {options.map((option) => (
              <Listbox.Option as={Fragment} key={option.title} value={option}>
                {({ active }) => (
                  <li
                    className={`${styles.li} ${
                      active ? `${styles.active}` : ``
                    }`}
                  >
                    {option.title}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox.Button>
      </div>
    </Listbox>
  );
};

export default CustomFilter;
