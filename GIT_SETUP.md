# Git-Setup-Anleitung

Diese Anleitung hilft dir, das Repository korrekt einzurichten und zu GitHub zu pushen.

## 1. Git-Konfiguration

Setze zunächst deine Git-Identität für dieses Repository:

```bash
git config user.email "deine-email@beispiel.de"
git config user.name "Dein Name"
```

Oder global für alle Repositories:

```bash
git config --global user.email "deine-email@beispiel.de"
git config --global user.name "Dein Name"
```

## 2. Standard-Branch konfigurieren

Um 'main' als Standard-Branch zu verwenden:

```bash
git config --global init.defaultBranch main
```

## 3. Repository initialisieren und ersten Commit erstellen

```bash
# Repository initialisieren
git init

# Alle Dateien zum Staging-Bereich hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit"
```

## 4. Branch umbenennen (falls nötig)

Wenn dein Branch aktuell 'master' heißt und du ihn in 'main' umbenennen möchtest:

```bash
git branch -m master main
```

## 5. Remote-Repository hinzufügen und pushen

```bash
git remote add origin https://github.com/marius4lui/Kmuc_Soft.git
git push -u origin main
```

## Fehlerbehebung

### Problem: "src refspec main does not match any"

Dieses Problem tritt auf, wenn der Branch nicht existiert oder kein Commit vorhanden ist.

Lösung:
1. Stelle sicher, dass du mindestens einen Commit hast
2. Überprüfe den Namen des aktuellen Branches mit `git branch`
3. Passe den Push-Befehl entsprechend an: `git push -u origin AKTUELLER_BRANCH_NAME`

### Problem: "Author identity unknown"

Lösung: Konfiguriere deine Git-Identität wie in Schritt 1 beschrieben.
