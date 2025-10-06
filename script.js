const wordPool = new Set([
    "light", "life", "world", "love", "goodness", "sun", "sky", "water", "earth", "air",
    "wisdom", "knowledge", "help", "respect", "friendship", "beauty", "harmony", "soul", "heart",
    "path", "beginning", "laughter", "joy", "warmth", "home", "word", "thought", "truth", "eternity",
    "peace", "hope", "faith", "learning", "growth", "success", "health", "power", "will", "action",
    "creation", "essence", "mind", "feeling", "nature", "ocean", "star", "cosmos", "silence", "morning",
    "dream", "spirit", "destiny", "courage", "strength", "freedom", "challenge", "future", "past",
    "present", "journey", "change", "story", "music", "art", "passion", "kindness", "honor",
    "balance", "flow", "mystery", "grace", "hopeful", "gentle", "strong", "brave", "calm", "bright",
    "deep", "high", "pure", "true", "clear", "open", "free", "vast", "whole", "new",
    "ancient", "simple", "complex", "beautiful", "wonderful", "amazing", "unique", "find", "create",
    "speak", "listen", "feel", "think", "know", "see", "touch", "move", "grow", "become",
    "shine", "reflect", "flow", "build", "connect", "discover", "explore", "imagine", "inspire",
    "protect", "travel", "remember", "understand", "explore", "system", "program", "code", "data",
    "cloud", "digital", "virtual", "energy", "force", "matter", "universe", "galaxy", "planet",
    "crystal", "forest", "mountain", "river", "desert", "garden", "meadow", "island", "valley",
    "sunrise", "sunset", "moonlight", "shadow", "echo", "whisper", "secret", "magic", "miracle",
    "adventure", "quest", "search", "discover", "uncover", "reveal", "innovate", "develop", "construct",
    "engineer", "design", "invent", "optimize", "analyze", "compute", "laugh", "smile", "cry", "sing",
    "dance", "read", "write", "paint", "sculpt", "draw", "happy", "sad", "angry", "excited",
    "tired", "restful", "peaceful", "tense", "nervous", "eager", "swift", "slow", "heavy", "light",
    "loud", "quiet", "sharp", "dull", "smooth", "rough", "reason", "logic", "instinct", "intuition",
    "emotion", "sensation", "perception", "consciousness", "exist", "perceive", "question", "answer", "solve",
    "puzzle", "riddle", "paradox", "theory", "concept", "principle", "element", "substance", "structure",
    "form", "pattern", "shape", "texture", "color", "sound", "volume", "dimension", "space", "time",
    "moment", "instant", "cycle", "rhythm", "pattern", "frequency", "vibration", "wave", "stream",
    "current", "tide", "flow", "ebb", "pulse", "beat", "melody", "symphony", "chorus", "verse",
    "poem", "tale", "legend", "myth", "fable", "prose", "storyteller", "narrator", "author", "creator",
    "builder", "maker", "pioneer", "innovator", "explorer", "adventurer", "leader", "guide", "teacher",
    "student", "master", "apprentice", "mentor", "friend", "ally", "partner", "rival", "opponent", "fuck", "cloud", "drop", "fire", "flame", "fog", "dew", "snow", "rain", "ice", "wind",
    "storm", "lightning", "thunder", "rainbow", "waterfall", "rock", "sand", "dust", "stone", "tree",
    "root", "leaf", "flower", "grass", "soil", "cave", "volcano", "lagoon", "reef", "wave",
    "stream", "tide", "dawn", "dusk", "midnight", "noon", "tempest", "vortex", "tundra", "jungle",
    "savannah", "swamp", "cliff", "spring", "sand", "beach", "desert", "steppe", "ravine", "staircase",
    "canyon", "peak", "base", "hill", "creek", "lake", "pond", "bay", "fjord", "mainland",
    "peninsula", "archipelago", "reef", "belief", "truth", "lie", "deceit", "oblivion", "memory", "riddle",
    "mystery", "secret", "truth", "doubt", "certainty", "hope", "despair", "grief", "anxiety", "fear",
    "courage", "shame", "guilt", "forgiveness", "gratitude", "compassion", "surprise", "admiration", "horror", "disappointment",
    "tenderness", "passion", "jealousy", "envy", "pride", "modesty", "submission", "rebellion", "anarchy", "order",
    "chaos", "discipline", "freedom", "dependence", "destiny", "randomness", "fate", "choice", "responsibility", "justice",
    "mercy", "devotion", "loyalty", "respect", "honor", "dignity", "wisdom", "foolishness", "experience", "ignorance",
    "prejudice", "tolerance", "fanaticism", "decision", "problem", "obstacle", "opportunity", "value", "quality", "quantity",
    "uniqueness", "repetition", "symbol", "sign", "meaning", "nonsense", "epiphany", "insight", "imagination", "fantasy",
    "reality", "illusion", "paradox", "dilemma", "compromise", "conflict", "reconciliation", "truce", "agreement", "disagreement",
    "rivalry", "cooperation", "achievement", "failure", "success", "failure", "progress", "regression", "evolution", "revolution",
    "transformation", "change", "stability", "motion", "inaction", "intention", "motivation", "ambition", "aspiration", "striving",
    "goal", "result", "process", "run", "jump", "fly", "swim", "crawl", "walk", "sit",
    "stand", "lie", "sleep", "wake", "eat", "drink", "breathe", "feel", "touch", "hear",
    "see", "smell", "speak", "write", "read", "count", "learn", "teach", "search", "find",
    "lose", "remember", "forget", "create", "destroy", "build", "break", "give", "take", "borrow",
    "return", "help", "harm", "heal", "hurt", "die", "be born", "live", "Venom", "Venom Cat", "I love Venom Cat", "furry"
]);
const natureWords = ["forest", "river", "mountain", "ocean", "sky", "tree", "flower", "sun", "moon", "star", "wind", "rain", "snow", "earth", "water", "air", "fire", "stone", "sand", "wave"];
const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');
const fileInput = document.getElementById('file-input');
const downloadChatBtn = document.getElementById('download-chat-btn');

