const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

header.innerHTML = `
    <div class="app-drawer-wrapper"></div>
    <img src="img/icons/favicon.svg" class="logo">
`
footer.innerHTML = `
    <button onclick="showHome()">
        <img src="img/icons/favicon.svg">
    </button>
    <button onclick="showElements()">
        <img src="img/links-icons/elements.svg">
    </button>
    <button onclick="showComponents()">
        <img src="img/links-icons/components.svg">
    </button>
    <button onclick="showI18N()">
        <img src="img/links-icons/i18n.svg">
    </button>
`

function showHome() {
    scrollUp();
    document.title = "Nether Modern Web"
    main.innerHTML = `
        <h1>Home Page</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showElements()">
                    <img src="img/links-icons/elements.svg">
                    Elements
                </button>
                <button class="item" onclick="showComponents()">
                    <img src="img/links-icons/components.svg">
                    Components
                </button>
                <button class="item" onclick="showI18N()">
                    <img src="img/links-icons/i18n.svg">
                    Internationalization (I18N)
                </button>
            </div>
        </section>
    `
}

function showElements() {
    scrollUp();
    document.title = "Elements - Nether Modern Web"
    main.innerHTML = `
        <h1>Elements</h1>
        <section>
            <h2>Base Structure</h2>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('All', 'all', 'elements')">
                    All elements
                </button>
                <button class="item" onclick="showCSSFileDetails('Body', 'body', 'elements')">
                    Body
                </button>
                <button class="item" onclick="showCSSFileDetails('Header', 'header', 'elements')">
                    Header
                </button>
                <button class="item" onclick="showCSSFileDetails('Main', 'main', 'elements')">
                    Main
                </button>
                <button class="item" onclick="showCSSFileDetails('Footer', 'footer' , 'elements')">
                    Footer
                </button>
                <button class="item" onclick="showCSSFileDetails('Section', 'section', 'elements')">
                    Section
                </button>
            </div>
        </section>
        <section>
            <h2>Text and Lists</h2>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('H1 (Heading 1)', 'h1', 'elements')">
                    H1 (Heading 1)
                </button>
                <button class="item" onclick="showCSSFileDetails('H2 (Heading 1)', 'h2', 'elements')">
                    H2 (Heading 2)
                </button>
                <button class="item" onclick="showCSSFileDetails('P (Paragraph)', 'p', 'elements')">
                    P (Paragraph)
                </button>
                <button class="item" onclick="showCSSFileDetails('A (Link)', 'a', 'elements')">
                    A (Link)
                </button>
                <button class="item" onclick="showCSSFileDetails('LI (List Iem)', 'li', 'elements')">
                    LI (List Item)
                </button>
            </div>
        </section>
        <section>
            <h2>Images</h2>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('Img (Image)', 'img', 'elements')">
                    Img (Image)
                </button>
            </div>
        </section>
        <section>
            <h2>Table</h2>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('Table', 'table', 'elements')">
                    Table
                </button>
                <button class="item" onclick="showCSSFileDetails('TR (Table Row)', 'tr', 'elements')">
                    TR (Table Row)
                </button>
            </div>
        </section>
    `;
}

function showComponents() {
    scrollUp();
    document.title = "Components - Nether Modern Web"
    main.innerHTML = `
        <h1>Components</h1>
        <section> 
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('App Drawer', 'app-drawer', 'components')">
                    App Drawer
                </button>
                <button class="item" onclick="showCSSFileDetails('Cards', 'cards', 'components')">
                    Cards
                </button>
                <button class="item" onclick="showCSSFileDetails('Copy Box', 'copy-box', 'components')">
                    Copy Box
                </button>
                <button class="item" onclick="showCSSFileDetails('Footer Bar', 'footer-bar', 'components')">
                    Footer Bar
                </button>
                <button class="item" onclick="showCSSFileDetails('Logo', 'logo', 'components')">
                    Logo
                </button>
                <button class="item" onclick="showCSSFileDetails('Services Icons', 'services-icons', 'components')">
                    Services Icons
                </button>
                <button class="item" onclick="showCSSFileDetails('Train Formation', 'train-formation', 'components')">
                    Train Formation
                </button>
            </div>
        </section>
    `;
}

