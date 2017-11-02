---
title: "Flexbox Overview"
date: "2017-08-10"
---

### Flexbox Notes

flexbox is the first layout element. It is not designed to layout whole webpages (CSS Grid is)

How to make an element a flex container:

```css
div {
  display: flex;
}
```

This will make the div element a flex container and will have access to the following properties:

* flex-direction - sets direction of the main axis
* flex-wrap - determines if items in flex container wrap or not.
* flex-flow - shorthand for flex-direction and flex-wrap.
* justify-content - positions items on main axis.
* align-items - positions items on cross axis.
* align-content - set how multiple lines are spaced apart from each other. ( no effect if only one line )

The containers child elemnents are called items. They also get access to the following properties:

* flex-grow - Sets growth rate of the flex item when its flex container expands
* flex-basis - Sets absolute width of a flex item.
  * Never use width on your flex items, instead use flex-basis.
* flex-shrink -  Sets shrink rate of the flex item when its flex container expands
* flex - shorthand for flex-grow, flex-shrink, and flex-basis
* order - sets order of a flex item
* align-self - allows an item to align itself on the cross axis.
