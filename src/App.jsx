import React, { Component, createRef } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/Contact/ContactUs';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.sections = {
      home: createRef(),
      services: createRef(),
      aboutUs: createRef(),
      shop: createRef(),
      gallery: createRef(),
      contact: createRef(),
    };
  }

  scrollToSection = (sectionName) => {
    const section = this.sections[sectionName]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  componentDidMount() {
    this.scrollToSection('home');
  }

  render() {
    return (
      <>
        <Header
          onNavigate={this.scrollToSection}
          headerRef={this.sections.home}
        />
        <Services servicesRef={this.sections.services} />
        <About aboutRef={this.sections.aboutUs} />
        <Shop shopRef={this.sections.shop} />
        <Gallery galleryRef={this.sections.gallery} />
        <ContactUs contactUsRef={this.sections.contact} />
        <Footer />

      </>
    );
  }
}
