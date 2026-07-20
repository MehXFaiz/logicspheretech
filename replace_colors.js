const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

const replacements = {
  // Backgrounds
  '#030508': '#2C3531',
  '#050608': '#2C3531',
  '#080C14': '#242b28',
  '#070A12': '#242b28',
  '#0B101D': '#343e39',
  '#0B0E14': '#343e39',
  
  // Teal Accent
  '#38BDF8': '#116466',
  '#0EA5E9': '#116466',
  
  // Sand Accent
  '#6366F1': '#D9B08C',
  '#A855F7': '#D9B08C',
  
  // Peach Accent
  '#818CF8': '#FFCB9A',
  
  // Mint White Text/Accent
  '#E2E8F0': '#D1E8E2',
  '#F8FAFC': '#D1E8E2',
  '#FFFFFF': '#D1E8E2',
  '#ffffff': '#D1E8E2',
  'white': '#D1E8E2',
  
  // Remove old gold just in case
  '#D4AF37': '#116466',
  '#E5C158': '#D9B08C',
  '#9E822F': '#FFCB9A',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // We need to replace all variations, case insensitive.
      // But wait, replacing 'white' might break class names like 'whitespace-nowrap' or 'bg-white'.
      // For 'white', let's only replace 'bg-white', 'text-white', 'border-white', 'shadow-white', 'from-white', 'via-white', 'to-white'
      // with 'bg-[#D1E8E2]', etc.
      
      const whitePrefixes = ['bg', 'text', 'border', 'shadow', 'from', 'via', 'to', 'ring'];
      whitePrefixes.forEach(prefix => {
        // e.g. text-white/50 -> text-[#D1E8E2]/50
        const regex = new RegExp(`\\b${prefix}-white\\b`, 'g');
        content = content.replace(regex, `${prefix}--[#D1E8E2]`);
      });

      for (const [oldHex, newHex] of Object.entries(replacements)) {
        if (oldHex === 'white') continue; // handled above
        const regex = new RegExp(oldHex, 'gi');
        content = content.replace(regex, newHex);
      }

      // Also fix any `bg--[#D1E8E2]` -> `bg-[#D1E8E2]` from the prefix logic
      content = content.replace(/-+\[#D1E8E2\]/g, '-[#D1E8E2]');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
console.log("Color replacement complete.");
