

$(document).ready(function(){
      $.getJSON("http://52.88.26.79:7000", function(data, status){
        for (var i = 0; i<data.length;i++){
            console.log(i+": "+data[i].username+" , "+data[i].chatmessage)
            newDiv= data[i].username+' : ' +data[i].chatmessage
            // message.innerHTML = newDiv;
            var div = document.createElement('p');
            var node = document.createTextNode(newDiv);
            div.appendChild(node)
            div.classList.add("card-panel")
            div.classList.add("teal")
     document.getElementById('otherMessages').appendChild(div);
        }
    });

      $("#mySendButton").click(function(){
        $.post("http://52.88.26.79:7000",
        {   
            username: "Koch",
            chatmessage: $("#textarea").val()
        },
        function(data, status){
        });
    });
});

// data.length
// data[0].username
// data[0].chatmessage