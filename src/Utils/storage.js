const Storage = {
  setItem: (key, data) => {
    localStorage.setItem(
      key,
      JSON.stringify(data)
    )
  },
  getItem: (key) => {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
  }
}

export default Storage
