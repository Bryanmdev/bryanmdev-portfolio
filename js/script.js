// Traduções para os idiomas
const translations = {
  en: {
    "my-title": "Full Stack Developer",
    "about-title": "About Me",
    "about-text":
      "Welcome to my portfolio! I'm Bryan, I'm a Computer Science student and full stack developer with a passion for software development, game creation, and information security. Follow me on my journey as I explore the fascinating world of technology. I'm sure it's going to be a fascinating journey, so enjoy!",
    "about-projects": "Projects",
    "project-description": "A modern, responsive landing page built with HTML and CSS.",
    "project-description2": "This is an interactive landing page project that works as a showcase for programming languages.",
    "go-project": "View project",
    "futures-projects": "Soon you will see more projects here with React, Node.js, C, C#, 2D games and more.",
    "contact-me": "Contacts",
    "legend-skill": "Technologies that I use and improve in my daily life:"
  },
  pt: {
    "my-title": "Desenvolvedor Full Stack",
    "about-title": "Sobre mim",
    "about-text":
      "Bem-vindo à meu portfólio! Eu sou Bryan, Sou estudante de Ciência da Computação e desenvolvedor full stack com paixão por desenvolvimento de software, criação de jogos e segurança da informação. Acompanhe minha jornada explorando o fascinante mundo da tecnologia. Tenho certeza que será uma viagem fascinante então aproveite!",
    "about-projects": "Projetos",
    "project-description": "Uma landing page moderna e responsiva criada com HTML e CSS.",
    "project-description2": "Este é um projeto interativo de uma landing page que funciona como uma vitrine de linguagens de programação.",
    "go-project": "Ver projeto online",
    "futures-projects": "Em breve, você poderá ver aqui mais projetos com React, Node.js, C, C#, jogos 2D e muito mais.",
    "contact-me": "Contatos",
    "legend-skill": "Tecnologias que utilizo e aprimoro no meu dia:"
  }
};

// Função que aplica as traduções
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerHTML = translations[lang][key];
  });

  // Atualiza o botão ativo
  const buttons = document.querySelectorAll(".language-button");
  buttons.forEach(button => button.classList.remove("active"));
  const activeButton = document.querySelector(`.language-button[onclick*="${lang}"]`);
  if (activeButton) activeButton.classList.add("active");

  // Salva a linguagem no localStorage
  localStorage.setItem("lang", lang);
}

// Troca o tema entre claro e escuro
function toggleTheme() {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  const themeBtnIcon = document.getElementById("theme-btn").querySelector("i");
  themeBtnIcon.className = isLight ? "fas fa-sun" : "fas fa-moon";
}

// Observador para animar elementos quando entram na tela
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target); // só anima uma vez
    }
  });
}, {
  threshold: 0.1,              // ativa quando 10% visível
  rootMargin: "0px 0px -20px"  // ativa um pouco antes de entrar
});

// Quando a página termina de carregar
document.addEventListener("DOMContentLoaded", () => {
  // Aplica idioma salvo ou pt padrão
  const savedLang = localStorage.getItem("lang") || "pt";
  setLanguage(savedLang);

  // Aplica tema salvo
  const savedTheme = localStorage.getItem("theme");
  const themeBtnIcon = document.getElementById("theme-btn").querySelector("i");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtnIcon.className = "fas fa-sun";
  }

  // Listener do botão de tema
  document.getElementById("theme-btn").addEventListener("click", toggleTheme);

  // Aplica observador em todos os elementos .observe
  document.querySelectorAll(".observe").forEach(el => {
    observer.observe(el);
  });
});
