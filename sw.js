self.addEventListener('install', event => {
   event.waitUntil(
       caches.open('restaurant-v1').then(cache => {
           return cache.addAll([
               '/',
               '/css/styles.css',
               '/data/restaurants.json',
               '/img/1.jpg',
               '/img/2.jpg',
               '/img/3.jpg',
               '/img/4.jpg',
               '/img/5.jpg',
               '/img/6.jpg',
               '/img/7.jpg',
               '/img/8.jpg',
               '/img/9.jpg',
               '/img/10.jpg',
               '/js/dbhelper.js',
               '/js/index.js',
               '/js/main.js',
               '/js/restaurant_info.js',
               '/restaurant.html'
           ]);
       })
   );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(response => {
            if(response.status == 404) {
                return new Response('Item not found');
            }
            return response;
        }).catch(() => {
            return new Response('That totally failed!')
        })
    );
})