# 🧮 JavaScript Calculator Project

![Calculator Demo](https://img.shields.io/badge/Demo-Click%20to%20Try-brightgreen?style=for-the-badge) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A fully functional calculator built with vanilla JavaScript that demonstrates core programming concepts with a clean, modern UI.

## ✨ Features

- ⚡ Basic arithmetic operations (+, -, *, /)
- 🔢 Decimal number support
- 🗑️ Clear (AC) and Delete (DEL) functionality
- ⌨️ Both mouse and keyboard support
- 📱 Responsive design
- 🌈 Color-coded operation buttons

## 📁 Project Structure

```
calculator-project/
├── 📄 index.html          # Main HTML structure
├── 📂 styles/
│   └── 📄 style.css       # All styling rules
├── 📂 scripts/
│   └── 📄 calculator.js   # Core calculator logic
└── 📄 README.md           # This documentation
```

## 🧠 Core JavaScript Concepts Demonstrated

### 1. 🏷️ Variables
```javascript
let currentOperand = '0';  // Mutable variables
const numberButtons = document.querySelectorAll('[data-number]');  // Constants
```

### 2. 🔄 Functions
```javascript
function compute() { /* Calculation logic */ }
const appendNumber = (number) => { /* Arrow function */ };
```

### 3. 🔁 Loops
```javascript
numberButtons.forEach(button => {  // ForEach loop
  button.addEventListener('click', () => { /* ... */ });
});
```

### 4. ❓ Conditions
```javascript
if (currentOperand === '0' || resetScreen) {
  currentOperand = '';
  resetScreen = false;
}
```

### 5. 📦 Arrays & Objects
```javascript
const validKeys = ['0', '1', '2', /* ... */];  // Array
const keyOperations = {  // Object
  '+': '+',
  'Enter': '='
};
```

### 6. 🎭 DOM Manipulation
```javascript
currentOperandDisplay.textContent = currentOperand;
```

### 7. 🖱️ Event Handling
```javascript
equalsButton.addEventListener('click', () => {
  compute();
  updateDisplay();
});
```

## 🚀 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-project.git
   ```

2. Open `index.html` in your browser

3. Use the calculator with:
   - Mouse clicks
   - Keyboard input (numbers, +, -, *, /, Enter, Backspace, etc.)

## 🎨 UI Components

| Element          | Purpose                          |
|------------------|----------------------------------|
| Display Area     | Shows current and previous input |
| Number Buttons   | Input digits 0-9 and decimal     |
| Operation Buttons| +, -, *, / functions             |
| AC Button        | Clear all calculations           |
| DEL Button       | Delete last digit                |
| = Button         | Calculate result                 |

## 🌟 Key Code Highlights

### Calculation Logic
```javascript
function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  
  switch (operation) {
    case '+': computation = prev + current; break;
    case '-': computation = prev - current; break;
    // ... other operations
  }
  
  currentOperand = computation.toString();
}
```

### Keyboard Support
```javascript
document.addEventListener('keydown', (e) => {
  if (!validKeys.includes(e.key)) return;
  // Handle different key inputs
});
```

## 🛠️ Potential Enhancements

1. Add scientific calculator functions
2. Implement memory functions (M+, M-, MR)
3. Add theme switcher (light/dark mode)
4. Add calculation history feature
5. Implement unit conversion capabilities


---

<div align="center">
  <h3>🛠 Built with</h3>
  <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5"/>
  <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3"/>
  <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript"/>
</div>

<div align="center">
  <h3>📊 Project Stats</h3>
  <img src="https://img.shields.io/github/repo-size/yourusername/calculator-project" alt="Repo Size"/>
  <img src="https://img.shields.io/github/languages/top/yourusername/calculator-project" alt="Top Language"/>
</div>
