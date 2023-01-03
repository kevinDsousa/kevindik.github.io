function Menu() {
    let localeTag = document.getElementById("locale-menu")
    let menu = (
        `<div class="content-menu">
            <nav class="menu">
                <ul>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./resume.html">Resume</a></li>
                    <li><a href="./portifolio.html">Portifolio</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>`);
        localeTag.innerHTML = menu
}
Menu()