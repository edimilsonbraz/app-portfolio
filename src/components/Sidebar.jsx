import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/img_portfolio.png';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Edimilson Braz" />
      <p className="title">Desenvolvedor Full-Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
  
}
 
export default Sidebar;