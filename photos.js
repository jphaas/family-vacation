// Photo URLs — all Wikimedia Commons, CC-licensed or public domain.
// Verified HTTP 200 on 2026-04-15.

const PHOTOS = {
  pnw: {
    hero: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1280px-Seattle_Kerry_Park_Skyline.jpg",
      caption: "Seattle skyline with Space Needle and Mt. Rainier from Kerry Park",
      credit: "CommunistSquared / CC0"
    },
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pike_Place_Market_Entrance.JPG/1280px-Pike_Place_Market_Entrance.JPG",
        caption: "Pike Place Market entrance, Seattle",
        credit: "Mtaylor444 / CC BY-SA 3.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hall_of_Mosses%2C_Hoh_Rainforest%2C_Olympic_National_Park%2C_Washington_%282015%29.jpg/1280px-Hall_of_Mosses%2C_Hoh_Rainforest%2C_Olympic_National_Park%2C_Washington_%282015%29.jpg",
        caption: "Hall of Mosses, Hoh Rainforest",
        credit: "PKThundr7 / CC BY 4.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Sea_Stacks_at_Ruby_Beach_in_Washington_2.jpg/1280px-Sea_Stacks_at_Ruby_Beach_in_Washington_2.jpg",
        caption: "Sea stacks at Ruby Beach",
        credit: "Jeffhollett / CC BY-SA 4.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wildflowers_meadows_hills_hurricane_ridge_c_bubar_july_2014_%2817302367131%29.jpg/1280px-Wildflowers_meadows_hills_hurricane_ridge_c_bubar_july_2014_%2817302367131%29.jpg",
        caption: "Hurricane Ridge wildflower meadows",
        credit: "Olympic NP / Public domain"
      }
    ]
  },
  bc: {
    hero: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Skyline_of_Vancouver_viewed_from_Stanley_Park.JPG/1280px-Skyline_of_Vancouver_viewed_from_Stanley_Park.JPG",
      caption: "Vancouver skyline from Stanley Park",
      credit: "Ueutyi / CC BY-SA 4.0"
    },
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Centar_Vislera.JPG/1280px-Centar_Vislera.JPG",
        caption: "Whistler Mountain from Whistler Village",
        credit: "Boris Malagurski / CC BY-SA 3.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Inner_Harbour_and_British_Columbia_Parliament_Buildings%2C_Victoria%2C_at_dusk_20240827_1.jpg/1280px-Inner_Harbour_and_British_Columbia_Parliament_Buildings%2C_Victoria%2C_at_dusk_20240827_1.jpg",
        caption: "Victoria Inner Harbour & Parliament Buildings",
        credit: "DXR / CC BY-SA 4.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Butchart_gardens.JPG/1280px-Butchart_gardens.JPG",
        caption: "Butchart Gardens, Victoria",
        credit: "Marcus / CC BY-SA 1.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/From_Sea_o_Sky_Gondola.jpg/1280px-From_Sea_o_Sky_Gondola.jpg",
        caption: "View from Sea to Sky Gondola, Squamish",
        credit: "Zunnun / CC BY-SA 4.0"
      }
    ]
  },
  azores: {
    hero: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Lagoa_do_Fogo%2C_S._Miguel%2C_A%C3%A7ores.JPG/1280px-Lagoa_do_Fogo%2C_S._Miguel%2C_A%C3%A7ores.JPG",
      caption: "Lagoa do Fogo crater lake, São Miguel",
      credit: "Samuel Fonseca 85 / CC BY-SA 3.0"
    },
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sete_cidades_twin_lakes.JPG",
        caption: "Sete Cidades twin lakes",
        credit: "Wikimedia Commons / CC BY-SA 3.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Caldeira_fervendo%2C_Vale_das_Furnas%2C_Povoa%C3%A7%C3%A3o%2C_ilha_de_S%C3%A3o_Miguel%2C_A%C3%A7ores.JPG/1280px-Caldeira_fervendo%2C_Vale_das_Furnas%2C_Povoa%C3%A7%C3%A3o%2C_ilha_de_S%C3%A3o_Miguel%2C_A%C3%A7ores.JPG",
        caption: "Boiling caldeira, Furnas geothermal valley",
        credit: "Avila Silveira/Noronha e Costa / PD"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Whale_watching_boat_following_Sperm_whale_%28Physeter_macrocephalus%29%2C_S%C3%A3o_Miguel_Island%2C_Azores%2C_Portugal_%28PPL1-Corrected%29.jpg/1280px-Whale_watching_boat_following_Sperm_whale_%28Physeter_macrocephalus%29%2C_S%C3%A3o_Miguel_Island%2C_Azores%2C_Portugal_%28PPL1-Corrected%29.jpg",
        caption: "Whale watching, São Miguel",
        credit: "Jules Verne Times Two / CC BY-SA 4.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Portas_da_Cidade%2C_Ponta_Delgada%2C_isla_de_San_Miguel%2C_Azores%2C_Portugal%2C_2020-07-29%2C_DD_123-125_HDR.jpg/1280px-Portas_da_Cidade%2C_Ponta_Delgada%2C_isla_de_San_Miguel%2C_Azores%2C_Portugal%2C_2020-07-29%2C_DD_123-125_HDR.jpg",
        caption: "Portas da Cidade, Ponta Delgada",
        credit: "Diego Delso / CC BY-SA 4.0"
      }
    ]
  },
  kauai: {
    hero: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Na_Pali_Coast_%28Unsplash%29.jpg/1280px-Na_Pali_Coast_%28Unsplash%29.jpg",
      caption: "Nā Pali Coast cliffs, Kauai",
      credit: "Christian Joudrey / CC0"
    },
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Waimea_Canyon%2C_Kaua%CA%BBi.jpg/1280px-Waimea_Canyon%2C_Kaua%CA%BBi.jpg",
        caption: "Waimea Canyon — Grand Canyon of the Pacific",
        credit: "Frank Schulenburg / CC BY-SA 4.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hanalei_Bay_from_Wai%27oli_Beach_Park.JPG/1280px-Hanalei_Bay_from_Wai%27oli_Beach_Park.JPG",
        caption: "Hanalei Bay",
        credit: "Goshea / CC BY 2.5"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Wailua_Falls%2C_Kauai.JPG/1280px-Wailua_Falls%2C_Kauai.JPG",
        caption: "Wailua Falls",
        credit: "Caracas1830 / CC BY-SA 2.5"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Aerial-Poipu-Beach-Park-Kauai.jpg/1280px-Aerial-Poipu-Beach-Park-Kauai.jpg",
        caption: "Poipu Beach Park aerial",
        credit: "Polihale / CC BY-SA 3.0"
      }
    ]
  },
  portugal: {
    hero: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pena_Palace_Sintra.jpg/1280px-Pena_Palace_Sintra.jpg",
      caption: "Pena Palace, Sintra",
      credit: "Sergey Pesterev / CC BY-SA 4.0"
    },
    gallery: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tram_28_in_Alfama_%28Lissabon_2016%29_%2826029557541%29.jpg/1280px-Tram_28_in_Alfama_%28Lissabon_2016%29_%2826029557541%29.jpg",
        caption: "Tram 28 in Alfama, Lisbon",
        credit: "Paul Arps / CC BY 2.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Porto-Panorama_de_Ribeira-Rabelos-20120910.jpg/1280px-Porto-Panorama_de_Ribeira-Rabelos-20120910.jpg",
        caption: "Porto Ribeira with rabelo boats",
        credit: "Daniel Villafruela / CC BY-SA 4.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Terras_do_Douro.jpg/1280px-Terras_do_Douro.jpg",
        caption: "Terraced vineyards along the Douro",
        credit: "Feliciano Guimaraes / CC BY 2.0"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pasteis_de_Nata.jpg/1280px-Pasteis_de_Nata.jpg",
        caption: "Pastéis de nata",
        credit: "helmut.weigel / CC BY-SA 4.0"
      }
    ]
  }
};

function populatePhotos() {
  Object.keys(PHOTOS).forEach(key => {
    const data = PHOTOS[key];
    // Set hero image
    if (data.hero) {
      const heroImg = document.querySelector(`#${key} .dest-hero img`);
      if (heroImg) {
        heroImg.src = data.hero.url;
        heroImg.alt = data.hero.caption || '';
        heroImg.title = (data.hero.caption || '') + (data.hero.credit ? ' — ' + data.hero.credit : '');
      }
    }
    // Populate gallery
    const gallery = document.getElementById(`gallery-${key}`);
    if (gallery && data.gallery.length) {
      gallery.innerHTML = data.gallery.map(p =>
        `<img src="${p.url}" alt="${p.caption || ''}" loading="lazy" title="${p.caption || ''}${p.credit ? ' — ' + p.credit : ''}">`
      ).join('');
    }
  });
}

window.addEventListener('load', populatePhotos);
