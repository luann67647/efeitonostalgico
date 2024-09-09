const movies = [
    { 
        "title": "Descendentes 4: A Ascensão de Copas", 
        "img": "https://upload.wikimedia.org/wikipedia/pt/b/bd/DescendantsRiseofRed.jpg", 
        "link": "https://drive.google.com/file/d/1t4zw6cDKmMzzbWnOfKRpybTxFbfh2qaQ/view", 
        "genre": "Fantasy", 
        "duration": "90 min", 
        "year": "2024" 
    },
    { 
        "title": "Titanic", 
        "img": "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg", 
        "link": "https://drive.google.com/file/d/13lvbXXYlVhArY8IiCaequP_ujT8bG8Lj/view", 
        "genre": "Romance", 
        "duration": "180 min", 
        "year": "1997" 
    },
    { 
        "title": "Divertida Mente 2", 
        "img": "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/11072/filme_11072.jpg", 
        "link": "https://youcine.plus/movie/divertida-mente-2-2024", 
        "genre": "Animation", 
        "duration": "N/A", 
        "year": "2024" 
    },
    { 
        "title": "Rio", 
        "img": "https://upload.wikimedia.org/wikipedia/pt/thumb/0/09/Rio_poster.jpg/235px-Rio_poster.jpg", 
        "link": "https://drive.google.com/file/d/1_At6gXE826SnTSBmgGyQsxcbC6SlKewu/view", 
        "genre": "Animation", 
        "duration": "96 min", 
        "year": "2011" 
    },
    { 
        "title": "Meu Malvado Favorito 4", 
        "img": "https://br.web.img3.acsta.net/img/6c/71/6c71afa89fd8ed8999b3e04d8d794a0e.jpg", 
        "link": "https://x.com/i/status/1823212673422491973", 
        "genre": "Animation", 
        "duration": "N/A", 
        "year": "2024" 
    },
    { 
        "title": "Deadpool e Wolverine", 
        "img": "https://upload.wikimedia.org/wikipedia/pt/2/2a/Deadpool_%26_Wolverine_cartaz.jpg", 
        "link": "https://youcine.plus/movie/deadpool-e-wolverine-2024", 
        "genre": "Action", 
        "duration": "120 min", 
        "year": "2024" 
    },
    { 
        "title": "Farofeiros 2", 
        "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEih4oDgSkhVZwAGCuCtAP1YOxtxX0ZF2dWYRr97Ih4UiPWlyfpLvrVLIg0Yy5311sub7EfRhe_VoyKsFDQ75QTIo228Im99yQB29efCm4Mj3HrkZRqTlaPVFiHpxoF__Qd5L8rLtPVFfILQNn0zGdhwNCFVkXju45GmtDW2cvJ5295u3dg24gbGx_N4fwU/s800/capa%20os%20f2.jpg", 
        "link": "https://drive.google.com/file/d/10IRhHPU8bEkfeS1HJxn_hfBz0vjfZiBC/view", 
        "genre": "Comedy", 
        "duration": "N/A", 
        "year": "2024" 
    },
    { 
        "title": "Fazendo Meu Filme", 
        "img": "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/01/31/1027132984-20240131153031.jpg", 
        "link": "https://drive.google.com/file/d/1Xh3toSYHhlHqlyU51WY5qZ1vMYywQqWS/view", 
        "genre": "Romance", 
        "duration": "110 min", 
        "year": "2024" 
    },
    { 
        "title": "Reino Escondido", 
        "img": "https://play-lh.googleusercontent.com/4KlpEKvzZc8ZxV--4DYZ24Lv2Wtq8kzzPpnRho2ntUV4YkZOiMvujHS_u-q5kNXR1_lc", 
        "link": "https://drive.google.com/file/d/1GLgSC0VgLl3cgZU1YDqHNQULTr4-DE6P/view", 
        "genre": "Adventure", 
        "duration": "105 min", 
        "year": "2024" 
    },
    { 
        "title": "Invocação do Mal", 
        "img": "https://upload.wikimedia.org/wikipedia/pt/a/ac/The_Conjuring.jpg", 
        "link": "https://drive.google.com/file/d/1_JApk09OnH5LFUVwh_YvLgK_8F0w8aN0/view", 
        "genre": "Horror", 
        "duration": "112 min", 
        "year": "2013" 
    },
    
    
    { 
        "title": "Freira 2", 
        "img": "https://br.web.img2.acsta.net/c_310_420/pictures/23/07/11/23/06/0833684.jpg", 
        "link": "https://drive.google.com/file/d/1QnvEEq0_si5DmucRhe2_BViGAELuE0PE/view?pli=1", 
        "genre": "Horror", 
        "duration": "N/A", 
        "year": "2024" 
    },
    { 
        "title": "It: A Coisa", 
        "img": "https://br.web.img3.acsta.net/pictures/17/03/30/22/44/345288.jpg", 
        "link": "https://drive.google.com/file/d/1s9lQPHLkkDHTI6njZr-ncaVOtHAyvY47/view", 
        "genre": "Horror", 
        "duration": "135 min", 
        "year": "2017" 
    },
    { 
        "title": "It: A Coisa - Capítulo 2", 
        "img": "https://br.web.img2.acsta.net/pictures/19/08/14/16/00/5320567.jpg", 
        "link": "https://drive.google.com/file/d/1UsLKr-CLtEhBDHonqO1139BdWZt2v098/view", 
        "genre": "Horror", 
        "duration": "169 min", 
        "year": "2019" 
    },
    { 
        "title": "A Morte do Demônio: A Ascensão", 
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPV_J_uokPBXOperADzDoPO6oFj324tE6x7w&s", 
        "link": "https://drive.google.com/file/d/1TGTKCncq_dZ_nvEJRswj-mU8ADk6Qx7h/view", 
        "genre": "Terror/Fantasia ", 
        "duration": "2 horas", 
        "year": "2023" 
    },
    { 
        "title": "Annabelle 2: A Criação do Mal", 
        "img": "https://br.web.img3.acsta.net/pictures/17/07/13/19/09/208315.jpg", 
        "link": "https://drive.google.com/file/d/1p9dRfkbyg_hRtEx1b-EYow27nUJuJTQ1/view", 
        "genre": "Horror", 
        "duration": "109 min", 
        "year": "2017" 
    },
    { 
        "title": "Viva - A Vida É Uma Festa", 
        "img": "https://br.web.img3.acsta.net/pictures/17/12/07/11/33/0502209.jpg", 
        "link": "https://drive.google.com/file/d/1sDeKfKk8F-wDp3xsEW2hbmltNBQtU6o7/view", 
        "genre": "Animation", 
        "duration": "105 min", 
        "year": "2017" 
    },
    { 
        "title": "Zootopia", 
        "img": "https://upload.wikimedia.org/wikipedia/pt/3/3b/ZootopiaOficialPoster.jpg", 
        "link": "https://drive.google.com/file/d/1cpHkt1yJx9CK3zW4OVhI0WkrqAb-cNXB/view", 
        "genre": "Animation", 
        "duration": "108 min", 
        "year": "2016" 
    },
    { 
        "title": "Os Feiticeiros Retornam: Alex vs. Alex", 
        "img": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/955C3C56EC9B147A15BCCE47F1AF29324B5E1FDA24DDD179B22E62CA44EE599D/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp", 
        "link": "https://drive.google.com/file/d/12OSMtvm6_pKY6cTUlguqxEhX8i5Bst8G/view", 
        "genre": "Comédia", 
        "duration": "1 hora", 
        "year": "2013" 
    },
    { 
        "title": "A Pequena Sereia", 
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz1j0fGheX72sjo5Ixc8V5Pm_UoHykIaFxw&s", 
        "link": "https://drive.google.com/file/d/1h7UppmL8o0EiustLV9JtSbSmRr2iS8Eb/view", 
        "genre": "Animation", 
        "duration": "83 min", 
        "year": "1989" 
    },
    { 
        "title": "A Bela e a Fera", 
        "img": "https://play-lh.googleusercontent.com/8Z31HWpuQMGWx7DVHzbBdpI5KhDm1kZ2vQgsM5F9ZSocpbTNmKZ6ckFXmsHJ2fco03pTVA", 
        "link": "https://drive.google.com/drive/folders/185ZjsY7afKNAhyzRKLo8zOdKEAlZZvHa?sort=13&direction=a", 
        "genre": "Animation", 
        "duration": "84 min", 
        "year": "1991" 
    },
    { 
        "title": "A Princesa e o Sapo", 
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpka6lhkVJsFjkMqCML8CcOh8qaShnTJalWQ&s", 
        "link": "https://drive.google.com/drive/folders/185ZjsY7afKNAhyzRKLo8zOdKEAlZZvHa?sort=13&direction=a", 
        "genre": "Animation", 
        "duration": "97 min", 
        "year": "2009" 
    },
    { 
        "title": "Cinderela", 
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ4y6pnXXKkJ2xdmxN7flRIoc_IEL08VpUQ&s", 
        "link": "https://drive.google.com/file/d/1421D5NoVeAi-IwS9wmHHKBdq4sj2yM60/view", 
        "genre": "Animation", 
        "duration": "74 min", 
        "year": "1950" 
    },
    { 
        "title": "Como Eu Era Antes de Você", 
        "img": "https://m.media-amazon.com/images/S/pv-target-images/8a91710a1397dc58e6265d61409e1eb4e399e6c196732ebbe0438eb4919a4c8c.jpg", 
        "link": "https://t.co/Hjybfz8AzM", 
        "genre": "‧ Romance/Drama ", 
        "duration": "1h 50m", 
        "year": "2016" 
    },
    { 
        "title": "Frozen - Uma Aventura Congelante", 
        "img": "https://br.web.img2.acsta.net/pictures/210/461/21046189_20131002174340886.jpg", 
        "link": "https://drive.google.com/drive/folders/185ZjsY7afKNAhyzRKLo8zOdKEAlZZvHa?sort=13&direction=a", 
        "genre": "Animation", 
        "duration": "102 min", 
        "year": "2013" 
    },
    { 
        "title": "Frozen II", 
        "img": "https://i.scdn.co/image/ab67616d0000b2738ee293607c14078e74563944", 
        "link": "https://drive.google.com/file/d/1obj589cHFjEW-cIa6u-cDgGcQHHYc6Gs/view", 
        "genre": "Animation", 
        "duration": "103 min", 
        "year": "2019" 
    },
    { 
        "title": "Valente", 
        "img": "https://br.web.img3.acsta.net/medias/nmedia/18/89/92/72/20126088.jpg", 
        "link": "https://drive.google.com/drive/folders/185ZjsY7afKNAhyzRKLo8zOdKEAlZZvHa?sort=13&direction=a", 
        "genre": "Animation", 
        "duration": "93 min", 
        "year": "2012" 
    },
    { 
       
            "title": "Doutor Estranho",
            "img": "https://images.justwatch.com/poster/16376003/s332/doutor-estranho-2016",
            "link": "https://drive.google.com/drive/folders/1oQZEBxkO4BB2tNQjzOjb3r-hWm6sW5-z?usp=sharing",
            "genre": "Ação / Fantasia",
            "duration": "115 min",
            "year": "2016"
          
          
    }
    

];


