class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{

    constructor() {
        super();
        this.user = "Cristiano Bombazar"
    }

    showUser() {
        console.log(this.user);
    }
}


var myList = new TodoList();
document.getElementById('newTodo').onclick = function () {
    myList.add('new Todo')
}
myList.showUser();