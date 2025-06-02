// scripts/replace-primevue-scope.js
const fs = require('fs');
const path = require('path');

const OLD_SCOPE = '@primeuix/';
const NEW_SCOPE = '@peacepieceuix-compatibility/';

const TARGET_DIRS = ['.', './packages', './apps'];

const EXCLUDED_DIRS = ['node_modules', '.git', 'dist', 'build', 'out', '.output', '.turbo'];

const EXCLUDED_FILES = ['package-lock.json', 'pnpm-lock.yaml', '.eslintrc.json', 'vite.config.ts', 'rename.js'];

const TEXT_FILE_EXTENSIONS = ['.js', '.ts', '.json', '.vue', '.md', '.html', '.css', '.scss', '.yml', '.yaml', '.txt', '.cjs', '.mjs'];

// 디렉토리 재귀 순회
function walk(dir, fileCallback) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            const isExcluded = EXCLUDED_DIRS.some((exclude) => fullPath.includes(path.sep + exclude));

            if (!isExcluded) {
                walk(fullPath, fileCallback);
            }
        } else {
            const isFileExcluded = EXCLUDED_FILES.some((exclude) => fullPath.includes(exclude));

            if (!isFileExcluded) {
                fileCallback(fullPath);
            }
        }
    }
}

// 파일 내 문자열 치환
function replaceInFile(filePath) {
    const ext = path.extname(filePath);

    if (!TEXT_FILE_EXTENSIONS.includes(ext)) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes(OLD_SCOPE)) {
        const updated = content.split(OLD_SCOPE).join(NEW_SCOPE);

        fs.writeFileSync(filePath, updated, 'utf-8');
        console.log(`✔ Updated: ${filePath}`);
    }
}

// 실행
console.log(`🔍 Replacing '${OLD_SCOPE}' → '${NEW_SCOPE}'\n`);

TARGET_DIRS.forEach((dir) => {
    const absPath = path.resolve(dir);

    if (fs.existsSync(absPath)) {
        walk(absPath, replaceInFile);
    } else {
        console.warn(`⚠ Directory not found: ${absPath}`);
    }
});

console.log('\n✅ All matching files updated.');
