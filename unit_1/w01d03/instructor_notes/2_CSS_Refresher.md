
Title: CSS REFRESHER <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Instructor: Arthur Bernier Jr<br>
Creator: Karolin Rafalski <br>
Updated: Arthur BernierJr <br>
Competencies: CSS <br>
Prerequisites: Basic HTML, CSS

---
# Morning Exercise

## CSS REFRESHER Intro


When the web started, monitors were all fairly similar. Even when CSS was created and implemented, the way people viewed websites was still quite similar.

Because of this, CSS was designed to have features similar to print and newspaper layouts and many things were set by pixel size and the goal was to have a design be 'pixel perfect'

As monitor technology improved, more widths and sizes became available. Browser technology also advanced in many ways, including allowing for browsers to be resized to nearly any size. Finally, mobile devices were introduced that were not only  much smaller than a typical monitor, they also had two possible orientations.

## Can I use?

As new technologies arise in HTML and CSS, some browsers are faster to adopt them than others. In the past, IE was often the least able to adapt changes.

To check whether a certain feature is compatible in a browser, we can check a web site called [`Can I use`](https://caniuse.com)

Let's search for `flexbox` (you'll learn about it in a later lesson). As you can see it is fully compatible in all browsers except for IE, where it is partially supported.  


## Should I Prefix?

If you find a feature that is not supported, or not fully supported, you can go to [`Should I Prefix`](http://shouldiprefix.com/)

There is a list of CSS features that either no longer require a prefix (coded in green). Or are in blue. If they are blue, you can expand them and see how you would write the vendor prefixes, so you can have compatibility across browsers.

Things are always changing, but right now a feature called `appearance` requires vendor prefixing. You can see an example below.

For the appearance feature, you would write the property three times. Two times would include the vendor prefix so that it can be used in different browsers.

As you look at older code, you may see vendor prefixes for features that no longer require it. It's ok! It won't break anything. But you won't need to include those vendor prefixes on new work.

![vendor prefix](https://i.imgur.com/OCHkMlT.png)

You can also use a CSS prefixer to write the prefixes for you, then just copy paste [Pleaeease.io](http://pleeease.io/play/)

## Get started

- Navigate to our` GA folder
- then create `index.html` `main.css` inside of a folder called `first_app` 
- You should see HTML content. The background should be blue This lets us know that the HTML and CSS files are properly connected.

## Lets Code Along and build an app header with modern css
![Nova Class](https://media.git.generalassemb.ly/user/15881/files/a0ac2400-7e79-11ea-995f-67579d61e562)


## Here is the functionality we will build in CSS alone without using JS
![nova](https://media.git.generalassemb.ly/user/15881/files/21b9ea00-7e7f-11ea-9644-e2f796d17605)

## Before we build it lets talk about how CSS works

### The breakdown of a CSS Selector

![css-selector](https://media.git.generalassemb.ly/user/15881/files/d3651500-7e97-11ea-8931-de69a2b6003c)

### How CSS is read by the browser
![css-works-1](https://media.git.generalassemb.ly/user/15881/files/c9431680-7e97-11ea-8a3c-4b96c1d8e1f2)

When a webpage is loaded in the browser first the page is loaded, then <br>
the html page is parsed, then the css is loaded and the Dom is created ( more on the Dom next week),<br> 
then the CSS is Parsed and the browser decides how to resolve conflicting CSS and processes final values, <br>
Once that happens we then create the CSS Object Model, then we get the render tree, then we render the website with the visual formatting model, <br>
Then we get our website.

## Forget Everything I just Said
1. You don't need to understand all of that to write good CSS
1. Main takeaway is this , the CSS gets parsed and resolves conflicts between your styles
1. The way css figures out what CSS should be valued as more important is know as CSS Selector Specificity
1. Specificity is what you need to understand

![importance-specificity-sourceorder](https://media.git.generalassemb.ly/user/15881/files/ccd69d80-7e97-11ea-8762-f23952dd1fec)



## Specificity Broken Down
![specifishity](https://media.git.generalassemb.ly/user/15881/files/cfd18e00-7e97-11ea-8f5e-a38930f30cf5)


## Lets write some CSS


----------------------------------

References:

[Can I use](https://caniuse.com/)

[Should I prefix](http://shouldiprefix.com/)

[Pleaeease.io](http://pleeease.io/play/)

[All About Floats](https://css-tricks.com/all-about-floats/)

[Solving Clearfix](https://css-tricks.com/snippets/css/clear-fix/)

[linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)

Citations:

GA Distinguished Falcuty Member - Karolina Rafalski<br>
Jonas.io <br>
Estelle Weyl The Standardista <br>

