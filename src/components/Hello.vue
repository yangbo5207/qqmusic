<template>
<<<<<<< HEAD
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>stark's test</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">再次测试cjgiser</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
=======
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <h3 v-if="seen">现在你看到我了</h3>

        <ul>
            <li v-for="todo in todos">{{ todo.text }}</li>
        </ul>
        <button @click="counter += 1">{{ counter }}</button>
        <Child message="Hello child!" />
        <Other trans="smg" />

        <div id="counter-event-example">
            <p>{{ total }}</p>
            <Counter v-on:increment="incrementTotal" />
            <Counter v-on:increment="incrementTotal" />
            <Counter v-on:increment="incrementTotal" />
            <Counter />
        </div>

        <div>
            <h2>父组件</h2>
            <exampleSlot0>
                <p>Hello</p>
                <p>Slot</p>
            </exampleSlot0>
        </div>

        <div>
            <h1>具名slot</h1>
            <exampleSlot1>
                <h1 slot="header">先看看这是标题吗</h1>
                <p>sdfsdff</p>
                <p>other sfdsdsf</p>
                <p slot="footer">index</p>
            </exampleSlot1>
        </div>

        <div>
            <h1>作用域插槽</h1>
            <exampleSlot2>
                <template scope="props">
                    <span>Hello from param</span>
                    <span>{{ props.text }}</span>
                </template>
            </exampleSlot2>
        </div>

        <div>
            <exampleSlot3>
                <template slot="item" scope="props">
                    <li>{{ props.text }}</li>
                </template>
            </exampleSlot3>
        </div>

        <component v-bind:is="currentComponent" message="hade"></component>
    </div>

>>>>>>> develop
</template>

<script>
    import Child from './Child'
    import Other from './Other'
    import Counter from './Counter'
    import exampleSlot0 from './exampleSlot0'
    import exampleSlot1 from './exampleSlot1'
    import exampleSlot2 from './exampleSlot2'
    import exampleSlot3 from './exampleSlot3'
    import * as request from '../utils/request'

    request.getHotSearchKeysmod().then(resp => {
        // 在使用时，通过这样方式拿到数据即可
        console.log(resp)
    })

    request.getRecomList().then(resp => {
        console.log(resp)
    })

    const data = {
        msg: 'this is qq music web app',
        seen: false,
        counter: 0,
        total: 1,
        currentComponent: Child,
        todos: [
            { text: 'learn javascript' },
            { text: 'learn vue' },
            { text: 'learn react' }
        ]
    }
    export default {
        name: 'hello',
        components: {
            Child,
            Other,
            Counter,
            exampleSlot0,
            exampleSlot1,
            exampleSlot2,
            exampleSlot3
        },
        data () {
            return data
        },
        methods: {
            incrementTotal: function () {
                this.total += 1
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
       font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
