import * as vorxel from "https://vorxel.nether.click/vorxel/vorxel.js"
import { marked } from "./lib/marked.js";
import * as App from "./components/js/app.js"
import * as Headings from "./components/js/headings.js"
import * as Cards from "./components/js/cards.js"
import * as Tabs from "./components/js/tabs.js"
import * as Header from "./components/js/header.js"
import * as Main from "./components/js/main.js"
import * as Footer from "./components/js/footer.js"


App.useStyles();
Headings.useStyles();
Cards.useStyles();
Tabs.useStyles();
Header.useStyles();
Main.useStyles();
Footer.useStyles();

/* vorxel.importJS([
    { src: "https://nether.click/js/import-app-drawer.js" },
    { src: "https://nether.click/js/import-app-check.js" },
]);*/

vorxel.setFavicon({ url: "img/icons/favicon.svg" });

App.create({
    language: "en",
    theme: "dark"
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

async function showHome() {
    vorxel.scrollUp();
    vorxel.setTitle({ title: "Nether Web UI" });
    vorxel.setHTML({
        selector: "main",
        content: ""
    })

    Headings.create({
        level: 1,
        content: "Welcome to Nether Web UI",
        parent: "main",
    });

    Cards.create({
        parent: "main",
        id: "links",
        cards: []
    });

    maindb.forEach(page => {
        Cards.addCard({
            onclick: page.func,
            image: `img/links-icons/${page.techname}.svg`,
            heading: page.name,
            parent: "links"
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

    Headings.create({
        level: 1,
        content: "Components",
        parent: "main"
    })

    Tabs.create({
        parent: "main",
        id: "components",
        tabs: []
    })

    const components = await fetch("json/components.json").then(r => r.json());

    components.forEach(async component => {
        const readme = await fetch(`components/md/${component.techname}.md`).then(r => r.text());

        Tabs.addTab({
            title: component.name,
            id: component.techname,
            parent: "components",
            innerHTML: marked.parse(readme)
        })
    })
}

async function showAbout() {
    vorxel.scrollUp();
    vorxel.setTitle("About - Nether Web UI");
    vorxel.setHTML({
        selector: "main",
        content: ""
    })

    Headings.create({
        level: 1,
        parent: "main",
        content: "About"
    })

    vorxel.setHTML({
        selector: "main",
        content: marked.parse(await fetch("readme.md").then(readme => readme.text()))
    })

}

showHome();
