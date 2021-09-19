const btn = document.getElementById('btn');
billAmount = document.getElementById('cashierBillAmt');
billAmount.focus();

btn.addEventListener('click',() =>{
  
    if(billAmount.value){
        // parent node
        const Bill = document.getElementById('Bill');
        
        // create new element
        const cashGiven = document.createElement('input');
        cashGiven.setAttribute("placeholder" , "Enter the Cash given by customer");
        cashGiven.classList.add('input');
        Bill.appendChild(cashGiven);
        cashGiven.focus();

        //create new button
        const newBtn = document.createElement('button');
        newBtn.innerHTML = 'Enter';
        newBtn.classList.add('button');
        Bill.appendChild(newBtn);

        // remove old Elements

        const oldInput = document.getElementById('Bill');
        const firstInput = document.getElementById('cashierBillAmt');
        const firstBtn = document.getElementById('btn');
        oldInput.removeChild(firstInput);
        oldInput.removeChild(firstBtn);


            newBtn.addEventListener('click' ,()=>{
            Bill.removeChild(cashGiven);
            Bill.removeChild(newBtn);


        const Money = +cashGiven.value - +billAmount.value;
        const returnCash = document.createElement('div');
        if(Money >= 0){
            returnCash.innerHTML = ` Return Cash Amount :<br> ${Money} `;
            returnCash.classList.add('return');
        const CashDistribution = document.getElementById('cash');
        let Heading = document.createElement('div');
        Heading.innerHTML = `Cash Distribution`;
        Heading.classList.add('heading');
        CashDistribution.appendChild(Heading);

        

        const NoteCounter = document.createElement('div');
        let Notes = [2000,500,200,100,50,20,10,5,2,1];
        let remainder= Money;
        let quotient = 0 ;
        for(i = 0 ; i<Notes.length ; i++){
            quotient = remainder / Notes[i];
            remainder = remainder % Notes[i];
            if(Math.floor(quotient)!= 0){
                // NoteCounter.innerHTML = `Bill Amount: ${billAmount.value}`;
                // NoteCounter.innerHTML = ``;
                NoteCounter.innerHTML += `${Notes[i]}RS - ${Math.floor(quotient)} <br> `;

                NoteCounter.classList.add('notes');
                CashDistribution.appendChild(NoteCounter);

            }
        }

        }
        else {
            returnCash.innerHTML = `You paid less Amount Than Bill Amount`;
            returnCash.classList.add('lessmoney');
        }
        Bill.appendChild(returnCash);
     

        });

    } else{
            alert('please Enter The Bill Amount');
                
    }

});




           