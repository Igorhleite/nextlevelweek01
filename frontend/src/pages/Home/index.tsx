import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './styles.css'
import Modal from 'react-modal'




const Home = () => {

    
   



    return (
        <div id="page-home">
            <div className="content">

                <header>
                <img src={logo} alt="Escoleta"></img>
                </header>

                <main>

                    <h1> Seu marketplace de coleta de resíduos.</h1>
                    <p> Ajudando pessoas a encontrar pontos de coleta de forma eficiente. </p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn/>
                        </span>
                        <strong>Cadastre um ponto de caleta</strong>
                    </Link>
                    
                    

                </main>


            </div>

        </div>



)
}

export default Home