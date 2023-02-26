<script>
export default {
  data() {
    return {
      "class": "primary",
      "size": "small"
    }
  },
  methods: {
    setClass: (ctx,className) => {
        ctx.class = className
    },
    setSize: (ctx,sizeB) => {
        ctx.size = sizeB
    }
  }
}
</script>

<template>
    <span class="card-btn">
        <p>Buttons</p>
        <p>
            <btn @click="setClass(this,'primary')" class="primary">primary</btn>
            <btn @click="setClass(this,'success')" class="success">success</btn>
            <btn @click="setClass(this,'info')" class="info">info</btn>
            <btn @click="setClass(this,'warning')" class="warning">warning</btn>
            <btn @click="setClass(this,'danger')" class="danger">danger</btn>
            <btn @click="setClass(this,'dark')" class="dark">dark</btn>
            <btn @click="setClass(this,'purple')" class="purple">purple</btn>
            <btn @click="setClass(this,'pink')" class="pink">pink</btn>
            <btn @click="setClass(this,'secondary')" class="secondary">secondary</btn>
            <btn @click="setClass(this,'light')" class="light">light</btn>
            <btn @click="setClass(this,'white')" class="white">white</btn>
            <btn @click="setClass(this,'link')" class="link">link</btn>
        </p>
        <p>
        Use the button classes on an button tag.
        </p>
        <span class="precode">
            <span class="code">
                &lt;btn
                <div class="space"></div>
                <div class="red">
                    class
                </div>
                <div class="black">
                    =
                </div>
                &quot;
                <div class="blue">
                    {{ class }}
                </div>
                    &quot;&gt;
                <div class="black">
                    {{ class }}
                </div>
                    &lt;/btn&gt;
            </span>    
        </span>
        <p>
            Button size
        </p>
        <p>
            <btn @click="setSize(this,'small')" class="small" :class="class">small</btn>
            <btn @click="setSize(this,null)" :class="class">default</btn>
            <btn @click="setSize(this,'large')" class="large" :class="class">large</btn>
        </p>
        <span class="precode">
            <span class="code">
                &lt;btn
                <div class="space"></div>
                <div class="red">
                    class
                </div>
                <div class="black">
                    =
                </div>
                &quot;
                <div class="blue">
                    {{ class }}
                    {{ size }}
                </div>
                    &quot;&gt;
                <div class="black">
                    {{ size }}
                    <span v-if="!size">default</span>
                </div>
                    &lt;/btn&gt;
            </span>    
        </span>
    </span>
</template>
<style scoped>
.card-btn{
    border: 1px solid #e1dede;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px;
    border-radius: 4px;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.card-btn>p {
    font-family: 'Noto Sans Bassa Vah', sans-serif;
    font-family: 'Poppins', sans-serif;
}

.card-btn>p>button{
    margin: 2px;
}

.code{
    padding: 5px;
    font-size: 87.5%;
    color: rgb(113,11,9);
    word-wrap: break-word;
    font-weight: 600;
    display: flex;
    font-family: 'Noto Sans Bassa Vah', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
}

.code>.black{
    color: #333333;
}

.code>.red{
    color: rgb(197,27,20);
}

.code>.blue{
    color: rgb(51,51,252);
}

.space{
    padding: 3px;
}
</style>