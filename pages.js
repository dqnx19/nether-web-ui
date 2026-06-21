import { setFavicon, setAttribute, createElement, setTitle, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter, importCSSFromList, importJSFromList, getURLParam } from "https://js.nether.click/nether.js"

importCSSFromList([
    "fonts/lexend/lexend.css",

    "components/css/all.css",
    "components/css/body.css",
    "components/css/main.css",
    "components/css/headings.css",
    "components/css/p.css",
    "components/css/section.css",
    "components/css/header.css",
    "components/css/li.css",
    "components/css/button.css",
    "components/css/footer.css",

    "components/css/cards.css",
    "components/css/copy-box.css",
    "components/css/app-drawer.css",
    "components/css/logo.css",
    "components/css/grouped-list.css",
    "components/css/tabs-switching.css",
    "components/css/context-menu.css"
])

importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "components/js/app-drawer.js",
    "components/js/copy-box.js",
    "components/js/footer.js",
    "components/js/tabs-switching.js",
    "components/js/context-menu.js"
])

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

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
    <button onclick="showComponents()">
        <img src="img/links-icons/components.svg">
    </button>
    <button onclick="showAbout()">
        <img src="img/links-icons/about.svg">
    </button>
`);

if (getURLParam("showas") === "app") {
    header.style.display = "none";
}

window.showHome = showHome
window.showComponents = showComponents
window.showAbout = showAbout
window.showCSSFileDetails = showCSSFileDetails

function router() {
    switch (getURLParam("page")) {
        case "home": 
            showHome()
            return

        case "components":
            showComponents()
            return

        case "about":
            showAbout()
            return

        default:
            showHome()
            return
    }
}

const menu = document.createElement("div");

menu.id = "menu";
menu.className = "context-menu";

menu.innerHTML = `
    <button onclick="location.reload()">Refresh</button>
    <button onclick="copyURL()">Copy URL</button>
    <button onclick="copy()">Copy</button>
`;

document.body.appendChild(menu);

function showHome() {
    scrollUp();
    setTitle("Nether Modern Web")
    setContentOfMain(`
        <h1>Nether Modern Web</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showComponents()">
                    <img src="img/links-icons/components.svg">
                    Components
                </button>
                <button class="item" onclick="showAbout()">
                    <img src="img/links-icons/about.svg">
                    About
                </button>
            </div>
        </section>
    `)
}

function showComponents() {
    scrollUp();
    setTitle("Components - Nether Modern Web")

    const components = [
        { label: "A (Hyper Text Link)", key: "a" },
        { label: "All", key: "all" },
        { label: "App Drawer", key: "app-drawer" },
        { label: "Body", key: "body" },
        { label: "Button", key: "button" },
        { label: "Cards", key: "cards" },
        { label: "Context Menu", key: "Context-Menu"},
        { label: "Copy Box", key: "copy-box" },
        { label: "Footer", key: "footer" },
        { label: "Form", key: "form" },
        { label: "Grouped List", key: "grouped-list" },
        { label: "Header", key: "header" },
        { label: "Headings", key: "headings" },
        { label: "Img", key: "img" },
        { label: "Li", key: "li" },
        { label: "Links List", key: "links-list" },
        { label: "Logo", key: "logo" },
        { label: "Main", key: "main" },
        { label: "P (paragraph)", key: "p" },
        { label: "Section", key: "section" },
        { label: "Services Icons", key: "services-icons" },
        { label: "Table", key: "table" },
        { label: "Tabs Switching", key: "tabs-switching" },
        { label: "Train Formation", key: "train-formation" }
    ];


    setContentOfMain(`
        <h1>Components</h1>
        <section> 
            <div class="grouped-list" id="components-list"></div>
        </section>
    `)

    const container = document.getElementById("components-list");

    components.forEach(component => {
        const button = document.createElement("button");

        button.textContent = component.label;

        button.className = "item"
        button.onclick = () => {
            showCSSFileDetails(component.label, component.key);
        };

        container.appendChild(button);
    });
}

function showCSSFileDetails(nameUpperCase, nameLowerCase) {
    scrollUp();
    setTitle(`${nameUpperCase} - Nether Modern Web`)
    setContentOfMain(`
        <h1>${nameUpperCase}</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('css', this)">CSS</button>
                    <button class="tab" onclick="showTab('js', this)">JS</button>
                    <button class="tab" onclick="showTab('html', this)">HTML</button>
                </div>

                <div class="tab-content active" id="css">
                    <h2>CSS</h2>
                    <p>Use one of the following methods to import the CSS file</p>
                    <br>
                    <p>Do not use both of them</p>
                    <br>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">CSS</span>
                        </div>
                        <div class="body">
                            <pre
                                class="code">@import url("https://modern-web.nether.click/components/css/${nameLowerCase}.css");</pre>
                        </div>
                    </div>
                    <br>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">HTML</span>
                        </div>
                        <div class="body">
                            <pre
                                class="code">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://modern-web.nether.click/components/css/${nameLowerCase}.css&quot;&gt;</pre>
                        </div>
                    </div>
                    <br>
                    <p>Or copy the CSS code</p>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">CSS</span>
                        </div>
                        <div class="body">
                            <pre class="code" id="css"></pre>
                        </div>
                    </div>
                    <br>
                    <button><a href="https://modern-web.nether.click/components/css/${nameLowerCase}.css" download>Download File</a></button>
                </div>
                <div class="tab-content" id="js">
                    <h2>JS</h2>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">HTML</span>
                        </div>
                        <div class="body">
                            <pre
                                class="code">&lt;script src&quot;https://modern-web.nether.click/components/js/${nameLowerCase}.js&quot;&gt;</pre>
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
                    <br>
                    <button><a href="https://modern-web.nether.click/components/css/${nameLowerCase}.css" download>Download File</a></button>
                </div>

                <div class="tab-content" id="html">
                    <h2>HTML (Example)</h2>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">HTML</span>
                        </div>
                        <div class="body">
                            <pre class="code" type="text" id="html"></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `)

    fetch("components" + "/" + "css" + "/" + nameLowerCase + ".css")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#css").textContent = data;
        });

    fetch("components" + "/" + "js" + "/" + nameLowerCase + ".js")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#js").textContent = data;
        });

    fetch("components" + "/" + "html" + "/" + nameLowerCase + ".html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".code#html").textContent = data;
        });
}

function showAbout() {
    scrollUp()
    setTitle("About - Nether Modern Web")
    setContentOfMain(`
        <h1>About</h1>
        <section>
            <h2>What is Nether Modern Web</h2>
            <ul>
                <li>Founded in May 2026</li>
                <li>Web service providing free css and js components and basic styles for web developement</li>
            </ul>
        </section>
    `)
}

router();