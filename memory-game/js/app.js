
(function(){
	var deck = document.getElementsByClassName('deck');
	var list = ["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o","fa fa-paper-plane-o","fa-anchor","fa-anchor","fa-bolt","fa-bolt","fa fa-cube","fa fa-cube","fa fa-leaf","fa fa-leaf","fa fa-bicycle","fa fa-bicycle","fa fa-bomb","fa fa-bomb"];
	var ggg = document.getElementsByClassName('ggg');
	var match = document.getElementsByClassName('match');
	var moves = document.getElementsByClassName('moves');
	var lastName="";
	var lastIndex;
	var j=0;
	function thing(){
		var cards = document.getElementsByClassName('card');
		var ggg = document.getElementsByClassName('ggg');
		var match = document.getElementsByClassName('match');
		var moves = document.getElementsByClassName('moves');
		var lastName="";
	    var lastIndex;
	    var j=0;
	    function open(i){
	    	return function(){
	    		if(cards[i].className.indexOf("match")===-1){
	    			if (lastName==="") {
	             		cards[i].className="card"+" open"+" show";
	             		lastName=cards[i].getElementsByTagName("i")[0].className;
	                	lastIndex=i;
		            }
		            else{
		            	if (cards[i].className.indexOf("open")===-1) {
		            		j++;
		            		moves[0].innerHTML=j;
		            	}
		                if (lastName!==cards[i].getElementsByTagName("i")[0].className) {
		                    setTimeout(function(){
		                        cards[i].className="card";
		                        cards[lastIndex].className="card";
		                        ggg[0].style.display="none";
		                    },1000)
		                    cards[i].className="card"+" mistake";
		                    cards[lastIndex].className="card"+" mistake";
		                    ggg[0].style.display="block";
		                    lastName="";
		                }
		                else if (i!==lastIndex){
		                    cards[i].className="card"+" match";
		                    cards[lastIndex].className="card"+" match";
		                    lastName="";
		                    if (match.length===cards.length) {
		                    	setTimeout(function(){
			                        var win = confirm("You win\n"+j+"moves\n"+"restart or not");
			                        if(win){
			                        	location.reload();
			                        }
		                    	},100)
		    				}
		                }       
		            }
		    	}
	    	} 
	    }
	    for (var i = 0; i < 16; i++) {
	        cards[i].onclick=open(i);
	    }	
	}
	function shuffle(array) {
	    var currentIndex = array.length, temporaryValue, randomIndex;

	    while (currentIndex !== 0) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    }

	    return array;
	}
	var Card = function(card_name,i){
		this.i=i;
		this.init(card_name);
	}
	Card.prototype.init=function(card_name){
		this.li = document.createElement("li");
		this.card = document.createElement("i");
		this.li.className="card";
		this.card.className=card_name;
		this.li.appendChild(this.card);
		deck[0].appendChild(this.li);
	}
	
	shuffle(list);
	for(var i=0;i<list.length;i++){
		var card = new Card(list[i],i);
		console.log(list.length);
	}
	thing();
})()
