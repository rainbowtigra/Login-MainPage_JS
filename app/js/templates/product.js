function renderProduct(product) {
    return ` <div class="column" style="background-color:#ffffff;">
            <div class="img">
                <div style="background-color: white">
                    <i class="fa fa-heart-o" onclick="toggleHeart(this)"></i>
                </div>
                <img class="card-img-top" src="${product.picture}" width="370" height="250" alt="Card image cap">
            </div>
            <div class="card-body">
                <h5 class="card-title" style="color:#000080"><a href=${product.url}>${product.name}</a></h5>
                <div>
                    <span class="card-text"> ${product.size} </span>
                    <span style="color:#FF5733">${renderRating(product.rating)}</span>
                </div>
                <div style="margin:auto;width:100%;">
                    <div class="card-text" style="color:#00008B; width:30%;float:left"><font size="4"> ${product.price}</font> </div>
                    <div class="card-text ${product.oldPrice ? '' : 'd-none'}" style="color:#C0C0C0; width:20%;float:left"><font size="2"><s> ${product.oldPrice} </s></font></div>
                    <div class="card-text ${product.savings ? '' : 'd-none'}" style=" color:#ff0000; width:50%;float:left"><font size="3">You save ${product.savings}</font></div>
                </div>
            </div>
        </div>
        `
}