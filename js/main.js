function RegisterServiceWorker() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./js/sw.js').then((reg) => {
           console.log('Registration succeeded. Scope is ' + reg.scope);
        });
    }
}

RegisterServiceWorker();




document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("message").innerHTML = "unicorn"
})