class App {
  // DOM manipulation: inserting, updating, selecting (not DOM creation)
  // DOM event handlers and attaching them

  static init() {
    App.selectShow = document.getElementById('show-select')
    App.showData = document.getElementById('show-data')
    App.episodeList = document.getElementById('episode-list')

    App.selectShow.addEventListener('change', App.handleShowSelection)
  }

  static handleShowSelection(event) {
    ShowAdapter.getShowInfo(event.target.value)
      .then(show => new Show(show).render())
      .then(template => {
        App.showData.innerHTML = template
      })
  }
}
