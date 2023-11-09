import Card from "./Card"
import Carrusel from "./Carrusel"
import Experiences from "./Experiencia"
import Certificates from "./certificados"
import Personal from "./personal"
import Skills from "./skills"

function Datos() {
    return (
        <>
            <Personal />
            <section className="middle-section">
                <Skills />
                <section className="carousel-section projects">
                <Carrusel />
                </section>
                <Card />
                <Experiences />
                <Certificates />
            </section>
        </>
    )
}

export default Datos