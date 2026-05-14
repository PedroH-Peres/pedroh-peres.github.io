// Projects, games, experience, awards, education, contact content.

const CONTENT_2 = {
  projects: {
    pt: {
      title: 'Projetos de Robótica',
      id: '§ 03 / MISSÕES',
      filters: ['Todos', 'Humanoide', 'Quadrúpede', 'Controle', 'Visão'],
      countLabel: 'missões registradas',
      role: 'FUNÇÃO',
      tech: 'STACK',
      items: [
        {
          id: 'M-001',
          title: 'MPC para Boston Dynamics Spot',
          desc:
            'Arquitetura de Model Predictive Control para manter estabilidade da base do Spot durante manipulação de cargas complexas com braço robótico. Migrou o sistema de Whole-Body Control reativo para modelo preditivo usando dinâmica de corpos rígidos e solver OSQP, com compensação de torque feedforward.',
          role: 'Pesquisador · CROB-LabRom EESC-USP',
          chips: ['MPC', 'OSQP', 'C++', 'ROS2', 'Spot'],
          status: 'completed',
          tag: 'CONTROL_SUITE/MPC',
          glyph: 'quadruped',
          cat: 'Quadrúpede',
        },
        {
          id: 'M-002',
          title: 'Robôs Humanoides para RoboCup Soccer',
          desc:
            'Dois humanoides projetados para jogar futebol de forma autônoma na RoboCup. Trabalhei no behavior (IMUs em ESP32 + ROS2) e no movimento — sistema de controle para pernas com atuadores lineares no lugar dos servos convencionais. 3º lugar no CBR 2025.',
          role: 'Membro · Capitão · EDROM (UFU)',
          chips: ['ROS2', 'ESP32', 'IMU', 'Kinematics', 'C++'],
          status: 'ongoing',
          tag: 'PLATFORM/HUMANOID',
          glyph: 'humanoid',
          cat: 'Humanoide',
        },
        {
          id: 'M-003',
          title: 'Modelo de Caminhada Bípede',
          desc:
            'Iniciação Científica desenvolvendo o modelo matemático para a caminhada de um humanoide bípede, com simulação e aplicação no sistema físico. Aplicação de técnicas de otimização e treinamento via Reinforcement Learning.',
          role: 'IC · EDROM / LAR',
          chips: ['RL', 'Otimização', 'Python', 'Simulação'],
          status: 'ongoing',
          tag: 'RESEARCH/LOCOMOTION',
          glyph: 'gait',
          cat: 'Humanoide',
        },
        {
          id: 'M-004',
          title: 'Deploy de Policies em Quadrúpedes',
          desc:
            'Implementação de pipelines para deployment de políticas treinadas em robôs quadrúpedes da família B1, Spot e ANYmal — incluindo geração de meshes para ambientes de simulação. Parte do projeto Petrobras.',
          role: 'Pesquisador · CROB-LabRom',
          chips: ['Isaac Sim', 'Python', 'RL', 'ROS2'],
          status: 'completed',
          tag: 'PIPELINE/DEPLOY',
          glyph: 'mesh',
          cat: 'Quadrúpede',
        },
        {
          id: 'M-005',
          title: 'Visão Computacional · UaiLook',
          desc:
            'Desenvolvimento de projetos de Visão Computacional e IA durante o estágio. Treinamento de redes neurais para reconhecimento e classificação de objetos em pipelines de produção.',
          role: 'Estagiário · UaiLook',
          chips: ['CV', 'PyTorch', 'YOLO', 'Python'],
          status: 'completed',
          tag: 'VISION/INDUSTRIAL',
          glyph: 'eye',
          cat: 'Visão',
        },
        {
          id: 'M-006',
          title: 'LLMs em Sistemas Adaptativos Educacionais',
          desc:
            'IC na FACOM-UFU: geração de databases e uso de LLMs em sistemas de jogadores adaptativos para educação. Modelos identificam fraquezas cognitivas e readaptam o conteúdo para o usuário.',
          role: 'IC · FACOM UFU',
          chips: ['LLM', 'Data', 'Python', 'EdTech'],
          status: 'completed',
          tag: 'RESEARCH/LLM',
          glyph: 'brain',
          cat: 'Visão',
        },
      ],
    },
    en: {
      title: 'Robotics Projects',
      id: '§ 03 / MISSIONS',
      filters: ['All', 'Humanoid', 'Quadruped', 'Control', 'Vision'],
      countLabel: 'missions logged',
      role: 'ROLE',
      tech: 'STACK',
      items: [
        {
          id: 'M-001',
          title: 'MPC for Boston Dynamics Spot',
          desc:
            'Model Predictive Control architecture to keep the Spot base stable during complex load manipulation with the arm. Migrated the system from reactive Whole-Body Control to a predictive model using rigid body dynamics and OSQP solver, with feedforward torque compensation.',
          role: 'Researcher · CROB-LabRom EESC-USP',
          chips: ['MPC', 'OSQP', 'C++', 'ROS2', 'Spot'],
          status: 'completed',
          tag: 'CONTROL_SUITE/MPC',
          glyph: 'quadruped',
          cat: 'Quadruped',
        },
        {
          id: 'M-002',
          title: 'Humanoid Robots for RoboCup Soccer',
          desc:
            'Two humanoid robots designed to play soccer autonomously at RoboCup. Worked on behavior (IMUs on ESP32 + ROS2) and movement — control system for legs with linear actuators instead of conventional servos. 3rd place at CBR 2025.',
          role: 'Member · Captain · EDROM (UFU)',
          chips: ['ROS2', 'ESP32', 'IMU', 'Kinematics', 'C++'],
          status: 'ongoing',
          tag: 'PLATFORM/HUMANOID',
          glyph: 'humanoid',
          cat: 'Humanoid',
        },
        {
          id: 'M-003',
          title: 'Bipedal Walking Model',
          desc:
            'Scientific Initiation developing the mathematical model for a humanoid bipedal walk — simulated and applied on the physical system. Optimization techniques and Reinforcement Learning training applied.',
          role: 'Research · EDROM / LAR',
          chips: ['RL', 'Optimization', 'Python', 'Simulation'],
          status: 'ongoing',
          tag: 'RESEARCH/LOCOMOTION',
          glyph: 'gait',
          cat: 'Humanoid',
        },
        {
          id: 'M-004',
          title: 'Quadruped Policy Deployment',
          desc:
            'Pipelines for deploying trained policies on B1, Spot, and ANYmal quadrupeds — including mesh generation for simulation environments. Part of a Petrobras project.',
          role: 'Researcher · CROB-LabRom',
          chips: ['Isaac Sim', 'Python', 'RL', 'ROS2'],
          status: 'completed',
          tag: 'PIPELINE/DEPLOY',
          glyph: 'mesh',
          cat: 'Quadruped',
        },
        {
          id: 'M-005',
          title: 'Computer Vision · UaiLook',
          desc:
            'Computer Vision and AI projects during the internship. Training neural networks for object recognition and classification in production pipelines.',
          role: 'Intern · UaiLook',
          chips: ['CV', 'PyTorch', 'YOLO', 'Python'],
          status: 'completed',
          tag: 'VISION/INDUSTRIAL',
          glyph: 'eye',
          cat: 'Vision',
        },
        {
          id: 'M-006',
          title: 'LLMs in Adaptive Educational Systems',
          desc:
            'Scientific Initiation at FACOM-UFU: database generation and LLM use in adaptive player systems for education. Models identify cognitive weaknesses and re-adapt content for each user.',
          role: 'Research · FACOM UFU',
          chips: ['LLM', 'Data', 'Python', 'EdTech'],
          status: 'completed',
          tag: 'RESEARCH/LLM',
          glyph: 'brain',
          cat: 'Vision',
        },
      ],
    },
  },

  games: {
    pt: {
      title: 'Jogos Indie',
      id: '§ 04 / BUILDS',
      sub: 'Game dev é meu lado B — engines, mecânicas e narrativas curtas.',
      cta: 'Press start',
      placeholder: 'BUILD PLACEHOLDER — solte sua arte aqui',
      items: [
        {
          id: 'B-01',
          slug: 'NIGHT_PATROL',
          title: 'Night Patrol',
          genre: 'Stealth · Top-down',
          engine: 'Godot',
          desc:
            'Curto jogo de stealth onde você controla um drone de patrulha noturna. Detecção via cones de visão proceduralmente gerados.',
          status: 'PROTO',
        },
        {
          id: 'B-02',
          slug: 'COG_CITY',
          title: 'Cog City',
          genre: 'Puzzle · Mecânico',
          engine: 'Unity',
          desc:
            'Quebra-cabeças com engrenagens conectadas. Você projeta sistemas mecânicos para mover uma cidade flutuante.',
          status: 'WIP',
        },
        {
          id: 'B-03',
          slug: 'ADAPT_QUEST',
          title: 'Adapt Quest',
          genre: 'RPG · LLM-driven',
          engine: 'Godot · Python',
          desc:
            'Experimento de RPG narrativo onde um LLM identifica fraquezas cognitivas do jogador e adapta os desafios. Vem da minha IC.',
          status: 'RESEARCH',
        },
      ],
    },
    en: {
      title: 'Indie Games',
      id: '§ 04 / BUILDS',
      sub: 'Game dev is my B-side — engines, mechanics and short narratives.',
      cta: 'Press start',
      placeholder: 'BUILD PLACEHOLDER — drop your artwork here',
      items: [
        {
          id: 'B-01',
          slug: 'NIGHT_PATROL',
          title: 'Night Patrol',
          genre: 'Stealth · Top-down',
          engine: 'Godot',
          desc:
            'Short stealth game where you control a night patrol drone. Detection through procedurally generated vision cones.',
          status: 'PROTO',
        },
        {
          id: 'B-02',
          slug: 'COG_CITY',
          title: 'Cog City',
          genre: 'Puzzle · Mechanical',
          engine: 'Unity',
          desc:
            'Connected-gear puzzles. You design mechanical systems to move a floating city through the sky.',
          status: 'WIP',
        },
        {
          id: 'B-03',
          slug: 'ADAPT_QUEST',
          title: 'Adapt Quest',
          genre: 'RPG · LLM-driven',
          engine: 'Godot · Python',
          desc:
            'Narrative RPG experiment where an LLM identifies player cognitive weaknesses and adapts the challenges. Born from my research.',
          status: 'RESEARCH',
        },
      ],
    },
  },
};

window.CONTENT_2 = CONTENT_2;
