import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const metadata = {
  title: 'Services',
  description: 'services pages',
}


export default async function Services() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
  const meals = await res.json();


  console.log(meals)




  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-4">
      {meals?.meals?.map(meal => (
        <div key={meal?.idMeal} className="rounded-lg overflow-hidden shadow-md">
          <div className="relative w-full  h-60">
            <Image
              src={meal?.strMealThumb}
              alt={meal?.strMeal || 'Meal Image'}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            {/* <img src={meal?.strMealThumb} alt="" /> */}
          </div>
          <div className="p-2">
            <h1 className="text-lg font-semibold">{meal?.strCategory}</h1>
            <p className="text-sm text-gray-600">{meal?.strMeal}</p>
           <Link href={`/details/${meal.idMeal}`}> <button className='hover:cursor-pointer bg-blue-600 p-2 rounded-md my-3'>Show Details</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
