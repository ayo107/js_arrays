let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}


var item = [];
for(let key in contact){
// Code goes here
   item.push(key + " : " + contact[key])
}
console.log(item);



