function Personal() {
    return (
        <section id="personal">
            <div className="box">
                    <div className="box-content">
                        <img className="cv-image" src="./chicofigma1.png" alt="person" />
                        <div className="personal-info">
                            <div className="contact">
                                <div>
                                    <h1 className="title-1">Nombre</h1>
                                    <p className="text-1">Front-end developer</p>
                                </div>
                                <div>
                                    <p>
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href="email:ejemplo@mail.com" className="text-1">ejemplo@mail.com</a>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-phone"></i>
                                        <a href="tel:5491112345678" className="text-1">+54 9 11-1234-5678</a>
                                    </p>
                                </div>
                            </div>
                            <div className="description">
                                <p className="text-1">
                                    Self-motivated developer, who is willing to learn and create outstanding UI
                                    applications.
                                </p>
                                <p className="text-1 for-desktop">
                                    Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
                                    malesuada molestie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
      
        </section>
    )
}

export default Personal