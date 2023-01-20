import React, {useState,useEffect} from 'react';
import AnatomyBio from './AnatomyBio';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Anatomy.css';

function App() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://biomedical-app-20f66-default-rtdb.firebaseio.com/anatomy.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          define: responseData[key].define,
          function: responseData[key].function,
          images: responseData[key].image,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [meals]);

  if (isLoading) {
    return (
      <div className="loader"></div>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <AnatomyBio
      key={meal.id}
      id={meal.id}
      name={meal.name}
      define={meal.define}
      functions={meal.function}
      image={meal.images}
    />
  ));

  return (
    <>
    
    <section>
        <ul>{mealsList}</ul>
    </section>
    </>
  );
 };
export default App;