import React, { useEffect } from 'react'
import AOS from "aos"
import AccordionBar from '../components/Accordionbar'
import faq from "../assets/faq/faq.png";
import "./FaqSection.css"

const FaqSection = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[])
  return (
    <div className="faq-section">
        <div className="row">
          <div className="col-5 d-none d-lg-block">
            <img className="img-fluid" src={faq} alt="faq" />
          </div>
          <div className="col-12 col-lg-4">
            <div className="offertxt">
              <h1 className="offer-title" data-aos="fade-left">Frequently ask</h1>
              <AccordionBar
                heading="Adieus who direct esteem It esteems luckily?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."/>
              <AccordionBar
                heading="Who direct esteem It esteems?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
              <AccordionBar
                heading="Duis consectetur feugiat auctor?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
              <AccordionBar
                heading=" Consectetur feugiat auctor?"
                content="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default FaqSection