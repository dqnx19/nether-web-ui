const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

header.innerHTML = `
    <div class="app-drawer-wrapper"></div>
    <img src="img/favicon.svg" class="logo">
`
function showHome() {
    document.title = "Nether Modern Web"
    main.innerHTML = `
         <h1>Home Page</h1>
        <section>
            <h2>Elements</h2>
            <h3>Base Structure</h3>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('All', 'all', 'elements')">
                    <span>All elements</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Body', 'body', 'elements')">
                    <span>Body</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Header', 'header', 'elements')">
                    <span>Header</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Main', 'main', 'elements')">
                    <span>Main</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Footer', 'footer' , 'elements')">
                    <span>Footer</span>
                </button>
                <button class="item">
                    <span>Section</span>
                </button>
            </div>
            <div class="cards">
                
            </div>
            <h3>Text and Lists</h3>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('H1 (Heading 1)', 'h1', 'elements')">
                    <span>H1 (Heading 1)</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('H2 (Heading 1)', 'h2', 'elements')">
                    <span>H2 (Heading 2)</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('P (Paragraph)', 'p', 'elements')">
                    <span>P (Paragraph)</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('A (Link)', 'a', 'elements')">
                    <span>A (Link)</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('LI (List Iem)', 'li', 'elements')">
                    <span>LI (List Item)</span>
                </button>
            </div>
            <h3>Images</h3>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('Img (Image)', 'img', 'elements')">
                    <span>Img (Image)</span>
                </button>
            </div>
            <h3>Table</h3>
            <div class="grouped-list">
                <button class="item">
                    <span>Table</span>
                </button>
                <button class="item">
                    <span>TR (Table Row)</span>
                </button>
            </div>
        </section>
        <section>
            <h2>Components</h2>
            <div class="grouped-list">
                <button class="item" onclick="showCSSFileDetails('App Drawer', 'app-drawer', 'components')">
                    <span>App Drawer</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Cards', 'cards', 'components')">
                    <span>Cards</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Copy Box', 'copy-box', 'components')">
                    <span>Copy Box</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Footer Bar', 'footer-bar', 'components')">
                    <span>Footer Bar</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Logo', 'logo', 'components')">
                    <span>Logo</span>
                </button>
                <button class="item" onclick="showCSSFileDetails('Services Icons', 'services-icons', 'components')">
                    <span>Services Icons</span>
                </button>
            </div>
        </section>
    `
}

function showCSSFileDetails(nameUpperCase, nameLowerCase, type) {
    document.title = `${nameUpperCase} - Nether Modern Web`
    main.innerHTML = `
        <h1>${nameUpperCase}</h1>
        <section>
            <h2>CSS import</h2>
            <li>Use one of the following methods to import the CSS file</li>
            <li>Do not use both of them</li>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">CSS</span>
                    <button class="copy-button">
                        <img src="img/copy-icon.svg" alt="Copy Icon">
                        Copy
                    </button>
                </div>
                <div class="body">
                    <input class="code" type="text"
                        value="@import url('https://modern-web.nether.click/css/${type}/${nameLowerCase}.css');"
                        readonly>
                </div>
            </div>
            <br>
            <div class="copy-box">
                <div class="head">
                    <span class="language">HTML</span>
                    <button class="copy-button">
                        <img src="img/copy-icon.svg" alt="Copy Icon">
                        Copy
                    </button>
                </div>
                <div class="body">
                    <input class="code" type="text"
                        value="&lt;link rel=&quot;stylesheet&quot; href=&quot;https://modern-web.nether.click/css/${type}/${nameLowerCase}.css&quot;&gt;"
                        readonly>
                </div>
            </div>
        </section>
        <section>
            <h2>JS Import</h2>
            <div class="copy-box">
                <div class="head">
                    <span class="language">HTML</span>
                    <button class="copy-button">
                        <img src="img/copy-icon.svg" alt="Copy Icon">
                        Copy
                    </button>
                </div>
                <div class="body">
                    <input class="code" type="text"
                        value="&lt;script src&quot;https://modern-web.nether.click/css/${type}/${nameLowerCase}.js&quot;&gt;"
                        readonly>
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

showHome();
console.log("HEADER READY:", document.querySelector(".app-drawer-wrapper"));