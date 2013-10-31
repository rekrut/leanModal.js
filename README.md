# leanModal.js
A super simple JQuery plugin for modal windows. works with your CSS.

Built for all the short dialogs, alerts, panels and such associated with an app, that you may want to handle in a modal window. Designed to handle hidden content, and doesn't apply any styles to the target element, other than for displaying and positioning.

## How To Use

### Step 1

Together with JQuery, include jquery.leanModal.min.js in your page, thusly:

```html
<script type="text/javascript" src="path_to/jquery.leanModal.min.js"></script>
```

### Step 2

Rather than call another stylesheet, simply include the following overlay style block in your existing stylesheet. Additionally, be sure to hide your modal element with 'display: none;' (although that probably goes without saying).

```css
#lean_overlay {
  position: fixed;
  z-index:100;
  top: 0px;
  left: 0px;
  height:100%;
  width:100%;
  background: #000;
  display: none;
}
```

### Step 3

Call the function on your modal trigger, as follows. Be sure to set the href attribute of your trigger anchor to match the id of your target element.

```javascript
$("#trigger_id").leanModal();
```

...or, if you want more than one modal window on the same page, simply add the 'rel' attribute to your triggers, and call the function by attribute, like so:

```javascript
$("a[rel*=leanModal]").leanModal();
```

## Options

In the spirit of keeping things simple, there are only ~~two~~ three options involved: vertical position of the modal element in relation to the document body (default is 100px from the top), the overlay opacity (default is 0.5), and a close button option (default null). You can override these defaults by passing your desired values to the function, like so:

```javascript
$("#trigger_id").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
```

## Events

Additionally, there are two namespaced events available to bind event handlers to. An "open" and "close" event.

```javascript
$('#modal_id').on('open.leanModal', function(e) { alert('The modal is now open.') });
```

and...

```javascript
$('#modal_id').on('close.leanModal', function(e) { alert('The modal is now closed.') });
```  

Simple, and sweet.

## Licensing
Available under the MIT and GPL licenses. See LICENSE file for more information.

## Change Log
- Feb 2012: v1.1 - added a closeButton option. Fixed multiple spawn of #lean_overlay.
- Oct 2013: v1.2 - added open/close events

## Author
@finelysliced

## Contributors
@mitzip
