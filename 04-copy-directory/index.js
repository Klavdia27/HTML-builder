const fs = require('fs');
const path = require('path');
const files = path.join(__dirname, 'files');
const filesCopy = path.join(__dirname, 'files-copy');

async function copyDir(files, filesCopy) {
  await fs.promises.rm(filesCopy, { recursive: true, force: true });
  await fs.promises.mkdir(filesCopy, { recursive: true });
  const originalFiles = await fs.promises.readdir(files);
  originalFiles.forEach(file => {
    let beforeFile = path.join(files, file);
    let copyFile = path.join(filesCopy, file);
    fs.promises.copyFile(beforeFile, copyFile);
  });
}
copyDir(files, filesCopy);
