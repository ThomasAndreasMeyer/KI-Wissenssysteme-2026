import { IndustryCase, DemoQuery } from '../types';

export const SITE_CONFIG = {
  name: 'KI Wissenssysteme',
  legalName: 'KI Wissenssysteme – Thomas Meyer',
  founder: 'Thomas Meyer',
  location: 'Solnhofen, Bayern',
  email: 'info@ki-wissenssysteme.de',
  phone: '+49 176 24032313',
  phoneFormatted: '01762 4032313',
  whatsappUrl: 'https://wa.me/4917624032313?text=Hallo%20Herr%20Meyer%2C%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20KI-Wissenssystem%20f%C3%BCr%20unser%20Unternehmen.',
  tagline: 'Firmenwissen auf Knopfdruck. Nie wieder Dokumente suchen.',
  subline: 'Maßgeschneiderte, DSGVO-konforme KI-Wissensassistenten für KMU, Handwerk, Kanzleien und Pflege. Sichere Datenverarbeitung in Deutschland.',
};

export const INDUSTRY_CASES: IndustryCase[] = [
  {
    id: 'kmu',
    title: 'KMU, Verwaltung & Industrie',
    subtitle: 'Wissen aus Netzlaufwerken, SharePoints & QM-Handbüchern sekundenschnell abrufbar',
    badge: 'Mittelstand & Fertigung',
    iconName: 'Building2',
    problem: 'Mitarbeiter durchsuchen täglich dutzende Ordner auf Dateiservern, SharePoints und E-Mails nach ISO-Verfahren, Prozessanweisungen oder Vorlagen. Wenn erfahrene Mitarbeiter in Rente gehen, droht gravierender Wissensverlust.',
    solution: 'Ein zentraler, intelligenter KI-Wissensassistent indiziert alle bestehenden PDF-, Office- und Intranet-Dateien. Mitarbeiter stellen Fragen in natürlicher Sprache und erhalten präzise Antworten mit Quellenangabe und Link zum Originaldokument.',
    benefits: [
      'Bis zu 80% weniger interne Rückfragen an Führungskräfte',
      'Effizientes Onboarding neuer Kollegen in Rekordzeit',
      'Dauerhafte digitale Sicherung des Erfahrungswissens scheidender Experten',
      'Rechtesystem: Mitarbeiter sehen nur Dokumente, für die sie Freigaben besitzen',
    ],
    metrics: [
      { value: '45 Min', label: 'Eingesparte Suchzeit pro Mitarbeiter & Tag' },
      { value: '3,5x', label: 'Schnellere Einarbeitung neuer Mitarbeiter' },
      { value: '100%', label: 'Kontrolle über Datenzugriff & Rechte' },
    ],
    quote: {
      text: 'Statt 20 Minuten im Dateiwust nach der passenden ISO-Freigaberichtlinie zu suchen, tippen unsere Projektleiter eine kurze Frage ein und haben in 3 Sekunden das exakte Zitat samt Seitenzahl.',
      author: 'Marcus Weber',
      role: 'Leiter Qualitätsmanagement',
      company: 'Weber Präzisionsteile GmbH, Mittelfranken',
    },
  },
  {
    id: 'pflege',
    title: 'Pflege & Gesundheitswesen',
    subtitle: 'Sofortige Handlungssicherheit bei Notfallprotokollen, Hygienevorschriften & SOPs',
    badge: 'Pflegedienste & Heime',
    iconName: 'HeartPulse',
    problem: 'Pflegekräfte müssen sich an hunderte engmaschige Standards (SOPs), Hygienevorschriften und Notfallpläne halten. Im hektischen Schichtalltag fehlt die Zeit, in dicken Leitz-Ordnern zu blättern.',
    solution: 'Mobiler Sprach- und Textassistent auf dem Stations-Tablet oder Smartphone. Pflegekräfte fragen: „Welche Schritte sind bei Verdacht auf Dekubitus Grad II vorgeschrieben?“ und erhalten sofort den genauen Ablaufplan nach einrichtungsweitem Standard.',
    benefits: [
      'Sofortiger Zugriff auf Standards direkt im Patientenzimmer oder auf Tour',
      'Entlastung von Pflegedienstleitungen (PDL) bei wiederkehrenden Rückfragen',
      'Rechtssicherheit bei Qualitätsprüfungen durch den MDK',
      'Unterstützung von Fachkräften mit Sprachbarrieren durch einfache Erklärungen',
    ],
    metrics: [
      { value: 'Sekunden', label: 'Bis zum Auffinden des richtigen Notfallstandards' },
      { value: '70%', label: 'Weniger telefonische Rückfragen an die PDL' },
      { value: 'MDK-Fit', label: 'Lückenlose Dokumentation nach einrichtungsweiten SOPs' },
    ],
    quote: {
      text: 'Gerade im Nachtdienst oder bei neuen Mitarbeitern gibt das System unglaubliche Sicherheit. Eine kurze Frage auf dem Tablet und die Kollegin weiß sofort, was unser hauseigener Standard vorgibt.',
      author: 'Sabine Gruber',
      role: 'Pflegedienstleiterin',
      company: 'Seniorenresidenz Altmühltal',
    },
  },
  {
    id: 'handwerk',
    title: 'Handwerk & Technischer Außendienst',
    subtitle: 'Wartungspläne, Montageanleitungen & Fehlercodes direkt am Smartphone vor Ort',
    badge: 'Handwerk & Kundendienst',
    iconName: 'Wrench',
    problem: 'Monteure und Servicetechniker stehen beim Kunden vor einer unbekannten Heizungsanlage, Solaranlage oder Industriemaschine. Fehlercodes und Handbücher liegen im Büro auf dem Server oder sind hunderte Seiten lang.',
    solution: 'Der KI-Assistent läuft auf dem Smartphone des Technikers. Frage: „Fehlercode F.28 an Vaillant ecoTEC plus – Ursache und Prüfschritte?“ Die KI liefert die konkreten Prüfpunkte aus den Hersteller- und internen Reparaturleitfäden.',
    benefits: [
      'Keine unnötigen Zweitanfahrten durch sofortige Problemlösung vor Ort',
      'Direkter Zugriff auf Schaltpläne, Ersatzteilnummern und Drehmomente',
      'Praktische Sprachaufnahme für Monteure mit Arbeitshandschuhen',
      'Zentralisierte Dokumentation von Kniffen erfahrener Altgesellen',
    ],
    metrics: [
      { value: '-40%', label: 'Rückgang teurer Zweitanfahrten zum Kunden' },
      { value: '1 Klick', label: 'Zugriff auf tausende Seiten Herstellerunterlagen' },
      { value: 'Offline-Sync', label: 'Wichtige Standarddaten auch im Funkloch verfügbar' },
    ],
    quote: {
      text: 'Unsere Jungs auf der Baustelle rufen nicht mehr 5-mal am Tag im Meisterbüro an, sondern fragen direkt den KI-Assistenten. Das spart uns pro Techniker jede Woche Stunden.',
      author: 'Stefan Brandl',
      role: 'Geschäftsführer & Handwerksmeister',
      company: 'Brandl Haustechnik & Sanitär, Eichstätt',
    },
  },
  {
    id: 'kanzlei',
    title: 'Kanzleien, Notariate & Beratung',
    subtitle: 'Präzise Quellensuche in Gutachten, Mandantenakten & Fachliteratur ohne Cloud-Risiko',
    badge: 'Recht & Steuern',
    iconName: 'Scale',
    problem: 'Juristen, Steuerberater und Wirtschaftsprüfer verbringen unverhältnismäßig viel Zeit mit der Recherche in historischen Mandantenakten, Urteilen, Verträgen und Stellungnahmen.',
    solution: 'Lokales oder rein deutsches RAG-System mit strikter Mandantentrennung. Schnelle Beantwortung von Detailfragen mit präzisen Zitaten, Randnummern und Aktenzeichen – ohne dass vertrauliche Daten fremde Server berühren.',
    benefits: [
      'Einhaltung strengster Berufsgeheimnisse (§ 203 StGB) & DSGVO',
      'Auffinden früherer Präzedenzfälle und Musterverträge in Sekunden',
      'Keine Halluzinationen: Jede Aussage ist mit Aktenzeichen & Fundstelle belegt',
      'Auditierbare Rechtesysteme auf Mandats- und Teamebene',
    ],
    metrics: [
      { value: '60 Min', label: 'Ersparnis pro komplexer Sachverhaltsrecherche' },
      { value: '0 %', label: 'Cloud-Risiko dank deutschem Hosting / On-Prem' },
      { value: '100 %', label: 'Prüfbarkeit mit genauen Zitat-Fundstellen' },
    ],
    quote: {
      text: 'Für eine Anwaltskanzlei kommt kein Standard-ChatGPT in Frage. Das System von Herrn Meyer verarbeitet unsere Akten nachweisbar in Deutschland und liefert exakte Fundstellen im Volltext.',
      author: 'Dr. Michael Schultheiss',
      role: 'Rechtsanwalt & Partner',
      company: 'Schultheiss & Kollegen Rechtsanwälte',
    },
  },
];

