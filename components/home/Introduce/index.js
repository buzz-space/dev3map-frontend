import Button from "~/components/base/Button";
import styles from "./styles.module.scss";
import EllipticalOrbit from "./EllipticalOrbit";
import EllipsePlanet from "./EllipsePlanet";
import Container from "~/components/base/Container";
import EllipsePlanetSvg from "./EllipsePlanetSvg";

export default function Introduce() {
    return <div className={styles['introduce']}>
        {/* <EllipsePlanet /> */}
        {/* <img src="/imgs/galaxy.png" className={styles['galaxy']} /> */}
        <Container className={styles['container']}>
            <EllipsePlanetSvg />

            <div className={styles['main']}>
                <h4 className={styles['title']}>The Interchain
                    <br />
                    Developers
                    <br />
                    Metrics Map</h4>
                <p className={styles['des']}>
                    With support from Cosmos Ecosystem Map and Github, Buzz Space builds this developer analytics platform to offer a panoramic view of the Interchain Developer Ecosystem
                </p>
                <Button outline to="/projects">EXPLORE ALL CATEGORIES</Button>
            </div>
        </Container>
    </div>
}