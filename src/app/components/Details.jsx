import Image from 'next/image';
import React from 'react'

export default async function Details({ id }) {

    console.log(id)

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const meals = await res.json();
    const meal = meals.meals[0]



    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }


    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{meal.strMeal || 'meal not working'}</h1>
            <Image
                src={meal?.strMealThumb || 'not working'}
                alt={meal?.strMeal || 'not working'}
                width={600}
                height={400}
                className="rounded shadow mb-6"
            />

            <p className="mb-2"><strong>Category:</strong> {meal?.strCategory || 'not working'}</p>
            <p className="mb-2"><strong>Area:</strong> {meal?.strArea || 'Not working'}</p>
            <p className="mb-4"><strong>Tags:</strong> {meal?.strTags || 'None'}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 mb-6">
                {ingredients?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <p className="whitespace-pre-line">{meal?.strInstructions || 'not working'}</p>

            {meal?.strYoutube && (
                <div className="mt-6">
                    <a
                        href={meal?.strYoutube || 'youtube url not working'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Watch on YouTube
                    </a>
                </div>
            )}
        </div>
    )
}
