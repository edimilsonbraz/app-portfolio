import TripImage from '../../assets/digitalbook.png'
import CoffeeImage from '../../assets/coffee-delivery.png'
import FswStore from '../../assets/fswStore.png'

import '../styles/components/projectsContainer.sass'

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        No decorrer da minha jornada de estudos desenvolvi diversos projetos de
        software empolgantes, nos quais pude aprimorar minhas habilidades de
        desenvolvimento e enfrentar desafios gratificantes. Nesta seção,
        compartilho uma amostra dos meus projetos mais significativos, desde
        aplicativos de viagens até sistemas de gerenciamento de vendas de uma
        cafeteria. Cada projeto destaca as tecnologias utilizadas, o objetivo
        principal e o meu papel no desenvolvimento. Espero que essa visão geral
        demonstre minha paixão pela programação e meu compromisso em criar
        soluções inovadoras.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <a href="https://fullstack-trips.vercel.app/" target="_blank">
            <img src={TripImage} alt="digitalbook" />
            <div className="project-card-text">
              <h3>Digital Book</h3>
              <p>Sistema de reserva de viagem.</p>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a
            href="https://coffee-delivery-edimilsonbraz.vercel.app/"
            target="_blank"
          >
            <img src={CoffeeImage} alt="coffee delivery" />
            <div className="project-card-text">
              <h3>Coffee Delivery</h3>
              <p>App para gerenciar um carrinho de compras de uma cafeteria.</p>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://fullstack-store-zxr6.vercel.app/" target="_blank">
            <img src={FswStore} alt="fsw store" />
            <div className="project-card-text">
              <h3>FSW Store</h3>
              <p>E-commerce fullstack.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
