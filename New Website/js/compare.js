const compareDivs = document.querySelectorAll('.before-after div');
const btn = document.querySelector('#comp');

for (let compare of compareDivs){
    compare.addEventListener('mouseover', () => {
        compare.classList.add('compare');
    })
    compare.addEventListener('mouseleave', () => {
        compare.classList.remove('compare');
    })

    btn.addEventListener('click', () => {
        compare.classList.toggle('compare');
    })
}