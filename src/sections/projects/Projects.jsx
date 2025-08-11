import styles from './ProjectsStyles.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectData } from '../../data/ProjectData';
import { FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io"
import { MdOndemandVideo } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { MdInsertLink } from "react-icons/md";

function Projects() {

    const dataLength = projectData.length > 3;

    // function NextArrow(props) {
    //     const { onClick } = props;
    //     return (
    //         <div
    //             style={{ cursor: "pointer", fontSize: "24px" }}
    //             onClick={onClick}
    //         >
    //             &#8594; {/* Unicode right arrow */}
    //         </div>
    //     );
    // }

    // function PrevArrow(props) {
    //     const { onClick } = props;
    //     return (
    //         <div
    //             style={{ cursor: "pointer", fontSize: "24px" }}
    //             onClick={onClick}
    //         >
    //             &#8592; {/* Unicode left arrow */}
    //         </div>
    //     );
    // }

    let settings = {
        arrows: dataLength,
        dots: true,
        infinite: dataLength,
        speed: 600,
        autoplay: dataLength,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <section id='projects' className={styles.container}>
            <h2 className='sectionTitle'>Projects</h2>

            <Slider  {...settings}>
                {projectData.map((data, index) => (
                    <div key={index} className={styles.cardInner}>

                        <button className={styles.navigateBtn}>
                            <FiArrowUpRight size={24} />
                        </button>

                        <img className={styles.appImg} src={data.srcImage} alt={`${data.title} logo`} loading="lazy" />
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>

                        <div className={styles.actionBtnSection}>
                            <a href={data.githubLink} style={{ textDecoration: 'none' }} target="_blank">
                                <button className={styles.actionBtnCapsule}><FaGithub size={16} style={{ position: 'relative', top: 2, right: 4 }} />Github</button>
                            </a>
                            {data.demoBtn &&
                                <a href={data.demoLink} style={{ textDecoration: 'none' }} target="_blank">
                                    <button className={styles.actionBtnCapsule}
                                    ><MdOndemandVideo size={16} style={{ position: 'relative', top: 2, right: 4 }} />Demo</button>
                                </a>
                            }
                            {data.expLetterBtn &&
                                <a href={data.expLetterLink} style={{ textDecoration: 'none' }} target="_blank">
                                    <button className={styles.actionBtnCapsule}><IoMdDocument size={16} style={{ position: 'relative', top: 2, right: 4 }} />Exp.</button>
                                </a>
                            }
                            {data.siteBtn &&
                                <a href={data.siteLink} style={{ textDecoration: 'none' }} target="_blank">
                                    <button className={styles.actionBtnCapsule}><MdInsertLink size={16} style={{ position: 'relative', top: 2, right: 4 }} />Visit</button>
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Projects;
