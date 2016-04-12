# drossel-datetime
Unnecessary datetime formatter.

[![NPM](https://nodei.co/npm/drossel-datetime.png)](https://nodei.co/npm/drossel-datetime/)

## What is this?
"drossel-datetime" is datetime formatter, compliance to ISO8601.  

## Install
step1: npm install
```
npm install drossel-datetime
```

step2: require module
```
var datetime = require('drossel-datetime');
```

## Usage

### composeDate(year, month, day)
```
datetime.composeDate(); // '1970-01-01'
datetime.composeDate(2016, 12, 31); // '2016-12-31'
```

### composeTime(hour, minute, second, timezone)
```
datetime.composeTime(); // '00:00:00Z'
datetime.composeTime(12, 34, 56, 9); // '12:34:56+09:00'
```

### composeDatetime(year, month, day, hour, minute, second, timezone)
```
datetime.composeDatetime(); // '1970-01-01T00:00:00Z'
datetime.composeDatetime(2016, 4, 1, 12, 34, 56, 9); // '2016-04-01T12:34:56+09:00'
```

### decomposeDate(date)
```
datetime.decomposeDate('2016-04-01');
// {year: '2016', month: '04', day: '01'}
```

### decomposeTime(time)
```
datetime.decomposeTime('12:34:56Z');
// {hour: '12', minute: '34', second: '56', timezone: 'Z'}
```

### decomposeDatetime(datetime)
```
datetime.decomposeDatetime('2016-04-01T12:34:56+09:00');
// {year: '2016', month: '04', day: '01', hour: '12', minute: '34', second: '56', timezone: '+09:00'}
```
