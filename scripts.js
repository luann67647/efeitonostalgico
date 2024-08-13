const movies = [
    { title: 'O Poderoso Chefão 2', img: 'https://pbs.twimg.com/media/FxfaE4fXsAID4Fz.jpg:large', link: 'https://drive.google.com/file/d/1YtsfkCzXzjnnPASbKOIyRBFOcTcnaQRw/view', genre: 'Crime', duration: '175 min', year: '1974' },
    { title: 'Star Wars: Episódio IV ', img: 'https://m.media-amazon.com/images/I/612h-jwI+EL._AC_UF1000,1000_QL80_.jpg', link: 'https://drive.google.com/file/d/1vZDRk35V-NbMKFXvH7ps5SsUKB3xJr48/view', genre: 'Crime', duration: '151 min', year: '2006' },
    { title: 'Uma Linda Mulher', img: 'https://br.web.img2.acsta.net/medias/nmedia/18/95/60/14/20417708.jpg', link: 'https://drive.google.com/file/d/1vjRMAXFuwLbvcjJ0YCPY2M3i7-2VtEqR/view', genre: 'Sci-Fi', duration: '148 min', year: '2010' },
    { title: 'Interstellar', img: 'https://m.media-amazon.com/images/S/pv-target-images/8698aa0aa73e5acae0d4ec7fd46e6be40e7b9bd14668ce6d8694ae7442d2a722.jpg', link: '/imagem/filme2.mp4', genre: 'Sci-Fi', duration: '169 min', year: '2014' },
    { title: 'O Exorcista', img: 'https://s2-techtudo.glbimg.com/gYLTmV4M8vZAtJMtve9XC3gC50A=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/V/8/B435G7RFyZCdlpBZgWsg/maxresdefault.jpg', link: '/imagem/filme4.mp4', genre: 'Horror', duration: '122 min', year: '1973' },
    { title: 'Pulp Fiction', img: 'https://http2.mlstatic.com/D_NQ_NP_814050-MLA75849537199_042024-OO.jpg', link: '/imagem/@hm_drive - pulp fiction.mp4', genre: 'Crime', duration: '154 min', year: '1994' },
    { title: 'A Rede Social', img: 'https://upload.wikimedia.org/wikipedia/pt/b/b2/A_Rede_Social.png', link: '/imagem/fime1.mp4', genre: 'Drama', duration: '120 min', year: '2010' }
];





// Função para criar a barra de pesquisa
function createSearch(items, containerClass) {
    const container = document.querySelector(containerClass);
    const input = document.getElementById('search-input');

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        container.innerHTML = '';

        items.forEach(item => {
            if (item.title.toLowerCase().includes(query)) {
                const element = document.createElement('div');
                element.className = 'carousel-item';
                element.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <div class="info">
                        <h3>${item.title}</h3>
                        <p>${item.genre}</p>
                        <p>${item.duration}</p>
                        <p>${item.year}</p>
                        <a href="${item.link}" class="button" target="_blank">Assistir</a>
                    </div>
                `;
                element.addEventListener('click', () => {
                    showModal(item);
                });
                container.appendChild(element);
            }
        });
    });
}

function renderList(container, items, type) {
    container.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${type}`;
        
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;
        
        const button = document.createElement('a');
        button.href = '#';
        button.className = 'button';
        button.textContent = 'Assistir';
        button.onclick = () => openModal(item, type);
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.innerHTML = `
            <p><strong>Gênero:</strong> ${item.genre}</p>
            <p><strong>Duração:</strong> ${item.duration}</p>
            <p><strong>Ano:</strong> ${item.year}</p>
        `;

        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating';

        for (let i = 1; i <= 4; i++) {
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `${item.title}-rating-${i}`;
            input.name = `${item.title}-rating`;
            input.value = i;

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.innerHTML = `<span>&#9734;</span>`; // Estrela vazia

            ratingDiv.appendChild(input);
            ratingDiv.appendChild(label);
        }

        itemDiv.appendChild(img);
        itemDiv.appendChild(infoDiv);
        itemDiv.appendChild(ratingDiv);
        itemDiv.appendChild(button);

        container.appendChild(itemDiv);
    });
}

function openModal(item, type) {
    const modal = document.getElementById('modal');
    const seasonSelector = document.getElementById('season-selector');
    const episodeSelector = document.getElementById('episode-selector');
    const seasonSelect = document.getElementById('season-select');
    const episodeSelect = document.getElementById('episode-select');
    

    // Limpar seletores
    seasonSelector.innerHTML = '';
    episodeSelector.innerHTML = '';

    if (type === 'series' || type === 'novelas') {
        // Adicionar opções de temporada
        const seasons = Object.keys(item.seasons);
        seasonSelector.innerHTML = `
            <label for="season-select">Temporada:</label>
            <select id="season-select">
                ${seasons.map(season => `<option value="${season}">${season}</option>`).join('')}
            </select>
        `;

        // Adicionar opções de episódio baseadas na primeira temporada
        const episodes = item.seasons[seasons[0]] || [];
        episodeSelector.innerHTML = `
            <label for="episode-select">Episódio:</label>
            <select id="episode-select">
                ${episodes.map(episode => `<option value="${episode}">${episode}</option>`).join('')}
            </select>
        `;
        
        seasonSelect.addEventListener('change', function() {
            const selectedSeason = this.value;
            const episodes = item.seasons[selectedSeason] || [];
            episodeSelector.innerHTML = `
                <label for="episode-select">Episódio:</label>
                <select id="episode-select">
                    ${episodes.map(episode => `<option value="${episode}">${episode}</option>`).join('')}
                </select>
            `;
        });
    }

    // Atualizar modal com informações do item
    modal.querySelector('.modal-title').textContent = item.title;
    modal.querySelector('.modal-img').src = item.img;
    modal.querySelector('.modal-info').innerHTML = `
        <p><strong>Gênero:</strong> ${item.genre}</p>
        <p><strong>Duração:</strong> ${item.duration}</p>
        <p><strong>Ano:</strong> ${item.year}</p>
    `;
    modal.querySelector('.modal-link').href = item.link;

    // Exibir o modal
    modal.style.display = 'block';
}

function filterList() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.carousel-item');

    items.forEach(item => {
        const title = item.querySelector('img').alt.toLowerCase();
        const genre = item.querySelector('.info p').textContent.toLowerCase();
        if (title.includes(query) || genre.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const movieContainer = document.querySelector('.movie-carousel');
    const seriesContainer = document.querySelector('.series-carousel');
    const novelaContainer = document.querySelector('.novelas-carousel');
    
    renderList(movieContainer, movies, 'movie');
    renderList(seriesContainer, series, 'series');
    renderList(novelaContainer, novelas, 'novela');

    const prevButtons = document.querySelectorAll('.carousel-button.prev');
    const nextButtons = document.querySelectorAll('.carousel-button.next');

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carousel = button.nextElementSibling;
            carousel.scrollLeft -= carousel.offsetWidth;
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carousel = button.previousElementSibling;
            carousel.scrollLeft += carousel.offsetWidth;
        });
    });

    // Adiciona o listener para a barra de pesquisa
    document.getElementById('search-input').addEventListener('input', filterList);
});

