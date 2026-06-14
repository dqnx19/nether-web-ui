import { createElement, setTitle, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter } from "https://js.nether.click/nether.js"

const header = createElement("header");
const main = createElement("main");
const footer = createElement("footer");

setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button onclick="showHome()" class="logo">
        <img src="img/icons/favicon.svg">
    </button>
`);

setContentOfFooter(`
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
`);

if (new URLSearchParams(window.location.search).get("showas") === "app") {
    header.style.display = "none";
}

window.showHome = showHome
window.showElements = showElements
window.showComponents = showComponents
window.showCSSFileDetails = showCSSFileDetails
window.showI18N = showI18N
window.showI18NCategory = showI18NCategory



function showHome() {
    scrollUp();
    setTitle("Nether Modern Web")
    setContentOfMain(`
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
    `)
}

function showElements() {
    scrollUp();
    setTitle("Elements - Nether Modern Web")
    setContentOfMain(`
        <section>
            <div class="grouped-list" id="elements-list"></div>
        </section>
    `)

    const elements = [
        { label: "All elements", key: "all", title: "All elements" },
        { label: "Body", key: "body", title: "Body" },
        { label: "Header", key: "header", title: "Header" },
        { label: "Main", key: "main", title: "Main" },
        { label: "Footer", key: "footer", title: "Footer" },
        { label: "Section", key: "section", title: "Section" },

        { label: "H1 (Heading 1)", key: "h1", title: "H1 (Heading 1)" },
        { label: "H2 (Heading 2)", key: "h2", title: "H2 (Heading 2)" },
        { label: "P (Paragraph)", key: "p", title: "P (Paragraph)" },
        { label: "A (Link)", key: "a", title: "A (Link)" },
        { label: "LI (List Item)", key: "li", title: "LI (List Item)" },

        { label: "Img (Image)", key: "img", title: "Img (Image)" },

        { label: "Table", key: "table", title: "Table" },
        { label: "TR (Table Row)", key: "tr", title: "TR (Table Row)" }
    ];

    const container = document.getElementById("elements-list");

    elements.forEach(element => {
        const button = document.createElement("button");

        button.textContent = element.label;

        button.className = "item"
        button.onclick = () => {
            showCSSFileDetails(element.title, element.key, "elements");
        };

        container.appendChild(button);
    });
}

function showComponents() {
    scrollUp();
    setTitle("Components - Nether Modern Web")

    const components = [
        { label: "App Drawer", key: "app-drawer"},
        { label: "Cards", key: "cards"},
        { label: "Copy Box", key: "copy-box"},
        { label: "Footer Bar", key: "footer-bar"},
        { label: "Grouped List", key: "grouped-list"},
        { label: "Logo", key: "logo"},
        { label: "Services Icons", key: "services-icons"},
        { label: "Tabs Switching", key: "tabs-switching"},
        { label: "Train Formation", key: "train-formation"}
    ];

    main.innerHTML = `
        <h1>Components</h1>
        <section> 
            <div class="grouped-list" id="components-list"></div>
        </section>
    `;

    const container = document.getElementById("components-list");

    components.forEach(component => {
        const button = document.createElement("button");

        button.textContent = component.label;

        button.className = "item"
        button.onclick = () => {
            showCSSFileDetails(component.label, component.key, "components");
        };

        container.appendChild(button);
    });
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
                <button class="item" onclick="showI18NCategory('Transportation', 'transportation')">Transportation</button>
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
    setTitle(`${nameUpperCase} - Nether Modern Web`)
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

showHome();