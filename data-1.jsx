// Content database with PT/EN translations.
// Exposed on window so other Babel scripts can read it.

const CONTENT = {
  meta: {
    name: 'Pedro Henrique B. Peres',
    handle: 'PHBP',
    location: 'Uberlândia, MG · BR',
    timezone: 'GMT−3',
    email: 'pedrohperescode@gmail.com',
    phone: '+55 (34) 98446-4712',
    links: {
      github: 'https://github.com/PedroH-Peres',
      linkedin: 'https://www.linkedin.com/in/pedrohbperes/',
      itch: 'https://staraureo.itch.io/',
    },
  },

  nav: {
    pt: ['Sobre', 'Skills', 'Projetos', 'Jogos', 'Trajetória', 'Prêmios', 'Contato'],
    en: ['About', 'Skills', 'Projects', 'Games', 'Journey', 'Awards', 'Contact'],
  },

  hero: {
    pt: {
      greet: 'OPERADOR ONLINE · PORTFOLIO 2026',
      name: ['Engenheiro', 'Mecatrônico &', <em key="e">desenvolvedor</em>, ' de robôs.'],
      role: (
        <>
          Estudante de <strong>Eng. Mecatrônica</strong> com foco em{' '}
          <strong>robótica móvel e humanoide</strong>. Capitão da EDROM (UFU),
          pesquisador no Laboratório de Automação e Robótica (UFU), e dev de jogos indie nas horas
          que sobram.
        </>
      ),
      cv: 'Baixar CV',
      contact: 'Falar comigo',
      metaLabels: ['LOCAL', 'STATUS', 'STACK'],
      metaValues: [
        'Uberlândia · MG',
        'Disponível · 2026',
        'ROS2 · C++ · Python · Java',
      ],
    },
    en: {
      greet: 'OPERATOR ONLINE · PORTFOLIO 2026',
      name: ['Mechatronics', 'engineer &', <em key="e">robot builder</em>, '.'],
      role: (
        <>
          <strong>Mechatronics Engineering</strong> student focused on{' '}
          <strong>mobile and humanoid robotics</strong>. Captain of EDROM (UFU),
          researcher at CROB / LabRom (EESC-USP), indie game developer on the side.
        </>
      ),
      cv: 'Download CV',
      contact: 'Get in touch',
      metaLabels: ['BASE', 'STATUS', 'STACK'],
      metaValues: [
        'Uberlândia · MG',
        'Available · 2026',
        'ROS2 · C++ · Python',
      ],
    },
  },

  about: {
    pt: {
      title: 'Sobre',
      id: '§ 01 / IDENTIFICAÇÃO',
      bio: [
        'Apaixonado por robótica e computação. Quero entender máquinas que andam, enxergam e decidem — e construir as próximas.',
        'No CROB-LabRom (EESC-USP) trabalhei com algoritmos para o projeto Petrobras: geração de meshes para simulação e deploy de policies em quadrúpedes (B1, Spot, ANYmal). Desenvolvi uma arquitetura MPC para o Boston Dynamics Spot estabilizar a base durante manipulação de cargas complexas, migrando de um Whole-Body Control reativo para um modelo preditivo com OSQP.',
        'Na EDROM lidero como capitão o desenvolvimento de robôs humanoides que jogam futebol autonomamente na RoboCup. 3º lugar na Liga Humanoide do CBR 2025.',
      ],
      stats: [
        ['3', 'Anos · Mecatrônica'],
        ['12+', 'Projetos enviados'],
        ['9', 'Medalhas olímpicas'],
        ['4', 'Linguagens fluentes'],
      ],
    },
    en: {
      title: 'About',
      id: '§ 01 / IDENTIFICATION',
      bio: [
        'Passionate about robotics and computing. I want to understand machines that walk, see, and decide — and build the next ones.',
        'At CROB-LabRom (EESC-USP) I worked on algorithms for a Petrobras robotics project: mesh generation for simulation and policy deployment on quadrupeds (B1, Spot, ANYmal). I built an MPC architecture for the Boston Dynamics Spot to keep base stability during complex load manipulation — migrating from a reactive Whole-Body Control to a predictive model with OSQP.',
        'At EDROM I lead as captain the development of humanoid robots that autonomously play soccer at RoboCup. 3rd place at CBR 2025 Humanoid League.',
      ],
      stats: [
        ['3', 'Years · Mechatronics'],
        ['12+', 'Projects shipped'],
        ['9', 'Olympiad medals'],
        ['4', 'Fluent languages'],
      ],
    },
  },

  skills: {
    pt: {
      title: 'Skills',
      id: '§ 02 / CAPACIDADES',
      groups: [
        {
          ix: '01',
          name: 'ROBÓTICA',
          items: [
            ['ROS2', '5y'],
            ['Controle preditivo (MPC)', '2y'],
            ['Cinemática direta / inversa', '3y'],
            ['Simulação (Gazebo / Isaac)', '2y'],
            ['Quadrupedes (Spot · B1 · ANYmal)', '1y'],
          ],
        },
        {
          ix: '02',
          name: 'ML / VISÃO',
          items: [
            ['Deep Learning · PyTorch', '3y'],
            ['Visão Computacional', '3y'],
            ['YOLO · detecção', '2y'],
            ['Reinforcement Learning', '1y'],
            ['GANs · Autoencoders', '2y'],
          ],
        },
        {
          ix: '03',
          name: 'SOFTWARE',
          items: [
            ['C / C++', '5y'],
            ['Python', '5y'],
            ['C# · Java', '3y'],
            ['Dart · Flutter', '2y'],
            ['Docker', '2y'],
          ],
        },
        {
          ix: '04',
          name: 'HARDWARE / JOGOS',
          items: [
            ['Sistemas embarcados (ESP32)', '3y'],
            ['KiCad · PCBs', '2y'],
            ['SolidWorks · CAD', '4y'],
            ['Unity · Godot', '4y'],
            ['Game design', '4y'],
          ],
        },
      ],
    },
    en: {
      title: 'Skills',
      id: '§ 02 / CAPABILITIES',
      groups: [
        {
          ix: '01',
          name: 'ROBOTICS',
          items: [
            ['ROS2', '5y'],
            ['Model Predictive Control', '2y'],
            ['Forward / inverse kinematics', '3y'],
            ['Simulation (Gazebo / Isaac)', '2y'],
            ['Quadrupeds (Spot · B1 · ANYmal)', '1y'],
          ],
        },
        {
          ix: '02',
          name: 'ML / VISION',
          items: [
            ['Deep Learning · PyTorch', '3y'],
            ['Computer Vision', '3y'],
            ['YOLO · detection', '2y'],
            ['Reinforcement Learning', '1y'],
            ['GANs · Autoencoders', '2y'],
          ],
        },
        {
          ix: '03',
          name: 'SOFTWARE',
          items: [
            ['C / C++', '5y'],
            ['Python', '5y'],
            ['C# · Java', '3y'],
            ['Dart · Flutter', '2y'],
            ['Docker', '2y'],
          ],
        },
        {
          ix: '04',
          name: 'HARDWARE / GAMES',
          items: [
            ['Embedded systems (ESP32)', '3y'],
            ['KiCad · PCBs', '2y'],
            ['SolidWorks · CAD', '4y'],
            ['Unity · Godot', '4y'],
            ['Game design', '4y'],
          ],
        },
      ],
    },
  },
};

window.CONTENT = CONTENT;
