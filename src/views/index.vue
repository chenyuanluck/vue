<template>
    <h1>Auth Flow{{loggedIn}}</h1>
</template>

<style>
    h1 {
        color: #F00;
    }
</style>

<script>
    class test {
        data() {
            return {
                loggedIn: "TEST"
            }
        }

        created() {
            console.log('@@@@@@@@@@@@@');
        }
    }
    let page = {
        data: function () {
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