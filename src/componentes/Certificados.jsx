import { useState, useEffect } from 'react';
import CertImg from './CertImg';
import CertInfo from './CertiInfo';

function Certificates() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetch(
                    'https://my-json-server.typicode.com/Mikesrr/API-Digitaleers/certificado'
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
        <div className="box mt-24 certificates">
            <div className="box-content">
                <h2 className="title-1">Certificados</h2>
                <div className="certificates-container mt-16" id="certificates">
                    {isLoading ? (
                        <p>Cargando...</p>
                    ) : (
                        data.map((dato, index) => (
                            <div key={index} className={`certificates-container mt-16 ${index > 0 && index < 3 ? 'none' : ''}`}>
                                    <CertImg img={dato.img} />
                                <div className="text-certi">
                                    <CertInfo titulo={dato.titulo}  fecha={dato.fecha} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Certificates;
