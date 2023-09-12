import {useState, useEffect} from 'react'

export default function Slider({pictures}) {

    console.log(pictures);
    const [index, setIndex] = useState(0);
    const [current, setCurrent] = useState('');

    const nextSlide = () => {
    if (pictures.length === index + 1) {
        setCurrent(pictures[0]);
        setIndex(0);
    } else {
        setCurrent(pictures[index + 1]);
        setIndex(index + 1);
    }
}

const previousSlide = () => {
    if (index === 0) {
        setCurrent(pictures[pictures.length - 1]);
        setIndex(pictures.length - 1);
    } else {
        setCurrent(pictures[index - 1]);
        setIndex(index - 1);
    }
}


   useEffect(() => {
    setCurrent(pictures[index]);
}, [pictures, index]);


  return (
    <div>
        <div className="sliderContainer">
            <div className="slide">
                <img className="slider" src={current} alt="Image 1"/>
            </div>
            <img className="prev" src="/public/arrow-left.svg" alt="Précédent" onClick={previousSlide}/>
            <img className="next" src="/public/arrow-right.svg" alt="Suivant" onClick={nextSlide} />
        </div>
    </div>
  )
}