const chatHistory = [];
const codeTemplates = {};
const technicalWords = new Set(["system", "program", "code", "data", "digital", "virtual", "engineer", "optimize", "analyze", "compute"]);
const emotionalWords = new Set(["love", "joy", "peace", "hope", "courage", "happy", "sad", "angry", "excited"]);
const loveWords = ["love", "heart", "tenderness", "soul", "warmth", "passion", "grace", "together", "forever", "dream"];
const funWords = ["laughter", "joy", "dance", "happy", "smile", "bright", "play", "adventure", "sing", "fun"];
const angryWords = ["rage", "fire", "storm", "chaos", "fury", "scream", "loud", "pain", "broken", "fight"];
const sadWords = ["tears", "grief", "sadness", "alone", "rain", "shadow", "empty", "loss", "silence", "cry"];

function addMessage(sender, text, isCode = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (sender === 'You') {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('astro-message');
    }

    if (isCode) {
        const codeBlock = document.createElement('pre');
        const codeElement = document.createElement('code');
        codeElement.textContent = text;
        codeBlock.appendChild(codeElement);
        messageDiv.appendChild(codeBlock);
    } else {
        messageDiv.textContent = text;
    }

    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
    
    chatHistory.push({ sender, text });
}

function addImageMessage(sender, imageUrl) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add('astro-message');

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.classList.add('image-container');

    messageDiv.appendChild(imgElement);
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;

    chatHistory.push({ sender, text: `[Image: ${imageUrl}]` });
}

function canFormWord(word, letterCounts) {
    const tempCounts = { ...letterCounts };
    for (const char of word) {
        if (!tempCounts[char] || tempCounts[char] === 0) {
            return false;
        }
        tempCounts[char]--;
    }
    return true;
}

function generateRandomResponseFromLetters(letters) {
    const responseWords = [];
    const numWords = Math.floor(Math.random() * Math.min(letters.length, 10)) + 1;
    for (let i = 0; i < numWords; i++) {
        const wordLength = Math.floor(Math.random() * letters.length) + 1;
        let newWord = "";
        for (let j = 0; j < wordLength; j++) {
            newWord += letters[Math.floor(Math.random() * letters.length)];
        }
        responseWords.push(newWord);
    }
    return responseWords.join(" ");
}

