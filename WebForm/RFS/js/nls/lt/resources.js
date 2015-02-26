﻿define(
     ({
        map: {
            error: "Žemėlapio sukurti nepavyko"
        },
        onlineStatus: {
            offline: "Dabar dirbate atsijungę. Kol bus užmegztas ryšys su serveriu, formų turinys bus saugomas lokaliai.",
            reconnecting: "Prisijungiama iš naujo&hellip;",
            pending: "Atkūrus tinklo ryšį, bus pateikta laukiančių pakeitimų: ${total}."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Organizacija",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Turinys",
                    favoritesLabel: "Mėgstamiausi"
                },
                title: "Pasirinkite internetinį žemėlapį",
                searchTitle: "Ieškoti",
                ok: "Gerai",
                cancel: "Atšaukti",
                placeholder: "Įveskite paieškos terminą"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Organizacija",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Turinys",
                    favoritesLabel: "Mėgstamiausi"
                },
                title: "Pasirinkti grupę",
                searchTitle: "Ieškoti",
                ok: "Gerai",
                cancel: "Atšaukti",
                placeholder: "Įveskite paieškos terminą"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "Čia yra nuoroda į GeoForm"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Ilgumos poslinkis",
            utm_easting: "Platumos poslinkis",
            utm_zone_number: "Zonos numeris",
            geoFormGeneralTabText: "1. Įveskite informaciją",
            locationInformationText: "2. Pasirinkite vietą",
            submitInformationText: "3. Užpildykite formą",
            submitInstructions: "Įtraukite šią informaciją į žemėlapį.",
            myLocationText: "dabartinė vieta",
            locationDescriptionForMoreThanOneOption: "Nurodykite šio įrašo vietą spustelėdami / bakstelėdami žemėlapį arba naudodami vieną iš toliau pateiktų parinkčių.",
            locationDescriptionForOneOption: "Nurodykite šio įrašo vietą paspausdami / bakstelėdami žemėlapį arba naudodami šią parinktį.",
            locationDescriptionForNoOption: "Nurodykite šio įrašo vietą paspausdami / bakstelėdami žemėlapį.",
            addressText: "Ieškoti",
            geographic: "Platuma / ilguma",
            locationTabText: "Vieta",
            locationPopupTitle: "Vieta",
            submitButtonText: "Pateikite įrašą",
            submitButtonTextLoading: "Pateikiama&hellip;",
            formValidationMessageAlertText: "Šie laukai privalomi:",
            selectLocation: "Nurodykite pateikimo vietą.",
            emptylatitudeAlertMessage: "Įveskite ${openLink}platumos${closeLink} koordinatę.",
            emptylongitudeAlertMessage: "Įveskite ${openLink}ilgumos${closeLink} koordinatę.",
            shareUserTitleMessage: "Dėkojame už prisidėjimą!",
            entrySubmitted: "Įrašas pateiktas žemėlapiui.",
            shareThisForm: "Bendrinkite šią formą",
            shareUserTextMessage: "Paskatinkite kitus prisidėti naudojant šias parinktis.",
            addAttachmentFailedMessage: "Prie sluoksnio pridėti priedo nepavyko",
            addFeatureFailedMessage: "Į sluoksnį elemento pridėti nepavyko",
            noLayerConfiguredMessage: "Ieškant redaguojamo elementų sluoksnio arba jį įkeliant vyko klaida. Norėdami peržiūrėti formą ir padėti rinkti pateikimus, internetiniame žemėlapyje pridėkite redaguojamą elementų sluoksnį.",
            placeholderLatitude: "Platuma (Y)",
            placeholderLongitude: "Ilguma (X)",
            latitude: "Platuma",
            longitude: "Ilguma",
            findMyLocation: "Rasti mane",
            finding: "Randama&hellip;",
            backToTop: "Atgal į viršų",
            addressSearchText: "Čia bus rodomas jūsų pateikimas. Norėdami pataisyti vietą, vilkite smeigtuką.",
            shareModalFormText: "Formos nuoroda",
            close: "Užverti",
            locationNotFound: "Vietos surasti nepavyko.",
            setLocation: "Nustatyti vietą",
            find: "Surasti adresą arba vietą",
            attachment: "Priedas",
            toggleDropdown: "Perjungti išskleidimą",
            invalidString: "Įveskite leistiną reikšmę.",
            invalidSmallNumber: "Įveskite leistiną ${openStrong}sveikojo skaičiaus${closeStrong} reikšmę nuo -32768 iki 32767.",
            invalidNumber: "Įveskite leistiną ${openStrong}sveikojo skaičiaus${closeStrong} reikšmę nuo -2147483648 iki 2147483647.",
            invalidFloat: "Įveskite leistiną ${openStrong}slankiojo kablelio skaičiaus${closeStrong} reikšmę.",
            invalidDouble: "Įveskite leistiną ${openStrong}dvigubojo tikslumo skaičiaus${closeStrong} reikšmę.",
            invalidLatLong: "Įveskite tinkamas platumos ir ilgumos koordinates.",
            invalidUTM: "Įveskite tinkamas UTM koordinates.",
            invalidUSNG: "Įveskite tinkamas USNG koordinates.",
            invalidMGRS: "Įveskite tinkamas MGRS koordinates.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Pasirinkti&hellip;",
            applyEditsFailedMessage: "Atsiprašome, tačiau įrašo pateikti nepavyko. Bandykite dar kartą.",
            requiredFields: "Yra kelios klaidos. Ištaisykite jas toliau.",
            requiredField: "(privalomas)",
            error: "Klaida",
            textRangeHintMessage: "${openStrong}Užuomina:${closeStrong} minimali vertė ${minValue} ir maksimali vertė ${maxValue}",
            dateRangeHintMessage: "${openStrong}Užuomina:${closeStrong} minimali data ${minValue} ir maksimali data ${maxValue}",
            remainingCharactersHintMessage: "Liko simbolių: ${value}"
        },
        builder: {
            invalidUser: "Atsiprašome, tačiau neturite teisės peržiūrėti šį elementą",
            invalidWebmapSelectionAlert: "Pasirinktame internetiniame žemėlapyje nėra tinkamo naudoti sluoksnio. Norėdami tęsti, į internetinį žemėlapį pridėkite redaguojamą FeatureLayer.",
            invalidWebmapSelectionAlert2: "Norėdami gauti daugiau informacijos, žr. ${openLink}Kas yra elementų paslauga?${closeLink}",
            selectFieldsText: "Pasirinkite formos laukus",
            selectThemeText: "Pasirinkite formos temą",
            webmapText: "Internetinis žemėlapis",
            layerText: "Sluoksnis",
            detailsText: "Išsamiau",
            fieldsText: "Laukai",
            styleText: "Stilius",
            optionText: "Parinktys",
            previewText: "Peržiūra",
            publishText: "Publikuoti",
            optionsApplicationText: "Parinktys",
            titleText: "Kūrimo priemonė",
            descriptionText: "GeoForm – tai konfigūruojamas šablonas, skirtas ${link1}elementų paslaugai${closeLink} redaguoti naudojant formą. Naudodami šią aplikaciją vartotojai gali įvesti duomenis per formas, o ne žemėlapio iškylančius langus, naudodami ${link2}internetinio žemėlapio${closeLink} ir redaguojamų elementų paslaugų galimybes. Atlikite toliau nurodytus veiksmus, kad įdiegtumėte ir adaptuotumėte GeoForm.",
            btnPreviousText: "Ankstesnis",
            btnNextText: "Kitas",
            webmapTabTitleText: "Pasirinkite internetinį žemėlapį",
            viewWebmap: "Žiūrėti internetinį žemėlapį",
            webmapDetailsText: "Pasirinktas internetinis žemėlapis yra ${webMapTitleLink}${webMapTitle}${closeLink}. Norėdami pasirinkti kitą internetinį žemėlapį, paspauskite mygtuką Pasirinkti internetinį žemėlapį.",
            btnSelectWebmapText: "Pasirinkite internetinį žemėlapį",
            btnSelectWebmapTextLoading: "Įkeliama&hellip;",
            layerTabTitleText: "Pasirinkti redaguojamą sluoksnį",
            selectLayerLabelText: "Sluoksnis",
            selectLayerDefaultOptionText: "Pasirinkti sluoksnį",
            detailsTabTitleText: "Išsami formos informacija",
            detailTitleLabelText: "Pavadinimas",
            detailLogoLabelText: "Logotipo paveikslėlis",
            descriptionLabelText: "Formos instrukcijos ir informacija",
            fieldDescriptionLabelText: "Pagalbos tekstas (neprivalomas)",
            fieldTabFieldHeaderText: "Laukas",
            fieldTabLabelHeaderText: "Žymė",
            fieldTabDisplayTypeHeaderText: "Rodyti kaip",
            fieldTabOrderColumnText: "Tvarka",
            fieldTabVisibleColumnText: "Įjungta",
            selectMenuOption: "Pasirinkimo meniu",
            selectRadioOption: "Akutė",
            selectTextOption: "Tekstas",
            selectDateOption: "Datos parinkiklis",
            selectRangeOption: "Lietiminis suktukas",
            selectCheckboxOption: "Žymimasis langelis",
            selectMailOption: "El. paštas",
            selectUrlOption: "URL",
            selectTextAreaOption: "Teksto sritis",
            previewApplicationText: "Peržiūrėti aplikaciją",
            saveApplicationText: "Išsaugoti aplikaciją",
            saveText: "Įrašyti",
            toggleNavigationText: "Perjungti navigaciją",
            formPlaceholderText: "Mano forma",
            shareBuilderInProgressTitleMessage: "GeoForm publikuojama",
            shareBuilderProgressBarMessage: "Palaukite&hellip;",
            shareBuilderTitleMessage: "Pavyko! Elementas įrašytas",
            shareBuilderTextMessage: "Galite pradėti rinkti informaciją bendrindami su kitais",
            shareModalFormText: "Formos nuoroda",
            shareBuilderSuccess: "Jūsų GeoForm atnaujinta ir publikuota!",
            geoformTitleText: "Geoforma",
            layerTabText: "Tai sluoksnis, iš kurio bus sukurta GeoForm. Šis sluoksnis turi būti elementų paslauga, įgalinta redaguoti naudojant jūsų auditorijai tinkamą bendrinimo teisę.",
            detailsTabText: "Naudokite žemiau esančius formos išsamios informacijos laukus – adaptuokite pavadinimą, pridėkite adaptuotą logotipą ir pateikite trumpą aprašą auditorijai naudosiančiai GeoForm. Aprašyme galite pridėti nuorodų į kitus šaltinius, kontaktinę informaciją ir netgi nukreipti auditoriją į interneto žemėlapių aplikaciją, kurioje yra publikuojami duomenys, surinkti naudojant GeoForm.",
            fieldsTabText: "Čia galite pasirinkti, kurie laukai bus matomi auditorijai naudosiančiai GeoForm, redaguoti jiems matomas žymes ir pridėti trumpą aprašą, kad būtų lengviau įvesti duomenis.",
            styleTabText: "Suteikite GeoForm pageidaujamą stilių, naudodami žemiau pateiktas temas.",
            publishTabText: "Jei baigėte adaptuoti GeoForm, įrašykite aplikaciją ir pradėkite bendrinti su auditorija. Visada galėsite grįžti į šią kūrimo priemonę ir toliau adaptuoti remdamiesi atsiliepimais.",
            headerSizeLabel:"Antraštės dydis",
            smallHeader: "Naudoti mažą antraštę",
            bigHeader: "Naudoti didelę antraštę",
            pushpinText: "Smeigtukas",
            doneButtonText: "Išsaugoti ir išeiti",
            fieldTabPlaceHolderHeaderText: "Užuomina (nebūtina)",
            enableAttachmentLabelText: "${openStrong}Leisti priedus${closeStrong}",
            enableAttachmentLabelHint: "Čia galite įjungti / išjungti priedus",
            attachmentIsRequiredLabelText: "${openStrong}Priedas būtinas${closeStrong}",
            attachmentIsRequiredLabelHint: "Jei būtina, vartotojams gali reikėti pridėti priedą.",
            attachmentLabelText: "Priedo mygtuko žymė",
            attachmentLabelHint: "Tai tekstas, kuris bus rodomas šalia mygtuko Priedas. Galite naudoti šią vietą norėdami apibūdinti, ką auditorija turėtų pridėti (nuotrauką, vaizdo įrašą, dokumentą ir kt.), pageidaujamą failų formatą (.jpeg, .png, .docx, .pdf ir kt.), ir bet kokius papildomus nurodymus.",
            attachmentDescription: "Priedo aprašymas",
            attachmentHint: "Jeigu reikia, papildomas pridėjimo instrukcijas galite pateikti čia.",
            jumbotronDescription: "Formai naudokite didelę arba mažą antraštę. Didelė antraštė gali geriau apibūdinti aplikacijos paskirtį, bet ji užims daugiau vietos ekrane.",
            shareGeoformText: "Bendrinti Geoform",
            shareDescription: "Atlikę pateikimą, bendrinimo skydelyje jūsų auditorija gali lengvai bendrinti GeoForm su kitais bendradarbiais. Šią funkciją galima bet kada išjungti.",
            defaultMapExtent: "Numatyta žemėlapio aprėptis",
            defaultMapExtentDescription: "Pateikus, internetiniame žemėlapyje bus nustatyta numatyta žemėlapio aprėptis. Tai galima bet kada išjungti.",
            pushpinOptionsDescription: "Žemėlapio smeigtuką rinkitės iš įvairių spalvų – jis turi išsiskirti iš žemėlapio simbolių, kad vartotojas galėtų padėti žemėlapyje savo pateiktį",
            selectLocationText: "Pasirinkite vietą pagal",
            myLocationText: "Mano vieta",
            searchText: "Ieškoti",
            coordinatesText: "Platumos ir ilgumos koordinatės",
            usng: "USNG koordinatės",
            mgrs: "MGRS koordinatės",
            utm: "UTM koordinatės",
            selectLocationSDescription: "Vartotojai gali pasirinkti vietą šiais būdais.",
            dragTooltipText:"Nuvilkite lauką ten, kur jis turėtų būti",
            showHideLayerText:"Rodyti / slėpti sluoksnį",
            showHideLayerHelpText:"Konfigūruokite GeoForm rodyti / slėpti sluoksnį"
        }
    })
);