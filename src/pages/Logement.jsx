import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import InfoLogement from '../components/InfoLogement'
import Accordion from '../components/Accordion'
import { useParams } from 'react-router-dom'

export default function Logement() {

    const { id } = useParams();
    const [flat, setFlat] = useState([]); // Initialiser le state avec un tableau vide
    const flatEquipements = flat.equipments || [];
    const flatTitle = flat.title || '';
    const flatLocation = flat.location || '';
    const flatDescription = flat.description || '';
    const flatPictures = flat.pictures || [];
    const flatHost = flat.host || '';
    const flatTags = flat.tags || [];
    const flatRating = flat.rating || 0;


    const flatInfos = { flatTitle, flatLocation, flatDescription, flatHost, flatTags, flatRating}

    useEffect(() => {
        const fetchFlat = async () => {
            try {
                const response = await fetch("../../database/data.json");
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data = await response.json();
                setFlat(data.find((flat) => flat.id === id));
                // console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFlat();
    }, []); // Effectuer la récupération des données une seule fois lors du montage du composant

  return (
    <div>
        <Header />
        <Slider pictures={flatPictures}/>
        <InfoLogement flatInfos={flatInfos}/>
        <div className="logement__dropdown">
            <Accordion accordionItems={flatEquipements} accordionTitle={'Description'}/>
            <Accordion accordionItems={flatEquipements} accordionTitle={'Équipements'}/>
        </div>
        <Footer />
    </div>
  )
}
