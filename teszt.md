# Teszt

Név: 

## Kérdések:
1. Mit értünk egy `commit` alatt, mit tartalmaz?
2. commit az aktuális változtatások csokra/gyűjteményének leírását szolgálja. úgymond egy komment hogy a mi változott
3. Mi a különbség a `fetch` es `pull` git parancsok között?
4. a fetch csak megnézi mi a helyzet a remote repoban, a változtatásokat a pull le is huzza és változtatja .

1. Mi a három állapota file-oknak git szempontjából, milyen parancsokkal mozgatjuk ezek között?
2. a változott a hozzáadott, a commitolt. git status => git add . => git commit => git push
3. 
4. Mi a különbség a `git checkout origin/feature` és a `git checkout feature` parancsok között?
5. az első a fő szálon az eredeti szálon van ,a második az elágazást nézi / más branchet nézhetünk meg vele
6. 
7. Mi történik, ha valaki más is módosította a file-t amin dolgozunk és mit tudunk tenni ilyenkor?
8. No pánik. bármikor vissza tudunk állni a commitoknak köszönhetően egy előző  állapotra, láthatjuk ki mit mikor változtatott
9. 
10. Mi az a `HEAD` és mi a jelentősége?
11. Egy szimbolikus referencia az aktuális pozícionkra/ ahol épp állunk a , csak egy rá mutató link, mindig az aktuális poziciónkra mutat
12. Mi a célja a branch-elésnek?
13. A cél , hogy több szálon dolgozhassanak a programozók és amikor valami jól működik csak akkor rakják a fő szálra 
14. 
15. Hogyan lehet összehasonlítani file-ok állapotait, mire tudjuk még ezt a kimenetet használni?
16. git diff file_nev
17. 
18. Hogy lehet megnézni egy repo történetét, milyen eszközeink vannak ebben való keresésre?
19. git log / greppel tudunk benne keresni 
20. Melyik git parancsot használnád, hogy megtudd milyen állapotban van épp a repo?
21. git status

Mark Zuckerberg 14 órával ezelőtt
To follow industry standards, the endpoint responsible for the status of
the service should live under the /health endpoint and return a bool
value denoted by the `health` key.

router.get('/', function(req, res) {
  res.json({ up: true });
router.get('/health', function(req, res) {
  res.json({ health: true });
