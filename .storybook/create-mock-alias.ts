// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";

const getAllFiles = (dirPath: string, ignoredFolders: string[] = [], arrayOfFiles: string[] = []): string[] => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const relativeFilePath = path.relative(dirPath, filePath);
    const isIgnored = ignoredFolders.some((folder) => relativeFilePath.split(path.sep).includes(folder));

    if (fs.statSync(filePath).isDirectory()) {
      if (!isIgnored) {
        arrayOfFiles = getAllFiles(filePath, ignoredFolders, arrayOfFiles);
      }
    } else {
      if (!isIgnored) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
};

export const createMockAliases = (SRC_BASE: string, ignoredFolders: string[] = []) => {
  const mocksDir = path.resolve(SRC_BASE, "__mocks__");
  // Check if the __mocks__ directory exists
  if (!fs.existsSync(mocksDir)) {
    console.warn(`Warning: The directory "${mocksDir}" does not exist. No mock aliases will be created.`);
    return {}; // Return an empty object if the directory is not present
  }
  const files = getAllFiles(mocksDir, ignoredFolders);
  const aliases: { [key: string]: string } = {};

  files.forEach((file) => {
    const relativePath = path.relative(mocksDir, file);
    const aliasKey = `${relativePath.replace(/\\/g, "/").replace(/\.[^/.]+$/, "")}`;
    aliases[aliasKey] = file;
  });

  return aliases;
};

// // Usage example
// const SRC_BASE = '/Users/a.kott/PhpstormProjects/mgm/rc-webapp/html/react/src';
// const ignoredFolders = ['__model_mocks__'];
// const mockAliases = createMockAliases(SRC_BASE, ignoredFolders);
//
// console.log(mockAliases);
