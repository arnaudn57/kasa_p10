import { useState } from 'react'

export default function Accordion({accordionItems, accordionTitle}) {
    const [isActive, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!isActive);
        document.querySelector('.accordion-header i').classList.toggle('fa-chevron-down');
    }


  return (
        <div className="accordion" onClick={toggleAccordion}>
            <div className="accordion-header">
                <p>{accordionTitle}</p>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
            {
                isActive ? (
                    <div className="accordion-item">
                        <ul>
                            {console.log(accordionItems)}
                            {accordionItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}

                        </ul>
                    </div>
                ): null
            }


        </div>
  )
}
