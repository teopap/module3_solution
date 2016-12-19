$script('foo.js', function() {
  // foo.js is ready
})


$script(['foo.js', 'bar.js'], function() {
  // foo.js & bar.js is ready
})


$script(['foo.js', 'bar.js'], 'bundle')
$script.ready('bundle', function() {
  // foo.js & bar.js is ready
})

// create an id and callback inline
$script(['foo.js', 'bar.js'], 'bundle', function () {
  // foo.js & bar.js is ready
})


$script('foo.js', 'foo')
$script('bar.js', 'bar')
$script
  .ready('foo', function() {
    // foo.js is ready
  })
  .ready('bar', function() {
    // bar.js is ready
  })


var dependencyList = {
    foo: 'foo.js'
  , bar: 'bar.js'
  , thunk: ['thunkor.js', 'thunky.js']
}

$script('foo.js', 'foo')
$script('bar.js', 'bar')

// wait for multiple depdendencies!
$script.ready(['foo', 'bar', 'thunk'], function () {
  // foo.js & bar.js & thunkor.js & thunky.js is ready
}, function(depsNotFound) {
    // foo.js & bar.js may have downloaded
    // but ['thunk'] dependency was never found
    // so lazy load it now
    depsNotFound.forEach(function(dep) {
      $script(dependencyList[dep], dep)
    })
  })


// in my-awesome-plugin.js
$script.ready('jquery', function() {
  //define awesome jquery plugin here
  $script.done('my-awesome-plugin')
})

// in index.html
$script('jquery.js', 'jquery')
$script('my-awesome-plugin.js')
$script.ready('my-awesome-plugin', function() {
  //run code here when jquery and my awesome plugin are both ready
})