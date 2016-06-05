## Wildlands Defense FE

## Setup

*Operating system dependencies*

- [NodeJs](https://nodejs.org/) -- production is currently on 4.4.4
- [Xcode](https://developer.apple.com/xcode/downloads/)

### Installation.

> Please follow github best practice for dev
> https://help.github.com/articles/fork-a-repo/
> https://guides.github.com/introduction/flow/

```shell
$ git clone [your fork of this repo]
```

```shell
$ cd  [repo]
```
Install project global dependancies

```shell
$  npm install -g cordova
```

```shell
$  npm install -g bower
```

```shell
$  npm install -g grunt-cli
```

Install project local dependancies

```shell
$  cordova platform add browser
```

NOTE: if you get a `Current working directory is not a Cordova-based project` error, ensure that you have a `www` folder in the root of your project. Add it manually if not, and retry.

```shell
$  npm install
```

```shell
$  bower install
```

## Booting up the project

```shell
$  grunt build:browser
```

NOTE: if you get a `simctl was not found` error from cordova, you may need to open XCode and accept a license agreement