export const DEMO_QUERIES: DemoQuery[] = [
  {
    id: 'demo-1',
    industry: 'kmu',
    question: 'Welche Freigabegrenzen gelten für Bestellungen ohne Geschäftsführungsunterschrift?',
    answer: 'Gemäß der aktuellen Einkaufs- und Zeichnungsrichtlinie (Version 3.2, gültig ab Januar 2026) dürfen Abteilungsleiter Bestellungen bis zu einem Nettobetrag von 5.000,00 € eigenständig freigeben. Zwischen 5.000,01 € und 25.000,00 € ist die Gegenzeichnung des kaufmännischen Leiters erforderlich. Ab 25.000,01 € ist stets die Unterschrift der Geschäftsführung zwingend vorgeschrieben.',
    sources: [
      {
        title: 'Einkaufsrichtlinie_und_Zeichnungsbefugnisse_v3.2.pdf',
        type: 'Internes QM-Dokument',
        page: 'Seite 6, Abschnitt 4.2',
        snippet: '„Freigabematrix 2026: Bestellungen bis 5.000 €: Abteilungsleitung. 5.000 € bis 25.000 €: Vier-Augen-Prinzip mit Kaufm. Leitung. Über 25.000 €: Geschäftsführung.“',
      },
      {
        title: 'Organisationshandbuch_2026.docx',
        type: 'SharePoint / Firmen-Wiki',
        page: 'Kapitel 3, S. 12',
        snippet: '„Bestellprozesse über ERP: Automatische Weiterleitung zur Freigabe gemäß Rollenmatrix.“',
      },
    ],
    latencyMs: 142,
  },
  {
    id: 'demo-2',
    industry: 'pflege',
    question: 'Wie lautet der Notfallablauf bei akutem Verdacht auf Aspiration nach Standard SOP-04?',
    answer: 'Laut Verfahrensanweisung SOP-04 (Notfallmanagement Aspiration) sind sofort folgende 4 Schritte durchzuführen:\n1. Oberkörper sofort aufrichten oder Patient in stabile Seitenlage mit Kopf tief lagern.\n2. Mund- und Rachenraum inspizieren und sichtbare Fremdkörper vorsichtig entfernen (nur bei freier Sicht).\n3. Vitalzeichen prüfen (Atmung, SpO2, Puls) und sofort Sauerstoffgabe vorbereiten.\n4. Unverzüglich Notarzt (112) alarmieren und die Pflegedienstleitung informieren. Patient niemals allein lassen.',
    sources: [
      {
        title: 'SOP-04_Notfallmanagement_Aspiration_2026.pdf',
        type: 'Medizinischer Einrichtungsstandard',
        page: 'Seite 2, Abs. 3.1',
        snippet: '„Sofortmaßnahmen bei Aspiration: 1. Lagerung (Oberkörper hoch bzw. stabile Seitenlage Kopf tief), 2. Freimachen der oberen Atemwege, 3. Notruf 112 veranlassen.“',
      },
      {
        title: 'Dienstplan_und_Notfallnummern_Station_2.pdf',
        type: 'Aushang / Stationsmappe',
        page: 'Deckblatt Notfälle',
        snippet: '„Telefonliste für Notfallmeldung: Intern 100 / Extern 112.“',
      },
    ],
    latencyMs: 128,
  },
  {
    id: 'demo-3',
    industry: 'handwerk',
    question: 'Fehlercode F.28 an Gas-Brennwerttherme: Welche Prüfschritte sind durchzuführen?',
    answer: 'Der Fehlercode F.28 signalisiert einen erfolglosen Zündversuch (Ausfall beim Zünden). Gemäß technischem Servicehandbuch sind folgende Punkte in dieser Reihenfolge zu prüfen:\n1. Gaskugelhahn: Ist die Gaszufuhr geöffnet und liegt ausreichender Gasfließdruck (mind. 17-25 mbar) an?\n2. Zünd- und Überwachungselektrode: Zündabstand prüfen (3,5 mm ± 0,5 mm), auf Ruß- oder Korrosionsspuren prüfen, Kabelverbindung testen.\n3. Gasfeuerungsautomat / Gasarmatur: Zündtrafo auf Spannung messen.\n4. Kondensatablauf: Ist der Siphon verstopft (Rückstau in die Brennkammer)?',
    sources: [
      {
        title: 'Serviceanleitung_Brennwert_Typ-G24.pdf',
        type: 'Herstellerhandbuch',
        page: 'S. 48, Fehlerdiagnose F.28',
        snippet: '„Störung F.28: Zündung fehlgeschlagen. Ursache: Gasarmatur defekt, Zündelektrode verschlissen, Gasdruck unzureichend.“',
      },
      {
        title: 'Interne_Wartungshinweise_Heizungstechnik_2025.docx',
        type: 'Praxis-Wiki Kundendienst',
        page: 'Abschnitt 7.4',
        snippet: '„Tipp Kundendienst: Bei Modelljahr 2021-2023 zuerst den Kondensatsiphon auf Versandung kontrollieren, da dies 60% der F.28-Fehler verursacht.“',
      },
    ],
    latencyMs: 165,
  },
  {
    id: 'demo-4',
    industry: 'kanzlei',
    question: 'Welche Klausel zur Geheimhaltung muss laut Kanzleistandard in Beraterverträge aufgenommen werden?',
    answer: 'Nach aktuellem Mustervertrag (Stand 2026, Aktenzeichen-Muster MV-2026-B) muss die modifizierte Verschwiegenheitsklausel gemäß § 203 StGB n.F. verwendet werden. Diese beinhaltet zwingend:\n1. Verpflichtung zur Geheimhaltung sämtlicher bekannt gewordener Betriebs-, Geschäfts- und Mandantengeheimnisse.\n2. Ausdrückliche Belehrung nach § 203 Abs. 4 StGB für mitwirkende Personen und Erfüllungsgehilfen.\n3. Eine vertragliche Nachwirkung von mindestens 5 Jahren nach Beendigung des Vertragsverhältnisses sowie eine angemessene Vertragsstrafe nach Hamburger Brauch.',
    sources: [
      {
        title: 'Mustervertrag_Berater_Verschwiegenheit_MV-2026-B.docx',
        type: 'Kanzleimuster & Vorlagen',
        page: '§ 9 Verschwiegenheitspflicht, S. 4',
        snippet: '„Der Berater verpflichtet sich, über alle im Rahmen der Zusammenarbeit erlangten Informationen Stillschweigen zu bewahren. Dies gilt auch für Erfüllungsgehilfen i.S.d. § 203 Abs. 4 StGB.“',
      },
    ],
    latencyMs: 139,
  },
];

