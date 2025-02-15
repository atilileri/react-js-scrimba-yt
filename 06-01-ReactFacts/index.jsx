import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
    <Page />
)

function Page() {
  return (
    <ol>
      <li>Chance to return my ideas into working projects</li>
      <li>Earn passive income</li>
      <li>Play around with web apps</li>
      <li>Gateway to mobile apps</li>
      <li>Job opportunities</li>
    </ol>
  )
}