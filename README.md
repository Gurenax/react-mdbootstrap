# Material Design Bootstrap 4 for React
Sample Material Design for Bootstrap 4 using React

## Components
* Nav
* Jumbotron
* DropdownButton
* ButtonGroup
* ButtonToolbar
* ToggleSwitch
* Form
* Custom Checkbox
* Card
* Card Deck
* Collapse
* Pagination


## Clean way to import bootstrap, jquery, popper,js and tether in React
1. Install `bootstrap`, `jquery`, `popper.js` and `tether`
```
yarn add bootstrap jquery popper.js tether
```
2. If using material bootstrap, install `mdbootstrap`
```
yarn add mdbootstrap
```

3. Create `include` folder

4. Inside the include folder, create `jquery.js` with the contents
```javascript
import * as $ from 'jquery'

window.jQuery = window.$ = $
```

5. Inside the include folder, create `popper.js` with the contents
```javascript
import Popper  from 'popper.js'

window.Popper = Popper
```

6. Inside the include folder, create `tether.js` with the contents
```javascript
import Tether from 'tether'

window.Tether = Tether
```

7. Inside the include folder, create `bootstrap.js` with the contents
```javascript
import './jquery'
import './tether'
import './popper'

import 'bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
```

8. If using material bootstrap, add `mdb.min.css` as well
```javascript
import './jquery'
import './tether'
import './popper'

import 'bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/mdbootstrap/css/mdb.min.css'
```

9. In the main `index.js`, insert the following import
```javascript
import './include/bootstrap'
```