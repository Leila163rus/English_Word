const data = 
['people', 'люди','family', 'семья','woman', 'женщина','man', 'мужчина','girl', 'девочка', 'boy', 'мальчик','child', 'ребёнок',
  'friend', 'друг','husband', 'муж','wife', 'жена','name', 'имя', 'head', 'голова','face', 'лицо','hand', 'рука',
  'hour', 'час', 'week', 'неделя', 'day', 'день', 'night', 'ночь', 'month', 'месяц', 'year', 'год', 'time', 'время',
  'world','мир', 'sun', 'солнце', 'animal', 'животное', 'tree', 'дерево', 'water', 'вода', 'food', 'еда', 'fire', 'огонь',
  'country', 'страна', 'city', 'город', 'street', 'улица', 'school', 'школа', 'shop', 'магазин', 'house', 'дом', 'room', 'комната'
]

export const englishWord = data.filter((el, index) => index%2 === 0);

export const russianWord = data.filter((el, index) => index%2 !== 0);