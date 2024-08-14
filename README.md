<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O Efeito Nostalgia</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <img src="https://www10.trf2.jus.br/ccjf/wp-content/uploads/sites/9/2022/09/cinema_negro_site6.png" alt="O Efeito Nostálgico" class="logo">
            <h1>O Efeito Nostalgia</h1>
            
  <!-- Barra de pesquisa -->
 <div class="search-container">
    <input type="text" id="search-input" placeholder="Pesquisar...">
    <button id="search-button"><i class="fa fa-search"></i></button>
 </div>
 <!-- Contêiner para resultados da pesquisa -->
 <div class="search-results"></div>
   

                 
                </form>
            </div>
        </div>
    </header>
    <main>
        <!-- Seção de Filmes -->
        <div class="content">
            <h2>Filmes</h2>
            <div class="carousel-container">
                <button class="carousel-button prev">&lt;</button>
                <div class="carousel movie-carousel">
                    <!-- Exemplos de itens do carrossel de filmes -->
                    <div class="carousel-item movie">
                        <img src="https://via.placeholder.com/250x350" alt="Filme 1">
                        <div class="info">
                            <p>Filme 1</p>
                            <a href="#" class="button">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item movie">
                        <img src="https://via.placeholder.com/250x350" alt="Filme 2">
                        <div class="info">
                            <p>Filme 2</p>
                            <a href="#" class="button">Assistir</a>
                        </div>
                    </div>
                    <!-- Adicione mais itens de filmes conforme necessário -->
                </div>
                <button class="carousel-button next">&gt;</button>
            </div>
        </div>

        <!-- Seção de Séries -->
        <div class="content">
            <h2>Séries</h2>
            <div class="carousel-container">
                <button class="carousel-button prev">&lt;</button>
                <div class="carousel series-carousel">
                    <!-- Exemplos de itens do carrossel de séries -->
                    <div class="carousel-item series">
                        <img src="https://via.placeholder.com/250x350" alt="Série 1">
                        <div class="info">
                            <p>Série 1</p>
                            <a href="#" class="button">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item series">
                        <img src="https://via.placeholder.com/250x350" alt="Série 2">
                        <div class="info">
                            <p>Série 2</p>
                            <a href="#" class="button">Assistir</a>
                        </div>
                    </div>
                    <!-- Adicione mais itens de séries conforme necessário -->
                </div>
                <button class="carousel-button next">&gt;</button>
            </div>
        </div>

        <!-- Seção de Novelas -->
        <div class="content">
            <h2>Novelas</h2>
            <div class="carousel-container">
                <button class="carousel-button prev">&lt;</button>
                <div class="carousel novelas-carousel">
                    <!-- Exemplos de itens do carrossel de novelas -->
                    <div class="carousel-item novela">
                        <img src="https://via.placeholder.com/250x200" alt="Novela 1">
                        <div class="info">
                            <p>Novela 1</p>
                            <div class="episode-selector">
                                <label for="novela1-episode-select">Selecionar Episódio:</label>
                                <select id="novela1-episode-select">
                                    <option value="1">Episódio 1</option>
                                    <option value="2">Episódio 2</option>
                                    <!-- Adicione mais episódios conforme necessário -->
                                </select>
                            </div>
                            <a href="#" class="button">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item novela">
                        <img src="https://via.placeholder.com/250x200" alt="Novela 2">
                        <div class="info">
                            <p>Novela 2</p>
                            <div class="episode-selector">
                                <label for="novela2-episode-select">Selecionar Episódio:</label>
                                <select id="novela2-episode-select">
                                    <option value="1">Episódio 1</option>
                                    <option value="2">Episódio 2</option>
                                    <!-- Adicione mais episódios conforme necessário -->
                                </select>
                            </div>
                            <a href="#" class="button">Assistir</a>
                        </div>
                    </div>
                    <!-- Adicione mais itens de novelas conforme necessário -->
                </div>
                <button class="carousel-button next">&gt;</button>
            </div>
        </div>
           <!-- <h2>Livros Históricos</h2> -->
