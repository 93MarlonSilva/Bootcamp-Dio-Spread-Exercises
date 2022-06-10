function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin'){
            admins.push(' ' + key);
        }
    }
  return 'Os usuarios cadastrados como administrador são:' + admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Paulo', 'User');
usuarios.set('Ana', 'Admin');

console.log(getAdmins(usuarios));
