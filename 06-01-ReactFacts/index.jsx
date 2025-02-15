import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

root.render(
    <Page />
)

function Page() {
  return (
    // <> </> inserts Fragment element implicitly
    <>
      <header>
        <img src="react-logo.png" alt="React logo" width="100px"/>
      </header>
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
      <footer>
        <small>© 2025 Ilerialkan development. All rights reserved.</small>
      </footer>
    </>
  )
}