## API – create

```javascript
Cards.create({
    parent: "", // Parent HTML element or CSS selector
    id: "", // Unique ID for identifying the card container
    cards: [
        {
            onclick: "", // Click handler (function or JavaScript string)
            image: "", // Image URL
            heading: "" // Card heading
        }
    ]
});
```

## API – addCard

```javascript
Cards.addCard({
    parent: "", // ID of the existing card container
    onclick: "", // Click handler (function or JavaScript string)
    image: "", // Image URL
    heading: "" // Card heading
});
```