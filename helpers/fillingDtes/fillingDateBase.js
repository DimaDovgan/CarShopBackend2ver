
const inputString = `(1, 'AC '),
(2, 'Acura '),
(3, 'Adler '),
(4, 'Alfa Romeo '),
(5, 'Alpina '),
(6, 'Alpine '),
(7, 'AM General '),
(8, 'AMC '),
(9, 'Ariel '),
(10, 'Aro '),
(11, 'Asia '),
(12, 'Aston Martin '),
(13, 'Astro '),
(14, 'Audi '),
(15, 'Austin '),
(16, 'Autobianchi '),
(17, 'Avtokam '),
(18, 'Baltijas Dzips '),
(19, 'Batmobile '),
(20, 'Beijing '),
(21, 'Bentley '),
(22, 'Bertone '),
(23, 'Bilenkin '),
(24, 'Bitter '),
(25, 'BMW '),
(26, 'Borgward '),
(27, 'Brabus '),
(28, 'Brilliance '),
(29, 'Bristol '),
(30, 'Bronto '),
(31, 'Bufori '),
(32, 'Bugatti '),
(33, 'Buick '),
(34, 'BYD '),
(35, 'Byvin '),
(36, 'Cadillac '),
(37, 'Callaway '),
(38, 'Carbodies '),
(39, 'Caterham '),
(40, 'Changan '),
(41, 'ChangFeng '),
(42, 'Chery '),
(43, 'Chevrolet '),
(44, 'Chrysler '),
(45, 'Citroen '),
(46, 'Cizeta '),
(47, 'Coggiola '),
(48, 'Dacia '),
(49, 'Dadi '),
(50, 'Daewoo '),
(51, 'DAF '),
(52, 'Daihatsu '),
(53, 'Daimler '),
(54, 'Datsun '),
(55, 'De Tomaso '),
(56, 'Delage '),
(57, 'DeLorean '),
(58, 'Derways '),
(59, 'DeSoto '),
(60, 'Dodge '),
(61, 'DongFeng '),
(62, 'Doninvest '),
(63, 'Donkervoort '),
(64, 'DS '),
(65, 'E-Car '),
(66, 'Eagle '),
(67, 'Eagle Cars '),
(68, 'Ecomotors '),
(69, 'Excalibur '),
(70, 'FAW '),
(71, 'Ferrari '),
(72, 'Fiat '),
(73, 'Fisker '),
(74, 'Ford '),
(75, 'Foton '),
(76, 'FSO '),
(77, 'Fuqi '),
(78, 'GAZ '),
(79, 'Geely '),
(80, 'Genesis '),
(81, 'Geo '),
(82, 'GMC '),
(83, 'Gonow '),
(84, 'Gordon '),
(85, 'Great Wall '),
(86, 'Hafei '),
(87, 'Haima '),
(88, 'Hanomag '),
(89, 'Haval '),
(90, 'Hawtai '),
(91, 'Hindustan '),
(92, 'Holden '),
(93, 'Honda '),
(94, 'HuangHai '),
(95, 'Hudson '),
(96, 'Hummer '),
(97, 'Hyundai '),
(98, 'Infiniti '),
(99, 'Innocenti '),
(100, 'Invicta '),
(101, 'Iran Khodro '),
(102, 'Isdera '),
(103, 'Isuzu '),
(104, 'IVECO '),
(105, 'IZh '),
(106, 'JAC '),
(107, 'Jaguar '),
(108, 'Jeep '),
(109, 'Jensen '),
(110, 'JMC '),
(111, 'Kamaz '),
(112, 'Kanonir '),
(113, 'Kia '),
(114, 'Koenigsegg '),
(115, 'Kombat '),
(116, 'KTM '),
(117, 'Lada '),
(118, 'Lamborghini '),
(119, 'Lancia '),
(120, 'Land Rover '),
(121, 'Landwind '),
(122, 'Lexus '),
(123, 'Liebao Motor '),
(124, 'Lifan '),
(125, 'Lincoln '),
(126, 'Lotus '),
(127, 'LTI '),
(128, 'LuAZ '),
(129, 'Luxgen '),
(130, 'Mahindra '),
(131, 'Marcos '),
(132, 'Marlin '),
(133, 'Marussia '),
(134, 'Maruti '),
(135, 'Maserati '),
(136, 'Maybach '),
(137, 'Mazda '),
(138, 'McLaren '),
(139, 'Mega '),
(140, 'Mercedes-Benz '),
(141, 'Mercury '),
(142, 'Metrocab '),
(143, 'MG '),
(144, 'Microcar '),
(145, 'Minelli '),
(146, 'MINI '),
(147, 'Mitsubishi '),
(148, 'Mitsuoka '),
(149, 'Morgan '),
(150, 'Morris '),
(151, 'Moskvitch '),
(152, 'Nissan '),
(153, 'Noble '),
(154, 'Oldsmobile '),
(155, 'Opel '),
(156, 'Osca '),
(157, 'Packard '),
(158, 'Pagani '),
(159, 'Panoz '),
(160, 'Perodua '),
(161, 'Peugeot '),
(162, 'PGO '),
(163, 'Piaggio '),
(164, 'Plymouth '),
(165, 'Pontiac '),
(166, 'Porsche '),
(167, 'Premier '),
(168, 'Proton '),
(169, 'PUCH '),
(170, 'Puma '),
(171, 'Qoros '),
(172, 'Qvale '),
(173, 'Ravon '),
(174, 'Reliant '),
(175, 'Renaissance '),
(176, 'Renault '),
(177, 'Renault Samsung '),
(178, 'Rezvani '),
(179, 'Rimac '),
(180, 'Rolls-Royce '),
(181, 'Ronart '),
(182, 'Rover '),
(183, 'Saab '),
(184, 'Saleen '),
(185, 'Santana '),
(186, 'Saturn '),
(187, 'Scion '),
(188, 'SEAT '),
(189, 'Seaz '),
(190, 'Shanghai Maple '),
(191, 'ShuangHuan '),
(192, 'Skoda '),
(193, 'Smart '),
(194, 'SMZ '),
(195, 'Soueast '),
(196, 'Spectre '),
(197, 'Spyker '),
(198, 'SsangYong '),
(199, 'Steyr '),
(200, 'Subaru '),
(201, 'Suzuki '),
(202, 'TagAZ '),
(203, 'Talbot '),
(204, 'TATA '),
(205, 'Tatra '),
(206, 'Tazzari '),
(207, 'Tesla '),
(208, 'Tianma '),
(209, 'Tianye '),
(210, 'Tofas '),
(211, 'Toyota '),
(212, 'Trabant '),
(213, 'Tramontana '),
(214, 'Triumph '),
(215, 'TVR '),
(216, 'UAZ '),
(217, 'Ultima '),
(218, 'Vauxhall '),
(219, 'Vector '),
(220, 'Venturi '),
(221, 'Volkswagen '),
(222, 'Volvo '),
(223, 'Vortex '),
(224, 'W Motors '),
(225, 'Wanderer '),
(226, 'Wartburg '),
(227, 'Westfield '),
(228, 'Wiesmann '),
(229, 'Willys '),
(230, 'Xin Kai '),
(231, 'Yo-Mobil '),
(232, 'Zastava '),
(233, 'ZAZ '),
(234, 'Zenos '),
(235, 'Zenvo '),
(236, 'Zibar '),
(237, 'ZiL '),
(238, 'Zis '),
(239, 'Zotye '),
(240, 'ZX ');`;


