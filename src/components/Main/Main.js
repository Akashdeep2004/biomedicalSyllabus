import React from 'react'
import img from '../../assets/boy.jpg'
import './Main.css'
import Button from '../UI/Button'
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
        <section className="presentation">
            <div className="introduction">
                <div className="intro-text">
                    <h1>BIOMEDICAL ENGINEERING</h1>
                    <p>Biomedical engineers focus on advances in technology and
                        medicine to develop new devices and equipment for improving human health.Biomedical engineering (BME) or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes (e.g., diagnostic or therapeutic). BME is also traditionally known as "bioengineering", but this term has come to also refer to biological engineering. This field seeks to close the gap between engineering and medicine, combining the design and problem-solving skills of engineering with medical biological sciences to advance health care treatment, including diagnosis, monitoring, and therapy.[1][2] Also included under the scope of a biomedical engineer is the management of current medical equipment in hospitals while adhering to relevant industry standards. This involves making equipment recommendations, procurement, routine testing, and preventive maintenance, a role also known as a Biomedical Equipment Technician (BMET) or as clinical engineering.
                        Biomedical engineering has recently emerged as its own study, as compared to many other engineering fields. Such an evolution is common as a new field transition from being an interdisciplinary specialization among already-established fields to being considered a field in itself. Much of the work in biomedical engineering consists of research and development, spanning a broad array of subfields (see below). Prominent biomedical engineering applications include the development of biocompatible prostheses, various diagnostic and therapeutic medical devices ranging from clinical equipment to micro-implants, common imaging equipment such as MRIs and EKG/ECGs, regenerative tissue growth, pharmaceutical drugs and therapeutic biologicals.
                    </p>
                    <p>
                   Let's gets started --------------------- <NavLink  to="/mainpage" ><Button>Biomedical Engineering</Button></NavLink>
               </p>
            
                </div>
              
            </div>    
        </section>
    )
}

export default Main
