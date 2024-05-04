const twitter = document.getElementById("twitter");

  twitter.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: twitterFn,
        args: []
      });
    });
  }

const  twitterFn  = async () =>{
    let signin = await document.querySelector("a[href='/login']") 
    await signin.click();

    let label = await document.querySelector(".css-175oi2r.r-1roi411.r-z2wwpe.r-rs99b7.r-18u37iz") 
    await label.click();

    let username = await document.querySelector("input[name='text']")
      username.value = await "8712388153";




let next = await document.querySelector("body div:nth-child(6)")
await next.click();


let searchAndExplore = await document.querySelector("a[aria-label='Search and explore']")
await searchAndExplore.click();
alert("Clicked")

let search = await document.querySelector("input[placeholder='Search']")
await search.click();
search.value = await "@elonmusk"
await alert("Clicked")

let res = await document.querySelector("div[class='css-175oi2r r-6dt33c r-1loqt21 r-o7ynqc r-6416eg r-g2wdr4 r-1ny4l3l'] div[class='css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2']") 
await res.click();
await alert(res);
// create a new keyboard event and set the key to "Enter"
const event = new KeyboardEvent('keydown', {
  key: 'Enter',
  code: 'Enter',
  which: 13,
  keyCode: 13,
});

// dispatch the event on some DOM element
search.dispatchEvent(event);
let enterKeyEvent =await  new KeyboardEvent('keydown', { key: 'Enter' });
await alert(enterKeyEvent.key)
  await search.dispatchEvent(enterKeyEvent);
  await alert("Enter key pressed")


  }
  