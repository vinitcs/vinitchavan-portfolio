import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './DisplayCardStyles.module.css';
import { FaGithub, FaLink } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io"
import { MdOndemandVideo } from "react-icons/md";
import { projectData } from '../../data/ProjectData';


function DisplayCard() {
     const dataLength = projectData.length > 3;

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

     // console.log(projectData);


     return (
          <div className={styles.sliderWrapper}>
               <Slider  {...settings}>
                    {projectData.map((data, index) => (
                         <div key={index} className={styles.cardInner}>
                              <img className={styles.appImg} src={data.srcImage} alt={`${data.title} logo`} loading="lazy" />
                              <h3>{data.title}</h3>
                              <p>{data.description}</p>

                              <div className={styles.navigatingBtn}>
                                   <a href={data.githubLink} style={{ textDecoration: 'none' }} target="_blank">
                                        <button className={styles.actionBtn}><FaGithub size={16} style={{ position: 'relative', top: 2, right: 4 }} />Github</button>
                                   </a>
                                   {data.demoBtn &&
                                        <a href={data.demoLink} style={{ textDecoration: 'none' }} target="_blank">
                                             <button className={styles.actionBtn}
                                             ><MdOndemandVideo size={16} style={{ position: 'relative', top: 2, right: 4 }} />Demo</button>
                                        </a>
                                   }
                                   {data.expLetterBtn &&
                                        <a href={data.expLetterLink} style={{ textDecoration: 'none' }} target="_blank">
                                             <button className={styles.actionBtn}><IoMdDocument size={16} style={{ position: 'relative', top: 2, right: 4 }} />Exp.</button>
                                        </a>
                                   }
                                   {data.siteBtn &&
                                        <a href={data.siteLink} style={{ textDecoration: 'none' }} target="_blank">
                                             <button className={styles.actionBtn}><FaLink size={16} style={{ position: 'relative', top: 2, right: 4 }} />Visit</button>
                                        </a>
                                   }
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
}

export default DisplayCard;
