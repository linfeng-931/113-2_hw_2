function News_Intro(){
    return(
        <section className="news-intro-section-bg">
        <div className="news-intro-section">
          <h3>NEWS</h3>
          <div className="padding">
            <div className="column">
              <div className="news-container marine-creature-1-news" id="area4">
                <img src="../../public/image/dolphin.jpg" alt="dolphin" />
                <h2 className="sub-title">Dolphin</h2>
                <div className="txt">
                  <p>
                    Fishing nets entangle dolphins, leading to the death of a
                    Taiwanese white dolphin stranded on Kinmen.
                  </p>
                  <a
                    href="https://wuo-wuo.com/report/instantnews/1996-20240529news"
                  >
                    <button className="learn-more-btn">
                      <div className="learn-more-txt">
                        <h2>Visit Web</h2>
                        <div className="arrow-wrapper">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>

              <div className="news-container marine-creature-2-news">
                <img src="../../public/image/whale.jpg" alt="whale" />
                <h2 className="sub-title">Whale</h2>
                <div className="txt">
                  <p>
                    The whale unfortunately got tangled in fishing nets. The
                    civilians in Colombia worked together to help free it.
                  </p>
                  <a
                    href="https://tw.news.yahoo.com/%E5%BD%B1-%E5%8D%B3%E5%88%BB%E6%95%91%E6%8F%B4%E6%B5%B7%E4%B8%8A%E7%89%88-%E9%AF%A8%E9%AD%9A%E4%B8%8D%E5%B9%B8%E9%81%AD%E6%BC%81%E7%B6%B2%E7%BA%8F%E4%BD%8F-%E5%93%A5%E5%80%AB%E6%AF%94%E4%BA%9E%E8%BB%8D%E6%B0%91%E9%BD%8A%E5%8A%9B%E5%8A%A9%E8%84%AB%E5%9B%B0-094656740.html"
                  >
                    <button className="learn-more-btn">
                      <div className="learn-more-txt">
                        <h2>Visit Web</h2>
                        <div className="arrow-wrapper">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>

              <div className="news-container marine-creature-3-news">
                <img src="../../public/image/seagull.jpg" alt="seagull" />
                <h2 className="sub-title">Seagull</h2>
                <div className="txt">
                  <p>Seagull wrapped in fishing net rescued in Weymouth.</p>
                  <a
                    href="https://www.dorsetecho.co.uk/news/24328104.seagull-wrapped-fishing-net-rescued-weymouth/"
                  >
                    <button className="learn-more-btn">
                      <div className="learn-more-txt">
                        <h2>Visit Web</h2>
                        <div className="arrow-wrapper">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default News_Intro;