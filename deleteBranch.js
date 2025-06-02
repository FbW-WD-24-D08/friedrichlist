#!/usr/bin/env node

const { execSync } = require("child_process");

// Branch-Name aus Kommandozeile holen
const branch = process.argv[2];

if (!branch) {
  console.error("❌ Du musst den Namen der Branch angeben:");
  console.error("   Beispiel: node delete-branch.js feature/edit-course");
  process.exit(1);
}

try {
  console.log(`\n🔄 Wechsle auf main...`);
  execSync(`git checkout main`, { stdio: "inherit" });

  console.log(`\n🧹 Lösche lokale Branch '${branch}'...`);
  execSync(`git branch -d ${branch}`, { stdio: "inherit" });

  console.log(`\n☁️ Lösche Remote-Branch '${branch}' von origin...`);
  execSync(`git push origin --delete ${branch}`, { stdio: "inherit" });

  console.log(
    `\n✅ Branch '${branch}' wurde erfolgreich lokal und remote gelöscht.\n`
  );
} catch (error) {
  console.error(`\n❌ Fehler beim Löschen der Branch '${branch}':`);
  console.error(error.message);
}
