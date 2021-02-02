import React, { Component } from 'react';
import Header from '../components/Header/Header';
import FullscreenVisual from '../components/FullscreenVisual/FullscreenVisual';
import Cases from '../components/Cases/Cases';
import Clients from '../components/Clients/Clients';
import ContactForm from '../components/ContactForm/ContactForm';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

class Main extends Component {

    state = {
        cases: [],
        sortedCases: {
            smallCases: [],
            normalCases: [],
            bigCases: [],
        },
        clients: [],
        isScrolled: false,
        menuShown: false,
        currentLocale: 'Nederland',
        navItems: ['Home', 'Werk', 'Over', 'Diensten', 'Partners', 'Stories', 'Vacatures', 'Events', 'Contact'],
        localizations: ['Global', 'Nederland', 'United States', 'Ireland', 'United Kingdom', 'Deutschland', 'Schweiz'],
        socials: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
        quote: {
            text: 'Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.',
            name: 'Matthijs ten Brink',
            position: 'CEO, Transavia'
        },
    }

    checkScrollEvent = event => {
        if (window.scrollY > 20) {
            this.setState({
                isScrolled: true
            })
        } else {
            this.setState({
                isScrolled: false
            })
        }
    }

    sortCases = cases => {
        
    }

    toggleMenu = () => {
        const menuShown = this.state.menuShown;
        this.setState({
            menuShown: !menuShown
        })
        console.log(menuShown);
    }

    componentDidMount = () => {
        fetch('data.json')
        .then(res => res.json())
        .then((data) => {
            this.setState({ 
                cases: data[0].cases,
                clients: data[0].clients
            })
        })
        .catch(console.log)

        window.addEventListener('scroll', this.checkScrollEvent);
    }

    render() {
        return (
            <>
                <Header title='Work' isScrolled={this.state.isScrolled} menuShown={this.state.menuShown} toggleMenu={this.toggleMenu}/>
                <Menu 
                    menuShown={this.state.menuShown} 
                    currentLocale={this.state.currentLocale}
                    navItems={this.state.navItems}
                    localizations={this.state.localizations}
                    socials={this.state.socials}/>

                <section className="main-content">

                    <FullscreenVisual titleText='Work'/>

                    <div className="cases-list">
                        <Cases 
                            cases={this.state.cases} 
                            quote={this.state.quote} />
                    </div>
                    
                </section>

                <section className="clients">
                    <Clients clients={this.state.clients} />
                </section>

                <section className="form">
                    <ContactForm />
                </section>

                <Footer 
                    navItems={this.state.navItems}/>
            </>
        );
    }
}

export default Main;