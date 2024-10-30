import style from './FadeSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function FadeSlider() {
    {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
        return (
            <>
                <div className={style.t}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className={style.item}>
                                <img src='https://avatars.mds.yandex.net/i?id=be7e4e662b06e5462e29a954e047404657f69672-9863357-images-thumbs&n=13' />
                            </div>
                            <div className={style.item}>
                                <img src='https://avatars.dzeninfra.ru/get-zen_doc/5233119/pub_64876da161afcf2223cbad68_648ac83c0df751368e9fea43/scale_1200    ' />
                            </div>
                            <div className={style.item}>
                                <img src='https://i.pinimg.com/736x/77/57/d2/7757d2a57df82d658d57c8515fed5c56.jpg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://habrastorage.org/getpro/habr/upload_files/e33/0f6/5d7/e330f65d762d6d4fb6a7ab830da6b2cc.png' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>

        );
    }
}
