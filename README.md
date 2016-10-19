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

### **bd-disable**
Disables the selected elements by adding ng-disabled directive.

**Receives:** value or variable
**Type:** boolean
**Default:** `false`

```html
<form action="get" block-disable bd-disable="model.disable">
. . .
</form>
```
or
```html
<form action="get" block-disable bd-disable="true">
. . .
</form>
```


### **bd-hide**
Hides the selected elements by adding ng-hide directive.

**Receives:** value or variable
**Type:** boolean  
**Default:** `false`

```html
<form action="get" block-disable bd-hide="model.hide">
. . .
</form>
```
or
```html
<form action="get" block-disable bd-hide="true">
. . .
</form>
```

### **block-disable**
Defines the targeted elements for disabling/hiding

**Receives:** value
**Type:** string (with a valid json array)
**Default:** `['input','textarea','select','button']`

```html
<form action="get" block-disable="['textarea', 'button']">
. . .
</form>
```

## Development - Contribute!

- Improvements are always welcome. Fork it and send a pull request!
- English revisions to this document are more than welcome :)
