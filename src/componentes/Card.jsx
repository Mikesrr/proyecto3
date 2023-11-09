import { useState, useEffect } from 'react';

function Card() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/Mikesrr/API-Digitaleers/proyecto');
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    console.log(jsonData)
                } else {
                    throw new Error('Error al cargar los datos de la API');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const currentData = data["responsive"];
    if (!currentData) {
        return null;
    }

    return currentData.slice(0, 1).map((dato) => (
        <div key={dato.id} className='box mt-24 portfolio'>
            <div className='box-content'>
                <div className="slide">
                    <img className="img_porfolio" src={dato.img} alt="Portfolio" />
                    <div className="portfolio-content">
                        <span className="title-2">
                            {dato.etiqueta}
                        </span>
                        <h3 className="title-1 mt-16">
                            {dato.titulo}
                        </h3>
                        <p className="text-1 mt-24">
                            {dato.descripcion}
                        </p>
                        <div className="buttons-container mt-16">
                            <button className="active">Demo</button>
                            <button className="outlined">Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    );
}

export default Card