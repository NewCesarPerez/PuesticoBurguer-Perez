import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer >
            <div >
                <div className='d-flex flex-row my-5' >
                    <div className="col-4">
                        <img className='w-50' src="../imagenes/holapuestico-min.jpg" alt="Meme de Dr. Octopus"/>
                    </div>
                    <div className="col-4">
                        <img className='w-50' src="../imagenes/redflag-min.jpg" alt="Meme de Red Flag"/>
                    </div>
                    
                    <div className="col-4">
                        <img className='w-50' src="../imagenes/noimportaquehoraes-min.jpg" alt="Call to action"/>
                    </div>
                </div>
                    <div className='my-2' >
                            <h4 ><span className='text-warning'> Nuestras</span> <span className='text-danger'>Redes</span> </h4>
                            <div >
                                <a  href="https://www.instagram.com/"><i class="iconos bi-instagram mx-5 text-danger"></i></a>
                                <a  href="https://www.whatsapp.com/"><i class="iconos bi-whatsapp mx-5 text-warning"></i></a>
                            </div>
                    </div>
                <div className="mb-2">
                    <div className="col-12 mt-4">
                        <small  className="col-12"> Autor: César Pérez - Todos los derechos reservados.</small>
                    </div>
                </div>
                
            </div>
        
        </footer>
    </div>
    )
}

export default Footer