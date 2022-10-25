const select = document.querySelector('select');
const sites = {
    "ru": 'index.html',
    'en':'index-en.html'
}
select.addEventListener("change", changeLang)

function changeLang() {
    let lang = select.value;
    for(key in sites) {
        if (lang===key) {
         location.href = sites[key];
        }
    }

}