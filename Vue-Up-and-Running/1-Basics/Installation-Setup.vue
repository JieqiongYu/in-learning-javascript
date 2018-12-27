<template>
    <!-- 1. div with the ID app, which is where we're going to initiate Vue onto -->
    <div id="app"></div>
</template>

<script src="https://unpkg.com/vue"></script>
<script>
    // Some JavaScript creates a new instance of Vue with the el property set pointing at the the div previously mentioned. 
    new Vue({
        el: '#app',
        created() {
            // This code will run on startup
        }
    });
    // This works great on simple pages, but a bundler such as webpack is needed when tings get complicated. 
</script>

