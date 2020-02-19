import React, { Component } from 'react'
import styles from './styles.module.scss'
import SitePadSides from '../SitePadSides'
import TransportSign from '../TransportSign';
import TransportSignTitle from '../TransportSignTitle';
import TransportSignBadge from '../TransportSignBadge';

const places = [
  {
    label: 'Shopmobility',
    style: 'white',
    link: null
  },{
    label: 'Top Secret Bunker',
    style: 'tourist',
    link: null
  },{
    label: 'Chessington World of Adventures',
    style: 'tourist',
    link: 'https://www.chessington.com/'
  },{
    label: 'Tower of London',
    style: 'tourist',
    link: 'https://www.hrp.org.uk/tower-of-london/'
  },{
    label: 'Newport Transporter Bridge',
    style: 'tourist',
    link: 'http://www.newport.gov.uk/heritage/Transporter-Bridge/Transporter-Bridge.aspx'
  },{
    label: 'Queen Elizabeth Olympic Park',
    style: 'tourist',
    link: 'https://www.queenelizabetholympicpark.co.uk'
  }
]

class SiteFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: null,
      style: null
    }
  }

  componentDidMount() {
    const place = places[Math.floor(Math.random() * places.length)]

    this.setState(place)
  }

  render() {
    return (
      <footer className={styles.footer}>
        <SitePadSides className={styles.container}>
          <p className={styles.copyright}>
            Copyright (c) 2015 - 2020 Leondro Lio<br />
            Made in Britain
          </p>
          <TransportSign>
            <TransportSignTitle>Links</TransportSignTitle>
            <a href="https://github.com/terminal/discord_fork">Source Code <TransportSignBadge type="a">github.com</TransportSignBadge> →</a>
            <a href="https://discord.gg/H9FhrwU">Discord Server <TransportSignBadge type="a">discordapp.com</TransportSignBadge> →</a>
            {this.state.label &&
              this.state.link ?
                <a href={this.state.link}><TransportSignBadge type={this.state.style}>← {this.state.label}</TransportSignBadge></a> :
                <TransportSignBadge type={this.state.style}>← {this.state.label}</TransportSignBadge>
            }
          </TransportSign>
        </SitePadSides>
      </footer>
    )
  }
}


export default SiteFooter