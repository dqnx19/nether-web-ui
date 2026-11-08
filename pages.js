import * as vorxel from "https://vorxel.nether.click/vorxel.js"
import { marked } from "./lib/marked.js";
import * as App from "./components/js/app.js"

vorxel.importCSS([
    { href: "fonts/lexend/lexend.css" },
    { href: "components/css/app.css"},
    { href: "components/css/app-drawer.css" },
    { href: "components/css/button.css" },
    { href: "components/css/cards.css" },
    { href: "components/css/copy-box.css" },
    { href: "components/css/footer.css" },
    { href: "components/css/grouped-list.css" },
    { href: "components/css/header.css" },
    { href: "components/css/headings.css" },
    { href: "components/css/image.css" },
    { href: "components/css/lists.css" },
    { href: "components/css/main.css" },
    { href: "components/css/menu-bar.css" },
    { href: "components/css/section.css" },
    { href: "components/css/services-icons.css" },
    { href: "components/css/table.css" },
    { href: "components/css/tabs.css" },
    { href: "components/css/timeline.css" },
]);

/* vorxel.importJS([
    { src: "https://nether.click/js/import-app-drawer.js" },
    { src: "https://nether.click/js/import-app-check.js" },
]);*/

vorxel.setFavicon({ url: "img/icons/favicon.svg" });

App.create({
    language: "en"
})

const maindb = await fetch("json/pages.json").then(r => r.json());

vorxel.createElement({
    element: "main",
    parent: document.body
})

vorxel.createElement({
    element: "footer",
    parent: document.body
})

vorxel.setHTML({
    selector: "footer",
    content: `
        <button onclick="showHome()" title="shows home page">
            <img src="img/icons/favicon.svg" alt="home page link icon">
        </button>
        `
        +
        maindb.map(element => `
            <button onclick="${element.func}" title="Shows ${element.name} page">
                <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
            </button>
        `).join("")
});

window.showHome = showHome
window.showComponents = showComponents
window.showAbout = showAbout

marked.use({
    renderer: {
        code({ text, lang }) {
            const escapeHtml = (text) => {
                return text
                    .replaceAll("&", "&amp;")
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
                    .replaceAll('"', "&quot;")
                    .replaceAll("'", "&#039;");
            };

            return `
                <div class="copy-box">
                    <div class="head">
                        <span class="language">${escapeHtml(lang || "")}</span>
                    </div>
                    <div class="body">
                        <div class="code">${escapeHtml(text)}</div>
                    </div>
                </div>
            `;
        }
    }
});

async function showHome() {
    vorxel.scrollUp();
    vorxel.setTitle({ title: "Nether Web UI" });
    vorxel.setHTML({
        selector: "main",
        content: ""
    })

    nwui.headings.create({
        level: 1,
        content: "Welcome to Nether Web UI",
        parent: "main",
    });

    nwui.cards.create({
        parent: "main",
        id: "links"
    });

    maindb.forEach(page => {
        nwui.cards.addCard({
            onclick: page.func,
            image: `img/links-icons/${page.techname}.svg`,
            heading: page.name,
            parent: "#links"
        })
    });
}

async function showComponents() {
    vorxel.scrollUp();
    vorxel.setTitle({ title: "Components - Nether Web UI" });
    vorxel.setHTML({
        selector: "main",
        content: ""
    })

    nwui.headings.create({
        level: 1,
        content: "Components",
        parent: "main"
    })

    nwui.tabs.create({
        parent: "main",
        id: "components"
    })

    const components = await fetch("json/components.json").then(r => r.json());

    components.forEach(async component => {
        const readme = await fetch(`components/md/${component.techname}.md`).then(r => r.text());

        nwui.tabs.addTab({
            title: component.name,
            id: component.techname,
            parent: "#components",
            innerHTML: marked.parse(readme)
        })
    })
}

async function showAbout() {
    vorxel.scrollUp();
    setTitle("About - Nether Web UI");
    vorxel.setHTML({
        selector: "main",
        content: ""
    })

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "About"
    })

    nwui.tabs.create({
        parent: "main",
        id: "about",
        tabs: [
            {
                title: "What is Nether Web UI",
                id: "what_is_nether_web_ui",
                innerHTML: `
                    <ul>
                        <li>Web service providing free css and js components and basic styles for web developement</li>
                    </ul>
                `
            },
            {
                title: "History",
                id: "history",
                innerHTML: ``
            }
        ]
    })

    const db = await fetch("json/about.json").then(data => data.json());

    nwui.timeline.create({
        parent: "#history",
        id: "timeline",
    })

    db.history.forEach(event => {
        nwui.timeline.addEvent({
            parent: "#timeline",
            date: event.date,
            description: event.content
        })
    })
}

showHome();