// Node 24 Windows ESM workaround: convert absolute paths to file:// URLs
const path = require('node:path');
const Module = require('node:module');
const originalResolveFilename = Module.prototype._resolveFilename;

Module.prototype._resolveFilename = function (request, parent, isMain) {
  if (
    request &&
    request.startsWith &&
    !request.startsWith('.') &&
    !request.startsWith('/')
  ) {
    try {
      return originalResolveFilename.call(this, request, parent, isMain);
    } catch {
      // Ignore and continue
    }
  }
  return originalResolveFilename.call(this, request, parent, isMain);
};

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

module.exports = withNativeWind(config, { input: './global.css' });
