import React from 'react';
import '../styles/index.css';
import { DiscordLogo, GithubLogo, NewspaperClipping, EnvelopeOpen } from 'phosphor-react'

function Index() {
  return (   
    <div class="topnav">
      <a className="active" href="~">Home</a>
      <a className="tab" href="/projects">Projects</a>
      <a className="tab" href="/technologies">Technologies</a>
      <a className="tab" href="/about">About</a>
      <a className="social" href="https://discordapp.com/channels/@me/704106773660827690/"> < DiscordLogo size={19} /> </a>
      <a className="social" href="https://blog.infinitybeond1.tk/"> < NewspaperClipping size={19} /> </a>
      <a className="social" href="mailto:Infinitybeond1@protonmail.com"> < EnvelopeOpen size={19} /> </a>
      <a className="social" href="https://github.com/Infinitybeond1"> < GithubLogo size={19} /> </a>
    </div>   
  );
}

export default Index;
