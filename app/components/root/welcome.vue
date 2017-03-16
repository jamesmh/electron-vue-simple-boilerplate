<template>
    <div class="main">        
        <h3>{{ welcomeMessage }}</h1>
        <child-component></child-component>
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                welcome: this.$globals.resources.welcome,
                ipcMessage: ''
            }
        },

        mounted() {
            debugger;
            //This event is triggered in '/electron/events'
            this.$ipc.on("vue-welcome-message-response", (event, message) => this.ipcMessage = message);

            //Event registered in '/electron/bootstrap/ipcRegistration'
            this.$ipc.send("vue-welcome-message");
        },

        computed: {
            welcomeMessage() {
                return `Welcome: ${this.welcome}
                Ipc Main says: ${this.ipcMessage}
                `;
            },

        }
    }
</script>

<style scoped lang="scss">
    .main {
        text-align: center;
    }
</style>