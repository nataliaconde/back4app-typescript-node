# Express + Typescript + Back4App

In this repository you will find an example app working with Back4App + Typescript SDK.

### Step 1 - Back4App

If it is your first time with Back4App, [create a account](https://www.back4app.com/docs/platform/get-started/new-parse-app).

#### Step 1.1 - Replace Keys

Don't forget to paste your Back4App App ID and Javascript Key in the `./backend/app.js` file.

#### Step 1.2 - Import template class

Go to Back4App Dashboard and import the `./Cars.json` file following the guide below:

[Back4App Import class](https://help.back4app.com/hc/en-us/articles/115003438951-How-can-I-import-to-my-Database-)

### Step 2 - Starting the Express server
> 1. Development

~~~
npm run dev
~~~

> 2. Production

~~~
npm run prod
~~~

### Step 3 - cURL command

~~~
curl -X GET localhost:3000/cars
~~~