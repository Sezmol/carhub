'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchManufacturers from '../SearchManufacturers/SearchManufacturers';
import styles from './styles.module.scss';
import CustomFilter from '../CustomFilter/CustomFilter';
import { fuels, yearsOfProduction } from '@/constants';

const SearchBar = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (selectedManufacturer === '' && model === '')
      return alert('Please fill in the search bar');
    updateSearchParams(model, selectedManufacturer);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <div className={styles.search_bar}>
      <div className={styles.searches}>
        <SearchManufacturers
          selectedManufacturer={selectedManufacturer}
          setSelectedManufacturer={setSelectedManufacturer}
        />
        <div className={styles.search_model}>
          <Image
            className={styles.model_icon}
            src="/model-icon.png"
            alt="Model Icon"
            width={30}
            height={30}
          />
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            placeholder="Model"
          />
        </div>
        <Image
          className={styles.search_icon}
          src="magnifying-glass.svg"
          alt="Search Icon"
          width={50}
          height={50}
          onClick={handleSearch}
        />
      </div>
      <div className={styles.filters}>
        <CustomFilter title="fuel" options={fuels} />
        <CustomFilter title="year" options={yearsOfProduction} />
      </div>
    </div>
  );
};

export default SearchBar;