<div class="content">
    <h2 class="carousel-title">Livros Nostálgicos</h2>
    <div class="carousel-container">
        <button class="carousel-button prev">&lt;</button>
        <div class="carousel books-carousel">
            <div class="carousel-item book">
                <img src="https://www.martinclaret.com.br/wp-content/uploads/2017/04/81EeKVLI3CL.jpg" alt="Livro 1">
                <div class="info">
                    <p>Romeu e Julieta</p>
                    <a href="https://www.ebooksbrasil.org/adobeebook/romeuejulieta.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            <div class="carousel-item book">
                <img src="https://lumisfera.com.br/media/catalog/product/cache/448b14783702479fd1e19b7f6178513a/1/3/13308001-o-m_gico-de-oz.jpg" alt="Livro 2">
                <div class="info">
                    <p>O Mágico de Oz</p>
                    <a href="https://www.coletivoleitor.com.br/wp-content/uploads/2020/03/o-magico-de-oz.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            <div class="carousel-item book">
                <img src="https://veja.abril.com.br/wp-content/uploads/2016/12/Diario-de-Um-Banana-Rodrick-E-O-Cara.jpg?crop=1&resize=1212,909" alt="Livro 3">
                <div class="info">
                    <p>Diário de um Banana Vol 2</p>
                    <a href="https://servicos.seara.sc.gov.br/uploads/sites/335/2021/12/1751618_DIARIO_DE_UM_BANANA____Rodrick_e_Jeff_Kinney_5161506256.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            <div class="carousel-item book">
                <img src="https://cdn.textstudio.com/output/preset/preview/large/2/3/6/1/1632_69934.webp" alt="Livro 4">
                <div class="info">
                    <p>Turma da Mônica</p>
                    <a href="https://educacao.massaranduba.org/wp-content/uploads/2020/11/GIBI-DA-MONICA.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            <div class="carousel-item book">
                <img src="https://www.otempo.com.br/content/dam/otempo/editorias/entretenimento/2023/5/entretenimento-livro-literatura-classico-antoine-de-saint-exupery-80-anos-pequeno-principe-80-anos-pequeno-principe-80-anos-curiosidades-1708776462.jpeg" alt="Livro 5">
                <div class="info">
                    <p>O Pequeno Príncipe</p>
                    <a href="https://www.sesirs.org.br/sites/default/files/paragraph--files/o_pequeno_principe_-_antoine_de_saint-exupery_1.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            <div class="carousel-item book">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL34GmaYM_SXmReWnN6BWjKMcrIIeDCVM0dA&s" alt="Livro 6">
                <div class="info">
                    <p>O Menino Maluquinho</p>
                    <a href="https://contranarrativas.wordpress.com/wp-content/uploads/2019/02/ziraldo-o-menino-maluquinho.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            <div class="carousel-item book">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuXHVltWtNEdiyvGYlx7YlCgsByLQPxngU9TjQKJTpWeKcsCLA-_xxcTniDoIKT2WdQM&usqp=CAU" alt="Livro 7">
                <div class="info">
                    <p>Alice no País das Maravilhas</p>
                    <a href="https://www.ebooksbrasil.org/adobeebook/alicep.pdf" class="button" target="_blank">Ler</a>
                </div>
            </div>
            
        </div>
        <button class="carousel-button next">&gt;</button>
            </div>
           <!-- Nova Seção de Mangas -->
<div class="content">
    <h2>Mangás</h2>
    <div class="carousel-container">
        <button class="carousel-button prev">&lt;</button>
        <div class="carousel manga-carousel">
            <!-- Exemplos de itens do carrossel de mangas -->
            <div class="carousel-item manga">
                <img src="https://i5.walmartimages.com/seo/My-Hero-Academia-Shota-Aizawa-Action-Figure-7_9599736b-81a7-4630-adcf-47d8ddb25816.88674f1f269a024f78d42901a400612c.jpeg" alt="Manga 1">
                <div class="info">
                    <p>Boku no Hero cap 406</p>
                    <a href="https://mangaonline.biz/capitulo/boku-no-hero-academia-capitulo-406/" class="button">Ler</a>
                </div>
            </div>
            <div class="carousel-item manga">
                <img src="https://seeklogo.com/images/J/jujutsu-no-kaisen-logo-E3E409F37B-seeklogo.com.png" alt="Manga 2">
                <div class="info">
                    <p>Jujutsu Kaisen Cap 265</p>
                    <a href="https://mangaonline.biz/capitulo/jujutsu-kaisen-capitulo-265/" class="button">Ler</a>
                </div>
            </div>
            <div class="carousel-item manga">
                <img src="https://pm1.aminoapps.com/8871/92264e489f8a8355fb97554d86bc4a6705bad104r1-400-400v2_00.jpg" alt="Manga 3">
                <div class="info">
                    <p>Boruto: Two Blue Vortex Cap 1</p>
                    <a href="https://mangaonline.biz/capitulo/boruto-two-blue-vortex-capitulo-1/" class="button">Ler</a>
                </div>
            </div>
            <div class="carousel-item manga">
                <img src="https://i.pinimg.com/474x/4a/17/1f/4a171f2bfd2e242c8f60da4f4a857c2f.jpg" alt="Manga 4">
                <div class="info">
                    <p>Kimetsu no Yaiba Cap 140</p>
                    <a href="https://mangaonline.biz/capitulo/kimetsu-no-yaiba-capitulo-140/" class="button">Ler</a>
                </div>
            </div>
            <div class="carousel-item manga">
                <img src="https://i.pinimg.com/originals/ee/20/ba/ee20ba1558d5c4f2fbd21c928855fbed.png" alt="Manga 5">
                <div class="info">
                    <p>Bleach Cap 1</p>
                    <a href="https://mangaonline.biz/capitulo/bleach-capitulo-1/" class="button">Ler</a>
                </div>
            </div>
            <div class="carousel-item manga">
                <img src="https://mangaonline.biz/wp-content/uploads/2022/10/img_or30031910_0003.jpg" alt="Manga 6">
                <div class="info">
                    <p>Spy X Family Cap 1</p>
                    <a href="https://mangaonline.biz/capitulo/spy-x-family-capitulo-1/" class="button">Ler</a>
                </div>
            </div>
            <div class="carousel-item manga">
                <img src="https://lh6.googleusercontent.com/proxy/okAlaz0djfdxhrDM-wVI9_pfYyN0N9kmL2qdma6_jnRHa-Hn5GUyBllovQiBdckptO06n22RannOd99iniEqc1bWjJzPHEtdhCd83G_7Xb-bhPzKMwZgq5eyhgo3iVIkWXjN0Kdg5V-xKn-9RbgsSQ" alt="Manga 7">
                <div class="info">
                    <p>One Piece Cap 1098 </p>
                    <a href="https://mangaonline.biz/capitulo/one-piece-capitulo-1098/" class="button">Ler</a>
                </div>
            </div>
        </div>
        <button class="carousel-button next">&gt;</button>
    </div>
