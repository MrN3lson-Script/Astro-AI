Astro AI: The Interactive Web Code & Creativity Tool
Astro AI is a dynamic, multi-functional chat application built entirely using client-side web technologies (HTML, CSS, and Vanilla JavaScript). It is designed to act as a simulated AI assistant, demonstrating advanced client-side scripting by offering unique tools for code management, creative content generation, and computation, all within a sleek, modern interface.
Technology Stack
 * Frontend: HTML5, CSS3, Vanilla JavaScript (JS)
 * Styling: Responsive, dark-mode theme (style.css) for optimal user experience.
 * Logic: All intelligence, command parsing, and content generation are handled locally within script.js.
Key Features and Custom Commands
Astro AI goes beyond a standard chatbot by providing a powerful set of custom commands that utilize its unique internal logic:
| Feature | Command | Description |
|---|---|---|
| Code Template Management | /script <lang> [keyword] | Upload .js, .lua, or .py files to teach the AI new code templates. Retrieve specific templates by language and keyword, effectively turning the AI into a personalized code snippet manager. |
| Vocabulary Expansion | /learn <code> | Users can input any text or code, and the AI will extract and permanently add new, unique words to its internal vocabulary (wordPool), constantly expanding its generative capabilities. |
| Creative Generation | /music <theme><br>/poem <theme><br>/story | Generates original, themed musical pieces (lyrics), poems, or short stories. The content is dynamically created using words from its learned vocabulary and specific emotional or nature-based word pools. |
| Utility & Integration | /math <expr><br>/wiki <query><br>/img | Solves basic mathematical expressions, fetches a summary from a Wikipedia article via API, and generates a random image URL from Picsum Photos. |
| Basic Chat | (Any query) | When no command is used, the AI attempts to formulate a response using only the letters available in the user's input, prioritizing words from learned technical or emotional categories. |
Project Goal
Astro AI serves as a powerful demonstration of what can be achieved with pure JavaScript, focusing on complex client-side logic, custom data management, and dynamic text generation without relying on heavy external libraries.

