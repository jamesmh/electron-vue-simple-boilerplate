<template>
    <slide-transition>
        <div class="main">
            <h3 v-html="welcomeMessage"></h3>
            <child-component></child-component>
            <hr>
            <router-link to="/second">Go To Second Route</router-link>
        </div>
    </slide-transition>
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
                <br />
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