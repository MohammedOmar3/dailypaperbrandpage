import React from 'react'

const Hero = () => {
    return (
        <div className="hero container">
            <div className='hero-content'>
                <h1>STYLE FOR EVERY STORY</h1>
                <p>Versatile fashion that complements your unique journey</p>

                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.jpg" alt="hero-logo" />
            </div>
        </div>
    )
}

export default Hero