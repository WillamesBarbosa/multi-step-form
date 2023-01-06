const form = document.querySelector('.container');
const steps = document.querySelectorAll('.number');
const numbers = document.querySelectorAll('.number-step');
const checkbox = document.querySelector('.checkbox');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const priceCard = document.querySelectorAll('.price-card');
const card = document.querySelectorAll('.card');
const timeYear = document.querySelectorAll('.time-year');
const containerAddons = document.querySelectorAll('.container-addons');

function nextPage(){
    let cont = 0;
    let actualStep = 0;
    document.addEventListener('click', e=>{
        
        e.preventDefault()
        const elemento = e.target;
        if(elemento.classList.contains('next')){ 
            actualStep = actualStep + 1
            cont = cont + 20;
            if (cont >= 100) cont = 100
            form.style.marginLeft = `-${cont}%`
            stepsNumbers(actualStep);
        }
        
        if(elemento.classList.contains('back')){
            actualStep = actualStep - 1;
            cont = cont - 20;
            if(cont <= 0) cont = 0;
            form.style.marginLeft = `-${cont}%`;
            stepsNumbers(actualStep);
        }
    })

    
}

function stepsNumbers(actualStep){
    

    if(actualStep <= 0){
        steps[actualStep].classList.add('here');
        steps[actualStep + 1].classList.remove('here');

        numbers[actualStep].classList.add('here');
        numbers[actualStep + 1].classList.remove('here');

    }else if( actualStep === 3){
        steps[actualStep - 1].classList.remove('here');
        steps[actualStep].classList.add('here');
        
        numbers[actualStep - 1].classList.remove('here');
        numbers[actualStep].classList.add('here');

    }else if(actualStep === 4){
        numbers[3].classList.add('here')

    }
    else{
        steps[actualStep - 1].classList.remove('here');
        steps[actualStep].classList.add('here');
        steps[actualStep + 1].classList.remove('here');

        numbers[actualStep - 1].classList.remove('here');
        numbers[actualStep].classList.add('here');
        numbers[actualStep + 1].classList.remove('here');
    }
    
    
}

function monthAndYear(){
    let trueFalse = false;
    
    document.addEventListener('click', e=>{
        const elemento = e.target;
        if( elemento.classList.contains('checkbox-time-option') || elemento.classList.contains('ball-option')){
            if(checkbox.checked === true){
                year.style.fontWeight = '500'
                year.style.color = '#aaaab3'

                month.style.fontWeight = 'bold'
                month.style.color = '#1a365a'
                
                checkbox.checked = false;
                trueFalse = checkbox.checked;
                console.log(trueFalse);

                

            }else{
                checkbox.checked = true;
                month.style.fontWeight = '500'
                month.style.color = '#aaaab3'

                year.style.fontWeight = 'bold'
                year.style.color = '#1a365a'
            }

            
            const result = checkbox.checked === true;
            pricePerMonthOrYear(result);
        }
        
    })
    

}

function pricePerMonthOrYear(condition){
    let sum = 0;

    priceCard.forEach(function(preco, index){
        if(condition){
            sum = 90+(30*index)
            preco.innerText = `$${sum}/yr`;
            card[index].style.height = '10rem';
            timeYear[index].style.display = 'block';
        }else{
            sum = 9+(3*index)
            preco.innerText = `$${sum}/mo`;
            card[index].style.height = '9rem';
            timeYear[index].style.display = 'none';
        }
    })

    return sum;
}

function selectionCardMonthYear(){
    card.forEach(cardUnic=>{
            
            cardUnic.addEventListener('click', ()=>{
                card[0].classList.remove('selected-card')
                card[1].classList.remove('selected-card')
                card[2].classList.remove('selected-card')
                cardUnic.classList.add('selected-card')
                if(cardUnic.classList.contains('selected-card')){
                    cardPrice = cardUnic.querySelector('.price-card').innerText
                    console.log(cardUnic.querySelector('.price-card'))
                }
            })
            
        })

    
    //return cardPrice
}

function selectionAddons(){
        containerAddons.forEach(addon=>{
            addon.addEventListener('click', ()=>{
                const childElement = addon.firstElementChild;
                const objectChild = childElement.firstElementChild;
                addon.classList.toggle('selected');

                if(addon.classList.contains('selected')){
                    objectChild.checked = true;
                    addonsPrice.push(addon.innerText)
                    console.log(addonsPrice)
                }else{
                    objectChild.checked = false;
                    addonsPrice.pop()
                }
                
                
                
            })

        
    })
}

selectionAddons()

selectionCardMonthYear()


monthAndYear()

nextPage()