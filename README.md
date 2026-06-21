# dine-and-divide
A dark themed , campus utility dsahboard designed for hostel students to conquer mess menus , not skips their favourite meals and seamlessly manage shared expenses.
<br> ## 🔗 Live Links
      🌐 Deployed Application: [https://himanshimahajan07092007him.github.io/dine-and-divide/]
      💻 Source Code Repository: [https://github.com/himanshimahajan07092007him/dine-and-divide]

## 🎯 The Problem It Solves
Living in a hostel comes with two daily chaotic challenges: keeping track of which days the campus mess serves your favorite meals, and tracking who owes what when your friend group orders outside food or make trips.

## 🚀 Technical Architecture & Features Built From Scratch

Instead of relying on heavy frameworks or pre-built plugins, this application was engineered entirely piece-by-piece using pure, grassroots Vanilla JavaScript to try to understand system lifecycle states better.

### 1. Granular State Persistence Matrix (`LocalStorage` API)
- Designed a system-to-storage mapping mechanism that captures user data, active tracking indices, and checkbox configurations.
- **The Result:** Dynamic ledger rows, typed text values, and toggled checklist states completely survive unexpected page refreshes, tab closures, and browser memory flushes.

### 2. Event Delegation & Dynamic DOM Lifecycle Management
- Structured runtime element generation factories using `document.createElement` and literal string injections to dynamically spawn user rows.
- Implemented layout destruction routines that smoothly tear down elements while accurately recalculating structural counters and wiping corresponding storage keys sequentially without causing data corruption.

### 3. Fluid Responsive Scaling Canvas (`rem` Typography Engine)
- Optimized layouts specifically for varying desktop monitors and laptops by implementing a centralized root-percentage configuration model (`html { font-size: 61%; }`).
- **The Result:** The entire application treats the root element as a global "master zoom slider," automatically scaling all cards, margins, text elements, and input fields proportionally for visual harmony on any display.

### 4. Asynchronous Background Daemon Notification Pipeline
- Integrated the native browser Web Notifications API with an asynchronous JavaScript background daemon runtime check (`setInterval`) running after every 1 hour that is 3600000ms.
- **The Result:** The system runs background audits to cross-reference the active calendar timeline with user-saved favorite meal markers, pushing automated local notifications directly to the device shell.

---

## 🛠️ Tech Stack Employed
- **Frontend Core:** HTML5 (Semantic architecture Layout)
- **UI Styling:** CSS3 (Custom properties, dark-mode color tokens, Flexbox & Grid structural alignment layouts)
- **Engine Logic:** Vanilla JavaScript(DOM manipulation, local memory persistence APIs, event listeners, and data intervals)
