import { readFile, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';

async function copy() {
    try {
        const file = await readFile('instrukce.txt', 'utf-8');
        console.log(file);
        const [source, target] = file.trim().split(/\s+/);

        if (!source || !target) {
            console.error("Chyba: Soubor instrukce.txt musí obsahovat dva názvy souborů.");
            return;
        }

        const data = await readFile(source);

        await writeFile(target, data);

        console.log(`Hotovo! Obsah z "${source}" byl úspěšně zkopírován do "${target}".`);

    } catch (err) {
        console.error(err.message);
    }
}

copy();