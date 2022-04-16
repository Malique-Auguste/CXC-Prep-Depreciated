function setup (params) {
    let iframe = document.getElementsByTagName("iframe")[0];
iframe.addEventListener("message", (event) => {
       console.log("sdd");
  
  }, false);
}


function name(params) {
    let iframe = document.getElementsByTagName("iframe")[0];
    iframe.postMessage("message")
    let parents = iframe.contentWindow.document.getElementsByClassName("flip-entries");
    console.log(parents)
    console.log("s")
}