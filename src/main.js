class App {

    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
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
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repository => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repository.urlPath);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repository.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repository.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    }
}

new App();