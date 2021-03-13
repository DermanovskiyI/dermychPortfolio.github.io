import Vue from 'vue';

const circles = {
    template: "#circles",
    props: {
        circlePercentage: Number,
        circleText: String
    },
    methods: {
        drawCircleDependsOnPercentage() {
            const circle = this.$refs['circle']
            const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dashoffset"));
            const percent = (dashOffset / 100) * (100 - this.circlePercentage);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    }
}

const circlesList = {
    template: "#circles-list",
    components: {
        circles
    },
    props: {
        experienceGroupObj: Object
    },
}

new Vue ({
    el: "#experience-component",
    data() {
        return {
            circles:{}
        }
    },
    components: {
        circlesList
    },
    created() {
        this.experience = require('../../../data/experience.json');
    },
    template: "#experience",
});

