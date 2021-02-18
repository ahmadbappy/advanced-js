const students = [
    {
        id: 101,
        firstName: 'Ahmad',
        lastName: 'Tarique',
        age: 28,
        socialMedia: 'Facebook'
    },
    {
        id: 102,
        firstName: 'Ahmad',
        lastName: 'Bappy',
        age: 26,
        socialMedia: 'Instagram'
    },
    {
        id: 103,
        firstName: 'Takia',
        lastName: 'Tanjida',
        age: 22,
        socialMedia: 'Twitter'
    },
    {
        id: 104,
        firstName: 'Tanjida',
        lastName: 'Tanha',
        age: 23,
        socialMedia: 'Whats App'
    },
    {
        id: 105,
        firstName: 'Guni',
        lastName: 'Manush',
        age: 38,
        socialMedia: 'Signal'
    },
    {
        id: 106,
        firstName: 'Moga',
        lastName: 'Jogish',
        age: 48,
        socialMedia: 'Telegram'
    },
    {
        id: 107,
        firstName: 'Omuk',
        lastName: 'Tomuk',
        age: 18,
        socialMedia: 'Google+'
    },
];

// const filteredData = students.filter(student => student.age > 25);
// const filteredData = students.filter(social_media => social_media.socialMedia === 'Google+');
// const filteredData = students.filter(first_name => first_name.firstName === 'Takia');

// const mappedData = students.map((student) => {
//     return student.lastName;
// });

console.log(students.map((student) => {
    return student.socialMedia;
}));