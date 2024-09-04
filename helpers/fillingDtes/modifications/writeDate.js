
const modif =require('./file');


const { MongoClient } = require('mongodb');
// const model= require('./testFile22')

const bodyTypeTranslations = {
    'Передний': 'Передній',
    'Задний': 'Задній',
    'Полный привод':'Повний привід',
    'Полный привод подключаемый':'Повний привід із підключенням',
    
};

// Словник для перекладу спеціальних термінів
const specialTermTranslations = {
    'л.с.': 'к.с', // Додайте інші переклади термінів тут за потребою
};

function detectTransmissionType(inputString) {
  // Створюємо регулярний вираз для пошуку слів
  var regex = /\b(AT|MT|CVT|DCT|AMT)\b/g;
  
  // Шукаємо всі збіги в рядку
  var matches = inputString.match(regex);

  // Якщо збіги є, повертаємо перший знайдений тип трансмісії
  if (matches !== null) {
      return matches[0];
  } else {
      return null; // Якщо збігів немає, повертаємо null
  }
}
const translateTransmisionType={
  "AT":"Автомат",
  "MT":"Механіка",
  "CVT":"Варіатор",
  "DCT":"Робот",
  "AMT":"Робот",

}

async function insertDataToMongoDB() {
    const uri = 'mongodb+srv://dovgand887:OXglzPFllTEmQi8j@car-shop1.ze1jotg.mongodb.net/Car_shop';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // (`modification_id`, `brand_id`, `model_id`, `generation_id`, `name`, `start_year`, `end_year`, `engine_power`, `car_drive`) VALUES
    try {
        await client.connect(); // З'єднання з базою даних

        const database = client.db('Car_сharacteristycs');
        const collection = database.collection('modification_type3');

        // Розділити вхідну строку на записи
        const records = modif.trim().split('\n');

        // Масив для зберігання об'єктів
        const objectsArray = [];

        // Перетворити кожен запис на об'єкт
        records.forEach(record => {
            // Розділити запис за допомогою коми
            const values = record.trim().slice(1, -1).split(', ');
            // 4-Seater Long 3.6 AT 
            // 2.0d AT
            // 4MOTION 2.0d AT 
            // Отримати значення для кожної властивості
            const modificationId = parseInt(values[0]);
            const brandId = parseInt(values[1]);
            const modelId = parseInt(values[2]);
            const generationId=parseInt(values[3]);
            const modifString=translate(`${values[4]}${values[5]}`).slice(1, -1);
            const wheelDrive=getWheelDrive(modifString);
            const transmission=translateTransmisionType[detectTransmissionType(`${values[4]}${values[5]}`)];
            console.log(modifString,"modifString",transmission,"transmission")
            // let modification= null;
            // const string=values[4].split('(')[0].split(' ');
            // console.log(string,"string");
            // let fuel= "petrol";
            // let engineCapacity=null;
            // let transmission=null;
            // if(string.length>=3){
            //     console.log("string.length>3")
            //     if(string.length>3){
            //         modification=string.slice(0, string.length - 3).join("")
            //         console.log(modification,"modif")
            //       }
                  
            //       if(string[string.length -3].includes("d")){
            //           fuel="diesel";
            //           engineCapacity=parseFloat(string[string.length -3].slice(2).slice(0, -1));
                      
            //       }
            //       else{
            //           engineCapacity=parseFloat(string[string.length -3].slice(1));
            //           console.log(string[string.length -3].slice(2),"capacyty")
            //       }
            //       transmission=string[string.length -2];
            //       console.log(string[string.length -2],"transmision")
            // }
            
            const power=parseInt(values[8]);
            const powerType="к.с";
            const startYear = values[6];
            const endYear = values[7];
            
            
            objectsArray.push({modificationId,brandId,modelId, generationId,power,powerType,modifString, startYear, endYear,transmission,wheelDrive });
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



function getWheelDrive(string) {
  // Шукаємо слова "Передній", "Задній", "Повний привід" у рядку
  let Drive = string.match(/Передній|Задній|Повний привід/g);
  console.log(string,"ddsddd")
   return Drive ? Drive[0] : 'Задний';
  
}

const translations = {
    'Передний': 'Передній',
    'Задний': 'Задній',
    'Полный привод': 'Повний привід',
    'Полный привод подключаемый': 'Повний привід ',
    'Повний привід постоянный':'Повний привід ',
  };
  
  // Попередньо компільовані регулярні вирази
  const regexPatterns = {
    power: /л\.с\./g,
    translation: {
      'Передний': new RegExp('Передний', 'g'),
      'Задний': new RegExp('Задний', 'g'),
      'Полный привод': new RegExp('Полный привод', 'g'),
      'Полный привод подключаемый': new RegExp('Полный привод подключаемый', 'g'),
      'Повний привід постоянный': new RegExp('Повний привід постоянный','g'),
    },
  };
  
  // Функція, яка виконує переклад
  function translate(input) {
    let output = input;
  
    // Замінюємо 'л.с.' на 'к.с.'
    output = output.replace(regexPatterns.power, 'к.с.');
  
    // Виконуємо заміни згідно з словником перекладів
    for (const [key, pattern] of Object.entries(regexPatterns.translation)) {
      if (translations[key]) {
        output = output.replace(pattern, translations[key]);
      }
    }
  
    return output;
  }

module.exports = insertDataToMongoDB;
