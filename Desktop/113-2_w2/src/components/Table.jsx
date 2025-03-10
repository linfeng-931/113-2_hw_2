function Table(){
    return(
        <div className="table-of-contents">
            <hr />
            <a className="toc" data-id="1">
            <p>Introduction</p>
            <h4>1</h4>
            </a>

            <a className="toc" data-id="2">
            <p>Animals</p>
            <h4>2</h4>
            </a>

            <a className="toc" data-id="3">
            <p>Data</p>
            <h4>3</h4>
            </a>

            <a className="toc" data-id="4">
            <p>News</p>
            <h4>4</h4>
            </a>

            <a className="toc" data-id="5">
            <p>Other</p>
            <h4>5</h4>
            </a>
            <hr />
        </div>
    )
}
export default Table;