function handleLearning(code) {
    const words = code.toLowerCase().match(/\b\w{3,}\b/g) || [];
    let learnedCount = 0;
    for (const word of words) {
        if (!wordPool.has(word)) {
            wordPool.add(word);
            learnedCount++;
        }
    }
    
    if (learnedCount > 0) {
        return `I learned ${learnedCount} new words from the provided code! My vocabulary now has ${wordPool.size} words.`;
    } else {
        return `I didn't find any new words to learn from this code.`;
    }
}

function learnFromFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileContent = e.target.result;
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        let learnedCount = 0;

        if (fileExtension === 'js' || fileExtension === 'lua' || fileExtension === 'py') {
            let delimiter = "";
            if (fileExtension === 'js') delimiter = "// === TEMPLATE ===";
            else if (fileExtension === 'lua') delimiter = "-- === TEMPLATE ===";
            else if (fileExtension === 'py') delimiter = "# === TEMPLATE ===";
            const templates = fileContent.split(delimiter).map(t => t.trim()).filter(t => t.length > 0);
            if (templates.length > 1) {
                codeTemplates[fileExtension] = templates;
                const responseText = `I learned ${templates.length} templates from file ${fileName}. You can now request them using /script ${fileExtension}.`;
                addMessage("AstroAI", responseText);
            } else {
                addMessage("AstroAI", `No templates found in file ${fileName} separated by the marker "${delimiter}".`);
            }

            const words = fileContent.toLowerCase().match(/\b\w{3,}\b/g) || [];
            words.forEach(word => {
                if (!wordPool.has(word)) {
                    wordPool.add(word);
                    learnedCount++;
                }
            });
            if (learnedCount > 0) {
                addMessage("AstroAI", `Additionally, I learned ${learnedCount} new words from this file.`);
            }

        } else {
            addMessage("AstroAI", `I can only learn from files with .js, .lua, or .py extensions.`);
        }
    };
    reader.readAsText(file);
}

function generateMusicFromWords(words) {
    const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const verse1 = `(Verse 1)\n${pickRandom(words)} ${pickRandom(words)}, ${pickRandom(words)} ${pickRandom(words)}...`;
    const chorus = `(Chorus)\nOh, ${pickRandom(words)} and ${pickRandom(words)}, ${pickRandom(words)} ${pickRandom(words)}!`;
    const verse2 = `(Verse 2)\n${pickRandom(words)} ${pickRandom(words)}... again, ${pickRandom(words)}...`;
    const bridge = `(Bridge)\nMaybe it's a ${pickRandom(words)}, maybe it's a ${pickRandom(words)}...`;
    const outro = `(Outro)\n${pickRandom(words)}... ${pickRandom(words)}... ${pickRandom(words)}.`;

    return `🎼 Here's your musical piece:\n\n${verse1}\n\n${chorus}\n\n${verse2}\n\n${bridge}\n\n${outro}`;
}

function generatePoemFromWords(words) {
    const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const shuffledWords = words.sort(() => 0.5 - Math.random());
    const poemLines = [
        `${shuffledWords[0]} and ${shuffledWords[1]},`,
        `a ${shuffledWords[2]} in the ${shuffledWords[3]}.`,
        `The ${shuffledWords[4]} is ${shuffledWords[5]},`,
        `a quiet ${shuffledWords[6]} that ${shuffledWords[7]}.`
    ];
    return `📝 Here's a little poem for you:\n\n${poemLines.join('\n')}`;
}

function generateStoryFromWords(words) {
    const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const shuffledWords = words.sort(() => 0.5 - Math.random());
    const story = `Once upon a time, there was a ${pickRandom(shuffledWords)} who felt very ${pickRandom(emotionalWords)}. One day, it decided to ${pickRandom(shuffledWords)} the ${pickRandom(shuffledWords)} and found a magical ${pickRandom(shuffledWords)}. The ${pickRandom(shuffledWords)} was full of ${pickRandom(shuffledWords)} and promised a life of ${pickRandom(loveWords)}. The end.`;
    return `📖 Here's a short story for you:\n\n${story}`;
}

