'use client';

import { Fragment, useState } from 'react';
import { manufacturers } from '@/constants';
import { Combobox } from '@headlessui/react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { SearchManufacturersProps } from '@/types';

const SearchManufacturers = ({
  selectedManufacturer,
  setSelectedManufacturer,
}: SearchManufacturersProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturer =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedManufacturer} onChange={setSelectedManufacturer}>
      <div className={styles.container}>
        <Image
          className={styles.car_logo}
          src="/car-logo.svg"
          height={30}
          width={30}
          alt="Car Logo"
        />
        <Combobox.Input
          className={styles.input}
          placeholder="Manufacturer"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item: string) => item}
        />

        <Combobox.Options className={styles.ul}>
          {filteredManufacturer.map((item) => (
            <Combobox.Option key={item} value={item} as={Fragment}>
              {({ active }) => (
                <li
                  key={item}
                  className={`${styles.li} ${active ? `${styles.active}` : ``}`}
                >
                  {item}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default SearchManufacturers;
