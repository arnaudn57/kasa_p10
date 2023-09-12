import React from "react";
import { Link } from "react-router-dom";

export default function Thumb({ flatData }) {
  const thumbStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6965379901960784) 0%, rgba(0,212,255,0) 100%), url(${flatData.cover})`, // Utilisation de l'URL de l'image des données de l'appartement
    backgroundSize: "cover", // Ajustez la taille de l'image de fond selon vos besoins
    backgroundPosition: "center", // Ajustez la position de l'image de fond selon vos besoins
  };

  return (
    <div>
        <Link to={`/logement/${flatData.id}`}>
        <div className="thumb d-flex flex-column-reverse" style={thumbStyle}>
            <div className="thumb__content w-50">
            <div className="thumb__content__title">
                <p className="p-2 text-white">{flatData.title}</p>
            </div>
            </div>
        </div>
        </Link>
    </div>
  );
}
