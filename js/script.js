if (document.getElementById('my-projects-link')) {
  document.getElementById('my-projects-link').addEventListener('click', () => {
    document.getElementById('my-projects-section').scrollIntoView({behavior: "smooth"})
  })
}