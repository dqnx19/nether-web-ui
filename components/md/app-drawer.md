## Importing API
```javascript
import * as appDrawer from "./app-drawer.js";
```

## API - Create

```javascript
appDrawer.create({
    parent: "body",
    apps: [
        {
            name: "",
            icon: "",
            link: ""
        }
    ]
});
```

## API - Toggle

```javascript
toggle({
    selector: ".app-drawer"
});
```