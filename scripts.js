const movies = [
    { title: 'O Poderoso Chefão 2', img: 'https://pbs.twimg.com/media/FxfaE4fXsAID4Fz.jpg:large', link: 'https://drive.google.com/file/d/1YtsfkCzXzjnnPASbKOIyRBFOcTcnaQRw/view', genre: 'Crime', duration: '175 min', year: '1974' },
    { title: 'Star Wars: Episódio IV ', img: 'https://m.media-amazon.com/images/I/612h-jwI+EL._AC_UF1000,1000_QL80_.jpg', link: 'https://drive.google.com/file/d/1vZDRk35V-NbMKFXvH7ps5SsUKB3xJr48/view', genre: 'Crime', duration: '151 min', year: '2006' },
    { title: 'Uma Linda Mulher', img: 'https://br.web.img2.acsta.net/medias/nmedia/18/95/60/14/20417708.jpg', link: 'https://drive.google.com/file/d/1vjRMAXFuwLbvcjJ0YCPY2M3i7-2VtEqR/view', genre: 'Sci-Fi', duration: '148 min', year: '2010' },
    { title: 'O Senhor dos Anéis AS Duas Torres', img: 'https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg', link: 'https://drive.google.com/drive/folders/0BxYfydc53aj7LVdGemlTN2MxZmc?resourcekey=0-K3seOz2wN6nnJfkQ79OJHg', genre: 'Fantasy', duration: '178 min', year: '1990' },
    { title: 'Interstellar', img: 'https://m.media-amazon.com/images/S/pv-target-images/8698aa0aa73e5acae0d4ec7fd46e6be40e7b9bd14668ce6d8694ae7442d2a722.jpg', link: 'https://drive.google.com/file/d/1hrjLEbpfp1Lao6kGsfI4ftMI2phrLZ-c/view', genre: 'Sci-Fi', duration: '169 min', year: '2014' },
    { title: 'O Exorcista', img: 'https://s2-techtudo.glbimg.com/gYLTmV4M8vZAtJMtve9XC3gC50A=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/V/8/B435G7RFyZCdlpBZgWsg/maxresdefault.jpg', link: 'https://drive.google.com/drive/folders/1-egYkAf2Eq_P41IaxZx_8H12TnWMHzPx', genre: 'Horror', duration: '122 min', year: '1973' },
    { title: 'Pulp Fiction', img: 'https://http2.mlstatic.com/D_NQ_NP_814050-MLA75849537199_042024-OO.jpg', link: 'https://drive.google.com/file/d/1q_S0EC9E804bAftobsEoAQUwXjab_CW8/view', genre: 'Crime', duration: '154 min', year: '1994' },
    { title: 'A Rede Social', img: 'https://upload.wikimedia.org/wikipedia/pt/b/b2/A_Rede_Social.png', link: 'https://youtu.be/gyjpKOFX4Bw', genre: 'Drama', duration: '120 min', year: '2010' }
];
const series = [
    { title: 'O Castelo Rá-Tim-Bum', img: 'https://m.media-amazon.com/images/M/MV5BNTllYmZmNDAtZTU2ZC00MWVhLWIzYzUtMjQzYmEwYTgwNDNkXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_FMjpg_UX1000_.jpg', link: 'https://libreflix.org/assistir/castelo-ratimbum', genre: 'Children', duration: '30 min/episódio', year: '1994', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Gravity Falls', img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/03A4EB3D71AE0BE1E33A9FC6A0D7DF2C2679A96CB22F776104E43F563BA014C9/scale?width=1200&aspectRatio=1.78&format=webp', link: 'https://drive.google.com/drive/folders/1hV7rvy7XGOw1KJxDQ_0JKIgE3en8fMLn', genre: 'Adventure', duration: '22 min/episódio', year: '2012', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Avatar: A Lenda de Aang', img: 'https://m.media-amazon.com/images/I/71mhp9pzo3L._AC_UF1000,1000_QL80_.jpg', link: 'https://drive.google.com/drive/folders/1VFOwJBBEAMuBasP58MZS9B0AtgWVGdfV', genre: 'Adventure', duration: '23 min/episódio', year: '2005', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Doug', img: 'https://m.media-amazon.com/images/M/MV5BNTMzYThjZjUtYzBiOS00YjQyLTgzZGMtNjg3OTU3MDA3NWYyXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg', link: 'https://drive.google.com/drive/folders/0B5yM7A4o8Y7NaEUtLThvejJQQ1U?resourcekey=0-fykuEpEdO9AZJFqeyJGOMQ', genre: 'Comedy', duration: '30 min/episódio', year: '1971', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'As Três Espiãs Demais', img: 'https://yt3.googleusercontent.com/vfv3zX-Nnb_mYUuQxMC54agtVbueMNFyRLTbOGUvH9vcyu-LDXJp-QMI-1mrBx8A4DFs4hMQ=s900-c-k-c0x00ffffff-no-rj', link: 'https://youtu.be/di3Ja7rMkd0?list=PLlx1Jroya6QUJaIofIGdHV27NVtdnFlWn', genre: 'Adventure', duration: '22 min/episódio', year: '2001', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Luluzinha', img: 'https://i.pinimg.com/236x/17/a4/1f/17a41f17eed5df0356aa50978a75107e.jpg', link: 'https://youtu.be/8Fbg-fdS_6Y', genre: 'Comedy', duration: '22 min/episódio', year: '1959', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Chaves', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UTVgI2On-9XMhThudbDG7Yy68V6A1L-iO8SwgcFH_L-Y2rTWe9tIL5_hrbtcpFvy9pk&usqp=CAU', link: 'https://youtu.be/dtnt7yrFQ_c', genre: 'Comedy', duration: '30 min/episódio', year: '1971', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Chaves (Desenho)', img: 'https://br.web.img3.acsta.net/pictures/22/10/14/21/15/3674980.jpg', link: 'https://youtu.be/gVo4NB04h3g', genre: 'Comedy', duration: '22 min/episódio', year: '2006', seasons: { 'Temporada 1': ['Episódio 1'] } },
    { title: 'Pica-Pau', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVxYxOjNQMJaGzyOUrL3WzjNaYV3URD_1EA&s', link: 'https://youtu.be/khaqJBl5T-A', genre: 'Comedy', duration: '22 min/episódio', year: '1957', seasons: { 'Temporada 1': ['Episódio 1'] } }
];


const novelas = [
    { 
        title: 'Poliana Moça', 
        img: 'https://upload.wikimedia.org/wikipedia/pt/e/ef/Poliana_Mo%C3%A7a.png', 
        link: 'https://www.youtube.com/watch?v=GwdJ_1B4kCs&list=PLmV1LF20F48pBIhmBHzhtJZddvIlHGyLr', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2022', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'As Aventuras de Poliana', 
        img: 'https://upload.wikimedia.org/wikipedia/pt/b/b9/Logo_de_As_Aventuras_de_Poliana.png', 
        link: 'https://www.youtube.com/watch?v=yxqSn7gx_dc&list=PLiH4Mr24sPkOIu9ME6COHdB2m-6xMuD-n', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2018', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Chiquititas', 
        img: 'https://upload.wikimedia.org/wikipedia/pt/0/04/Chiquititas2013.jpeg', 
        link: 'https://youtu.be/tH5TLMAka6w?list=PLmV1LF20F48oAlz6kfq92F1675xUizvgM', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '1997', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Cúmplices de Resgate', 
        img: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Logo_de_C%C3%BAmplices_de_um_Resgate.png', 
        link: 'https://youtu.be/lyKvMQuvXrg?list=PLLTBRifDXIy_5o3FPjY0ILjfUxTpRBZ9-', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2015', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Carrossel', 
        img: 'https://i.pinimg.com/736x/67/8d/a1/678da1444e324f65b6d23599f3842f62.jpg', 
        link: 'https://www.dailymotion.com/video/x80vd1e', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2012', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Meu Pecado', 
        img: 'https://www.tribunapr.com.br/wp-content/uploads/sites/36/2023/08/11094103/meu-pecado.jpg', 
        link: 'https://ok.ru/video/3510876572256', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2009', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Amanhã é Para Sempre', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAP6QnD70oEAPBV8sxxnToN0PlBg9rx4eWFA&s', 
        link: 'https://canalnatelinhaonline.blogspot.com/2018/02/amanha-e-para-sempre-capitulo-1-sem.html', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2008', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    }
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