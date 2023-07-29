import TripImage from '../../assets/digitalbook.png'
import CoffeeImage from '../../assets/coffee-delivery.png'

import '../styles/components/projectsContainer.sass'

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        eveniet aspernatur atque? Voluptatibus ex similique sunt non aperiam,
        perferendis harum qui quia itaque asperiores blanditiis totam
        consequuntur rem quidem vel.
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
      </div>
    </section>
  )
}

export default Projects
