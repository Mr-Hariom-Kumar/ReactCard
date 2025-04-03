function Price({oldPrice,newPrice}){
    let styles={
        backgroundColor:"#e03",
        height:"40px",
        padding:"12px 0 3px 0px",
        textAlign:"center",
        borderRadius:"0 10px 0 10px"
    }
    let cutPrice={
        textDecoration:"line-through"
    }
    return(
        <div style={styles}>
            <span style={cutPrice}>&#8377;{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>&#8377;{newPrice}</span>
        </div>
    )
}
export default Price;