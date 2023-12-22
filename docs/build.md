### How to build in linux(Ubuntu)

To get this version, you can use the apt package manager. Refresh your local package index first:

```
    sudo apt update
```
Then install Node.js:
```
    sudo apt install nodejs
```
Check that the install was successful by querying node for its version number:
```
    node -v
```

If the package in the repositories suits your needs, this is all you need to do to get set up with Node.js. In most cases, you’ll also want to also install ``npm``, the ``Node.js`` package manager. You can do this by installing the ``npm`` package with ``apt``:
    
```
    sudo apt install npm
```
If an error occurs that libva is missing, install the dependency this way:
```
    sudo apt-get install libva-dev libva2 vainfo
```
Go to the root of the project and: 
```
    npm rebuild
```
```
    npm run dev
```


### How to build windows(Ubuntu)

First of all, install node.js if not installed

[Install node.js](https://nodejs.org/en)

Next, install vite and electron
```
    npm install vite
```
To install prebuilt Electron binaries, use npm. The preferred method is to install Electron as a development dependency in your app:
```
    npm install electron --save-dev
```

Go to the root of the project and:

```
    npm install
```
```
    npm rebuild
```
```
    npm run dev
```