// Experience timeline, awards, education, contact strings.

const CONTENT_3 = {
  experience: {
    pt: {
      title: 'Trajetória',
      id: '§ 05 / LOG DE EXPERIÊNCIA',
      items: [
        {
          when: 'AGO 2025 → AGORA',
          dur: '8 meses',
          role: 'Capitão',
          where: 'EDROM · Equipe de Desenvolvimento em Robótica Móvel · UFU',
          notes: [
            'Organizo, planejo e gerencio o projeto como um todo.',
            'Delego atividades aos diretores de área e mantenho a roadmap dos humanoides.',
          ],
          current: true,
        },
        {
          when: 'JUN 2025 → MAR 2026',
          dur: '10 meses',
          role: 'Pesquisador · Mobile Robotic Group',
          where: 'CROB · LabRom · EESC-USP',
          notes: [
            'MPC para Boston Dynamics Spot durante manipulação de cargas — migração de WBC reativo para preditivo.',
            'Dinâmica de corpos rígidos + OSQP; compensação de torque feedforward.',
            'Geração de meshes e deploy de policies em B1, Spot e ANYmal (projeto Petrobras).',
          ],
        },
        {
          when: 'MAI 2025 → OUT 2025',
          dur: '6 meses',
          role: 'Estagiário de Visão Computacional',
          where: 'UaiLook',
          notes: ['Desenvolvimento de projetos de Visão Computacional e IA.'],
        },
        {
          when: 'MAR 2025 → ABR 2026',
          dur: '14 meses',
          role: 'Iniciação Científica · Locomoção',
          where: 'EDROM · LAR',
          notes: [
            'Desenvolvimento, simulação e otimização do modelo de caminhada de um humanoide bípede.',
          ],
        },
        {
          when: 'DEZ 2024 → AGORA',
          dur: '17+ meses',
          role: 'Diretor de Movimento',
          where: 'EDROM',
          notes: [
            'Programação, controle e hardware para movimentar juntas de robôs.',
            'Conversão entre atuadores lineares e motores axiais; treinamento de modelo de caminhada via RL.',
          ],
          current: true,
        },
        {
          when: 'FEV 2024 → DEZ 2024',
          dur: '10 meses',
          role: 'Membro · Movimento + Behavior',
          where: 'EDROM',
          notes: [
            'IMUs em ESP32 integrados via ROS2.',
            'Sistema de controle para pernas com atuadores lineares.',
          ],
        },
        {
          when: 'OUT 2023 → MAR 2025',
          dur: '18 meses',
          role: 'Iniciação Científica · LLMs',
          where: 'FACOM · UFU',
          notes: [
            'Bases de dados + LLMs em sistemas adaptativos para educação.',
            'Modelos que readaptam conteúdo para fraquezas cognitivas do jogador.',
          ],
        },
        {
          when: 'NOV 2023 → FEV 2024',
          dur: 'Trainee',
          role: 'Trainee',
          where: 'EDROM',
          notes: [
            'Vision (YOLO), Elétrica (KiCad), Estrutura (SolidWorks), Behavior (state machines), Movimento (cinemática direta e inversa).',
          ],
        },
      ],
    },
    en: {
      title: 'Journey',
      id: '§ 05 / EXPERIENCE LOG',
      items: [
        {
          when: 'AUG 2025 → NOW',
          dur: '8 months',
          role: 'Captain',
          where: 'EDROM · Mobile Robotics Development Team · UFU',
          notes: [
            'Organize, plan, and manage the project as a whole.',
            'Delegate to area directors and own the humanoid roadmap.',
          ],
          current: true,
        },
        {
          when: 'JUN 2025 → MAR 2026',
          dur: '10 months',
          role: 'Researcher · Mobile Robotic Group',
          where: 'CROB · LabRom · EESC-USP',
          notes: [
            'MPC architecture for Boston Dynamics Spot during load manipulation — migrated reactive WBC to predictive.',
            'Rigid body dynamics + OSQP; feedforward torque compensation.',
            'Mesh generation and policy deployment for B1, Spot and ANYmal (Petrobras project).',
          ],
        },
        {
          when: 'MAY 2025 → OCT 2025',
          dur: '6 months',
          role: 'Computer Vision Intern',
          where: 'UaiLook',
          notes: ['Computer Vision and AI projects in production.'],
        },
        {
          when: 'MAR 2025 → APR 2026',
          dur: '14 months',
          role: 'Scientific Initiation · Locomotion',
          where: 'EDROM · LAR',
          notes: [
            'Development, simulation and optimization of a humanoid bipedal walking model.',
          ],
        },
        {
          when: 'DEC 2024 → NOW',
          dur: '17+ months',
          role: 'Movement Director',
          where: 'EDROM',
          notes: [
            'Programming, control and hardware to move robot joints.',
            'Conversion between linear actuators and axial motors; RL walking model.',
          ],
          current: true,
        },
        {
          when: 'FEB 2024 → DEC 2024',
          dur: '10 months',
          role: 'Member · Movement + Behavior',
          where: 'EDROM',
          notes: [
            'IMUs on ESP32 microcontrollers integrated via ROS2.',
            'Leg control system using linear actuators.',
          ],
        },
        {
          when: 'OCT 2023 → MAR 2025',
          dur: '18 months',
          role: 'Scientific Initiation · LLMs',
          where: 'FACOM · UFU',
          notes: [
            'Databases + LLMs in adaptive educational systems.',
            'Models that re-adapt content to player cognitive weaknesses.',
          ],
        },
        {
          when: 'NOV 2023 → FEB 2024',
          dur: 'Trainee',
          role: 'Trainee',
          where: 'EDROM',
          notes: [
            'Vision (YOLO), Electrical (KiCad), Structure (SolidWorks), Behavior (state machines), Movement (forward + inverse kinematics).',
          ],
        },
      ],
    },
  },

  awards: {
    pt: {
      title: 'Prêmios & Competições',
      id: '§ 06 / RECONHECIMENTOS',
      items: [
        { year: '2025', medal: 'bronze', label: '3º LUGAR', title: 'Liga Humanoide · CBR 2025', sub: 'Competição Brasileira de Robótica' },
        { year: '2025', medal: 'honor', label: 'COMPETIDOR', title: 'Robótica 2025 (CBR)', sub: 'Sematron 2025' },
        { year: '2024', medal: 'honor', label: 'COMPETIDOR', title: 'Robótica 2024 (CBR)', sub: 'Sematron 2024' },
        { year: '2022', medal: 'silver', label: 'PRATA', title: 'OBA · Olimp. Brasileira de Astronomia', sub: 'Anos: 2012, 2013, 2019 (ouro) · 2022 (prata)' },
        { year: '2022', medal: 'gold', label: 'OURO', title: 'Math Kangaroo', sub: 'Canguru Matemático' },
        { year: '2022', medal: 'honor', label: 'MENÇÃO', title: 'Olimpíada Nacional de Ciências', sub: 'OBMEP · 2018 · Menção Honrosa' },
        { year: '2022', medal: 'gold', label: 'OURO', title: 'Mathématiques Sans Frontières', sub: 'Nacional · Ouro 2018, Prata 2022, Bronze 2019' },
        { year: '2022', medal: 'gold', label: 'OURO', title: 'Olimpíada Goiana de Astronomia', sub: '2018 · 2021 · 2022' },
        { year: '2022', medal: 'gold', label: 'OURO', title: 'Olimpíada Goiana Ambiental', sub: '2021 · 2022' },
        { year: '—', medal: 'honor', label: 'COMPETIDOR', title: 'Maratona de Programação · Triângulo Mineiro', sub: 'XXI edição regional' },
        { year: '—', medal: 'honor', label: 'POSIÇÃO', title: 'Aprova+ Matemática', sub: '6ª posição' },
        { year: '—', medal: 'honor', label: 'MONITORIA', title: 'Algoritmos e Programação', sub: 'Teacher’s Assistant' },
      ],
    },
    en: {
      title: 'Awards & Competitions',
      id: '§ 06 / RECOGNITIONS',
      items: [
        { year: '2025', medal: 'bronze', label: '3RD PLACE', title: 'Humanoid League · CBR 2025', sub: 'Brazilian Robotics Competition' },
        { year: '2025', medal: 'honor', label: 'COMPETITOR', title: 'Robotics 2025 (CBR)', sub: 'Sematron 2025' },
        { year: '2024', medal: 'honor', label: 'COMPETITOR', title: 'Robotics 2024 (CBR)', sub: 'Sematron 2024' },
        { year: '2022', medal: 'silver', label: 'SILVER', title: 'OBA · Brazilian Astronomy Olympiad', sub: 'Gold 2012, 2013, 2019 · Silver 2022' },
        { year: '2022', medal: 'gold', label: 'GOLD', title: 'Math Kangaroo', sub: 'International math contest' },
        { year: '2018', medal: 'honor', label: 'HONOR', title: 'OBMEP · National Math Olympiad', sub: 'Honored mention' },
        { year: '2018', medal: 'gold', label: 'GOLD', title: 'Mathématiques Sans Frontières', sub: 'National · Gold 2018, Silver 2022, Bronze 2019' },
        { year: '2022', medal: 'gold', label: 'GOLD', title: 'Goiana Astronomy Olympiad', sub: '2018 · 2021 · 2022' },
        { year: '2022', medal: 'gold', label: 'GOLD', title: 'Goiana Environmental Olympiad', sub: '2021 · 2022' },
        { year: '—', medal: 'honor', label: 'COMPETITOR', title: 'Programming Marathon · Triângulo Mineiro', sub: 'XXI regional edition' },
        { year: '—', medal: 'honor', label: 'TOP', title: 'Aprova+ Math', sub: '6th position' },
        { year: '—', medal: 'honor', label: 'TA', title: 'Algorithms & Programming', sub: 'Teaching assistant' },
      ],
    },
  },

  education: {
    pt: {
      title: 'Formação & Cursos',
      id: '§ 07 / TREINAMENTO',
      academic: {
        head: 'ACADÊMICO',
        items: [
          { title: 'Graduação em Engenharia Mecatrônica', where: 'UFU · em andamento', when: '2023 → ' },
          { title: 'Técnico em Automação Industrial', where: 'Concluído', when: '2021 → 2023' },
        ],
      },
      training: {
        head: 'CURSOS · TREINAMENTOS',
        items: [
          { title: 'Deep Learning com Python', where: 'Redes artificiais, CNNs, RNNs, SOMs, Boltzmann, autoencoders, GANs', when: '' },
          { title: 'Data Scientist Training', where: 'Análise + modelagem de dados', when: '' },
          { title: 'Flutter · Android & iOS', where: 'Desenvolvimento mobile cross-platform', when: '' },
          { title: 'Game Development', where: 'Java · C# · Unity · Godot', when: '' },
        ],
      },
    },
    en: {
      title: 'Education & Training',
      id: '§ 07 / TRAINING',
      academic: {
        head: 'ACADEMIC',
        items: [
          { title: 'BSc in Mechatronics Engineering', where: 'UFU · in progress', when: '2023 → ' },
          { title: 'Industrial Automation Technician', where: 'Completed', when: '2021 → 2023' },
        ],
      },
      training: {
        head: 'COURSES · TRAININGS',
        items: [
          { title: 'Deep Learning with Python', where: 'ANNs, CNNs, RNNs, SOMs, Boltzmann, autoencoders, GANs', when: '' },
          { title: 'Data Scientist Training', where: 'Data analysis + modeling', when: '' },
          { title: 'Flutter · Android & iOS', where: 'Cross-platform mobile dev', when: '' },
          { title: 'Game Development', where: 'Java · C# · Unity · Godot', when: '' },
        ],
      },
    },
  },

  contact: {
    pt: {
      title: 'Contato',
      id: '§ 08 / CANAL ABERTO',
      lead: ['Vamos construir ', <em key="e">algo que se move</em>, '?'],
      sub: 'Aberto para colaborações em robótica, pesquisa ou game dev.',
      rows: [
        ['EMAIL', 'pedrohenriquebperes@gmail.com', 'mailto:pedrohenriquebperes@gmail.com'],
        ['LOCAL', 'Uberlândia · MG · Brasil', null],
        ['GITHUB', '/PedroH-Peres', 'https://github.com/PedroH-Peres'],
        ['LINKEDIN', '/in/pedrohbperes', 'https://www.linkedin.com/in/pedrohbperes/'],
        ['ITCH.IO', '/pedroperes', 'https://itch.io/'],
      ],
    },
    en: {
      title: 'Contact',
      id: '§ 08 / OPEN CHANNEL',
      lead: ['Let’s build ', <em key="e">something that moves</em>, '.'],
      sub: 'Open for robotics, research, and game dev collaborations.',
      rows: [
        ['EMAIL', 'pedrohenriquebperes@gmail.com', 'mailto:pedrohenriquebperes@gmail.com'],
        ['BASE', 'Uberlândia · MG · Brazil', null],
        ['GITHUB', '/PedroH-Peres', 'https://github.com/PedroH-Peres'],
        ['LINKEDIN', '/in/pedrohbperes', 'https://www.linkedin.com/in/pedrohbperes/'],
        ['ITCH.IO', '/pedroperes', 'https://itch.io/'],
      ],
    },
  },
};

window.CONTENT_3 = CONTENT_3;
