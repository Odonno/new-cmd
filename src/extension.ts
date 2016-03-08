// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "new-cmd" is now active!');

    // retrieve process
    let exec = require('child_process').exec;

    var disposable = vscode.commands.registerCommand('extension.cmd', () => {
        vscode.workspace.findFiles('.vscode/settings.json', '').then((results) => {
            // retrieve configuration from settings
            let config: { newCmd?: string } = {};
            if (results && results.length > 0) {
                let settingsFile = fs.readFileSync(results[0].fsPath, 'utf8'); // retrieve settings
                config = JSON.parse(settingsFile.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '')); // remove comments from settings.json file
            }

            let executableCmd = 'cmd';

            if (config && config.newCmd) {
                // use custom command line (example: cmder.exe)
                executableCmd = config.newCmd.replace('%rootPath', '').trim();
            }

            // execute launch of new command line
            var path = vscode.workspace.rootPath;
            var driveChange = path.indexOf(':') !== -1 ? '/D' : '';
            exec('start ' + executableCmd + ' /k cd ' + driveChange + ' "' + path + '"');
        });
    });

    context.subscriptions.push(disposable);
}
