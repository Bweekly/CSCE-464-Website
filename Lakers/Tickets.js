function priceTwenty() 
    {
        var Tickets = document.getElementById('numTicketsOne').value;
        if(Tickets <= 0) {
            window.alert("Please enter a number greater than 0")
        } else {
            let Price = Tickets * 20;
            window.alert("Your total is $" + Price)
        }
        

    }

function priceEleven() 
    {
        var Tickets = document.getElementById('numTicketsTwo').value;
        if(Tickets <= 0) {
            window.alert("Please enter a number greater than 0")
        } else {
            let Price = Tickets * 11;
            window.alert("Your total is $" + Price)
        }
        

    }

function priceThirteen() 
    {
        var Tickets = document.getElementById('numTicketsThree').value;
        if(Tickets <= 0) {
            window.alert("Please enter a number greater than 0")
        } else {
            let Price = Tickets * 13;
            window.alert("Your total is $" + Price)
        }
        

    }
        
        
