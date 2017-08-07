<template>

<div class="mod-tag" id="tag-list">
   <div class="tag-list">
        <h3 class="tag-tit">语种</h3>
        <a class="tag-item" :class="{ tagselect: activeB == index }" v-for="(item,index) in tagname.language" :key="{index}"  @click="selectedB(index)">
            {{item.name}} 
        </a>
    </div>           
    <div class="tag-list">
        <h3 class="tag-tit">流派</h3>
        <a class="tag-item " :class="{ tagselect: activeA == index }" v-for="(item,index) in tagname.genre"  @click="selectedA(index)">
            {{item.name}} 
        </a>
    </div> 
     <div class="tag-list">
        <h3 class="tag-tit">价格</h3>
        <a class="tag-item " :class="{ tagselect: activeC == index }" v-for="(item,index) in tagname.pay"  @click="selectedC(index)">
            {{item.name}} 
        </a>
    </div> 
    <div class="tag-filter">
        <h3>筛选</h3>
        <ul>
            <li>
                <select v-model="selectedType">
                    <option disabled value="">类 别</option>
                    <option  v-for="(item,index) in tagname.type" :value="item.id">    
                        <a href="javascript:;">{{item.name}} </a>
                    </option>
                </select>
            </li>
            <li>
                <select v-model="selectedYear">
                    <option disabled value="">年 代</option>
                    <option  v-for="(item,index) in tagname.year" :value="item.id" >    
                        <a href="javascript:;">{{item.name}} </a>
                    </option>
                </select>
            </li>
            <li>
                <select v-model="selectedCompany">
                    <option disabled value="">公 司</option>
                    <option  v-for="(item,index) in tagname.company" :value="item.id">    
                        <a href="javascript:;">{{item.name}} </a>
                    </option>
                </select>
            </li>
        </ul>
    </div> 
</div>

</template>

<script>
export default {
    name: 'taglist',
    props: [ 'tagname' ],
    data () {
        return {
            activeA: 0,
            activeB: 0,
            activeC: 0,
            selectedType: -1,
            selectedYear: 1,
            selectedCompany: -1,
            genre: 0,
            language: -1,
            pay: 0
        }
    },
    created () {
    },
    watch: {
        selectedType: function (val) {
            this.selectedType = val
            this.selected()
        },
        selectedYear: function (val) {
            this.selectedYear = val
            this.selected()
        },
        selectedCompany: function (val) {
            this.selectedCompany = val
            this.selected()
        }
    },
    methods: {
        selected () {
            this.$emit('selectedOn',
                {
                    genre: this.genre,
                    language: this.language,
                    pay: this.pay,
                    type: this.selectedType,
                    year: this.selectedYear,
                    company: this.selectedCompany
                }
            )
        },
        selectedA (index) {
            this.activeA = index
            this.genre = this.tagname.genre[index].id
            this.selected()
        },
        selectedB (index) {
            this.activeB = index
            this.language = this.tagname.language[index].id
            this.selected()
        },
        selectedC (index) {
            this.activeC = index
            this.pay = this.tagname.pay[index].id
            this.selected()
        }
    }
}
</script>
