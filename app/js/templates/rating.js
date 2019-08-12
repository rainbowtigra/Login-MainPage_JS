function renderRating(rating) {
    var star = '';
    for (let i = 0; i < rating; i++) {
        star += '<i class="fa fa-star"></i>'
    }
    return star;
}