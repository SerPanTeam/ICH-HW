/* 
Необходимо отправить запрос на https://jsonplaceholder.typicode.com/photos, 
получить оттуда 15 урл фото и на страницу расположить все эти элементы как указано в фигме. 
Далее, мы отправляем запрос на 
https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1 
получаем оттуда url и отправляем еще раз но уже POST запрос на тот же адрес с фото, 
прикрепляя url с ссылкой на котика, в ответ на этот запрос мы получаем ответ и оттуда достаем url и 
выкладываем в центре страницы картинку кота с его айди
 */

const postUrl = "https://jsonplaceholder.typicode.com/photos?_limit=15";
const catUrl = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

async function showCats(postUrl) {
    try {
        const resp = await fetch(postUrl);
        const data = await resp.json();
        const curCatUrl = await getCat(catUrl);
        const container = document.querySelector(".container");
        let i = 0;
        data.forEach(async(val) => {
            i++;
            // console.log(val.id, val.title, val.url);
            const item = document.createElement('div');
            item.classList.add('item');

            const id = document.createElement('div');
            id.classList.add('id');
            id.textContent = val.id;

            const title = document.createElement('div');
            title.classList.add('title');
            title.textContent = val.title;


            const img = document.createElement('img');
            img.classList.add('img');

            if (i == 6) {
                img.src = await getCat(catUrl);
                item.classList.add('cat');
                console.log(curCatUrl);
                item.innerHTML = "<h2>Центровой кот.</h2>"
                item.append(img);

            }
            else {
                img.src = await getCat(catUrl);
                item.append(id, img, title);
            }

            container.append(item);
        });

    } catch (error) {
        console.error(error);
    }
}
async function getCat(catUrl) {
    const resp = await fetch(catUrl);
    const data = await resp.json();
    console.log(data[0].url);
    /* 
    ЭМУЛЯЦИЯ ПОСТ ЗАПРОСА
    ЭМУЛЯЦИЯ ПОСТ ЗАПРОСА
    ЭМУЛЯЦИЯ ПОСТ ЗАПРОСА
    ЭМУЛЯЦИЯ ПОСТ ЗАПРОСА
    */
    return data[0].url;
}


showCats(postUrl);
