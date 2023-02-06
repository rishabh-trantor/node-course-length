University course and level List
=================================

A JSON list that contains course, level and countries of most of the world.

It is very useful if you are building a web service for students.

You can easily create a validation script that checks the country.

NOTE: Some country and course are exits in data.Take this into consideration if using this.

Feel free to update the list.

Example Bundle
--------------

```bash
{
    "country": "United Kingdom",
    "isocode": "GB",
    "level": "Undergraduates",
    "course": "Art",
    "min": "3",
    "max": 4,
    "execptions": ""
}
```

Usage
------

Add to your project:
```bash
npm install nnode-course-length --save
```
Query the list of university/college domains:
```bash
var course = require('node-course-length');

uniDomacourseins.find('law');
//or
course.find('india', 'country');
//returns
/* {
    "country": "India",
    "isocode": "In",
    "level": "under-graduates",
    "course": "Medicine",
    "min": "",
    "max": 7,
    "execptions": ""
}*/