export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
        {
            id: 3,
            title: 'FullStack React',
            author: 'Antony Accomazzo',
            price: 24,
            coverImage: 'https://ichi.pro/assets/images/max/724/0*BOy-EA_tf45TrdUW.jpg'},
        {
            id: 4,
            title: 'Learning React',
            author: 'Alex Blanks',
            price: 28,
            coverImage: 'https://ichi.pro/assets/images/max/724/0*edTgfH0XBmq6aiGU.png'}
    ];

    getBooks(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                // if (Math.random() > 0.8) {
                //     reject(new Error('Something bad'));
                // } else {
                //     resolve(this.data);
                // }
                resolve(this.data);
            }, 700);
        });
    }
}