<template>
    <div id="app">
        <p>Hello, {{ greetee }}! </p>
    </div>
</template>

<script>
    new Vue({
        el: '#app',
        data: {
            greetee: 'world'
        }
    });
</script>