</div>

        </div>
        

        <!-- Seção de Canais ao Vivo -->
        <div class="content">
            <h2>Canais ao Vivo</h2>
            <div class="carousel-container">
                <button class="carousel-button prev">&lt;</button>
                <div class="carousel live-carousel">
                    <!-- Exemplos de itens do carrossel de canais ao vivo -->
                    <div class="carousel-item live">
                        <img src="https://gkpb.com.br/wp-content/uploads/2022/09/novo-logo-record-news-2022-1024x568.jpg" alt="Canal 1">
                        <div class="info">
                            <p>Record News</p>
                            <a href="https://youtu.be/7Nrm0PZlSxs" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item live">
                        <img src="https://grandesnomesdapropaganda.com.br/wp-content/uploads/2014/03/Logo-SBT.jpg" alt="Canal 2">
                        <div class="info">
                            <p>SBT</p>
                            <a href="https://youtu.be/9ZdmArkJHng" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item live">
                        <img src="https://yt3.googleusercontent.com/lyxnbLskG5qW0mDvs4MZ8lKhxATCaJJbfjhTAGDxw6EZJMn5gSBkQcgzEFwYZTOMhGAHIR6SDg=s900-c-k-c0x00ffffff-no-rj" alt="Canal 3">
                        <div class="info">
                            <p>TV Aparecida</p>
                            <a href="https://youtu.be/ha-Ag0lQmN0" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                    <!-- Novos itens para canais GOV, Rede Brasil, Rádio Tupi e TV Canção Nova -->
                    <div class="carousel-item live">
                        <img src="https://www.otempo.com.br/content/dam/otempo/editorias/politica/governo/2023/7/politica-canal-gov-governo-federal-executivo-1708802990.jpeg" alt="Canal 4">
                        <div class="info">
                            <p>GOV</p>
                            <a href="https://youtu.be/N-jy8UrQ8QI" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item live">
                        <img src="https://imagem.natelinha.uol.com.br/original/rede-brasil-net-claro_5596.jpeg" alt="Canal 5">
                        <div class="info">
                            <p>Rede Brasil</p>
                            <a href="https://youtu.be/Pg3MbmfbOQE" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item live">
                        <img src="https://yt3.googleusercontent.com/sf3RBLY2UFiPriCswRq6j-dxsrQq5M4hRoeopSsCmWxaIL--mDtltPFozktP4JKQzQTy4CSgNag=s900-c-k-c0x00ffffff-no-rj" alt="Canal 6">
                        <div class="info">
                            <p>Rádio Tupi</p>
                            <a href="https://youtu.be/2gstibPYVtE" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                    <div class="carousel-item live">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ989CzUweJyBrF4VG9zddtlOmer2H7-kBO9dRd_29KijkHGR58MMMEHzzhOmUeiRR40QA&usqp=CAU" alt="Canal 7">
                        <div class="info">
                            <p>TV Canção Nova</p>
                            <a href="https://youtu.be/nYUjIDEsO40" class="button" target="_blank">Assistir</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-button next">&gt;</button>
            </div>
