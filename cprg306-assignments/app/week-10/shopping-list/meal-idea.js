import React, { useState, useEffect } from 'react';

const FetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

const MealIdea = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMeals = async () => {
    const newMeals = await FetchMealIdeas(ingredient);
    setMeals(newMeals);
  };

  useEffect(() => {
    loadMeals();
  }, [ingredient]);

  return (
    <div >
      <h1 className="text-xl font-bold mb-2">Meal Ideas</h1>
      <p className="mb-2">Select an item </p>
      {meals && meals.length > 0 && (
        <ul className="max-w-md">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border bg-purple-600 cursor-pointer m-2 p-2 rounded-lg"
            >
              <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover mb-2 rounded-lg"
              />
              <p className="text-sm">{meal.strInstructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdea;