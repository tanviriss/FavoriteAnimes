import Card from "./components/Card"

function App() {
  const animes = [
    {
      "image" : "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
      "name" : "One Piece",
      "rating" : "7.88"
    },
    {
      "image" : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740932/naruto-shippuden-the-official-coloring-book-9781974740932_hr.jpg",
      "name" : "Naruto Shippuden",
      "rating" : "8.27"
    },
    {
      "image" : "https://upload.wikimedia.org/wikipedia/en/8/8c/Vinland_Saga_key_visual.png",
      "name" : "Vindland Saga",
      "rating" : "8.75"
    },
  ]

  return (
    <>
    <div className="flex flex-col item-center justify-center m-auto h-full">
      <h1 className="m-auto text-5xl text-bold mb-4 pt-5">My Favorite Animes</h1>
    <div className="flex flex-wrap item-center justify-center m-auto space-x-2">
    {animes.map((anime) => {
    return (
      <Card img={anime["image"]} name={anime["name"]} rating={anime["rating"]} />
    )
  })}
    </div>

    </div>
    </>
  )
}

export default App