// Fechar o modal ao clicar no 'x'
document.querySelector('.modal .close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
// Função para criar o seletor de temporadas e episódios
function createSeasonEpisodeSelectors(series) {
    const seasonSelector = document.getElementById('season-selector');
    const episodeSelector = document.getElementById('episode-selector');

    let currentSeries = series[0];

    // Preencher o seletor de temporadas
    Object.keys(currentSeries.seasons).forEach(season => {
        const option = document.createElement('option');
        option.value = season;
        option.textContent = season;
        seasonSelector.appendChild(option);
    });

    // Atualizar os episódios quando a temporada é selecionada
    seasonSelector.addEventListener('change', (event) => {
        const selectedSeason = event.target.value;
        const episodes = currentSeries.seasons[selectedSeason];

        episodeSelector.innerHTML = '';
        episodes.forEach(episode => {
            const option = document.createElement('option');
            option.value = episode;
            option.textContent = episode;
            episodeSelector.appendChild(option);
        });
    });

    // Atualizar a série atual ao selecionar uma série
    document.getElementById('series-selector').addEventListener('change', (event) => {
        currentSeries = series.find(s => s.title === event.target.value);
        seasonSelector.innerHTML = '';
        episodeSelector.innerHTML = '';
        Object.keys(currentSeries.seasons).forEach(season => {
            const option = document.createElement('option');
            option.value = season;
            option.textContent = season;
            seasonSelector.appendChild(option);
        });
        seasonSelector.dispatchEvent(new Event('change'));
    });

    // Inicializar o seletor de episódios
    seasonSelector.dispatchEvent(new Event('change'));
}

// Criar carrosséis
createCarousel(movies, '.movie-carousel');
createCarousel(series, '.series-carousel');
createCarousel(novelas, '.novelas-carousel');
createCarousel(channels, '.channels-carousel');
// Função para criar a barra de pesquisa
function createSearch(items, containerClass) {
    const container = document.querySelector(containerClass);
    const input = document.getElementById('search-input');
    const resultsContainer = document.querySelector('.search-results');

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        resultsContainer.innerHTML = ''; // Limpa os resultados anteriores

        // Verifica se há uma consulta
        if (query.length > 0) {
            items.forEach(item => {
                if (item.title.toLowerCase().includes(query)) {
                    const element = document.createElement('div');
                    element.className = 'carousel-item';
                    element.innerHTML = `
                        <img src="${item.img}" alt="${item.title}">
                        <div class="info">
                            <h3>${item.title}</h3>
                            <a href="${item.link}" class="button" target="_blank">Ler</a>
                        </div>
                    `;
                    resultsContainer.appendChild(element);
                }
            });
        } else {
            resultsContainer.innerHTML = '<p>Digite algo para pesquisar...</p>';
        }
    });
}

// Inicializar seletores de temporadas e episódios
createSeasonEpisodeSelectors(series);

// Configurar o botão do modal para mostrar informações
document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const allItems = [...movies, ...series, ...novelas, ...channels];
        const selectedItem = allItems.find(i => i.title === title);
        showModal(selectedItem);
    });
});