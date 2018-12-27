<ul class="js-items">
    <li v-if="!items.length">Sorry, there are no items.</li>
    <li v-for="item in items" :class="{'is-blue':item.includes('blue')}">
        {{ item }}
    </li>
</ul>
<script>
    new Vue({
        el: '.js-items',
        data: {
            items: []
        },
        created() {
            // 1. It makes an Ajax requesting using fetch().
            fetch('https://example.com/items.json')
            // 2. It parses the response from JSON into a JavaScript object
            .then((res) => res.json())
            .then((data) => {
                // 3. It stores the downloaded items in the items data property. 
                this.items = data.items;
            });
        }
    });
</script>