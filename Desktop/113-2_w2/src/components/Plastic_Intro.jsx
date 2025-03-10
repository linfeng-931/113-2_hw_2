function Plastic_Intro(){
    return(
        <section className="plastic-intro-section">
        <img src="image/fishing-net-new.svg" alt="" />
        <div className="padding">
          <div className="column">
            <div className="left">
              <div className="section-title">
                <h1><span>01</span><span>Fishing Net</span></h1>
              </div>
              <p className="txt" id="area1">
                How do fishing nets impact seabirds and marine mammals?
              </p>
            </div>
            <div className="right">
              <h2 className="sub-title">
                Fishing nets, especially lost or discarded ones, have severely
                impacted the lives of seabirds and marine mammals around the
                world.
              </h2>
              <p className="txt">
                Fishing nets are useful tools for fishermen to catch fish,
                allowing them to capture large quantities at once. However,
                during use, they can become damaged or lost. When this happens,
                the nets can be left behind in the ocean, contributing to the
                problem of marine debris.
              </p>

              <div className="img-wrapper">
                <a href="#marine-creature-1">
                  <div className="img-bg">
                    <div className="circle"></div>
                    <div className="circle-small marine-creature-1">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <img src="image/dophins.svg" alt="dolphins" /></div></a>
                <a href="#marine-creature-2">
                  <div className="img-bg">
                    <div className="circle"></div>
                    <div className="circle-small marine-creature-2">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <img src="image/whale.svg" alt="whales" /></div></a>
                <a href="#marine-creature-3">
                  <div className="img-bg">
                    <div className="circle"></div>
                    <div className="circle-small marine-creature-3">
                      <i className="ri-arrow-right-up-line"></i>
                    </div>
                    <img src="image/seagulls.svg" alt="seagulls" /></div></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Plastic_Intro;