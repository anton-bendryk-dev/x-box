import React from 'react';
import Card from '.././card/card';
import InfiniteCarousel from 'react-leaf-carousel';

const cardDate = [
    {
        img: './images/img.png',
        title:'Call of Duty: WWII',
        text1:'The C.O.D.E. Bravery Pack',
        text2:' is now available in WWII',
        link: '/CoDpage',
        btnText: 'See Details'
    },
    {
        img: './images/img1.png',
        title:'Destiny 2',
        text1:'The Next Generation',
        text2:'Of Life Game Streaming',
        link: '/DestinyPage',
        btnText: 'See Details'
    },
    {
        img: './images/img3.png',
        title:'Forza Motorsport 7',
        text1:'Faster Processing',
        text2:'Smoother Gameplay',
        link: '/ForzaPage',
        btnText: 'See Details'
    },
    {
        img: './images/img2.png',
        title:'STEEP',
        text1:'The Next Generation',
        text2:'Of Life Game Streaming',
        link: '/SteepPage',
        btnText: 'See Details'
    },
    {
        img: './images/img.png',
        title:'Call of Duty: WWII',
        text1:'Get up to $700 in',
        text2:'free games',
        link: '/CoDpage',
        btnText: 'See Details'
    },
    {
        img: './images/sw1.png',
        title:'Star Wars Battlefront II',
        text1:'The Next Generation',
        text2:'Of Life Game Streaming',
        link: '/StarWarsPage',
        btnText: 'See Details'
    },
    {
        img: './images/img3.png',
        title:'Forza Motorsport 7',
        text1:'Faster Processing',
        text2:'Smoother Gameplay',
        link: '/ForzaPage',
        btnText: 'See Details'
    },
]
const Games = () => {
    return (
        <section className='games-container' id='Games'>
            <div className='inline-games-container'>
                <h2>Exclusive games on XBOX</h2>
                <div className="games-cards">
                <InfiniteCarousel
                    breakpoints={[
                    {
                        breakpoint: 764,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        },
                    },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={3}
                    slidesToShow={3}
                    scrollOnDevice={true}
                >
                    {
                        cardDate.map(({
                            img,
                            title,
                            text1,
                            text2,
                            link,
                            btnText
                        }) => (
                            <Card
                                img = {img}
                                title = {title}
                                text1 = {text1}
                                text2 = {text2}
                                link = {link}
                                btnText = {btnText}
                            />
                        ))
                    }
                </InfiniteCarousel>
                </div>
                <div className="x-box-btn">
                    <a href='/'>XBOX Store</a>
                </div>
            </div>
        </section>
    )
}

export default Games