const series = [
    { 
        title: 'O Castelo Rá-Tim-Bum', 
        img: 'https://m.media-amazon.com/images/M/MV5BNTllYmZmNDAtZTU2ZC00MWVhLWIzYzUtMjQzYmEwYTgwNDNkXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_FMjpg_UX1000_.jpg', 
        link: 'https://libreflix.org/assistir/castelo-ratimbum', 
        genre: 'Children', 
        duration: '30 min/episódio', 
        year: '1994', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'Gravity Falls', 
        img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/03A4EB3D71AE0BE1E33A9FC6A0D7DF2C2679A96CB22F776104E43F563BA014C9/scale?width=1200&aspectRatio=1.78&format=webp', 
        link: 'https://drive.google.com/drive/folders/1hV7rvy7XGOw1KJxDQ_0JKIgE3en8fMLn', 
        genre: 'Adventure', 
        duration: '22 min/episódio', 
        year: '2012', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'Avatar: A Lenda de Aang', 
        img: 'https://m.media-amazon.com/images/I/71mhp9pzo3L._AC_UF1000,1000_QL80_.jpg', 
        link: 'https://drive.google.com/drive/folders/1VFOwJBBEAMuBasP58MZS9B0AtgWVGdfV', 
        genre: 'Adventure', 
        duration: '23 min/episódio', 
        year: '2005', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'Doug', 
        img: 'https://m.media-amazon.com/images/M/MV5BNTMzYThjZjUtYzBiOS00YjQyLTgzZGMtNjg3OTU3MDA3NWYyXkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_FMjpg_UX1000_.jpg', 
        link: 'https://drive.google.com/drive/folders/0B5yM7A4o8Y7NaEUtLThvejJQQ1U?resourcekey=0-fykuEpEdO9AZJFqeyJGOMQ', 
        genre: 'Comedy', 
        duration: '30 min/episódio', 
        year: '1971', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'As Três Espiãs Demais', 
        img: 'https://yt3.googleusercontent.com/vfv3zX-Nnb_mYUuQxMC54agtVbueMNFyRLTbOGUvH9vcyu-LDXJp-QMI-1mrBx8A4DFs4hMQ=s900-c-k-c0x00ffffff-no-rj', 
        link: 'https://youtu.be/di3Ja7rMkd0?list=PLlx1Jroya6QUJaIofIGdHV27NVtdnFlWn', 
        genre: 'Adventure', 
        duration: '22 min/episódio', 
        year: '2001', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'Luluzinha', 
        img: 'https://i.pinimg.com/236x/17/a4/1f/17a41f17eed5df0356aa50978a75107e.jpg', 
        link: 'https://youtu.be/8Fbg-fdS_6Y', 
        genre: 'Comedy', 
        duration: '22 min/episódio', 
        year: '1959', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'Chaves', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UTVgI2On-9XMhThudbDG7Yy68V6A1L-iO8SwgcFH_L-Y2rTWe9tIL5_hrbtcpFvy9pk&usqp=CAU', 
        link: 'https://youtu.be/dtnt7yrFQ_c', 
        genre: 'Comedy', 
        duration: '30 min/episódio', 
        year: '1971', 
        seasons: { 'Temporadas': ['Episódios'] } 
    },
    { 
        title: 'Chaves (Desenho)', 
        img: 'https://br.web.img3.acsta.net/pictures/22/10/14/21/15/3674980.jpg', 
        link: 'https://youtu.be/gVo4NB04h3g', 
        genre: 'Comedy', 
        duration: '22 min/episódio', 
        year: '2006', 
        seasons: { 'Temporadas': ['Episódios'] } 
    },
    { 
        title: 'Pica-Pau', 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVxYxOjNQMJaGzyOUrL3WzjNaYV3URD_1EA&s', 
        link: 'https://youtu.be/khaqJBl5T-A', 
        genre: 'Comedy', 
        duration: '22 min/episódio', 
        year: '1957', 
        seasons: { 'Temporada ': ['Episódio '] } 
    },
    { 
        title: 'The Good Doctor', 
        img: 'https://imagem.natelinha.uol.com.br/original/the-good-doctor_52a08d58feab6c8bc623ad4ef8ee65055d8f5744.jpeg', 
        link: 'https://drive.google.com/drive/folders/18BaeM7KOXa3-8mHI8m1Yb-AXKFPELqNw', 
        genre: 'Drama', 
        duration: '42 min/episódio', 
        year: '2017', 
        seasons: { 'Temporadas': ['Episódios'] } 
    },
    { 
        title: 'The Walking Dead', 
        img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/933E0D6CAF547F41DEB8C66ECE2DC2B7246A6590FF25AEA936859FE934336EB5/scale?width=1200&aspectRatio=1.78&format=webp', 
        link: 'https://drive.google.com/drive/folders/1mzopVP0f5b3VgJlYdfK6SXj-grdXzOZm', 
        genre: 'Drama', 
        duration: '45 min/episódio', 
        year: '2010', 
        seasons: { 'Temporada 1': ['Episódio 1 ao 5'] } 
    },
    { 
        title: 'Grey\'s Anatomy', 
        img: 'https://m.media-amazon.com/images/S/pv-target-images/6b2feb3599f724635750a996c5d883d1e53db37132b15e7776d89c94ab4f4200.jpg', 
        link: 'https://t.co/FeoscrhSbo', 
        genre: 'Drama', 
        duration: '41 min/episódio', 
        year: '2005', 
        seasons: { 'Temporada 1': ['Episódio 1'] } 
    },
    { 
        title: 'The Umbrella Academy', 
        img: 'https://br.web.img3.acsta.net/pictures/18/12/10/14/01/0178829.jpg', 
        link: 'https://drive.google.com/drive/folders/1iqd1eyNRwep3ZS-kEV0PUFW62nnWYrp_', 
        genre: 'Action', 
        duration: '50 min/episódio', 
        year: '2019', 
        seasons: { 'Temporada 1': ['Episódio 1 Ao 11'] } 
    },
    { 
        title: 'The 100', 
        img: 'https://m.media-amazon.com/images/S/pv-target-images/860fe0991fc2e994b91ff8e8532749df5a3d777c42720cc3e2460bd29a605940.jpg', 
        link: 'https://drive.google.com/drive/folders/10XjReoclJjr4d3rvb7RS8vdzSlDjcf-J', 
        genre: 'Drama ', 
        duration: '50 min/episódio', 
        year: '2014', 
        seasons: { 'Temporada': ['Episódios'] } 

    }
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
        title: 'Gênesis', 
        img: 'https://upload.wikimedia.org/wikipedia/pt/e/e1/G%C3%AAnesis_logo.jpeg', 
        link: 'https://www.dailymotion.com/video/x7yxaya', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2021', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Revelação', 
        img: 'https://imagem.natelinha.uol.com.br/grande/img20130126150815.jpg', 
        link: 'https://www.dailymotion.com/video/x8nwmvi', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2022', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    },
    { 
        title: 'Os Dez Mandamentos', 
        img: 'https://upload.wikimedia.org/wikipedia/pt/9/91/Logotipo_de_Os_Dez_Mandamentos.png', 
        link: 'https://www.dailymotion.com/video/x8encl2', 
        genre: 'Drama', 
        duration: '50 min/episódio', 
        year: '2015', 
        seasons: { 
            'Temporada 1': ['Episódio 1'] 
        } 
    }
];



