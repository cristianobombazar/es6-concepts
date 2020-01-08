import  api from './api';

class App {

    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();
        const repoInput = this.inputEl.value;
        if (repoInput.length === 0) {
            return;
        }

        const response = await api.get(`/repos/${repoInput}`);
        const {name, description, html_url, owner: {avatar_url}} = response.data;

        this.repositories.push({
            name,
            description,
            urlPath: avatar_url,
            htmlPath: html_url
        });

        this.inputEl.value = '';
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
            linkEl.setAttribute('href', repository.htmlPath);
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