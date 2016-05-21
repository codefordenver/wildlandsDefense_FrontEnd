## Wildlands Defense FE

## Setup

*Operating system dependancies*

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
$  cordova platform add ios
```

```shell
$  npm install
```

```shell
$  bower install
```

## Booting up the project

```shell
$  grunt build:ios
```

NOTE: if you get a `simctl was not found` error from cordova, you may need to open XCode and accept a license agreement