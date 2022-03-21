function toggleDark(){
    let elementBody= document.body;
    let elementH1 = document.querySelector('h1');
    let elementItemdark = document.querySelectorAll('div.item');
    let elemenTextDark = document.querySelector('div.container');
    let elementSpan = document.querySelector('span');

    if(elementBody.classList.contains('dark') == false){
        elementBody.classList.add('dark');
        elementH1.classList.add('title-dark');
        elementItemdark.forEach(element => {element.classList.add('item-dark')});
        elemenTextDark.classList.add('content-text-dark');
        elementSpan.innerText = '🟡';
    }else{
        elementBody.classList.remove('dark');
        elementH1.classList.remove('title-dark');
        elementItemdark.forEach(element => {element.classList.remove('item-dark')});
        elemenTextDark.classList.remove('content-text-dark');
        elementSpan.innerText.remove('🟡')
    }
}