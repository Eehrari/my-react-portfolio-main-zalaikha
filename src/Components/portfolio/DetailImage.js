const DetailImage = ({detail}) =>{
    return(
        <div className="col-lg-8">
            <div className="portfolio-details-slider">
                <img src={detail.img} alt={`image${detail.id}`}></img>
            </div>
        </div>
    )
}
export default DetailImage ;