import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

root.render(
    <Page />
)

function Header() {
  return (
    <header className="header">
      <img className="nav-logo" src="react-logo.png" alt="React logo"/>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
    <h1>React Facts!</h1>
    <ol>
      <li>Chance to return my ideas into working projects</li>
      <li>Earn passive income</li>
      <li>Play around with web apps</li>
      <li>Gateway to mobile apps</li>
      <li>Job opportunities</li>
    </ol>
  </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Ilerialkan development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    // <> </> inserts Fragment element implicitly
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}