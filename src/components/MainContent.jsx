import AboutContainer from './AboutContainer';
import TecnologiesContainer from './TecnologiesContainer';
import ProjectsContainer from './ProjectsContainer';

import '../styles/components/mainContent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TecnologiesContainer />
      <ProjectsContainer />
    </main>
  );
  
}
 
export default MainContent;