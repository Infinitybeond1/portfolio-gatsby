import * as React from "react"
import '../styles/index.css';
import { DiscordLogo, GithubLogo, NewspaperClipping, EnvelopeOpen, HeartStraight } from 'phosphor-react'
import GitHubCalendar from 'react-github-calendar';

function Index() {
  return (
    <>
      <div class="topnav">
        <a className="active" href="/#home">Home</a>
        <a className="tab" href="/#projects">Projects</a>
        <a className="tab" href="/#technologies">Technologies</a>
        <a className="tab" href="/#contributions">Contributions</a>
        <a className="social" href="https://discordapp.com/channels/@me/704106773660827690/"> < DiscordLogo size={19} /> </a>
        <a className="social" href="https://blog.infinitybeond1.tk/"> < NewspaperClipping size={19} /> </a>
        <a className="social" href="mailto:Infinitybeond1@protonmail.com"> < EnvelopeOpen size={19} /> </a>
        <a className="social" href="https://github.com/Infinitybeond1"> < GithubLogo size={19} /> </a>
      </div>

      <div class="home" id="home">
        <h1>
          👋 Hello
        </h1>
        <p>
          I'm Luke, also known as Infinitybeond1.<br />
          I am linux user and FOSS enthusiast and developer, I routinely contibute to projects on GitHub. I love systems programming and web developement.<br />
          I've been a programmer for 3 years, and my favorite languages are nim and zig. Ive been into linux for a year now and I have some expirence with the command line. I also have some expirence with docker and the cloud! I started out programming by creating discord bots, and currently I make CLI apps and websites.<br />
        </p>
      </div>

      <div class="projects" id="projects">
        <h1>
          Projects
        </h1>
        <p>
          Coming soon!
        </p>
      </div>

      <div class="tech" id="technologies">
        <h1>
          Technologies
        </h1>
        {/*<br/>*/}
        <h2>Langs:</h2>
        <img class="lang-nim" src="https://raw.githubusercontent.com/nim-lang/assets/master/Art/logo-crown.png" alt="nim-logo"/>
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <h2>Databases:</h2>
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        <h2>Web:</h2>
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <h2>Git:</h2>
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg" />
        <h2>Tools:</h2>
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
        <img class="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg" />
      </div>

      <div class="contrib" id="contributions">
        <h1>Contributions</h1>
        <GitHubCalendar username="Infinitybeond1" year={new Date().getFullYear()} />
      </div>
      <div class="footer">
        <p class="footer-txt">
          Made with <HeartStraight size={12} weight="fill" class="heart"/> using the <a href="https://github.com/articblush" target="_blank" rel="noreferrer">articblush</a> colorscheme and <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 128 128" class="gatsbyimg">
        <path fill="#b6beca" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
      </svg>
      </a>
        </p>
      </div>
    </>
  );
}

export const Head = () => (
  <>
    <title>Infinitybeond1's site</title>
    <meta content="Infinitybeond1" property="og:title" />
    <meta content="My website where I do cool stuff" property="og:description" />
    <meta content="https://infinitybeond1.tk/~" property="og:url" />
    <meta content="https://infinitybeond1.tk/favicon.ico" property="og:image" />
    <meta content="#73c291" name="theme-color" />
  </>
)

export default Index;
