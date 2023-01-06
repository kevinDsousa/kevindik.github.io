function Aside() {
    let localeTag = document.getElementById("locale-aside");
    let aside = (`
        <div class="apresentation">
            <img src="https://github.com/KevinDik.png" alt="foto de perfil"/>
            <h1>Kevin Sousa</h1>
            <span>Software Developer</span>
        </div>
        <div class="data">
            <ul>
                <li><img src="./assets/icons/icon-email.png" alt="icone email"><p>Email: <span>kevindiegodasilvasousa@gmail.com</span></p></li>
                <li><img src="./assets/icons/icon-phone.png" alt="icone telefone"><p>Telefone: <span>+55 (85) 99928-7198</span></p></li>
                <li><img src="./assets/icons/icon-calendar.png" alt="icone calendario"><p>Aniversário: <span>22/04</span></p></li>
                <li><img src="./assets/icons/icon-location.png" alt="icone localizacao"><p>Localização <span>Fortaleza-CE, BR</span></p></li>
            </ul>
        </div>
        <div class="social-media">
            <h2>Social Media</h2>
            <ul>
                <li><a href="https://www.instagram.com/k__diego.py/"><img src="./assets/social-icons/icon-instagram.png" alt="Instagram link"></a></li>
                <li><a href="https://www.linkedin.com/in/kevindik-programmer/"><img src="./assets/social-icons/icon-linkedn.png" alt="Linkedn link"></a></li>
                <li><a href="https://github.com/KevinDik"><img src="./assets/social-icons/icon-github.png" alt="Github link"></a></li>
            </ul>
        </div>
    `);

    localeTag.innerHTML = aside;
}

Aside();