export const SECURITY_PILLARS = [
  {
    title: '100% DSGVO-Konformität',
    desc: 'Verarbeitung ausschließlich in nach ISO 27001 zertifizierten deutschen bzw. europäischen Rechenzentren (Frankfurt / Nürnberg) oder auf Wunsch On-Premise auf Ihrer eigenen Hardware.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Kein Training fremder Modelle',
    desc: 'Ihre Betriebsgeheimnisse, Kundenlisten und Handbücher bleiben strikt privat. Weder OpenAI, Google noch Dritte nutzen Ihre Dokumente zum Trainieren öffentlicher Modelle.',
    iconName: 'Lock',
  },
  {
    title: 'Granulare Zugriffsrechte',
    desc: 'Rollenbasierte Berechtigungen (RBAC): Ein Servicetechniker sieht andere Inhalte als die Buchhaltung oder Geschäftsführung. Bestehende Windows/SharePoint-Rechte werden respektiert.',
    iconName: 'KeyRound',
  },
  {
    title: 'Transparente Quellen & Zitate',
    desc: 'Keine gefährlichen KI-Halluzinationen: Jede Antwort verweist exakt auf den Dateinamen, die Seite und das Zitat im Originaldokument. Maximale Nachvollziehbarkeit.',
    iconName: 'FileCheck',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Kostenloses Erstgespräch & Potenzialanalyse',
    desc: 'In 20 Minuten klären wir gemeinsam, wo in Ihrem Betrieb die größten Suchzeiten und Wissensengpässe liegen und welche Dokumente (SharePoint, Netzlaufwerke, PDFs) den größten Mehrwert bringen.',
    duration: '20 Minuten · Kostenlos',
  },
  {
    number: '02',
    title: 'Prototyp mit Ihren Testdokumenten',
    desc: 'Wir binden einen ausgewählten Test-Datenbestand (z. B. ein Handbuch oder ein Regelwerk) in ein geschütztes System ein. Sie testen das System direkt an konkreten Fragen Ihres Alltags.',
    duration: 'Innerhalb von 3–5 Werktagen',
  },
  {
    number: '03',
    title: 'Sicherer Rollout & Praxistraining',
    desc: 'Nach Ihrer Freigabe binden wir die gewünschten Systeme an, schulen Ihre Mitarbeiter in einer kurzen, praxisnahen Session und stehen Ihnen als persönlicher Ansprechpartner zur Seite.',
    duration: 'Schlüsselfertig in 1–2 Wochen',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Werden unsere internen Firmendaten für das Training von KI-Modellen verwendet?',
    a: 'Nein, zu 100% ausgeschlossen. Wir nutzen dedizierte Schnittstellen und private Enterprise-Instanzen mit vertraglicher Zusicherung nach Art. 28 DSGVO (Auftragsverarbeitungsvertrag). Ihre Daten bleiben Ihr Eigentum und werden niemals in öffentliche Trainingsdatensätze eingespeist.',
  },
  {
    q: 'Welche Dateiformate und Systeme können angebunden werden?',
    a: 'Praktisch alle gängigen Unternehmensdaten: PDF-Dateien (auch gescannte Dokumente mit OCR), Word- und Excel-Dateien, PowerPoint, E-Mails, SharePoint, Nextcloud, lokale Windows-Netzlaufwerke, Confluence-Wikis sowie Webseiten und Handbücher.',
  },
  {
    q: 'Können Mitarbeiter Dokumente sehen, für die sie keine Berechtigung haben?',
    a: 'Nein. Das Wissenssystem implementiert strikte rollenbasierte Zugriffskontrollen. Wenn ein Mitarbeiter beispielsweise keinen Zugriff auf den Ordner „Geschäftsführung/Finanzen“ hat, erhält er aus diesen Dokumenten auch keinerlei Antworten.',
  },
  {
    q: 'Was unterscheidet KI Wissenssysteme von Standard-ChatGPT?',
    a: 'Standard-ChatGPT kennt Ihr Unternehmen nicht, darf aus Datenschutzgründen nicht mit vertraulichen Firmendaten gefüttert werden und erfindet im Zweifel Fakten („Halluzinationen“). Ein KI-Wissenssystem (RAG) antwortet ausschließlich fundiert auf Basis Ihrer echten Dokumente und belegt jede Aussage mit genauer Quellenangabe und Seitenzahl.',
  },
  {
    q: 'Wie hoch ist der technische Aufwand für unser eigenes IT-Team?',
    a: 'Minimal. Sie müssen keine eigene KI-Infrastruktur aufbauen oder pflegen. Wir übernehmen die Konfiguration, Schnittstellenanbindung, Rechtestruktur und das Onboarding schlüsselfertig. Ihr Team kann die Lösung bequem per Web-Browser oder Smartphone-App nutzen.',
  },
  {
    q: 'Wie läuft die Zusammenarbeit ab und wo sitzt KI Wissenssysteme?',
    a: 'KI Wissenssysteme wird von Thomas Meyer in Solnhofen (Bayern) betrieben. Sie sprechen direkt mit dem Gründer und Entwickler – keine Call-Center, keine Warteschleifen. Wir arbeiten deutschlandweit remote oder vor Ort in Bayern.',
  },
];
