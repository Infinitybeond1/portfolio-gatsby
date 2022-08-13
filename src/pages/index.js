import React from 'react';
import '../styles/index.css';
import { DiscordLogo, GithubLogo, NewspaperClipping, EnvelopeOpen, HeartStraight } from 'phosphor-react'
import {Helmet} from 'react-helmet'
<Helmet>
  <title>Infinitybeond1's site</title>
  <meta content="Infinitybeond1" property="og:title" />
  <meta content="My website where I do cool stuff" property="og:description" />
  <meta content="https://infinitybeond1.tk/~" property="og:url" />
  <meta content="https://infinitybeond1.tk/favicon.ico" property="og:image" />
  <meta content="#73c291" data-react-helmet="true" name="theme-color" />  
</Helmet>

function Index() {
  return (
    <>
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

      <div class="footer">
        <p class="footer-txt"> Made with <HeartStraight size={13} weight="fill" /> using the articblush colorscheme and GatsbyJS </p>
      </div>
    </>
  );
}

export default Index;