document.getElementById('logout-button').addEventListener('click', () => {
    // Aqui você pode limpar dados de sessão ou cookies se necessário
    // E redirecionar para a página de login
    window.location.href = 'login.html';
});
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de "Responder"
    const replyButtons = document.querySelectorAll('.reply-button');

    // Adiciona um evento de clique para cada botão de "Responder"
    replyButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Seleciona a área de resposta correspondente
            const replyArea = this.nextElementSibling;

            // Alterna a visibilidade da área de resposta
            if (replyArea.style.display === 'none' || replyArea.style.display === '') {
                replyArea.style.display = 'block';
            } else {
                replyArea.style.display = 'none';
            }
        });
    });

    // Seleciona todos os botões de enviar resposta
    const submitReplyButtons = document.querySelectorAll('.submit-reply');

    // Adiciona um evento de clique para cada botão de enviar resposta
    submitReplyButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Seleciona a área de resposta correspondente
            const replyArea = this.parentElement;
            const textarea = replyArea.querySelector('textarea');
            const replyText = textarea.value.trim();

            // Verifica se o texto não está vazio
            if (replyText !== '') {
                // Cria um novo elemento para a resposta
                const replyDiv = document.createElement('div');
                replyDiv.classList.add('comentario-resposta');
                replyDiv.textContent = replyText;

                // Adiciona a resposta ao final do comentário original
                replyArea.parentElement.appendChild(replyDiv);

                // Limpa o campo de texto
                textarea.value = '';

                // Oculta a área de resposta
                replyArea.style.display = 'none';
            } else {
                alert('Por favor, insira uma resposta antes de enviar.');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButton = document.getElementById('learn-more-button');
    const moreInfo = document.getElementById('more-info');

    learnMoreButton.addEventListener('click', function () {
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            learnMoreButton.textContent = 'Mostrar Menos';
        } else {
            moreInfo.style.display = 'none';
            learnMoreButton.textContent = 'Saiba Mais';
        }
    });
});



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
}// JavaScript para adicionar efeitos interativos à logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.footer-logo img');

    // Efeito de rotação ao passar o mouse
    logo.addEventListener('mouseover', function() {
        logo.style.transition = 'transform 0.5s ease';
        logo.style.transform = 'rotate(15deg)';
    });

    logo.addEventListener('mouseout', function() {
        logo.style.transform = 'rotate(0deg)';
    });
});



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




