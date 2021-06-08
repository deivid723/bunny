
var but = document.querySelector('button#top')
window.onscroll = function () {
    scroll()
}
function scroll() {
    if (document.documentElement.scrollTop > 50) {
        let btn = document.getElementById('top')
        btn.style = "opacity: 1; cursor: pointer;"
    } else {
        let btn = document.getElementById('top')
        btn.style = "opacity: 0;"
    }
}
function topo() {
    document.documentElement.scrollTop = 0
}