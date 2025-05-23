const translations = {
        en:{
          "my-title": "Full Stack Developer",
          "about-title": "About Me",
          "about-text": "Welcome to my portfolio! I'm Bryan, I'm a Computer Science student and full stack developer with a passion for software development, game creation, and information security. Follow me on my journey as I explore the fascinating world of technology. I'm sure it's going to be a fascinating journey, so enjoy!",
          "about-projects": "Projects",
          "project-description": "A modern, responsive landing page built with HTML and CSS.",
          "go-project": "View project",
          "futures-projects": "Soon you will see more projects here with React, Node.js, C, C#, 2D games and more.",
          "contact-me": "Contacts",
        },
        pt:{
          "my-title": "Desenvolvedor Full Stack",
          "about-title": "Sobre mim",
          "about-text": "Bem-vindo à meu portfólio! Eu sou Bryan, Sou estudante de Ciência da Computação e desenvolvedor full stack com paixão por desenvolvimento de software, criação de jogos e segurança da informação. Acompanhe minha jornada explorando o fascinante mundo da tecnologia. Tenho certeza que será uma viagem fascinante então aproveite!",
          "about-projects": "Projetos",
          "project-description": "Uma landing page moderna e responsiva criada com HTML e CSS.",
          "go-project": "Ver projeto online",
          "futures-projects": "Em breve, você poderá ver aqui mais projetos com React, Node.js, C, C#, jogos 2D e muito mais.",
          "contact-me": "Contatos",
        }
      };

      function setLanguage(lang) {
        const elements = document.querySelectorAll("[data-key]");

        elements.forEach(el => {
          const key = el.getAttribute("data-key");
          el.innerHTML = translations[lang][key];
        });

        // Atualiza os botões
  const buttons = document.querySelectorAll(".language-button");
  buttons.forEach(button => {
    button.classList.remove("active");
  });

  // Ativa o botão correspondente
  const activeButton = document.querySelector(`.language-button[onclick*="${lang}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
      }