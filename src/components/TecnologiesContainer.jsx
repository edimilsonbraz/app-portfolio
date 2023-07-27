import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma
} from 'react-icons/si'

import '../styles/components/tecnologiesContainer.sass'

const tecnologies = [
  {
    id: 'html',
    name: 'HTML5',
    description:
      'Next.js é um framework para a criação de aplicativos da web, criando interfaces de usuário com componentes React.',
    icon: <DiHtml5 />
  },
  {
    id: 'css',
    name: 'CSS3',
    description:
      'Css é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML. ',
    icon: <DiCss3 />
  },
  {
    id: 'js',
    name: 'JavaScript',
    description:
      'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica. ',
    icon: <DiJsBadge />
  },
  {
    id: 'node',
    name: 'Node.js',
    description:
      'Node.js é um software de código aberto, que permite a execução de códigos JavaScript fora de um navegador web. ',
    icon: <DiNodejsSmall />
  },
  {
    id: 'mysql',
    name: 'MySQL',
    description:
      'MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.',
    icon: <DiMysql />
  },
  {
    id: 'react',
    name: 'React',
    description:
      'React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    icon: <DiReact />
  },
  {
    id: 'typescript',
    name: 'Typescript',
    description:
      'Typescript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
    icon: <SiTypescript />
  },
  {
    id: 'next',
    name: 'Next',
    description:
      'Next.js é um framework web front-end que permite renderização do lado do servidor e geração de sites estáticos para aplicativos web.',
    icon: <SiNextdotjs />
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    description: 'Tailwind CSS é um framework CSS que cria uma lista de classes CSS "utility" que podem ser usadas para modelar cada elemento misturando e combinando.',
    icon: <SiTailwindcss />
  },
  {
    id: 'prisma',
    name: 'Prisma',
    description:
      'Prisma é um ORM que nos ajuda a unificar acessos à dados de vários sistemas corporativos em uma única API.',
    icon: <SiPrisma />
  }
]

const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {tecnologies.map((tech) => (
          <div className="tecnology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer
