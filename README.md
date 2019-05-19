# Misha Milovidov

A React application for mishamilovidov.com.

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install & now includes [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.11.2

    $ npm --version
    5.6.0

#### Node installation on macOS

You will need to use a Terminal. On macOS, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    $ brew install node@8

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs=8.11.2-1chl1~precise1

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer for version 8.11.2.
Also, be sure to have `git` available in your PATH, `npm` might need it.

## Install

    $ git clone https://gitlab.com/mishamilovidov/mishamilovidov.git
    $ cd mishamilovidov
    $ npm install

## Start & Watch

    $ npm start