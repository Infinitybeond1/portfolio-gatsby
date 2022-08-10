import React from 'react';
import '../styles/index.css'

const Nav = () => (
  <div class="topnav">
    // Site pages //
    <a className="active" href="~">Home</a>
    <a className="tab" href="/projects">Projects</a>
    <a className="tab" href="/technologies">Technologies</a>
    <a className="tab" href="/about">About</a>
    // Socials //
    <a className="social" href="https://discordapp.com/channels/@me/704106773660827690/"> < DiscordLogo size={42} /> </a>
    <a className="social" href="https://blog.infinitybeond1.tk/"> < NewspaperClipping size={42} /> </a>
    <a className="social" href="mailto:Infinitybeond1@protonmail.com"> < EnvelopeOpen size={42} /> </a>
    <a className="social" href="https://github.com/Infinitybeond1"> < GithubLogo size={42} /> </a>
  </div>   
);

export default Nav;
