
export default function Home() {
  const public_url = process.env.PUBLIC_URL;
  return (
    <section className="home-daylight" id="home">
      <section>
        <p>Alejandro Camacho</p>
        <h1>Frontend Developer Jr</h1>
      </section>
      <picture>
        <img src={public_url + "first-image.png"}  alt=" "/>
      </picture>
    </section>
  )
}
