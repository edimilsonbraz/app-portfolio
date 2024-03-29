import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';
import '../styles/components/informationContainer.sass';

const InformationContainer = () => {
  return(
    <section id="information">
      <div className='info-card'>
        <AiFillPhone id="phone-icon" />
        <div className='text'>
          <h3>Telefone</h3>
          <p>(61) 98608-9877</p>
        </div>
      </div>

      <div className='info-card'>
        <AiOutlineMail id="email-icon" />
        <div className='text'>
          <h3>E-mail</h3>
          <p>edimilson.gt8@gmail.com</p>
        </div>
      </div>

      <div className='info-card'>
        <AiFillEnvironment id="pin-icon" />
        <div className='text'>
          <h3>Localização</h3>
          <p>Brasília - DF</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer;