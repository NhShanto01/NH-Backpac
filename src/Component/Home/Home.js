import React from 'react';
import './Home.css';
import img from '../../img/wild-bag.png';

const Home = () => {
    return (
        <section>
            <div className='home-container'>
                <div className='home'>
                    <h1>Welcome To NH-Bagpack</h1>

                    <p>For when your pockets just aren't enough, our edit of men's bags has plenty of options for stashing your stuff. Scroll NH-Bagpack for classic canvas tote bags and men's cross-body bags, or find your new sidekick with bum bags and gym bags for men from Nike for that ultimate streetwear vibe.</p>
                    <button className='home-btn'>LIVE DEMO</button>
                </div>
                <div className='home-img'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div>
                <h2>Customar Review</h2>

            </div>
        </section>

    );
};

export default Home;