function AcademyPerfil () {
    let localeTag = document.getElementById("locale-perfil")
    let academy_perfil = (`
        <div class="academy-content">
            <div id="line-img">
                <img src="../assets/icons/book.png"/>
            </div>
            <div>
                <div>
                    <h3 class="sub-titles">Digital College 2022 - 2023 (progress)</h3>
                    <ul>
                        <li>Full Stack Developer</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Agile methodologies</li>
                    </ul>
                </div>
                <div>
                    <h3 class="sub-titles">Wise Up 2022 - 2023 (progress)</h3>
                    <ul>
                        <li>grammar</li>
                        <li>Speak</li>
                    </ul>
                </div>
                <div>
                    <h3 class="sub-titles">Alura Oracle One 2022 - 2023 (progress)</h3>
                    <ul>
                        <li>Basic programming</li>
                        <li>Back End Developer Java</li>
                    </ul>
                </div>
                <div>
                    <h3 class="sub-titles">Uniasselvi 2021 - 2023 (progress)</h3>
                    <ul>
                        <li>Analysis and systems development</li>
                    </ul>
                </div>
            </div>
        </div>
    `)
    localeTag.innerHTML = academy_perfil;
}

function ProfessionalPerfil () {
    let localeTag = document.getElementById("locale-perfil")
    let personal_perfil = (`
    <div class="academy-content">
        <div id="line-img">
            <img src="../assets/icons/bag.png"/>
        </div>
        <div>
            <div>
                <h3 class="sub-titles">Alares Internet - Network Analyst (2020 - present)</h3>
                <ul>
                    <li>Support external teams</li>
                    <li>Network Analysis and troubleshooting</li>
                    <li>Preventive monitoring</li>
                    <li>Operational leadership</li>
                    <li>Router configuration</li>
                </ul>
            </div>
            <div>
                <h3 class="sub-titles">CCTV Leader (2017 - 2020)</h3>
                <ul>
                    <li>Team and parking monitoring</li>
                    <li>Analysis of occurrences and claims and breakdowns in vehicles</li>
                    <li>Internal payment server monitoring</li>
                </ul>
            </div>
        </div>
    </div>
`);
    localeTag.innerHTML = personal_perfil;
}
