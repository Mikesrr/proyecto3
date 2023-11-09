import { useState, useEffect } from 'react';

function Carrusel() {
    const [data, setData] = useState({
        react: [],
        responsive: [],
        javascript: [],
    });
    const [activeView, setActiveView] = useState('responsive');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/Mikesrr/API-Digitaleers/proyecto');
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    throw new Error('Error al cargar los datos de la API');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleViewChange = (view) => {
        setActiveView(view);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderCards = () => {
        const currentData = data[activeView];
        if (!currentData) {
            return null;
        }

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const slicedData = currentData.slice(start, end);

        return slicedData.map((dato) => (
            <div key={dato.id} className="slide">
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
        )
        );
    };

    const renderPagination = () => {
        const currentData = data[activeView];
        if (!currentData) {
            return null;
        }

        const totalItems = currentData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <div
                    key={i}
                    className={`page ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    <span>{i}</span>
                </div>
            );
        }

        return (
            <div className="controls">
                {pages}
            </div>
        );
    };

    return (
        <>
            <div>
                <div className="box-content">
                    <h2 className="title-1" id="proyec_numero"></h2>
                    <div className="buttons-container">
                        <button
                            id="responsive"
                            className={activeView === 'responsive' ? 'active' : ''}
                            onClick={() => handleViewChange('responsive')}
                        >
                            Responsive
                        </button>
                        <button
                            id="javascript"
                            className={activeView === 'javascript' ? 'active' : ''}
                            onClick={() => handleViewChange('javascript')}
                        >
                            JavaScript
                        </button>
                        <button
                            id="react"
                            className={activeView === 'React' ? 'active' : ''}
                            onClick={() => handleViewChange('React')}
                        >
                            React
                        </button>
                    </div>
                </div>
            </div>
            <div className="carousel">
                <div className="sliders" id="carrusel">
                    {renderCards()}
                </div>
            </div>
            {renderPagination()}
        </>
    );
}

export default Carrusel;
