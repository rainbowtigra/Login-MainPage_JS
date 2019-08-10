var elements = document.getElementsByClassName("column");
let i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "30%";
  }
}

function toggleHeart(element) {
    if(element.classList.contains('fa-heart-o')){
        element.classList.remove('fa-heart-o');
        element.classList.add('fa-heart');
    } else {
        element.classList.remove('fa-heart');
        element.classList.add('fa-heart-o');
    }
}

