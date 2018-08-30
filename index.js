var taskApp = new Vue({
    el: '#taskApp',
    data: {
        tasks: [
           
        ]
    },
    methods: {
        addTask: function (e) {
            e.preventDefault();
            //This if prevents that the input adds empty tasks :D
            if (this.tasks.name !== ""){
                this.tasks.push({
                    name: this.tasks.name,
                    done: false
                });
                this.tasks.name="";
            }
            
        },

        //Vamos a usar javascript para entrar al array de task y dividirlo y tomar el valor que necesitamos para poder eliminarlo
        deleteTask: function (task) {
            //Borra la primera ocurrencia de task 
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }

});