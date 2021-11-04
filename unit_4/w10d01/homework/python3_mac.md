# Python 3 Installation 

## Why must we use Python 3?

1. Virtual Environments, AKA (VENV) is a tool to keep dependencies required by different projects in a separate place, by creating virtual Python environments for them.

1. Basically, if your project has different software versions (and it will) virtualenv keep them nice and safe.

## Installation Steps

1. Make sure homebrew is installed, or you can install it here: 
```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
1. Now you can install python3 like this:
    - `brew install python`
1. You might get permissions errors:
    - If so, you can run these:
      1. ```sudo chown -R "$USER":admin /usr/local```
      1. ```sudo chown -R "$USER":admin /Library/Caches/Homebrew```
1. Now, check the version:
    - ```python -V```
    - ...or 
    - ```python3 -V```
1. Got it? Awesome!
1. Link python
    - for bash: ```echo 'export PATH=/usr/local/opt/python/libexec/bin:$PATH' >> ~/.bash_profile```
    - or if you're using zsh: ```echo 'export PATH=/usr/local/opt/python/libexec/bin:$PATH' >> ~/.zshrc```
