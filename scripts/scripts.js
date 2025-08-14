// ################# Part 1: Getting Started
// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");
// 2. Set the background color of mainEl to the value stored in --main-bg CSS custom property.
mainEl.style.backgroundColor = `var(--main-bg)`;
// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
// 4. Add a class of flex-ctr to mainEl
mainEl.classList.add(`flex-ctr`);

// ################### Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);
// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;
// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor =  `var(--top-menu-bg)`;
// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

// ################### Part 3: Adding Menu Buttons
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// 1. Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks){
// 2. Create an <a> element.
let a = document.createElement('a');
// 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
a.setAttribute(`href`,link.href);
// 4. Set the new element's content to the value of the text property of the "link" object.
a.textContent = link.text;
// 5. Append the new element to the topMenuEl element.
topMenuEl.appendChild(a)
}

// ################### ALAB 316.3.1: | DOM Manipulation (Part Two)
// ✅ Part 1: Getting Started
// ✅ Part 2: Adding Additional HTML and CSS

// ✅ Part 3: Creating the Submenu
// // //✅ 3.1) Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);
// // //✅ 3.2) Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`;
// // //✅ 3.3) Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor =  `var(--sub-menu-bg)`;
// // //✅ 3.4) Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`);
// // //✅ 3.4.1) Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = (`absolute`);
// // //✅ 3.4.2) Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;

//    Part 4: Adding Menu Interaction
// // //✅ 4.1 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll(`a`);
// //   ✅ 4.2 Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
// //   ✅ 4.2.1 ...call the event object's preventDefault() method.
event.preventDefault();
// //   ✅ 4.2.2 ...immediately return if the element clicked was not an <a> element.
if (event.target.tagName !== 'A') return;
// //   ✅ 4.2.3 Log the content of the <a> to verify the handler is working.
console.log(event.target.textContent);
// //   ✅ 4.3.1 Remove 'active' class from all links
topMenuLinks.forEach(link => link.classList.remove('active'));
// //   ✅ 4.3.2 Toggle 'active' class on the clicked link
  event.target.classList.toggle('active');
});
// //   ✅ 4.3 Add a toggled "active" state to each menu item, showing if it's currently selected:
//      ✅ 4.3.1 The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
//      ✅ 4.3.2 The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!