function showI18N() {
    scrollUp();
    document.title = "Internationalization (I18N) - Nether Modern Web"
    main.innerHTML = `
        <h1>Internationalization (I18N)</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showI18NCategory('Basic', 'basic')">Basic</button>
                <button class="item" onclick="showI18NCategory('Currencies', 'currencies')">Currencies</button>
                <button class="item" onclick="showI18NCategory('Geography', 'geography')">Geography</button>
                <button class="item"onclick="showI18NCategory('Transportation', 'transportation')">Transportation</button>
            </div>
        </section>
    `;
}

function showI18NCategory(nameUpperCase, nameLowerCase) {
    scrollUp();
    document.title = `${nameUpperCase} - Internationalization (I18N) - Nether Modern Web`
    main.innerHTML = `
        <h1>${nameUpperCase}</h1>
        <section>
            <h2>JS</h2>
            <div class="copy-box">
                <div class="head">
                    <span class="language">HTML</span>
                </div>
                <div class="body">
                    <pre class="code">&lt;script src&quot;https://modern-web.nether.click/i18n/${nameLowerCase}.js&quot;&gt;</pre>
                </div>
            </div>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">JS</span>
                </div>
                <div class="body">
                    <pre class="code" id="js"></pre>
                </div>
            </div>
        </section>
    `;

    fetch("i18n/" + nameLowerCase + ".js")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#js").textContent = data;
        });
}

function showCSSFileDetails(nameUpperCase, nameLowerCase, type) {
    scrollUp();
    document.title = `${nameUpperCase} - Nether Modern Web`
    main.innerHTML = `
        <h1>${nameUpperCase}</h1>
        <section>
            <h2>CSS</h2>
            <li>Use one of the following methods to import the CSS file</li>
            <li>Do not use both of them</li>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">CSS</span>
                    
                </div>
                <div class="body">
                    <pre class="code">@import url("https://modern-web.nether.click/css/${type}/${nameLowerCase}.css");</pre>
                </div>
            </div>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">HTML</span>
                </div>
                <div class="body">
                    <pre class="code">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://modern-web.nether.click/css/${type}/${nameLowerCase}.css&quot;&gt;</pre>
                </div>
            </div>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">CSS</span>
                </div>
                <div class="body">
                    <pre class="code" id="css"></pre>
                </div>
            </div>
            <br>
            <button><a href="https://modern-web.nether.click/css/${type}/${nameLowerCase}.css" download>Download File</a></button>
        </section>
        <section>
            <h2>JS</h2>
            <div class="copy-box">
                <div class="head">
                    <span class="language">HTML</span>
                </div>
                <div class="body">
                    <pre class="code">&lt;script src&quot;https://modern-web.nether.click/css/${type}/${nameLowerCase}.js&quot;&gt;</pre>
                </div>
            </div>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">JS</span>
                </div>
                <div class="body">
                    <pre class="code" id="js"></pre>
                </div>
            </div>
        </section>
        <section>
            <h2>HTML (Example)</h2>
            <div class="copy-box">
                <div class="head">
                    <span class="language">HTML</span>
                </div>
                <div class="body">
                    <pre class="code" type="text" id="html"></pre>
                </div>
            </div>
        </section>
    `

    fetch("css/" + type + "/" + nameLowerCase + ".css")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#css").textContent = data;
        });

    fetch("js/" + type + "/" + nameLowerCase + ".js")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#js").textContent = data;
        });

    fetch("html/" + type + "/" + nameLowerCase + ".html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#html").textContent = data;
        });
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

showHome();