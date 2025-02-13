import { createRoot } from "react-dom/client"

// 1. Create a root
const root = createRoot(document.getElementById("root"))
// 2. Render some markup to the root
root.render(<ul>
    <li>I want to build my own web apps</li>
    <li>I want to bring my ideas to life</li>
    <li>I want to create more job positions for myself</li>
    <li>I want to be able to work more flexible</li>
</ul>)