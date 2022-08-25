import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialNetworks.sass';

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/edimilsonbraz/"},
  {name: "github", icon: <FaGithub />, url: "https://github.com/edimilsonbraz"},
  {name: "instagram", icon: <FaInstagram />, url: "https://github.com/edimilsonbraz"},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
}
 
export default SocialNetworks;