console.log('hi')

// const day = 'sunday';
const day = prompt("Enter a valid day"); 

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to the coading setup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
      default:
          console.log('Not a valid day');             
}

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to the coading setup'); 
}else if(day==='tuesday'){
    console.log('Prepare theory videos');
}else if(day ==='wednesday' || day ==='thursday'){
    console.log('write code examples');
}else if(day ==='friday'){
    console.log('Record videos');

}else if(day ==='saturday' || day ==='sunday'){
    console.log('Enjoy the weekend');
}else{
    console.log('Not a valid day');             
}
