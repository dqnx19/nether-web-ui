import { createElement, setTitle, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter, importCSSFromList } from "https://js.nether.click/nether.js"

importCSSFromList([
    "css/fonts.css",

    "css/elements/all.css",
    "css/elements/body.css",
    "css/elements/main.css",
    "css/elements/h1.css",
    "css/elements/h2.css",
    "css/elements/p.css",
    "css/elements/section.css",
    "css/elements/header.css",
    "css/elements/li.css",
    "css/elements/button.css",
    "css/elements/footer.css",

    "css/components/cards.css",
    "css/components/copy-box.css",
    "css/components/app-drawer.css",
    "css/components/logo.css",
    "css/components/grouped-list.css",
    "css/components/footer-bar.css"
])

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
        { label: "A (Link)", key: "a" },
        { label: "All elements", key: "all" },
        { label: "Body", key: "body" },
        { label: "Button", key: "button" },
        { label: "Footer", key: "footer" },
        { label: "Form", key: "form" },
        { label: "H1 (Heading 1)", key: "h1" },
        { label: "H2 (Heading 2)", key: "h2" },
        { label: "Header", key: "header" },
        { label: "Img (Image)", key: "img" },
        { label: "Input", key: "main" },
        { label: "LI (List Item)", key: "li" },
        { label: "Main", key: "main" },
        { label: "P (Paragraph)", key: "p" },
        { label: "Section", key: "section" },
        { label: "Select", key: "select" },
        { label: "Table", key: "table" },
        { label: "TH (Table Heading)", key: "th" }
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
        { label: "App Drawer", key: "app-drawer" },
        { label: "Cards", key: "cards" },
        { label: "Copy Box", key: "copy-box" },
        { label: "Footer Bar", key: "footer-bar" },
        { label: "Grouped List", key: "grouped-list" },
        { label: "Logo", key: "logo" },
        { label: "Services Icons", key: "services-icons" },
        { label: "Tabs Switching", key: "tabs-switching" },
        { label: "Train Formation", key: "train-formation" }
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
    setTitle("Internationalization (I18N) - Nether Modern Web")
    setContentOfMain(`
        <h1>Internationalization (I18N)</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showI18NCategory('Basic', 'basic')">Basic</button>
                <button class="item" onclick="showI18NCategory('Currencies', 'currencies')">Currencies</button>
                <button class="item" onclick="showI18NCategory('Geography', 'geography')">Geography</button>
                <button class="item" onclick="showI18NCategory('Transportation', 'transportation')">Transportation</button>
            </div>
        </section>
    `)
}

function showI18NCategory(nameUpperCase, nameLowerCase) {
    scrollUp();
    setTitle(`${nameUpperCase} - Internationalization (I18N) - Nether Modern Web`)
    setContentOfMain(`
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
    `)

    fetch("i18n/" + nameLowerCase + ".js")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#js").textContent = data;
        });
}

function showCSSFileDetails(nameUpperCase, nameLowerCase, type) {
    scrollUp();
    setTitle(`${nameUpperCase} - Nether Modern Web`)
    setContentOfMain(`
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
    `)

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