<!-- <h2>Jogos Históricos</h2> -->
<div class="content">
    <h2>Jogos Históricos</h2>
    <div class="carousel-container">
        <button class="carousel-button prev">&lt;</button>
        <div class="carousel brazilian-league-carousel">
            <div class="carousel-item brazilian-league">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlTMxlv96c7A954cvpheNWNNxCswVFuxyDQ&s" alt="Jogo 1">
                <div class="info">
                    <p>BARCELONA 6 X 1 PSG A MAIOR VIRADA !</p>
                    <a href="https://youtu.be/-v081W29l0o" class="button" target="_blank">Assistir</a>
                </div>
            </div>
            <div class="carousel-item brazilian-league">
                <img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2017/04/18/realbayernrt6.JPG" alt="Jogo 2">
                <div class="info">
                    <p>REAL MADRID X BAYERN 2013</p>
                    <a href="https://youtu.be/e5A0ZJcHfig" class="button" target="_blank">Assistir</a>
                </div>
            </div>
            <div class="carousel-item brazilian-league">
                <img src="https://ogimg.infoglobo.com.br/in/16370963-4b3-848/FT1086A/20150606173701611rts.jpg" alt="Jogo 3">
                <div class="info">
                    <p>JUVENTUS X BARCELONA 2017</p>
                    <a href="https://youtu.be/PxgqpphnkGo" class="button" target="_blank">Assistir</a>
                </div>
            </div>
            <div class="carousel-item brazilian-league">
                <img src="https://ogimg.infoglobo.com.br/in/12594289-c32-5b4/FT1086A/760/SOCCER-CHAMPIONS_-GJI1M58UH.1.jpg?posicaoFoto3" alt="Jogo 4">
                <div class="info">
                    <p>REAL MADRID vs ATLETICO 2013</p>
                    <a href="https://youtu.be/PoLulnZGsd8" class="button" target="_blank">Assistir</a>
                </div>
            </div>
            <div class="carousel-item brazilian-league">
                <img src="https://a.espncdn.com/photo/2018/0713/r400396_1296x729_16-9.jpg" alt="Jogo 5">
                <div class="info">
                    <p>FRANÇA X BRASIL FINAL DA COPA 1998</p>
                    <a href="https://youtu.be/ci1m5lqKD9E" class="button" target="_blank">Assistir</a>
                </div>
            </div>
            <div class="carousel-item brazilian-league">
                <img src="https://s2-ge.glbimg.com/oYNl7_aPOhQClAXpJIiEW8L5xzE=/0x0:2717x1811/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2016/07/19/neymar-ronaldinhogaucho-ae.jpg" alt="Jogo 6">
                <div class="info">
                    <p>Santos  x  Flamengo 2011 Que jogo !!</p>
                    <a href="https://youtu.be/eog8hfzTTSY" class="button" target="_blank">Assistir</a>
                </div>
            </div>
            <div class="carousel-item brazilian-league">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWjfv2hm1j3-2C2_lZ870QlUJnGPmhz9rEhE-Zm2YlFCLxF2JHuuo7NYHD7KhWoIT-T4&usqp=CAU" alt="Jogo 7">
                <div class="info">
                    <p>ARGENTINA X ALEMANHA FINAL DA COPA 1986</p>
                    <a href="https://youtu.be/A8d5Fys9Lu0" class="button" target="_blank">Assistir</a>
                </div>
            </div>
        </div>
        <button class="carousel-button next">&gt;</button>
    </div>
</div>

           
                    
                </div>
                <button class="carousel-button next">&gt;</button>
            
        </div>

        <!-- Modal -->
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 class="modal-title">Título do Item</h2>
                <img class="modal-img" src="" alt="Imagem do Item">
                <div class="modal-info">Informações sobre o item.</div>
                <a class="modal-link" href="#" target="_blank">Assistir</a>
                <div id="season-selector" class="selector-container">
                    <h3>Selecione a Temporada</h3>
                    <select id="season-select">
                        <option value="1">Temporada 1</option>
                        <!-- Adicione mais temporadas conforme necessário -->
                    </select>
                </div>
                <div id="episode-selector" class="selector-container">
                    <h3>Selecione o Episódio</h3>
                    <select id="episode-select">
                        <option value="1">Episódio 1</option>
                        <!-- Adicione mais episódios conforme necessário -->
                    </select>
                </div>
                <div class="rating">
                    <input type="radio" id="star5" name="rating" value="5">
                    <label for="star5" title="5 estrelas"><span class="fa fa-star"></span></label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4" title="4 estrelas"><span class="fa fa-star"></span></label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3" title="3 estrelas"><span class="fa fa-star"></span></label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2" title="2 estrelas"><span class="fa fa-star"></span></label>
                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1" title="1 estrela"><span class="fa fa-star"></span></label>
                </div>
                
            </div>
        </div>
    </main>
    <script src="scripts.js"></script>
</body>
</html>

 