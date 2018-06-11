navigator.serviceWorker.register('/sw.js').then(reg => {
    console.log('Service worker registered:', reg);
}).catch(function(err) {
    console.log('Service worker reg fail:', err);
});