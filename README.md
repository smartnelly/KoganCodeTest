# Kogan Code Test

- This project was a code test from Kogan and I was asked to use an API to dispplay data.

- Language used: Javascript

- Instructions : Open the 'index.html' file and open in Browser.

## Challenge

Tried to deploy the web page to [Github page](https://smartnelly.github.io/KoganCodeTest/) & [Surge](https://kogancodetest.surge.sh/), but when clicked the button no result was appeared.

Reason: The page at [Github page](https://smartnelly.github.io/KoganCodeTest/) & [Surge](https://kogancodetest.surge.sh/) were loaded over HTTPS, but requested an insecure XMLHttpRequest(over HTTP) endpoint request has been blocked; the content must be served over HTTPS.

## Code Test Description

Using the provided (paginated) API, find the average cubic weight for all products in the "Air Conditioners" category.

Cubic weight is calculated by multiplying the length, height and width of the parcel. The result is then multiplied by the industry standard cubic weight conversion factor of 250.

### - API Endpoint

http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1

### - Cubic Weight Example

A parcel measuring 40cm long (0.4m) x 20cm high (0.2m) x 30cm wide (0.3m) is equal to 0.024 cubic metres.
Multiplied by the conversion factor of 250 gives a cubic weight of 6kg.

0.4m x 0.2m x 0.3m = 0.024m3

0.024m3 x 250 = 6kg

### Assume that

All dimensions are provided in centimetres.
All weights are provided in grams.
