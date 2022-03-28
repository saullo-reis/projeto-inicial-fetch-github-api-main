const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `
                <div class = "info">
                    <img src="${user.avatarUrl} alt="Foto do perfil do usuário"/>
                    <div class = "data">
                        <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                        <p>${user.bio ?? 'Não possui bio cadastrada'}</p>]
                    </div>
                </div>
                <div class="followersAndFollowing">
                    <div class="followers">
                        <h3>👥Seguidores</h3>
                        <p>${user.followers}</p>
                    </div>
                    <div class="following"> 
                        <h3>👥Seguindo</h3>
                        <p>${user.following}</p>
                    </div>
                </div>`
        
                let repositoriesItens = ''
                user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                            <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                            <ul>
                                                                                <li class="emote">🍴${repo.forks_count}</li>
                                                                                <li class="emote">⭐${repo.stargazers_count}</li>
                                                                                <li class="emote">👀${repo.watchers_count}</li>
                                                                                <li class="emote">💻${repo.language}</li>
                                                                            </ul>
                                                                            </a>
                                                                        </li>`)
                

                if(user.repositories.length > 0){
                    this.userProfile.innerHTML += `<div class="repositories section">
                        <h2>Repositórios</h2>
                        <ul>${repositoriesItens}</ul>
                    </div>`
                }

                let eventsItens = ''

                user.events.forEach(event => eventsItens += `<li><a href="${event.payload.forkee.html_url}" target="_blank"</a>${event.type}</a></li>`)

                if (user.events.length > 0){
                    this.userProfile.innerHTML += `
                    <div class="repositories section">
                        <h2>Eventos<h2>
                        <ul>${eventsItens}</ul>
                    </div>`
                }
    },
    renderNotFound(){
        this.userProfile.innerHTML += "<h3>Usuário não encontrado.<h3>"
    }
}

export { screen }