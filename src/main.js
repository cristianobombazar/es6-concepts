class App {

    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();
        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua startup',
            urlPath: 'https://avatars.githubusercontent.com/u/28929274?v=4',
            htmlPath: 'https://github.com/cristianobombazar'
        });
        console.log(this.repositories);
    }
}

new App();