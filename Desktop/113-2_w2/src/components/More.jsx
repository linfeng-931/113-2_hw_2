function More(){
    return(
        <>
            <div className="decoration-img">
                <img src="image/garbage02.svg" alt="image" className="decoration-img-3"/>
            </div>

            <div className="plastic-link-section-bg"></div>
            <div className="plastic-link-bg">
                <section
                className="plastic-link-section plastic-intro-section"
                id="plasticbag-link"
                >
                <img src="image/plasticbag-new.svg" alt="plastic bag" />
                <div className="padding">
                    <div className="column">
                    <div className="left">
                        <div className="section-title">
                        <h1>
                            <span>02</span><br /><span id="area5">PLASTIC BAG</span>
                        </h1>
                        </div>
                    </div>
                    <div className="right">
                        <p className="txt">
                        Plastic bags are a very convenient daily item for humans, but
                        they pose a threat to marine creatures such as sea turtles,
                        whale sharks, and albatrosses. This may be because they
                        resemble their food or because they become mixed in with their
                        food.
                        </p>

                        <a href="plastic-bags.html">
                        <button className="learn-more-btn">
                            <div className="learn-more-img">
                            <img src="image/shopping_bag_rejibukuro.png" alt="" />
                            </div>
                            <div className="learn-more-txt">
                            <h2>Learn More</h2>
                            <div className="arrow-wrapper">
                                <i className="ri-arrow-right-line"></i>
                            </div>
                            </div>
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                <section className="plastic-link-section plastic-intro-section link-right-section"
                id="microplastic-link">
                <img src="image/microplastic-new.svg" alt="microplastic" />
                <div className="padding">
                    <div className="column">
                    <div className="left">
                        <div className="section-title">
                        <h1><span>03</span><br /><span>MICROPLASTICS</span></h1>
                        </div>
                    </div>
                    <div className="right">
                        <p className="txt">
                        Plastic microplastics are currently harming the natural
                        environment; they are difficult to remove and filter.
                        Additionally, microplastics have begun to affect human health.
                        </p>
                        <a href="microplastic.html"><button className="learn-more-btn">
                            <div className="learn-more-img">
                            <img src="image/petbottle_water_full.png" alt="" />
                            </div>
                            <div className="learn-more-txt">
                            <h2>Learn More</h2>
                            <div className="arrow-wrapper">
                                <i className="ri-arrow-right-line"></i>
                            </div>
                            </div></button></a>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    )
}

export default More;