## osm-tasking-manager-client

A client for getting OpenStreetMap Tasking Manager projects data


## Installation

    npm install osm-tasking-manager-client

## Usage

    var client = require("osm-tasking-manager-client")();

    client.tasks(826, function(err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);

    });

## API

#### client.tasks(projectId, cb)

* `projectId` - The projectId
* `cb(err, data)` - Called on API response
  * `err` - Null if nothing bad happened
  * `data` - JSON containing tasks available for the project

#### client.contributors(projectId, cb)

* `projectId` - The projectId
* `cb(err, data)` - Called on API response
  * `err` - Null if nothing bad happened
  * `data` - JSON containing contributos for the project

#### client.stats(projectId, cb)

* `projectId` - The projectId
* `cb(err, data)` - Called on API response
  * `err` - Null if nothing bad happened
  * `data` - JSON containing stats for the project


## License

The MIT License (MIT)

Copyright (c) 2015 osk &lt;oscar@shovelapps.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
