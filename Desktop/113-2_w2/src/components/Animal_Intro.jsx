function Animal_Intro(){
    return(
        <>
            <section className="animal-intro-section">
                <div className="bg">
                <div className="padding">
                    <div className="slider-container">
                    <div className="slider">
                        <div className="slide-wrapper" id="slide-wrapper">
                        <div className="slide active" id="marine-creature-1">
                            <div className="context">
                            <h3 id="area2">DOLPHINS</h3>
                            <p>
                                Dolphins are highly intelligent mammals with excellent
                                memory. They often appear in human sight in various
                                ways, such as at marine parks or during boat excursions.
                                In the ocean, dolphins are skilled swimmers, capable of
                                reaching speeds of around 60 kilometers per hour.
                            </p>
                            </div>
                            <img src="image/dophins.svg" alt="dolphins.svg" />
                        </div>

                        <div className="slide" id="marine-creature-2">
                            <div className="context">
                            <h3>WHALE</h3>
                            <p>
                                Whales are the largest mammals on Earth, feeding on
                                marine life such as fish and krill. Notably, they are
                                quite social animals. However, due to their massive
                                size, whales can easily become accidentally entangled in
                                fishing nets.
                            </p>
                            </div>
                            <img src="image/whale.svg" alt="whale.svg" />
                        </div>

                        <div className="slide" id="marine-creature-3">
                            <div className="context">
                            <h3>SEAGULLS</h3>
                            <p>
                                Seagulls are seabirds primarily characterized by their
                                black, white, and gray feathers. They typically feed on
                                small fish, shrimp, and algae. Seagulls can be seen all
                                over the world, and because of this, they are often
                                considered a part of coastal scenery. Unfortunately,
                                human-generated waste poses a threat to these birds.
                            </p>
                            </div>

                            <img src="image/seagulls.svg" alt="seagulls.svg" />
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </section>
            <div className="indicator">
                <span className="btn active"></span>
                <span className="btn"></span>
                <span className="btn"></span>
            </div>

            <div className="decoration-img">
                <img src="image/garbage01.svg" alt="image" className="decoration-img-2"/>
            </div>
        </>
    )
}
export default Animal_Intro;