# MotorK Front End Assignment

## Assignment

You have to work on an existing application:
 
 * the application must be usable from the most common mobile, tablet and desktop devices;
 * the application must be compatible with IE11;
 * the application must contain an image gallery, located under the `gallery` tab;
 * the code must be modularized;
 * the form must go under a validation process and handle a file upload via Ajax (there's no API provided, so just mock the flow);
 * every new interaction added must get along with the existing ones;
 * refactor old legacy jQuery code (choose what you think has the major impact).
 
We've already stubbed the structure of the application, here's a rundown of the various folders:

 * `data` contains the JSON used to build the gallery
 * `src` contains all the source code (you should spend most of your time here)


## Technologies

The following technologies must be employed:

 * ES6
 * SCSS
 
The following technologies can be employed:

 * Vue.js
 * Grunt
 * Webpack


## Usage

Run `npm i`: a local server will start and serve the app at [http://0.0.0.0:8080/](http://0.0.0.0:8080/)


### API

You can retrieve a static JSON useful to build the gallery by calling `/data/cars.json`, once the local server is running.


### Tests

No test suite is provided, but introducing tests is considered a significant plus.



### Responsive design

Replicate the responsive behaviour seen in this [GIF](./responsive.gif).

### Dev Doc
 
1) Webpack is used for bundling the JS.
2) Babel used to convert ES6 code to ES5 old code to support is all browser.
3) Vue JS is shown for spliting the JS as component based and it's simple to learn, believe me this is my first app.
4) Removed all jquery related codes, used plugins like flickity for slide and gsap for animation.
5) Created own pagination for gallery section to display car list.
6) Made as responsive site.
7) Form validation I used VeeValidate plugin, I chosen because its stright forward and also package size is small.
8) I splitted the code as component based both JS and CSS.
9) I tought of incuding moment JS for day, month and year selection but its mock form so I didn't done.
10) I removed jquery because its huge library which is unnecessary also I didn't included the lib JS like modernizer, utils
11) I added 3 sample test case in pagination using Jest
