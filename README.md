## Navigating frame was detached error reproduction

This repository is a reproduction of the error that occurs when trying to
navigate to some websites. This error has been reported multiple times:
- https://github.com/puppeteer/puppeteer/issues/11246
- https://github.com/puppeteer/puppeteer/issues/13513
- https://github.com/puppeteer/puppeteer/issues/13518

But so far there seems to be no reliable reproduction and indeed the error is
not consistent. On some websites it's reproducible more often than on the
others.

<details>
 <summary>Demo</summary>

https://github.com/user-attachments/assets/1596bf2b-a976-42af-ba05-50c6ad8dab07
</details>

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run start`

## Observed behavior

```
Error: Navigating frame was detached
    at #onFrameDetached (file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/LifecycleWatcher.js:100:47)
    at file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/third_party/mitt/mitt.js:36:7
    at Array.map (<anonymous>)
    at Object.emit (file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/third_party/mitt/mitt.js:35:20)
    at CdpFrame.emit (file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/puppeteer/common/EventEmitter.js:77:23)
    at #removeFramesRecursively (file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/FrameManager.js:452:15)
    at #onClientDisconnect (file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/FrameManager.js:79:42)
    at file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/FrameManager.js:63:37
    at onceHandler (file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/puppeteer/common/EventEmitter.js:88:13)
    at file:///Users/saroyanm/projects/pptr-navigation-issue-repro/node_modules/puppeteer-core/lib/esm/third_party/mitt/mitt.js:36:7
```


## Expected behavior

No error should be thrown.


# Workaround

If you remove `--single-process` argument from the browser launch options, this
will no more be thrown. Meaning, instead of:

```js
const browser = await puppeteer.launch({headless: false, 
  args: [
    "--single-process",
  ]
});
```

Use: 

```js
const browser = await puppeteer.launch({headless: false});
```
