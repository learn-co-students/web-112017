const ShowAdapter = (function() {
  const BASE_URL = `http://api.tvmaze.com/singlesearch/shows?`

  return class ShowAdapter {
    // Adapter class: fetch calls; The way to interface with our API / Database
    // One adapter per high-level API
    // Another adapter here could be FavoritesAdapter to handle our custom backend

    static getBlackMirror() {
      return fetch(`${BASE_URL}q=black-mirror&embed=episodes`)
        .then(res => res.json())
    }

    static getStrangerThings() {
      return fetch(`${BASE_URL}q=stranger-things&embed=episodes`)
        .then(res => res.json())
    }

    static getRickAndMorty() {
      return fetch(`${BASE_URL}q=rick-&-morty&embed=episodes`)
        .then(res => res.json())
    }

    static getWestworld() {
      return fetch(`${BASE_URL}q=westworld&embed=episodes`)
        .then(res => res.json())
    }

    static getShowInfo(title) {
      const showLookup = {
        'Black Mirror': ShowAdapter.getBlackMirror,
        'Rick & Morty': ShowAdapter.getRickAndMorty,
        'Stranger Things': ShowAdapter.getStrangerThings,
        'Westworld': ShowAdapter.getWestworld,
      }

      return showLookup[title]()
    }
  }
})()
