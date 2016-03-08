# new-cmd

Launch a new command line that target the current workspace

## Commands

There is a list of commands you can use in VS Code :

* `cmd` : launch a new command line targeting the current workspace

## Settings

By default, this extension use the native command line in your OS.
But, you can override this behaviour by setting a different executable in the `settings.json` of your workspace.
Here is an example if we prefer use `cmder.exe` :

```
// Place your settings in this file to overwrite default and user settings.
{
    "newCmd": "cmder.exe %rootPath"
}
```