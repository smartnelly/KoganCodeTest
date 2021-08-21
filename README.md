# [Kogan Code Test](https://theparks.herokuapp.com/)

This project was a code test from Kogan and I was asked to use an API to dispplay data.

Language used: Javascript

Check out the application [here](https://theparks.herokuapp.com/).

## Challenge Description

Using the provided (paginated) API, find the average cubic weight for all products in the "Air Conditioners" category.

Cubic weight is calculated by multiplying the length, height and width of the parcel. The result is then multiplied by the industry standard cubic weight conversion factor of 250.

### API Endpoint
http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1

### Cubic Weight Example
A parcel measuring 40cm long (0.4m) x 20cm high (0.2m) x 30cm wide (0.3m) is equal to 0.024 cubic metres.
Multiplied by the conversion factor of 250 gives a cubic weight of 6kg.

0.4m x 0.2m x 0.3m = 0.024m3
0.024m3 x 250 = 6kg

### Assume that
All dimensions are provided in centimetres.
All weights are provided in grams.
