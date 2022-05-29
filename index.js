// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name :"Monika",
    gender : "Female",
    age : 17,
    email: "monica@dingdong.com",
    favoriteColor : [
        "yellow", "pink", "white", "Purple"
    ],
    isHavePet: "Yes",
    education : [
    {name: 'SD 01', city: 'Jakarta', Graduate: 2016},
    {name: 'SMPN 02', city: 'Jakarta', graduate: 2019},
    {name: 'SMA 03', city:'Tangerang'}
    ],
    favoriteRestaurant: [
        "Bento", "Sushi", "Pancake", " Eggy", "Tempura",
        "Bento", "Eggy", "Padang", "Tteaok", "Sushi", "Sushi"
    ]
};


const secondUser = {name :"Wendy",
gender : "Male",
age : 23,
email: "wendy@dingdong.com",
favoriteColor : [
    "Blue", "Black", "Grey"
],
isHavePet: "No",
education : [
    {name: 'SD 01', city: 'Jakarta', Graduate: 2016},
    {name: 'SMPN 02', city: 'Jakarta', graduate: 2019},
    {name: 'SMA 03', city:'Tangerang'}
],
favoriteRestaurant: [
   "Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu",
   "Geprek","Pancake","Eggy"
]};

// TODO: Masukkan hasil akhir dari kedua user di sini
let myJson = JSON.stringify(firstUser);
let myJson2= JSON.stringify(secondUser)
const users = [];
users.push(myJson,myJson2);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};