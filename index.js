var app = new Vue({
    el: '#app',
    data: {
        seen:true,
        message:"",
        name: "francois",
        todos: [
            {

                name: "premiere todo"

            },
            {
                name: "deuxieme todo",
              
            },
            {

                name: "troisieme todo",

            }

        ]
    },
    methods:{
        insertTodo: function(){
            this.todos.push({name: this.message})
        },
        supprList: function(index){
            if(todos.name){
            this.todos.splice(index, 1);
            }
        }
    }
})