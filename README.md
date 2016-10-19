# Block Disable Angular Directive

An AngularJS (1.x) directive to mass disable/hide inputs.

## Usage

#### Download from bower
```sh
$ bower install block-disable-directive --save
```

#### Reference script file

```html
<script src="dist/block-directive.js"></script>
```

#### Inject `riverjr.blockdisable` module

```javascript
angular.module('yourApp', ['riverjr.blockdisable'])
```

#### Bind directive `block-disable` to a parent element, like a form

```html
<form action="get" block-disable>
  <input type="email" name="email" ng-model="model.email" placeholder="Email" />
  <input type="password" name="password" ng-model="model.password" placeholder="Password" />
  <button type="submit">Submit</button>
</form>
```

## How it works

It will disable all form elements inside the block that had the directive added. 

## Options

Give a json value to the `block-disable` attribute for some options:

```html
<form action="get" block-disable="{ ... }">

. . .

</form>
```

### **disable**
Disables the selected elements by adding ng-disabled directive.

**Type:** boolean  
**Default:** `true`

```html
<form action="get" block-disable="{ disable: true }">

. . .

</form>
```

### **hide**
Hides the selected elements by adding ng-hide directive.

**Type:** boolean  
**Default:** `false`

```html
<form action="get" block-disable="{ hide: true }">

. . .

</form>
```

### **elements**
An array of strings with a css selector to each element to be targeted by the directive

**Type:** array  
**Default:** `['input','textarea','select','button']`

```html
<form action="get" block-disable="{ elements: ['texarea', 'button'] }">

. . .

</form>
```

## Development - Contribute!

- Improvements are always welcome. Fork it and send a pull request!
- English revisions to this document are more than welcome :)