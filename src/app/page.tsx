import Image from 'next/image';
import styles from './page.module.scss';
import CustomButton from '@/components/CustomButton/CustomButton';
import SearchBar from '@/components/SearchBar/SearchBar';
import { fetchCars } from '@/utils';
import { CarProps, FilterProps } from '@/types';
import CarCard from '@/components/CarCard/CarCard';

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const cars: CarProps[] = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  const isDataEmpty = !cars || cars.length > 1;

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Find, book, or rent a car - quickly and easily!</h1>
          <p>
            Streamline your car rental experience with our effortless booking
            process
          </p>
          <CustomButton title="Explore Cars" color="blue" />
        </div>
        <div className={styles.images}>
          <Image
            src="/hero.png"
            alt="Car"
            height={500}
            width={800}
            className={styles.car}
          />
          <div className={styles.car_bg} />
        </div>
      </div>

      <section className={styles.cars_section} id="discover">
        <div>
          <h1>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <SearchBar />
        <div className={styles.cars}>
          {isDataEmpty ? (
            cars.map((car) => <CarCard car={car} />)
          ) : (
            <div>Cars not found</div>
          )}
        </div>
      </section>
    </main>
  );
}
