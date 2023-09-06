import React, { useEffect, useState } from "react";
import Thumb from "./Thumb";

export default function FlatsContainer() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const response = await fetch("../../database/data.json");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setFlats(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlats();
  }, []); // Effectuer la récupération des données une seule fois lors du montage du composant

  return (
    <div>
      <div className="flats_container">
        {flats.map((flat, index) => (
          <Thumb key={index} flatData={flat} />
        ))}
      </div>
    </div>
  );
}
