const { MongoClient } = require('mongodb');
const model= require('./model/testFile22')
const makeArr=()=>{

    console.log("dffnldfd")
}

const bodyTypeTranslations = {
    'Купе': 'Купе',
    'Родстер': 'Родстер',
    'Cедан':'Седан',
    'Внедорожник 5 дверей':'Позашляховик 5 дверей',
    'Внедорожник 3 дверей':'Позашляховик 3 дверей',
    'Хэтчбек 3 двери':'Хетчбек 3 дверей',
    'Хэтчбек 5 двери':'Хетчбек 5 дверей',
    '5-дверный универсал':'універсал 5 дверей',
    '3-дверный универсал':'універсал 3 дверей',
    'Тарга':'Тарга',
    'Кабриолет':'Кабріолет',
    'Минивэн':'Мінівен',
    'Лифтбек':'Ліфтбек',
    'Пикап Двойная кабина':'Пікап подвійна кабіна',
    'Пикап Одинарная кабина':'Пікап одинарна кабіна',
    'Пикап Половина кабины':'Пікап півторачка кабіна',
    'Компактвэн':'Компактвен',
    'Купе хардтоп':'Купе хардтоп',
    'Микровэн':'Мікровен',
    'Фургон':'Фургон',
    'Внедорожник (открытый верх)':'Позашляховик (відкритий верх)',
    'Седан хардтоп':'Седан хардтоп',
};

// Словник для перекладу спеціальних термінів
const specialTermTranslations = {
    'Рестайлинг': 'Рестайлінг', // Додайте інші переклади термінів тут за потребою
};

async function insertDataToMongoDB() {
    const uri = 'mongodb+srv://dovgand887:OXglzPFllTEmQi8j@car-shop1.ze1jotg.mongodb.net/Car_shop';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect(); // З'єднання з базою даних

        const database = client.db('Car_characteristycs');
        const collection = database.collection('model');

        // Розділити вхідну строку на записи
        const records = model.trim().split('\n');

        // Масив для зберігання об'єктів
        const objectsArray = [];

        // Перетворити кожен запис на об'єкт
        records.forEach(record => {
            // Розділити запис за допомогою коми
            const values = record.trim().slice(1, -1).split(', ');

            // Отримати значення для кожної властивості
            const generationId = parseInt(values[0]);
            const brandId = parseInt(values[1]);
            const modelId = parseInt(values[2]);
            let name = values[3].split('(')[0].slice(1).slice(0, -1);;

            let bodyType = values[5].slice(1, -1);
            const startYear = values[6];
            let endYear = values[7].slice(0, -1);
            console.log(generationId, brandId, modelId, name, bodyType, startYear, endYear)

            // Переклад типу кузова
            bodyType = bodyTypeTranslations[bodyType] || bodyType;

            // Переклад спеціальних термінів
            for (const term in specialTermTranslations) {
                if (name.includes(term)) {
                    name = name.replace(term, specialTermTranslations[term]);
                }
            }

            // Заміна "н.в." на "н.ч."
            if (endYear === 0) {
                endYear = 'н.ч.';
            }

            // Створити об'єкт та додати його до масиву
            objectsArray.push({ generationId, brandId, modelId, name, bodyType, startYear, endYear });
        });

        // Вставити дані в базу даних
        const result = await collection.insertMany(objectsArray);
        console.log(`${result.insertedCount} записів успішно вставлено.`);
    } catch (error) {
        console.error('Помилка під час вставки даних:', error);
    } finally {
        await client.close(); // Закриття з'єднання
    }
}

module.exports = insertDataToMongoDB;