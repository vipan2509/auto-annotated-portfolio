import { Fragment } from 'react';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
    return (
        <Fragment>
            <Hero />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default App;
