import Price from "./price.jsx"
function Product({title,idx}){
let styles={
        border:"2px solid white",
        borderRadius:"10px",
        padding:"5px",
        height:"348px",
        width:"300px",
        marginLeft:"10px"
}
let description=
[
    ["8000 DPI","5 Programmable Button"],
    ["intuutive surface","designed for ipad pro"],
    ["designed for ipad pro","intutive surface"],
    ["wireless","optical orientation"]
]
let newPrice=["8,999","9,199","899","278"]
let oldPrice=["12,495","11,900","1,599","599"]
let image=
[
    "https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_1280.png",
    "https://atlas-content-cdn.pixelsquid.com/stock-images/apple-pencil-stylus-L8d1Xm9-600.jpg",
    "https://cdn.pixabay.com/photo/2013/07/12/19/02/keyboard-154251_1280.png",
    "https://cdn.pixabay.com/photo/2013/07/13/12/17/mouse-159568_1280.png"
]
let  img=
{
    height:"120px",
    width:"80%",
    padding:"2px 5px 2px 5px"
}
    return(
        <div style={styles}>
            <h4>{title}</h4>
            <img src={image[idx]} style={img}></img>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}
export default Product;