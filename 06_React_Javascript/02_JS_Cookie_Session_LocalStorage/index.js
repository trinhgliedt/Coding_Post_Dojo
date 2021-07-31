// Cookies vs localStorage vs Session Storage
//                      | Cookies           | Local Storage | Session Storage
// Capacity             | 4 KB              | 10MB          | 5 MB
// Browsers             | HTML4/5           | HTML5         | HTML5
// Accessible from      | Any window        | Any window    | Same tab
// Expires              | Manually set      | Never         | On tab close
// Storage location     | Browser & server  | Browser only  | Browser only
// Sent with requests   | Yes               | No            | No

// SIMILARITIES
// all 3 are being stored in the actual browsers users are using (Google Chrome, Firefox, IE, and these browsers are independent from each other).
// Users do not share cookies and local storage between them. So, if you set local storage for a user, none of the other users of the site will be able to see that because it's stored in the browser of that user's computer only and nowhere else. So it's really meant to store information for a single user, and it's not important if this information get lost, since the user can always delete these our of their browsers

// DIFFERENCES
// There are kind of 2 categories here: Local storage and session storage are very similar in how they interact there're only differences in a few instances. While cookies are almost completely different than the other 2, and are also quite a bit older than the other 2.
// To get started, cookies can only store a much smaller amount ofn information, the capacity here is 4 kb for most browsers, while local storage and session storage can hold 10 MB and 5 MB respectively. This mean cookies are way smaller than local storage and session storage, but that's ok for their use cases. Also, cookies are supported in older browsers which support HTML4, because they've been around for much longer, but that's not sth you need to worry about bcs HTML5 is in pretty much any browsers being used now.
// Also, cookie and local storage are available for any window inside the browser, so if you have Google Chrome opened on one tab or another tab, the cookies are going to be available in all of the tabs that you have opened to that website. While for example session storage is only available in the single tab that you have opened that you set it at, and it won't be available if they open another tab and go to your website.
// as for expiration, this if there localStore and session storage are very different from each other. Session storage is for that one browsing session, which is why it's called session storage, and it's removed as soon as the user closes the tab where that session was set. While local storage is around forever until the user ends up deleting it or you delete it yourself inside of your code. As for cookies, you actually have to set when they're expired, usually you would set for an infinite expiration, for example for a year, very very far in the future, or you're going to want it to expire in a certain time frame to see if the user has done something in that time frame, so you have complete control over when the cookies are going to expire.
// As for storage location, local storage and session storage are both from the browser and we said above. With cookies, while they're stored in the browser, they're sent to the server every time the user requests something from them whether it's in image, html file, css file, anything, the cookies are sent along with the request, which is why they have a much smaller capacity, because all the information in the cookies get sent to the server, so if you have a lot of cookies that are really large it will slow down your request to the server and the request coming back from the server. This is why you want the cookies that you used are small and as limited as possible so you don't slow down the request anymore than you need to. It's also make cookies really good for doing certain authentication tasks because they actually get sent to the server from the browser unlike local storage or session storage. And that's really all the main differences between the 3.
// For the most part, if you really want to store something in the user's browser, you almost always want to use local storage or session storage depending on how long you want it to live, whether you want it to be for one session or whether you want it to live after they close the browser. And you only want to use cookies if you need the aspect of sending it to the server. Cos if you don't need to send it to the server, you're just adding extra overhead and cookies are much harder to deal with. So you should always use local storage or session storage unless you need to send it to the server.
// Below are a few examples of cookies, local storage or session storage
// You can see local storage, session storage in the browser -> inspect -> application. And they're for the actual site that we're on.

// localStorage.setItem: 2 parameters: key, and value to set
localStorage.setItem("name", "Cassidy");

// get value for that key
console.log(localStorage.getItem("name"));

// Now if we remove the setItem line above, the value of the local storage still stays even though we're not resetting every time the page refreshes. That's because local storage is persistent just like session storage, but session storage would end if we close out the browser
// Now, in the browser let's remove that local storage variable (by clicking on the crossed out circle) so we no longer have this variable to see what happens if we try to get something that doesn't exist, and we can see that it'll return null saying it couldn't find the item we're looking for.

// remove this item using code:
localStorage.removeItem("name");
// we can see that the variable is removed

// Session storage works exactly like local storage, all the methods work exactly the same
sessionStorage.setItem("name", "Jon");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

// and that's all there is for session storage and local storage. They're really straightforward to work with, and you can think of them as like a json object or javascript object where you have key value pairs that you can interact with by setting them and removing them.
// If you want to update sth in the storage, like if we want to update this name Job, all we need to do is to setItem again.
sessionStorage.setItem("name", "Jon");
sessionStorage.setItem("name", "Bob");

// Then, what we have left is cookies. Cookies are a little more complicated and quite different to work with than local storage and session storage.
// Unlike session storage and local storage, cookies don't have a nice interface to interact with. The only way we get to interact with cookie is through the document.cookie object, and this object will allow us to see all the cookies and send new cookies. So if we want to create a new cookie, we'll just set this value of cookie equal to the cookie that we want to send
document.cookie = "name=Kyle";
// Now in the browser we can see this new cookie with a numbers of field including the domain that it comes from, a path and an expiration date.
// What if we want to set an expiration date for the cookie. For the date, say 1/1/2022, we need to set a UTC string of 1/1/2022 onto this expire value. And the easiest way to do that is to use javascript dates
document.cookie = "name=Kyle; expires=" + new Date(2022, 0, 1).toUTCString();
// When we save that, you'll see that our expires section in the browser is now updated
// If we want this cookie to never expire, all we need to do is to make it a date so far in the future that it doesn't matter, for example year 9999
document.cookie = "name=Kyle; expires=" + new Date(9999, 0, 1).toUTCString();
// We can also add other cookies by doing this exact same thing, all we need to do is document.cookie like above and it will add a new cookie instead of overwriting the old one
document.cookie =
  "lastName=Smith; expires=" + new Date(9999, 0, 1).toUTCString();
// Now we have 2 cookies even though it looks like we're overwriting the old cookie. This is just adding a new cookie every time we say cookie equal
// And if we want to view the cookie, there's no good way of viewing it other than viewing all the cookies at once.
// The only way we have to view them is through the document.cookie object
console.log(document.cookie);
// So it will print, but there's no easy way to parse that other than parsing the string itself.
// So I recommend if you need to work with cookies in anyway, to use a small library that helps manage cookie and make them easier to use, kinda like local storage and session storage are much easier to use, rather than having to remember all the string related syntax and hor to parse the document.cookie string
