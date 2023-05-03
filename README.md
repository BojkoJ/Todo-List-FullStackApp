# Todo-List-FullStackApp
## Fullstacková applikace - todo list. 

## Jak funguje:
### pomocí expressu vytvořené RESTful API provádí http requesty na databázi
### server příjímá data z databáze a posílá na front-end
### fron-end (tvořen pomocí React.js a tailwindcss) zobrazuje data, sám se po každém requestu refreshne, bez toho aniž by refreshoval stránku

## Jak spustit:
### Vytvořit PostgreSQL databázi pomocí příkazů v souboru: Application/server/database.sql
### V konzoli se přepnout do složky server a příkaz: node index
### V další konzoli se přepnout do složky client a příkaz: npm run start