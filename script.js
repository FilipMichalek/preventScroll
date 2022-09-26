function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function disable(){
  document.querySelector('.scrollable').addEventListener('wheel', preventScroll);
  document.querySelector('.scrollable').addEventListener('touchmove', preventScroll);
}

function enable(){
    document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);
    document.querySelector('.scrollable').removeEventListener('touchmove', preventScroll);
}

document.querySelector('#prevent').addEventListener('click', disable);
document.querySelector('#allow').addEventListener('click', enable);