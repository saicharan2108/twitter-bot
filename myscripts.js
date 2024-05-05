const twitter = document.getElementById("twitter");


const twitter_templete = 
  {
  templateId: "twitter",
  actions: [
    {
      actionType: "click",
      way:"xpath",
      xpath: "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/section/div/div/div[1]/div/div/article/div/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div/div[1]/div",
    },
    {
      actionType: "click",
      way:"selector",
      selector: "div[role='menuitem']",
    },
  
    {
      actionType: "click",
      way:"xpath",
      xpath: "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/section/div/div/div[1]/div/div/article/div/div/div[2]/div[2]/div[4]/div/div/div[3]/div/div/div[1]/div",
    },
    {
      actionType: "input",
      way:"xpath",
      xpath: "html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[1]/div/div/div/form/div[1]/div/div/div/label/div[2]/div/input", 
      value: "@elonmusk"
    }
  ],
  metadata: {
    created: new Date(),
    modified: new Date(),
    author: "SystemAdmin"
  }
}

  twitter.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: twitterFn,
        args: [twitter_templete]
      });
    });
  }








const  twitterFn  = async (templete) =>{
  const actions = templete.actions 
  for (let i = 0; i < actions.length; i++){
    if (actions[i].actionType === 'click'){
      if (actions[i].way === 'selector'){
        let btn = await document.querySelector(actions[i].selector);
        await btn.click();
      }
      else if (actions[i].way === 'xpath'){
        let element = document.evaluate(
          actions[i].xpath,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
      
        if (element) {
          await element.click();
        } else {
          console.error('Element not found');
          return;
        }
      }

    }
    else if (actions[i].actionType === 'input'){
        if (actions[i].way === 'selector'){
          let inputEle = await document.querySelector(actions[i].selector);
          await inputEle.click();
          inputEle.value =await  actions[i].value;
        }
        else if (actions[i].way === 'xpath'){
          
          let element = document.evaluate(
            actions[i].xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue;
        
          if (element) {
            await element.click();
            element.value = await actions[i].value
            element.textContent = await actions[i].value

          } else {
            console.error('Element not found');
            return;
          }
        }
  
      }

    }
  }




//   async function executeActions() {
//     const element = document.evaluate(
//       "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/section/div/div/div[1]/div/div/article/div/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div/div[1]/div",
//       document,
//       null,
//       XPathResult.FIRST_ORDERED_NODE_TYPE,
//       null
//     ).singleNodeValue;
  
//     if (element) {
//       await element.click();
//     } else {
//       console.error('Element not found');
//       return;
//     }
  
//     let repost = await document.querySelector("div[role='menuitem']")
//     await repost.click();
//    await alert(repost)



//    const like = await document.evaluate(
//     "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/section/div/div/div[1]/div/div/article/div/div/div[2]/div[2]/div[4]/div/div/div[3]/div/div/div[1]/div",
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue;

//   if (like) {
//     await like.click();
//   } else {
//     console.error('Element not found');
//     return;
//   }
//   await alert(like.innerHTML, "alert on liking")

//    const post = await document.evaluate(
//     "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div/div[2]/div/div/div/div",
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue;

//   if (post) {
//     await post.click();
//   } else {
//     console.error('Element not found');
//     return;
//   }
//   await alert(post.innerHTML)


  
  




  

//   const tweet = await document.evaluate(
//     "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div/div/div/div/div/div/span",
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue;

//   if (tweet) {
//     await tweet.click();
    
//   } else {
//     console.error('Element not found');
//     return;
//   }


//   const span = await document.querySelector("[data-text='true']") 
//   await span.click();
//   span.textContent = await "Spark Flow";
//   span.value=await "Spark Flow";


//   span.textContent = await "Spark Flow";
//   span.value=await "Spark Flow";

//   const inputEle = await document.evaluate(
//     "html/body/div[1]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[1]/div/div/div/form/div[1]/div/div/div/label/div[2]/div/input",
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   ).singleNodeValue;

//   if (inputEle) {
//     await inputEle.click();
//     inputEle.value = await "@elonmusk"
//   } else {
//     console.error('Element not found');
//     return;
//   }



// // let searchAndExplore = await document.querySelector("a[aria-label='Search and explore']")
// // await searchAndExplore.click();
// // alert("Clicked")

// // let search = await document.querySelector("input[placeholder='Search']")
// // await search.click();
// // for (let char in  "@elonmusk"){
// //      search.value = search.value+ "@elonmusk"[char]
// //      alert(char)
// // }
// // await alert("Elon Entered")
// // let pro = await document.querySelector("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > main:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)")
// // await pro.click();
// //  const ele = document.evaluate(
// //  "/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[5]/div/section/div/div/div[1]/div/div/article/div/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div/div[1]/div",
// //   document,
// //   null,
// //    XPathResult.FIRST_ORDERED_NODE_TYPE,
// //   null
// // ).singleNodeValue;

// //   await ele.click();
// // const re  = await document.evaluate("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]",
// //  document,
// //    null,
// //   XPathResult.FIRST_ORDERED_NODE_TYPE,
// //      null
// //    ).singleNodeValue;

// //    await repost.click();
// //   await alert(repost)


// //   }

 
//   // Call the function to execute the actions
  
// }
// executeActions();




//     let signin = await document.querySelector("a[href='/login']") 
//     await signin.click();
//     let label = await document.querySelector(".css-175oi2r.r-1roi411.r-z2wwpe.r-rs99b7.r-18u37iz") 
//     await label.click();
//     let username = await document.querySelector("input[name='text']")
//     username.value = await "8712388153";
//     let next = await document.querySelector("body div:nth-child(6)")
//      await next.click();

