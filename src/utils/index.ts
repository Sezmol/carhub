import { FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, model, year, fuel, limit } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a2221b4812msh85aacfcd51a7950p12e35ajsn1b969b9f1be4',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function updateSearchParams(type: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type.toLocaleLowerCase(), value.toLocaleLowerCase());

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
}