// function convertStringToObjectArray() {
//     // Розділити вхідну строку на рядки
//     const lines = inputString.trim().split('\n');
    
//     // Масив для зберігання об'єктів
//     const objectsArray = [];

//     // Перетворити кожен рядок на об'єкт
//     lines.forEach(line => {
//         // Розділити рядок на значення (роздільник - кома)
//         const values = line.trim().split(', ');

//         // Отримати перше і друге значення
//         const brendId = parseInt(values[0].slice(1)); // Перше значення, обрізаємо зайві символи (знаки круглих дужок)
//         let titlebrend = values[1].slice(1); // Друге значення, обрізаємо зайві символи (лапки)
        
//         // Виправлення останньої назви, щоб відкинути останні два символи (один пробіл і одна лапка)
        
//             titlebrend = titlebrend.slice(0, -4);
        

//         // Створити об'єкт і додати його до масиву
//         objectsArray.push({ brendId, titlebrend });
//     });

//     return objectsArray;
// }

// const { MongoClient } = require('mongodb');

// // З'єднання з сервером MongoDB
// const uri = 'mongodb+srv://dovgand887:OXglzPFllTEmQi8j@car-shop1.ze1jotg.mongodb.net/Car_shop';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function insertData() {
//     try {
//         await client.connect(); // З'єднання з базою даних

//         const database = client.db('Car_characteristycs');
//         const collection = database.collection('brend');

//         // Дані для вставки
//         const data = convertStringToObjectArray();

//         // Вставка даних
//         const result = await collection.insertMany(data);
//         console.log(`${result.insertedCount} записів успішно вставлено.`);
//     } catch (error) {
//         console.error('Помилка під час вставки даних:', error);
//     } finally {
//         await client.close(); // Закриття з'єднання
//     }
// }

//insertData();



// module.exports = insertData;
