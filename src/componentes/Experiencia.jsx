import { useState, useEffect } from 'react';
import DatosExpUno from './DatosExpUno';
import DatosExpDos from './DatosExpDos';


function Experiences() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetch(
                    'https://my-json-server.typicode.com/Mikesrr/API-Digitaleers/experiencia'
                );
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                    setIsLoading(false);
                } else {
                    throw new Error('Error al cargar los datos de la API');
                }
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchDataFromAPI();
    }, []);

    return (
        <div className="box mt-24 experience">
            <div className="box-content">
                <h2 className="title-1">Experiencia</h2>
                <div className="experiences-container" id="experiences">
                    {isLoading ? (
                        <p>Cargando...</p>
                    ) : (
                        data.map((dato, index) => (
                            <div key={dato.id} className={`experience-card bordered mt-16 ${index >= 1 ? 'none' : ''}`}>
                                <DatosExpUno imgen={dato.img} fecha={dato.fecha} titulo={dato.titulo} />
                                <DatosExpDos text3="Feb 2022 - Actualidad" text-2="Front-end Developer" descri={dato.descripcion} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
