var system = require('system')
var page = require('webpage').create()
var url = "http://replay.pokemonshowdown.com/"
var testindex = 0
var loadInProgress = false
var username = 'deluks917'

var step1 = function() {
  // console.log("step1")
  page.open(url, function(status){})
  return 1
}

var step2 = function() {
  // console.log("step2")
  page.evaluate( function(user) {
    var input = document.getElementsByTagName('input')[0]
    input.value = user
    var buttons = document.getElementsByTagName('button')
    buttons[0].click()
  }, username)
  return 1
}

var step3 = function() {
  // console.log("step3")
  var ret = page.evaluate( function() {
    buttons = document.getElementsByTagName('button')
    if (buttons.length < 3) {
      return 1
    } else {
      buttons[2].click()
      return 0
    }
  })

  return ret
}

var step4 = function() {
  // console.log("step4")
  var ret = page.evaluate( function() {
    var linklist = document.getElementsByClassName('linklist')[0]
    var links = linklist.querySelectorAll('a')
    var output = []

    for(var i=0; i < links.length; i++) {
      output.push([links[i].textContent, links[i].href])
    }
    return output
  })

  console.log( JSON.stringify(ret) )

  return 1
}



var steps = [step1, step2, step3, step4]

setInterval(executeRequestsStepByStep, 600)

function executeRequestsStepByStep(){
    if (loadInProgress == false && typeof steps[testindex] == "function") {
        //console.log("step " + (testindex + 1))
        var ret = steps[testindex]()

        if (ret) {
          testindex++
        }
    }
    if (typeof steps[testindex] != "function") {
        // console.log("test complete!")
        phantom.exit()
    }
}

page.onLoadStarted = function() {
    loadInProgress = true
    // console.log('Loading started')
}
page.onLoadFinished = function() {
    loadInProgress = false
    // console.log('Loading finished')
}
page.onConsoleMessage = function(msg) {
    // console.log(msg)
}
