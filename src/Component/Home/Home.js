import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../img/wild-bag.png';
import Review from '../Review/Review';
import useReviews from '../hook/useReviews';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    // useEffect(() => {
    //     fetch('review.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
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

            {/* review part */}

            <div className='customar-review'>
                <h1>Customar Review({reviews.length})</h1>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
                <button className='review-btn'>See More Reviews</button>
            </div>
        </section>

    );
};

export default Home;