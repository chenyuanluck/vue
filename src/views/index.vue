<template>
    <h1>Auth Flow{{loggedIn}}</h1>
</template>

<script>
    let page = {
        data: function (){
            return {
                loggedIn: "TEST"
            }
        },
        created: function () {
            console.log('@@@@@@@@@@@@@');
        }
    };
    module.exports = page;
</script>