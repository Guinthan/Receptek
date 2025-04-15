import React, { useEffect, useState } from "react";

const App = () => {
  const [receptek, setReceptek] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/recipes/")
      .then((valasz) => {
        return valasz.json();
      })
      .then((receptek) => {
        setReceptek(receptek);
      }); //ez aszinkron módon fut le, nem sorba megy, csak akkor végzi el a műveletet, ha megkapja az adatot hozzá
  }, []);
  return (
    <div>
      {receptek.map((recept) => (
        <div>{recept.name}</div>
      ))}
    </div>
  );
};

export default App;
