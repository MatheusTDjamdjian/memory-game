const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, 'dist'); // Caminho do build
const targetDir = path.join(buildDir, 'assets'); // Alvo dos JS

// Recursivamente substituir os caminhos nos arquivos JavaScript
function replacePathsInDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      replacePathsInDir(filePath); // Substituir em subdiretórios
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      content = content.replace(/img\//g, 'memory-game/assets/');
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  });
}

replacePathsInDir(targetDir);
console.log('Caminhos substituídos com sucesso!');
