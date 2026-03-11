import { readFile, writeFile, access } from 'node:fs/promises';

async function noPromiseAll() {
    try {
        const data = await readFile("instrukce.txt", "utf-8");
        const n = parseInt(data.trim());

        if (isNaN(n)) throw new Error("Neplatný vstup");
    
        for (let i = 0; i <= n; i++) {
            await writeFile(`${i}.txt`, `Soubor ${i}`);
        }
    
        console.log(`Vytvořeno ${n + 1} souborů.`);
    } catch (err) {
        console.error("Chyba:", err);
    }
}

async function promiseAll() {
    try {
        const data = await readFile("instrukce.txt", "utf-8");
        const n = parseInt(data.trim());

        if (isNaN(n)) throw new Error("Neplatný vstup");

        const promises = [];

        for (let i = 0; i <= n; i++) {
            promises.push(
                writeFile(`${i}.txt`, `Soubor ${i}`)
            );
        }

        await Promise.all(promises);

        console.log(`Vytvořeno ${n + 1} souborů.`);
    } catch (err) {
        console.error("Chyba:", err);
    }
}


// noPromiseAll()
promiseAll()