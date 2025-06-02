const { execSync } = require("child_process");

// Argumente aus der Konsole holen (npm run push "Meine Nachricht")
const commitMessage = process.argv.slice(2).join(" ");

if (!commitMessage) {
  console.error("❌ Fehler: Du musst eine Commit-Nachricht angeben.");
  process.exit(1);
}

try {
  console.log("🔄 Staging aller Änderungen...");
  execSync("git add .", { stdio: "inherit" });

  console.log(`✅ Commit wird erstellt mit Nachricht: "${commitMessage}"`);
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });

  console.log("🚀 Pushe Änderungen auf GitHub...");
  execSync("git push", { stdio: "inherit" });

  console.log("🎉 Erfolgreich gepusht!");
} catch (error) {
  console.error("❌ Fehler beim Pushen:", error.message);
  process.exit(1);
}
