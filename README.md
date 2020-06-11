# testcafe-sample
A sample of TestCafe for executing tests locally and on Sauce Labs

## Intro
This repo is a sample of how to run some tests with TestCafe on your local machine or with Sauce Labs. For more info check the [TestCafe Docs](https://github.com/DevExpress/testcafe).
This repo used the Sauce Labs Demo app that can be found [here](https://www.saucedemo.com/)

## Start
1. Do a git clone `git clone https://github.com/wswebcreation/testcafe-sample.git`
2. Go to the directory with `cd testcafe-sample` 
3. Install all dependencies with `npm install`

## Run
There are 2 options to run the tests:
1. local with `npm run test.local.chrome`. This will spin up 6 browsers of Chrome
2. In the Sauce Labs cloud with:
    - `npm run test.sauce.chrome`, this will spin up 6 browsers of Chrome in the cloud
    - `npm run test.sauce.all`, this will spin up 5 times 6 browsers of Chrome, Safari, Firefox, Edge and Internet Explorer in the cloud
    
The logs will look like this

```log
➜  testcafe-sample git:(master) ✗ npm run test.sauce.all

> testcafe-sample@0.1.0 test.sauce.all /Users/wswebcreation/Git/testcafe-sample
> testcafe saucelabs:chrome,saucelabs:safari,saucelabs:firefox,saucelabs:MicrosoftEdge,saucelabs:'internet explorer' tests/ -c 6

 Running tests in:
 - Chrome 74.0.3729 / Windows 7.0.0 (https://app.saucelabs.com/tests/58cbe8da88c149cd95d3ef077891a20a)
 - Safari 12.0.0 / Mac OS X 10.14.0 (https://app.saucelabs.com/tests/c6fe1b1f6c86493ba8bfb781b91b2da9)
 - Firefox 67.0.0 / Windows 7.0.0 (https://app.saucelabs.com/tests/09de0c178eec4a32829fc23e7095699d)
 - Edge 18.17763.0 / Windows 10.0.0 (https://app.saucelabs.com/tests/8cd8022f21104d178359a10784eb2db4)
 - IE 11.0.0 / Windows 10.0.0 (https://app.saucelabs.com/tests/9e86c9bd344c4163b9d425ed8a8f83ba)

 Test Login
 ✓ should be able to test loading of login page
 ✓ should be able to login with a standard user
 ✓ should not be able to login with a locked user
 ✓ should not be able to login with an invalid username
 ✓ should not be able to login with an invalid password
 ✓ should not be able to login with non existing data


 6 passed
```
