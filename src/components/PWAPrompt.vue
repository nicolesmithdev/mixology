<template>
    <div v-if="shown" class="pwa-prompt">
        <div class="text">
            <svg-icon type="mdi" :path="mdiPlusBox" size="20" />
            Add app to home screen?
        </div>
        <div class="buttons">
            <button @click="installPWA">Install</button>
            <button @click="dismissPrompt">
                <svg-icon type="mdi" :path="mdiClose" size="20" />
            </button>
        </div>
    </div>
</template>

<script>
import { mdiPlusBox, mdiClose } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

export default {
    components: { SvgIcon },
    data() {
        return {
            shown: false,
            mdiPlusBox,
            mdiClose,
        };
    },
    beforeMount() {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            this.installEvent = e;
            this.shown = true;
        });
    },
    watch: {
        shown(value) {
            if (value) {
                document.body.classList.add("pwa");
            }
        },
    },
    methods: {
        installPWA() {
            this.installEvent.prompt();
            this.installEvent.userChoice.then(() => {
                this.dismissPrompt();
            });
        },
        dismissPrompt() {
            this.shown = false;
            document.body.classList.remove("pwa");
        },
    },
};
</script>