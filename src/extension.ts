// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "new-cmd" is now active!'); 
	
	let exec = require('child_process').exec;

	var disposable = vscode.commands.registerCommand('extension.cmd', () => {
		// execute launch of new command line
		var path = vscode.workspace.rootPath;
		var driveChange = path.indexOf(':') !== -1 ? '/D' : '';
        	exec('start cmd /k cd ' + driveChange + ' "' + path + '"');
	});
	
	context.subscriptions.push(disposable);
}
