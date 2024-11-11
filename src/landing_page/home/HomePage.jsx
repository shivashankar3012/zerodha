import Stats from './Stats'
import Hero from './Hero';
import Awards from './Awards'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import './Homepage.css'
function HomePage() {
    return ( 
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
     );
}

export default HomePage;