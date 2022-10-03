# Corporate Web Page

This is a solution of a corporate web page with main screen and ordering form.
![Page Design](https://raw.githubusercontent.com/joana-trots/test-softcorp/master/page-design.png)

## Overview

- Responsive Layout 
- Header bg color changes on scroll
- [Humburger](https://github.com/joana-trots/test-softcorp/blob/master/js/nav.js) on small screens
- Customised ordering form with [handler](https://github.com/joana-trots/test-softcorp/blob/master/js/handleForm.js)


## About Ordering Form 

Customised with CSS (SCSS) only (without any plugins).
There are following form fields:
- option selection
- name input
- email input
- range input
- file input
- submit button
- focus, valid, invalid states 


**Option Selection**

I used intricate way (probably) to mach the [design](https://raw.githubusercontent.com/joana-trots/test-softcorp/master/select-design.png).

It looks and works good in Chrome, and with small inperfections in Firefox and Safary.

NOTE for the future: Try to use ``` <ul><li>1</li></ul>``` instead of ```<select><option>1</option></select>```.


**Range Input**

The range value is displayed next to it.

It's implemented in [handler](https://github.com/joana-trots/test-softcorp/blob/master/js/handleForm.js).


**File input**

Any formats without restrictions.

Once the file is uploaded the input field changes its appearance and the file name displayed next to it.

You can upload another file if needed.

See implementation in [handler](https://github.com/joana-trots/test-softcorp/blob/master/js/handleForm.js).


**Submit Button**

Will not work until all form fields are filled and valid.

After the form was successfully submitted the alert message is displayed.

All form data is printed to the console.

See implementation in [handler](https://github.com/joana-trots/test-softcorp/blob/master/js/handleForm.js).



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS (SCSS)
- Flexbox
- BEM
- Media queries
- jQuery
