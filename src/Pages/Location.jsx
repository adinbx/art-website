import Map from '../Components/LocationPage/Map'
import Desc from '../Components/LocationPage/Desc'
import Footer from '../Components/Footer'

function Location() {
  return (
    <div>

      <main>
        <Map />
        <Desc />
      </main>

      <footer>
        <Footer light={true} />
      </footer>

    </div>
  )
}

export default Location
