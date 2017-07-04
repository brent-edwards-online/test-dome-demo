// >CHECK DOCUMENTATION<

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Styling links</title>
    <style type="text/css">
      /* Write your CSS solution here (do not edit the surrounding HTML) */
      
      a {
        text-transform: uppercase;
        cursor: help;
        text-decoration: none;
      }
      a:before {
        content: ">";
      }
      a:after {
        content: "<";
      }
    </style>
  </head>
  <body>
    <a href="http://www.testdome.com">Check documentation</a>
  </body>
</html>




// Check if a property exists

<!doctype html>
<html lang="en">
  <head>
    <script>
      function removeProp(obj, prop){

        var v = obj[prop];
        console.log(v);

        if(prop in obj)
        {
          delete obj[prop];
          return true;
        }

        return false;
      }


      console.log("Hello");

      var myObj = { name: "brent"};


      console.log(myObj);
      var r = removeProp(myObj,'blah');
      console.log(myObj);
      console.log(r);

      var r = removeProp(myObj,'name');
      console.log(myObj);
      console.log(r);

    </script>
  </head>
  <body>
  </body>
</html>



// ***** Children

<!doctype html>
<html lang="en">
  <head>
    
  </head>
  <body>
    <James>
      <Dave></Dave>
      <Mike idx="0"></Mike>
      <Mike idx="1"></Mike>
      <Sarah></Sarah>
    </James>

    <script src="js/lib/jquery-3.2.1.js"></script>
    <script>
       function closestRelative(parent, relativeName) {

        var children = parent.find(relativeName);

        var x = '';
        var ar = [];
        children.each(function(){
          ar.push({length: $(this).parents().length, elmt: $(this)});
        });

        var sorted = ar.sort(function(a,b) {
            if (a.length - b.length > 0) {
                return 1;
            }

            if (a.length - b.length < 0) {
                return -1;
            }

            return 0;
        });

        if(sorted.length > 0)
        {
          var r = sorted[0];
          return r.elmt;
        }
        else{
          return $([]);
        }
      }


        var j = $('james');

        var result = closestRelative(j,'Mike');

        console.log(result);

    </script>
  </body>
</html>



**** Colors and positioning

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Articles</title>
  <style>
    /* Write your CSS solution here (do not edit the surrounding HTML) */
    
    * {
      margin: 0;
      padding: 0;
    }
    
     article:nth-child(1){
      background-color: red;
      width: 50%;
      height: 50%;
      position: absolute;
      left: 0%;
    }
    
    article:nth-child(2){
      background-color: yellow;
      width: 50%;
      height: 50%;
      position: absolute;
      left: 50%;
    }
    
    article:nth-child(3){
      background-color: blue;
      width: 50%;
      height: 50%;
      position: absolute;
      left: 0%;
      top: 50%;
    }
    
    article:nth-child(4){
      background-color: green;
      width: 50%;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 50%
    }
    
  </style>
</head>
<body>
  <article>First</article>
  <article>Second</article>
  <article>Third</article>
  <article>Fourth</article>
</body>
</html>

***** Ensure

function ensure(value) {
  
          if(value === undefined)
            throw 'Error';
          
          
          return value;
        }



***** Fromat Date
 function formatDate(userDate) {
          // format from M/D/YYYY to YYYYMMDD
  
          var d = userDate.split('/');
          var result = d[2];
          if(d[0] < 10 )
            result += "0";
          result += d[0];
          if(d[1] < 10 )
            result += "0";
          result += d[1];

          return result;
        }



***** Remove Elements

function registerClickHandler () {
          // Implement the click handler here for button of class 'remove'
          var buttons = document.getElementsByClassName('remove');
          console.log(buttons);
          for(var i = 0; i < buttons.length; i++)
          {
            var button = buttons[i];

            button.addEventListener('click',function(e){
   
         
              e.srcElement.parentElement.parentElement.removeChild(e.srcElement.parentElement);
           });
          }
        }

/* HTML code for testing purposes (do not submit uncommented):
<div class="image">
  <img src="https://goo.gl/2oZU2S" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/tniGAc" alt="Second">
  <button class="remove">X</button>
</div>
*/

***** Add Divs

<!doctype html>
<html lang="en">
  <head>
    <style>
    
  </style>
  </head>
  <body>
      <div id="a">
        <div id="b">
        </div>
      </div>


    <!--
    <script src="./js/lib/jquery-3.2.1.js"></script>
    -->
    <script>
       function appendChildren() {
          var allDivs = document.getElementsByTagName("div");

          var d = [];
          for (var i = 0; i < allDivs.length; i++) {
            d.push(allDivs[i]);
          }

          for (var i = 0; i < d.length; i++) {
            var newDiv = document.createElement("div");
            decorateDiv(newDiv);
            d[i].appendChild(newDiv);
          }
        }

        // Mock of decorateDiv function for testing purposes
        function decorateDiv(div) {} 

        appendChildren();
    </script>

  </body>
</html>


****** Closure

<!doctype html>
<html lang="en">
  <head>
    <style>
    
  </style>
  </head>
  <body>
    In my life, I used the following web search engines:<br/>
    <a href="//www.yahoo.com">Yahoo!</a><br/>
    <a href="//www.altavista.com">AltaVista</a><br/>
    <a href="//www.google.com">Google</a><br/>



    <!--
    <script src="./js/lib/jquery-3.2.1.js"></script>
    -->
    <script>



      function registerHandlers() {
        var as = document.getElementsByTagName('a');

        for (var i = 0; i < as.length; i++) {
          as[i].myindex = i;
          as[i].onclick = function(e) {  
            e.stopImmediatePropagation();
            alert(this.myindex);
            return false;
          }
        }
      }

      registerHandlers();
    </script>

  </body>
</html>

***** Show/Hide jquery
function createProductCodeForm(parent) {
        var form = $("<form/>");

        form.append($("<label>").text('Product Code:'));
        form.append($("<input>").attr('name', 'productCode').attr('type', 'text')
            .focus(function(e){
              e.stopImmediatePropagation();
              $('#hintLabel').show();
            })
            .blur(function(e){
              e.stopImmediatePropagation();
              $('#hintLabel').hide();
            })
          );

         form.append($("<label id='hintLabel'>").attr('name', 'hint').text('The product code can be found on the label.').hide());

        form.append('<br>');

        form.append($("<input>").attr('type', 'submit'));

        parent.append(form);
      }




  ***** GetAttributes

      function endangeredSpecies(continent, species) {
        var continents = document.querySelectorAll('[data-continent="' + continent + '"]');

        for( var i = 0; i < continents[0].children.length; i++)
        {
            var s = continents[0].children[i];
            var a = s.getAttribute('data-species');
            if(a == species)
              return s.innerHTML;
        }

        return undefined;
      }