function solveMath(expression) {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    try {
        const result = new Function('return ' + sanitizedExpression)();
        if (isNaN(result)) {
            return "Invalid mathematical expression.";
        }
        return `The answer is ${result}.`;
    } catch (error) {
        return "I couldn't solve that. Please use basic operators like +, -, *, /.";
    }
}

async function generateResponse(input) {
    if (input.toLowerCase().startsWith("/img")) {
        const imageUrl = `https://picsum.photos/300/200?random=${Math.random()}`;
        return { type: 'image', url: imageUrl };
    }
    
    if (input.toLowerCase().startsWith("/math")) {
        const expression = input.substring(5).trim();
        if (!expression) {
            return { text: "Please provide a mathematical expression. e.g., /math 2 * 10" };
        }
        const result = solveMath(expression);
        return { text: result };
    }

    if (input.toLowerCase().startsWith("/wiki")) {
        const query = input.substring(5).trim();
        if (!query) {
            return { text: "Please tell me what you want to search on Wikipedia. e.g., /wiki Earth" };
        }
        try {
            const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
            if (!response.ok) {
                return { text: `I couldn't find a Wikipedia article for "${query}".` };
            }
            const data = await response.json();
            const summary = data.extract;
            return { text: `📖 From Wikipedia:\n\n${summary}` };
        } catch (error) {
            return { text: "Sorry, I'm having trouble connecting to Wikipedia right now." };
        }
    }

    if (input.toLowerCase().startsWith("/script")) {
        const parts = input.split(' ');
        const language = parts[1];
        const keyword = parts.slice(2).join(' ').toLowerCase();

        if (!language) {
            return { text: "Please use the format: /script <Lua/Python/Java> [keyword]", isCode: false };
        }
        
        const templates = codeTemplates[language.toLowerCase()];
        if (!templates || templates.length === 0) {
            return { text: `I have no loaded templates for the ${language} language. Please upload a file with templates.`, isCode: false };
        }

        if (keyword) {
            const matchingTemplate = templates.find(template => template.toLowerCase().includes(keyword));
            if (matchingTemplate) {
                return { text: matchingTemplate, isCode: true };
            } else {
                return { text: `I did not find a template containing the word "${keyword}" in the ${language} language.`, isCode: false };
            }
        } else {
            const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
            return { text: randomTemplate, isCode: true };
        }
    }
    
    if (input.toLowerCase().startsWith("/learn")) {
        const codeToLearn = input.substring("/learn".length).trim();
        if (codeToLearn === "") {
            return { text: "Please paste the code after the /learn command.", isCode: false };
        }
        return { text: handleLearning(codeToLearn), isCode: false };
    }

    if (input.toLowerCase().startsWith("/music")) {
        const parts = input.split(' ');
        const theme = parts[1] ? parts[1].toLowerCase() : null;
        let selectedWords;
        switch (theme) {
            case 'love': selectedWords = loveWords; break;
            case 'fun': selectedWords = funWords; break;
            case 'angry': selectedWords = angryWords; break;
            case 'sad': selectedWords = sadWords; break;
            default: return { text: "Please use the format: /music <Love/Fun/Angry/Sad>", isCode: false };
        }
        return { text: generateMusicFromWords(selectedWords), isCode: false };
    }

    if (input.toLowerCase().startsWith("/poem")) {
        const theme = input.substring("/poem".length).trim().toLowerCase();
        let selectedWords;
        switch (theme) {
            case 'love': selectedWords = loveWords; break;
            case 'nature': selectedWords = natureWords; break;
            case 'angry': selectedWords = angryWords; break;
            case 'sad': selectedWords = sadWords; break;
            default: selectedWords = Array.from(wordPool);
        }
        return { text: generatePoemFromWords(selectedWords), isCode: false };
    }

    if (input.toLowerCase().startsWith("/story")) {
        const words = Array.from(wordPool);
        return { text: generateStoryFromWords(words), isCode: false };
    }

    if (input.toLowerCase().startsWith("/search")) {
        const parts = input.toLowerCase().split(' ');
        const category = parts[2];
        const query = parts[3];

        if (parts.length < 4 || parts[1] !== "words" || !category || !query) {
            return { text: "Please use the format: /search words <category> <word>", isCode: false };
        }

        let wordSet;
        switch (category) {
            case 'love': wordSet = new Set(loveWords); break;
            case 'nature': wordSet = new Set(natureWords); break;
            case 'angry': wordSet = new Set(angryWords); break;
            case 'sad': wordSet = new Set(sadWords); break;
            case 'tech': wordSet = technicalWords; break;
            case 'emotional': wordSet = emotionalWords; break;
            default: return { text: `Category "${category}" not found. Available categories: love, nature, angry, sad, tech, emotional.`, isCode: false };
        }

        if (wordSet.has(query)) {
            return { text: `Yes, "${query}" is in the "${category}" category.`, isCode: false };
        } else {
            return { text: `No, "${query}" is not in the "${category}" category.`, isCode: false };
        }
    }

    if (input.includes('?')) {
        const responses = ["Yes", "No", "...", "I don't know", "Maybe yes", "Maybe no", "I can't say", "Of course", "I deny it", "Never", "No comment", "No way", "Don't talk nonsense", "I have no idea", "Yup", "Yes", "Certainly", "Indeed", "Absolutely", "That's right", "Exactly", "Absolutely not", "That's not true", "Unfortunately, no", "I don't think so"];
        return { text: responses[Math.floor(Math.random() * responses.length)], isCode: false };
    }

    const letterCounts = {};
    const letters = [];
    let isTechnical = false;
    let isEmotional = false;
    let isNature = false;
    const words = input.toLowerCase().match(/\b\w{3,}\b/g) || [];
    for (const word of words) {
        if (!wordPool.has(word)) {
            wordPool.add(word);
        }
        if (technicalWords.has(word)) { isTechnical = true; }
        if (emotionalWords.has(word)) { isEmotional = true; }
        if (natureWords.includes(word)) { isNature = true; }
    }

    for (const char of input.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
            letters.push(char);
        }
    }

    if (letters.length === 0) {
        return { text: "I couldn't find any letters in your request. Please try again.", isCode: false };
    }

    let possibleWords = [];
    if (isTechnical) {
        possibleWords = Array.from(technicalWords).filter(word => canFormWord(word, letterCounts));
    } else if (isEmotional) {
        possibleWords = Array.from(emotionalWords).filter(word => canFormWord(word, letterCounts));
    } else if (isNature) {
        possibleWords = natureWords.filter(word => canFormWord(word, letterCounts));
    } else {
        possibleWords = Array.from(wordPool).filter(word => canFormWord(word, letterCounts));
    }

    if (possibleWords.length === 0) {
        return { text: generateRandomResponseFromLetters(letters), isCode: false };
    }

    const responseWords = [];
    const maxWords = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < maxWords; i++) {
        responseWords.push(possibleWords[Math.floor(Math.random() * possibleWords.length)]);
    }

    const response = responseWords.join(" ");
    return { text: response.substring(0, Math.min(response.length, 200)), isCode: false };
}

addMessage("AstroAI", "💫 Hi! I'm ready to go. Ask questions or use the commands: /script <language> [keyword], /learn, /music <theme>, /img, /poem <theme>, /story, /search words <category> <word>, /math <expression>, or /wiki <query>.");

chatInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && chatInput.value.trim() !== "") {
        const userMessage = chatInput.value.trim();
        addMessage("You", userMessage);
        
        const responseData = await generateResponse(userMessage);
        
        setTimeout(() => {
            if (responseData.type === 'image') {
                addImageMessage("AstroAI", responseData.url);
            } else {
                addMessage("AstroAI", responseData.text, responseData.isCode);
            }
        }, 500);
        
        chatInput.value = "";
    }
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        addMessage("You", `File uploaded: ${file.name}`);
        learnFromFile(file);
    }
});

downloadChatBtn.addEventListener('click', () => {
    const chatText = chatHistory.map(msg => `${msg.sender}: ${msg.text}`).join('\n');
    const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

