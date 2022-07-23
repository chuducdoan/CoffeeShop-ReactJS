import classNames from "classnames/bind";
import Banner from "~/components/Banner";
import Galley from "~/components/Galley";
import TextWrapper from "~/components/TextWrapper";
import style from './About.module.scss';

const cx = classNames.bind(style);
const galleys = [
    {
        title: <i className="fa fa-plus" aria-hidden="true"></i>,
        image: 'assets/images/perfect-cup.jpg'
    },
    {
        title: <i className="fa fa-plus" aria-hidden="true"></i>,
        image: 'assets/images/coffee-drep.jpg'
    },
    {
        title: <i className="fa fa-plus" aria-hidden="true"></i>,
        image: 'assets/images/brew.jpg'
    },
    {
        title: <i className="fa fa-plus" aria-hidden="true"></i>,
        image: 'assets/images/baked-bean.jpg'
    },
]

function About() {
    return ( 
        <>
            <Banner title="About Me" about>
                <h1>About Me</h1>
            </Banner>
            <section className={cx("about")}>
                <div className={cx("about__top")}>
                    <div className="grid row">
                        <div className="col-lg-4 col-xl-12">
                            <div className={cx("about__author-image")}>
                                <img src="assets/images/author.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-8 col-xl-12">
                            <TextWrapper 
                            className="about__top"
                            tittle="The Owner Wordsr"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                            >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in</p>
                            </TextWrapper>
                        </div>
                    </div>
                </div>
                <div className={cx("about__bottom")}>
                    <TextWrapper 
                    tittle="My Favorite"
                    className="about__bottom"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <Galley galleys={galleys} />
                </div>
            </section>
        </>
     );
}

export default About;