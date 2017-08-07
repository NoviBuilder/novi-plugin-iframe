# novi-plugin-iframe
Novi Builder Plugin for iframe settings

## How to Install
You should follow several simple steps to install this plugin:
* Copy the novi-plugin-iframe.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change iframe source

## Developer Settings
* querySelector — contains a css selector which defines the Plugin container.

## Usage
For use plugin your element must match the CSS selector of querySelector setting.

For example querySelector value is
```css
iframe[src]
```
In this case you need to add element:
```html
<iframe src="https://www.youtube.com/embed/M96oleMSx-c" frameborder="0" allowfullscreen></iframe>
```