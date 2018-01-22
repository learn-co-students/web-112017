const Show = (function() {
  // Model/component class: Handles data and how data should be represented
  // Here is a good place to write sorting and filtering functions for this resource

  const all = []
  return class Show {
    constructor({id, rating: {average}, name, image: {medium}, summary}) {
      this.id = id
      this.rating = average
      this.name = name
      this.image = medium
      this.description = summary
      this.episodes = []
      this.currentSeason = 1
      all.push(this)
    }

    render() {
      return `
        <img id="selected-poster" src="${this.image}" alt="${this.name} poster">
        <h2 id="selected-title">${this.name}</h2>
        <div id="selected-description">
          ${this.description}
        </div>`
    }
  }
})()
