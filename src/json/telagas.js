import { faker } from '@faker-js/faker';

const chanels = []
for (let i = 0 ; i <= 20; i++){
    chanels.push({
        name: faker.name.findName(),
        img: faker.image.abstract(),
        description: faker.lorem.sentences(10),
        favorite: false
    })
}

export default chanels