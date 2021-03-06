// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
/* eslint-disable max-len */
const { Language, util } = require('klasa');

module.exports = class extends Language {
  constructor(...args) {
    super(...args);
    this.language = {
      DEFAULT: (key) => `${key} wurde noch nicht für de-DE übersetzt.`,
      FLAG: '🇩🇪',
      LANG: 'Deutsch',
      SPECIFIER: 'de-DE',
      DEFAULT_LANGUAGE: 'Standard Sprache',
      SETTING_GATEWAY_EXPECTS_GUILD: 'Der Parameter <Guild> erwartet entweder einen Server oder ein Serverobjekt.',
      SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `Für das Attribut ${key} ist der Wert ${data} nicht vorhanden.`,
      SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `Für das Attribut ${key} ist der Wert ${data} bereits vorhanden.`,
      SETTING_GATEWAY_SPECIFY_VALUE: 'Du musst einen Wert angeben, um etwas hinzu zu fügen oder zu filtern.',
      SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `Das Attribut ${key} ist kein Array.`,
      SETTING_GATEWAY_KEY_NOEXT: (key) => `Das Attribut ${key} existiert nicht im aktuellen Datenschema.`,
      SETTING_GATEWAY_INVALID_TYPE: 'Der Parameter "type" muss entweder hinzugefügt oder gelöscht werden.',
      RESOLVER_INVALID_PIECE: (name, piece) => `${name} muss ein gültiger ${piece} Name sein.`,
      RESOLVER_INVALID_MESSAGE: (name) => `${name} muss eine gültige Message-ID sein.`,
      RESOLVER_INVALID_USER: (name) => `${name} muss ein "mention" oder eine gültige User-ID sein.`,
      RESOLVER_INVALID_MEMBER: (name) => `${name} muss eine Benutzererwähnung oder eine gültige User ID sein.`,
      RESOLVER_INVALID_CHANNEL: (name) => `${name} muss eine Kanalerwähnung oder eine gültige Kanal ID sein.`,
      RESOLVER_INVALID_GUILD: (name) => `${name} muss eine gültige Server-ID sein.`,
      RESOLVER_INVALID_ROLE: (name) => `${name} muss eine Rollenerwähnung oder eine gültige Rollen ID sein.`,
      RESOLVER_INVALID_LITERAL: (name) => `Deine Auswahl entspricht nicht der einzigen Möglichkeit: ${name}`,
      RESOLVER_INVALID_BOOL: (name) => `${name} muss 'true' oder 'false' sein.`,
      RESOLVER_INVALID_INT: (name) => `${name} muss eine Ganzzahl sein.`,
      RESOLVER_INVALID_FLOAT: (name) => `${name} muss eine gültige Zahl sein.`,
      RESOLVER_INVALID_URL: (name) => `${name} muss eine gültige URL sein.`,
      RESOLVER_STRING_SUFFIX: ' Buchstaben',
      RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} muss genau ${min}${suffix} sein.`,
      RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} muss zwischen ${min} und ${max}${suffix} sein.`,
      RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} muss größer als ${min}${suffix} sein.`,
      RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} muss kleiner als ${max}${suffix} sein.`,
      COMMANDMESSAGE_MISSING: 'Es fehlen ein oder mehrere Argumente am Ende der Eingabe.',
      COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} ist ein erforderliches Argument.`,
      COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Fehlende notwendige Auswahl: (${possibles})`,
      COMMANDMESSAGE_NOMATCH: (possibles) => `Deine Auswahl trifft auf keine der folgenden Möglichkeiten zu: (${possibles})`,
      MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Sie haben **${time}** Sekunden, um einen gültigen Wert einzugeben. Mit "ABORT" brechen Sie den Vorgang ab.`,
      MONITOR_COMMAND_HANDLER_ABORTED: 'Abgebrochen',
      INHIBITOR_COOLDOWN: (remaining) => `Sie haben gerade erst diesen Befehl benutzt. Der Befehl kann von Ihnen wieder in ${remaining} Sekunden verwendet werden.`,
      INHIBITOR_DISABLED: 'Dieser Befehl ist aktuell deaktiviert.',
      INHIBITOR_MISSING_BOT_PERMS: (missing) => `Ungenügende Berechtigungen, es fehlt: **${missing}**`,
      INHIBITOR_PERMISSIONS: 'Ihnen fehlt die Berechtigung diesen Befehl auszuführen.',
      INHIBITOR_REQUIRED_SETTINGS: (settings) => `Aufgrund der fehlenden Einstellung **${settings.join(', ')}** kann dieser Befehl nicht ausgeführt werden.`,
      INHIBITOR_RUNIN: (types) => `Dieser Befehl kann nur in ${types} Kanälen ausgeführt werden`,
      INHIBITOR_RUNIN_NONE: (name) => `Der ${name} Befehl wurde nicht für die Benutzung in mindestens einem Kanal aktiviert.`,
      COMMAND_UNLOAD: (type, name) => `✅ Deaktiviert ${type}: ${name}`,
      COMMAND_TRANSFER_ERROR: '❌ Diese Datei wurde bereits übertragen oder hat nie existiert.',
      COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Erfolgreich übertragen ${type}: ${name}`,
      COMMAND_TRANSFER_FAILED: (type, name) => `Übertrag von ${type}: ${name} zum Client fehlgeschlagen. Bitte überprüfe deine Konsole.`,
      COMMAND_RELOAD: (type, name) => `✅ Neu geladen ${type}: ${name}`,
      COMMAND_RELOAD_ALL: (type) => `✅ Alle ${type} neu geladen.`,
      COMMAND_REBOOT: 'Am neustarten...',
      COMMAND_PING: 'Ping?',
      COMMAND_PINGPONG: (diff, ping) => `Pong! (Hin und zurück dauerte: ${diff}ms. Herzschlag: ${ping}ms.)`,
      COMMAND_INVITE_SELFBOT: 'Wieso solltest du einen Einladungslink für einen Selfbot benötigen...',
      COMMAND_INVITE: (client) => [
        `Um ${client.user.username} zu Ihrem Disord Server hinzuzufügen, bitte folgenden Link klicken:`,
        `<${client.invite}>`,
        util.codeBlock('', [
          'Der oben dargestellte Link wurde auf eine solche Art und Weise erzeugt, dass nur diejenigen Berechtigungen abgefragt',
          'werden, welche für die Benutzung aller aktuellen Befehle notwendig sind. Bezüglich der Berechtigungen kann man es nicht',
          'allen recht machen, deswegen steht es auch jedem offen jede einzelne Berechtigungsvergabe entsprechend zu deaktivieren.',
          '',
          'Falls Sie einen Befehl verwenden wollen, für dessen Ausführung der Bot zusätzliche Berechtigungen benötigt, welche',
          'von Ihnen nicht vergeben wurden, werden Sie bei dem Versuch den Befehl auszuführen eine Benachrichtigung erhalten.',
        ].join(' ')),
        'Falls Sie einen Fehler finden, würde ich Sie bitten einen \'Issue\' auf <https://github.com/dirigeants/klasa> zu erstellen.',
      ],
      COMMAND_INFO: [
        'Klasa ist ein \'plug-and-play\' Framework, welches auf der Discord.js Bibliothek basiert.',
        'Der größte Anteil des Codes ist modular aufgebauft. Dies erlaubt es allen Entwicklern,',
        'Klasa enstprechend ihrer Anforderungen anzupassen',
        '',
        'Anbei einige der Vorzüge des Klasa Frameworks:',
        '• 🐇💨 Schnelle Ladezeiten mit ES2017 Unterstützung (`async`/`await`)',
        '• 🎚🎛 Server settings für jeden Server individuell und kann durch eigenen Code erweitern werden',
        '• 💬 Anpassbares Befehlsystem mit automatisierter Übersetzung der Befehlsargumente (\'Usage Parsing\')',
        '• 🔁 Module können sehr einfach neu geladen und heruntergeladen werden',
        '• 👀 \'Monitore\' überwachen jede Nachricht und agierend je nach Logik, wie bei einem konventionellen \'message event\' system (Wortfilter, Spam protection, etc.)',
        '• ⛔ \'Inhibitors\' können die Ausführung von Befehlen verhindern, basierend auf unterschiedlichen Parametern (Berechtigungen, Blacklists, etc.)',
        '• 🗄 \'Providers\' erlauben Ihnen sich mit mit einer externen Datenbank Ihrer Wahl zu verbinden.',
        '• ✅ \'Finalizers\', welche nach einer erfolreichen Durchführung eines Befehls ausgeführt werden',
        '• ➕ \'Extenables\' als passiv agierender Code. Sie fügen bestehenden Discord.js Klassen neue Methoden und Eigenschaften hinzu.',
        '• 🌐 \'Languages\', welche es erlauben, den Bot in mehrere Sprachen zu übersetzen',
        '• ⏲ \'Tasks\', welche es erlauben, den Bot Verzögert oder Geplante Aufgaben auszuführen zu lassen',
        '',
        'Wir versuchen ein zu 100% anpassbares Framework zu sein, welches es schafft den unterschiedlichen Ansprüchen gerecht zu werden.',
        'Ebenso veröffentlichen wir regelmässig Aktualisierungen und Fehlerbehebungen.',
        'Falls wir Ihr Interesse für das Klasa Framework wecken konnten, besuchen Sie bitte https://klasa.js.org für weiterführende Informationen.',
      ],
      COMMAND_HELP_DM: '📥 | Alle für Sie verfügbaren Befehle wurden Ihnen per Direktnachricht zugeschickt.',
      COMMAND_HELP_NODM: '❌ | Ich konnte Ihnen keine Direktnachricht schicken, da Sie den Erhalt von Direktnachrichten deaktiviert haben.',
      COMMAND_ENABLE: (type, name) => `+ Erfolgreich ${type}: ${name} aktiviert`,
      COMMAND_DISABLE: (type, name) => `+ Erfolgreich ${type}: ${name} deaktiviert`,
      COMMAND_DISABLE_WARN: 'Sie sollten diesen Befehl nicht deaktivieren, da Sie danach nicht mehr befähigt wären, irgendeinen Befehl wieder zu aktivieren.',
      COMMAND_CONF_NOKEY: 'Sie müssen ein Attribut angeben',
      COMMAND_CONF_NOVALUE: 'Sie müssen einen Wert angeben',
      COMMAND_CONF_ADDED: (value, key) => `Erfolgreich den Wert \`${value}\` zum Attribut: **${key}** hinzugefügt`,
      COMMAND_CONF_UPDATED: (key, response) => `Erfolgreiche Aktualisierung des Attributs **${key}**: \`${response}\``,
      COMMAND_CONF_KEY_NOT_ARRAY: 'Dieses Attribut ist nicht vom Typ "array". Bitte benutzen Sie stattdessen die Aktion \'reset\'.',
      COMMAND_CONF_REMOVE: (value, key) => `Erfolgreich den Wert \`${value}\` vom Attribut: **${key}** entfernt`,
      COMMAND_CONF_GET_NOEXT: (key) => `Es scheint so, dass das Attribut **${key}** nicht existiert.`,
      COMMAND_CONF_GET: (key, value) => `Der hinterlegte Wert des Attributs **${key}** ist: \`${value}\``,
      COMMAND_CONF_RESET: (key, response) => `Das Attribut **${key}** wurde zurückgesesetzt auf: \`${response}\``,

      COMMAND_CONF_SERVER: (key, list) => `**Gilden Einstellungen${key}**\n${list}`,
      // Start of Custom Commands

      COMMAND_BLACKLIST_DESCRIPTION: 'Blacklists or un-blacklists users and guilds from the bot.',
      COMMAND_CONF_SERVER_DESCRIPTION: 'Definiere per Gilden Einstellungen.',
      COMMAND_ENABLE_DESCRIPTION: 'Wiederaktiviert oder zeitweise aktiviert ein Befehl/Inhibitor/Monitor/Finalizer. Wird bei einem reboot auf Standard zurückgesetzt.',
      COMMAND_DISABLE_DESCRIPTION: 'Deaktiviert oder zeitweise deaktiviert ein Befehl/Inhibitor/Monitor/Finalizer. Wird bei einem reboot auf Standard zurückgesetzt.',
      COMMAND_EVAL_DESCRIPTION: 'Evaluiert beliebiges Javascript. Reserviert für den Bot Eigentümer.',
      COMMAND_LOAD_DESCRIPTION: 'Lade ein piece von deinem Bot.',
      COMMAND_REBOOT_DESCRIPTION: 'Startet den Bot neu.',
      COMMAND_RELOAD_DESCRIPTION: 'Lädt ein klasa piece oder alle pieces aus dem klasa Store.',
      COMMAND_TRANSFER_DESCRIPTION: 'Transferiert ein kern piece in den ensprechenden Ordner.',
      COMMAND_UNLOAD_DESCRIPTION: 'Entlädt ein klasa piece.',
      COMMAND_CONF_USER_DESCRIPTION: 'Definiere per User Einstellungen.',
      COMMAND_INFO_DESCRIPTION: 'Stellt Informationen über diesen Bot zur Verfügung.',
      COMMAND_PING_DESCRIPTION: 'Führt einen Verbindugstest zu Discord aus.',
      COMMAND_HELP_DESCRIPTION: 'Zeigt die Hilfe für einen Befehl.',
      COMMAND_INVITE_DESCRIPTION: 'Zeigt den Einladelink des Bots an um ihn in deine Gilde einzuladen.',
      COMMAND_STATS_DESCRIPTION: 'Stellt Informationen und Details über den Bot und seine Statisktiken zur Verfügung.',

      // Moderation Category
      CHANNEL_LOCKED: 'Kanal gesperrt',
      CHANNEL_UNLOCKED: 'Kanal entsperrt',

      // Chat Bot Info Category
      STATISTICS: 'Statistiken',
      MEMORY: 'Speicher',
      UPTIME: 'Uptime',
      USERS: 'Benutzer',
      GUILDS: 'Gilden',
      KLASA_VERSION: 'Klasa Version',
      NODEJS_VERSION: 'Node.js Version',
      DISCORDJS_VERSION: 'Discord.js Version',
      DEVELOPER: 'Entwickler',
      SOURCECODE: 'Source code',
      CLICK_HERE: 'Klicke hier',

      // Fun Category
      THEMSELVES: 'sich selbst',
      CUDDLING: 'kuschelt',
      HUGGING: 'umarmt',
      KISSING: 'küsst',
      PATTING: 'streichelt',
      SLAPPING: 'ohrfeigt',
      EMOTE_TITLE: (sender, activity, receiver, suffix) => `**${sender}** ${activity} **${receiver}** ${suffix}`,

      // Image Category
      TITLE_KIDOL: (group, idol) => `**${idol}** von **${group}**`,
      NO_INFORMATION: `N/A`,
      SOURCE_SEARCH: `Quell suche`,
      SIMILARITY: `Gemeinsamkeit`,
      SOURCE: `Quelle`,
      PART: `Teil`,
      YEAR: `Jahr`,
      ESTIMATED_TIMESTAMP: `Geschätzter Zeitstempel`,

      // Information Category
      QUESTION: `Frage`,
      ANSWER: `Antwort`,
      SCORE: `Punkte`,
      STATUS: `Status`,
      START_DATE: `Veröffentlichungs Datum`,
      END_DATE: `End Datum`,
      GENRES: `Kategorien`,
      NAME: `Name`,
      ROLE: `Rolle`,
      DESCRIPTION: `Beschreibung`,
      ABOUT: `über`,
      TWEETED: `tweeted`,
      FACT: `Fakt`,
      DEFINITION: `Definition`,
      EXAMPLE: `Beispiel`,
      ARTIST: `Künstler`,
      TAGS: `Tags`,

      // Voice Category
      LOOPED: `Schleife`,
      UNLOOPED: `Aus Schleife entfernt`,
      LOOPED_DESCRIPTION: `Ich spiele dieses Lied wieder und wieder bis ich sterbe!`,
      UNLOOPED_DESCRIPTION: `Ich höre auf das selbe Lied wieder und wieder zu spielen!`,
      NOW_PLAYING: `Aktuelle Wiedergabe`,
      LENGTH: `Länge`,
      PAUSED: `Pausiert`,
      UNPAUSED: `Fortfahren`,
      UPLOADED_BY: `Hochgeladen von`,
      CHOOSE_NUMBER: `Wähle eine Nummer!`,
      PLAY: `Abspielen`,
      ADDED_TRACK: (track) => `**${track}** zur Warteschlange hinzugefügt!`,
      ADDED_PLAYLIST: (playlist) => `Playlist **${playlist}** zur Warteschlange hinzugefügt!`,
      QUEUE: `Warteschlange`,
      SKIP: `Überspringen`,
      SKIPPING_TRACK: `Überspringe aktuelles Lied`,
      STOP: `Stop`,
      STOPPING: `Stoppe die Musik und verlasse den Kanal!`,
      VOLUME: `Lautstärke`,
      CURRENT_VOLUME: (volume) => `Aktuelle Lautstärke ist: **${volume}%**`,
      SETTING_VOLUME: (volume) => `Setze Lautstärke auf: **${volume}%**`,
      VOLUME_RESTRICTION: `Lautstärke ist begrenzt. Verwende eine Zahl zwischen 1 und 200!`,

      // Generic
      FOOTER_REQUESTED_BY: 'Angefragt von',
      FOOTER_PROVIDED_BY: 'Zur Verfügung gestellt von',

      // Errors
      ERROR: `Fehler`,
      NO_DATA: `Ich habe keine Daten von der API erhalten! Ich versuche es später erneut.`,
      REQUEST_FAILED: `Fehler bei der Anfrage der API! Ich versuche es später erneut.`,
      NO_CUSTOM_EMOJI_DETECTED: 'Kein benutzerdefiniertes emoji gefunden!',
      NO_VALID_URL: `Ich konnte deine Eingabe nicht als URL konvertieren!`,
      NO_SOURCE: `Ich konnte für das keine Quelle auf saucenao finden!`,
      NO_ANIME_FOUND: (anime) => `Ich konnte *${anime}* nicht auf anilist finden.`,
      NOT_IN_VC: `Du bist nicht in einem Sprachkanal!`,
      NO_MUSIC_RUNNING: `Ich spiele aktuell keine Musik ab!`,
      LAVALINK_NO_DATA: `Ich habe keine Daten von dem Musik Server empfangen! Ich versuche es später erneut.`,
      SELECTION_NAN: `Deine Antwort ist keine valide Nummer`,
      SELECTION_INVALID: `Beim selektieren der richtigen Option ist ein Fehler aufgetreten!`,
      NO_MATCHES: 'Keine Treffer auf YouTube gefunden!',
      LOAD_FAILED: `Laden des Tracks fehlgeschlagen!`,
      UNKNOWN_ERROR: 'Unbekannter Fahler aufgetreten! Wenn dieses Problem weiterhin besteht kontaktire bitte meinen Meister!',
      NOT_SAME_CHANNEL: 'Du musst im selben Sprachkanal sein wie ich!',
      NO_UD_FOUND: 'Das Urban Dictionary hat nichts zu deinem Suchwort gefunden!',

      // Category Admin command descriptions
      // Sub category Moderation
      KICK_DESCRIPTION: 'Kickt einen Benutzer von dem Server.',
      LOCK_DESCRIPTION: 'Sperrt einen Kanal für Benutzer einer bestimmten Rolle.',

      // Category General command descriptions
      // Sub category Fun
      CUDDLE_DESCRIPTION: 'Kuschle Leute (mit einem süßen anime gif).',
      HUG_DESCRIPTION: 'Umarme Leute (mit einem süßen anime gif).',
      KISS_DESCRIPTION: 'Küsse Leute (mit einem süßen anime gif).',
      OWOIFY_DESCRIPTION: 'OwOify alles UwU',
      PAT_DESCRIPTION: 'Streichle Leute (mit einem süßen anime gif).',
      SLAP_DESCRIPTION: 'Ohrfeige Leute (mit einem süßen anime gif).',

      // Sub category Image'
      ANIMEME_DESCRIPTION: 'Hole ein zufälliges animeme.',
      BOOBS_DESCRIPTION: 'Anime brüste (Nur NSFW Kanal).',
      DANKMEME_DESCRIPTION: 'Hole ein zufälliges dank meme.',
      EMOJI_DESCRIPTION: 'Zeige ein benutzerdefiniertes emoji in voller größe.',
      FOXGIRL_DESCRIPTION: 'Zeige ein süßes Fuchs mädchen (Nur NSFW Kanal).',
      GASM_DESCRIPTION: 'Orgasmus Emojis (Nur NSFW Kanal).',
      KIDOL_DESCRIPTION: 'Zeige ein zufälliges K-pop Idol.',
      NEKO_DESCRIPTION: 'Zeige ein süßes und lüsternes Katzen mädchen (Nur NSFW Kanal).',
      PUSSY_DESCRIPTION: 'Anime pussy (Nur NSFW Kanal).',
      SAUCE_DESCRIPTION: 'Suche die Quelle eines anime, manga oder hentai links.',

      // Sub category Information
      EIGHTBALL_DESCRIPTION: 'Gibt weise Antworten auf ja nein Fragen.',
      ANIME_DESCRIPTION: 'Hole informationen über einen Anime.',
      CHUCKNORRIS_DESCRIPTION: 'Hole einen Chuck Norris Witz.',
      DONALD_DESCRIPTION: 'Hole intelektuelle Zitate aus POTUS.',
      FACT_DESCRIPTION: 'Hole zufällige Fakten.',
      LMGTFY_DESCRIPTION: 'Manchmal ist im Internet suchen schwer.',
      URBANDICTIONARY_DESCRIPTION: 'Hole eine Definition aus dem Urban Dictionary.',
      USERINFO_DESCRIPTION: 'Hole informationen über einen Discord Benutzer.',
      NUMBER_DESCRIPTION: 'Konvertiert die 6 Stelligen magischen nummern in volle degeneration.',

      // Sub category Voice
      LOOP_DESCRIPTION: 'Schalte die Schleife des aktuell gespielten Liedes ein oder aus.',
      NOWPLAYING_DESCRIPTION: 'Zeige informationen über das aktuell gespielte Lied.',
      PAUSE_DESCRIPTION: 'Pausiere oder fahre mit dem aktuellen Lied fort.',
      PLAY_DESCRIPTION: 'Spielt ein Lied von YouTube.',
      QUEUE_DESCRIPTION: 'Zeige die Warteschlange der aktuellen Sitzung.',
      RESUME_DESCRIPTION: 'Fahre mit dem abspielen fort.',
      SKIP_DESCRIPTION: 'Überspringe das aktuelle Lied.',
      STOP_DESCRIPTION: 'Stope die aktuelle Sizung und bereinige die Warteschlange.',
      VOLUME_DESCRIPTION: 'Passe die Lautstärke an. (Limit 1-200 %)',
    };
  }

  async init() {
    await super.init();
  }
};
