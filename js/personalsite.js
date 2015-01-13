$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


var myEmail = "liampcollins" + "@gmail.com"
var message
var senderEmail
var aK = "4GXRIpD" + "f9HxK3P" + "nVeF2MwA"
var params
var response

function log(obj) {
   $('#response').css("background", 'rgb(68,61,40)');
   response = JSON.stringify(obj)
   if(response.status = "sent"){
      $('#response').text("Message has been sent. Thank you");      
   }else{
      $('#response').text("Something went wrong. Try emailing me directly at " + myEmail + "");      
   }
}

var m = new mandrill.Mandrill(aK);


function sendTheMail() {
   message = $(".message").val();
   senderEmail = $(".email-address").val();
   params = {
       "message": {
           "from_email":myEmail,
           "to":[{"email":myEmail}],
           "subject": "Email from " + senderEmail + " from personal site",
           "html": "<p>" + message + "</p>",
          "text": message,
           "autotext": true,
           "track_opens": true,
           "track_clicks": true,
       }
   };
   if(message!="" && senderEmail!=""){
      m.messages.send(params, function(res) {
      log(res);
      $(".message").value = ""
      $(".email-address").value = ""
      }, function(err) {
         log(err);
      });      
   }else{
      debugger
      $('#response').css("background", 'rgb(68,61,40)');
      $('#response').text("You must enter a valid email address and message to continue");      
   }

}


function hello(){
   console.log("hello")
}

$(document).ready(function(){
  $('.send-button').on('click', sendTheMail)
});


// $.ajax({
//   type: “POST”,
//   url: “https://mandrillapp.com/api/1.0/messages/send.json”,
//   data: {
//     ‘key’: ‘YOUR API KEY HERE’,
//     ‘message’: {
//       ‘from_email’: ‘YOUR@EMAIL.HERE’,
//       ‘to’: [
//           {
//             ‘email’: ‘RECIPIENT_NO_1@EMAIL.HERE’,
//             ‘name’: ‘RECIPIENT NAME (OPTIONAL)’,
//             ‘type’: ‘to’
//           },
//           {
//             ‘email’: ‘RECIPIENT_NO_2@EMAIL.HERE’,
//             ‘name’: ‘ANOTHER RECIPIENT NAME (OPTIONAL)’,
//             ‘type’: ‘to’
//           }
//         ],
//       ‘autotext’: ‘true’,
//       ‘subject’: ‘YOUR SUBJECT HERE!’,
//       ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
//     }
//   }
//  }).done(function(response) {
//    console.log(response); // if you're into that sorta thing
//  });