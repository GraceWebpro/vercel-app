import react from 'react'

const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className="totop" onClick={scrollToTop}>Scroll</button>
    )
}

export default ScrollTop;