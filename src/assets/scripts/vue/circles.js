import Vue from 'vue'


const circles = {
    template:"#circles",
    props:{
        circlePercentage: Number,
        circleName: String,
    },
    methods: {
        drawCircleDependsOnPercentage() {
            const circle = this.$refs['circle']
            const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dashoffset"));
            const percent = (dashOffset / 100) * (100 - this.circlePercentage);
            circle.style.strokeDashoffset = percent;
            circle.style.opacity=this.circlePercentage + '%';
        }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    }
}

const circleList = {
    template:"#circles-list",
    components: {
        circles
    },
    props: {
        circleList:Object
    }

}

new Vue ({
    el:"#vue-circles",
    template:"#skill-list",
    components:{
        circleList
    },
    data() {
        return {
            circles:{}
        }
    },
    created() {
        this.circles = require('../../../data/experience.json');
    }
})