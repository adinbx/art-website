import Header from '../Components/MainPage/Header'
import About from '../Components/MainPage/About'
import Footer from '../Components/Footer'

function Main() {
  return (
    <div>

      <header>
        <Header />
      </header>

      <main>
        <About />
      </main>

      <footer>
        <Footer light={false} />
      </footer>

    </div>
  )
}

export default Main
