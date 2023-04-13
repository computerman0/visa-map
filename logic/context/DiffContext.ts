import { createContext } from 'react';
interface ContextTypes { abkhaziaDiff:any, afghanistanDiff:any, albaniaDiff:any, algeriaDiff:any, americanSamoaDiff:any, andorraDiff:any, angolaDiff:any, anguillaDiff:any, antiguaAndBarbudaDiff:any, argentinaDiff:any, armeniaDiff:any, arubaDiff:any, australiaDiff:any, austriaDiff:any, azerbaijanDiff:any, bahamasDiff:any, bahrainDiff:any, bangladeshDiff:any, barbadosDiff:any, belarusDiff:any, belgiumDiff:any, belizeDiff:any, beninDiff:any, bermudaDiff:any, bhutanDiff:any, boliviaDiff:any, bonaireDiff:any, bosniaAndHerzegovinaDiff:any, botswanaDiff:any, brazilDiff:any, britishIndianOceanTerritoryDiff:any, britishVirginIslandsDiff:any, bruneiDiff:any, bulgariaDiff:any, burkinaFasoDiff:any, burundiDiff:any, cambodiaDiff:any, cameroonDiff:any, canadaDiff:any, capeVerdeDiff:any, caymanIslandsDiff:any, centralAfricanRepublicDiff:any, chadDiff:any, chileDiff:any, chinaDiff:any, colombiaDiff:any, comorosDiff:any, cookIslandsDiff:any, costaRicaDiff:any, croatiaDiff:any, cubaDiff:any, curacaoDiff:any, cyprusDiff:any, czechRepublicDiff:any, democraticRepublicOfTheCongoDiff:any, denmarkDiff:any, djiboutiDiff:any, dominicaDiff:any, dominicanRepublicDiff:any, eastTimorDiff:any, ecuadorDiff:any, egyptDiff:any, elSalvadorDiff:any, equatorialGuineaDiff:any, eritreaDiff:any, estoniaDiff:any, eswatiniDiff:any, ethiopiaDiff:any, falklandIslandsDiff:any, faroeIslandsDiff:any, fijiDiff:any, finlandDiff:any, franceDiff:any, frenchGuianaDiff:any, frenchPolynesiaDiff:any, gabonDiff:any, gambiaDiff:any, georgiaDiff:any, germanyDiff:any, ghanaDiff:any, gibraltarDiff:any, greeceDiff:any, greenlandDiff:any, grenadaDiff:any, guadeloupeDiff:any, guamDiff:any, guatemalaDiff:any, guernseyDiff:any, guineaDiff:any, guineaBissauDiff:any, guyanaDiff:any, haitiDiff:any, hondurasDiff:any, hongKongDiff:any, hungaryDiff:any, icelandDiff:any, indiaDiff:any, indonesiaDiff:any, iranDiff:any, iraqDiff:any, irelandDiff:any, isleOfManDiff:any, israelDiff:any, italyDiff:any, ivoryCoastDiff:any, jamaicaDiff:any, janMayenDiff:any, japanDiff:any, jerseyDiff:any, jordanDiff:any, kazakhstanDiff:any, kenyaDiff:any, kiribatiDiff:any, kosovoDiff:any, kuwaitDiff:any, kyrgyzstanDiff:any, laosDiff:any, latviaDiff:any, lebanonDiff:any, lesothoDiff:any, liberiaDiff:any, libyaDiff:any, liechtensteinDiff:any, lithuaniaDiff:any, luxembourgDiff:any, macaoDiff:any, madagascarDiff:any, malawiDiff:any, malaysiaDiff:any, maldivesDiff:any, maliDiff:any, maltaDiff:any, marshallIslandsDiff:any, martiniqueDiff:any, mauritaniaDiff:any, mauritiusDiff:any, mayotteDiff:any, mexicoDiff:any, micronesiaDiff:any, moldovaDiff:any, monacoDiff:any, mongoliaDiff:any, montenegroDiff:any, montserratDiff:any, moroccoDiff:any, mozambiqueDiff:any, myanmarDiff:any, namibiaDiff:any, nauruDiff:any, nepalDiff:any, netherlandsDiff:any, newCaledoniaDiff:any, newZealandDiff:any, nicaraguaDiff:any, nigerDiff:any, nigeriaDiff:any, niueDiff:any, norfolkIslandDiff:any, northernCyprusDiff:any, northernMarianaIslandsDiff:any, northKoreaDiff:any, northMacedoniaDiff:any, norwayDiff:any, omanDiff:any, pakistanDiff:any, palauDiff:any, palestineDiff:any, panamaDiff:any, papuaNewGuineaDiff:any, paraguayDiff:any, peruDiff:any, philippinesDiff:any, pitcairnIslandsDiff:any, polandDiff:any, portugalDiff:any, qatarDiff:any, republicOfTheCongoDiff:any, reunionDiff:any, romaniaDiff:any, russiaDiff:any, rwandaDiff:any, sabaDiff:any, saintBarthelemyDiff:any, saintHelenaDiff:any, saintKittsAndNevisDiff:any, saintLuciaDiff:any, saintMartinDiff:any, saintPierreAndMiquelonDiff:any, saintVincentAndTheGrenadinesDiff:any, samoaDiff:any, sanMarinoDiff:any, saoTomeAndPrincipeDiff:any, saudiArabiaDiff:any, senegalDiff:any, serbiaDiff:any, seychellesDiff:any, sierraLeoneDiff:any, singaporeDiff:any, sintEustatiusDiff:any, sintMaartenDiff:any, slovakiaDiff:any, sloveniaDiff:any, solomonIslandsDiff:any, somaliaDiff:any, somalilandDiff:any, southAfricaDiff:any, southKoreaDiff:any, southOssetiaDiff:any, southSudanDiff:any, spainDiff:any, sriLankaDiff:any, sudanDiff:any, surinameDiff:any, svalbardDiff:any, swedenDiff:any, switzerlandDiff:any, syriaDiff:any, taiwanDiff:any, tajikistanDiff:any, tanzaniaDiff:any, thailandDiff:any, togoDiff:any, tokelauDiff:any, tongaDiff:any, transnistriaDiff:any, trinidadAndTobagoDiff:any, tunisiaDiff:any, turkeyDiff:any, turkmenistanDiff:any, turksAndCaicosDiff:any, tuvaluDiff:any, ugandaDiff:any, ukraineDiff:any, unitedArabEmiratesDiff:any, unitedKingdomDiff:any, unitedStatesDiff:any, unitedStatesVirginIslandsDiff:any, uruguayDiff:any, uzbekistanDiff:any, vanuatuDiff:any, vaticanCityDiff:any, venezuelaDiff:any, vietnamDiff:any, wallisAndFutunaDiff:any, westernSaharaDiff:any, yemenDiff:any, zambiaDiff:any, zimbabweDiff:any };//context requires type declaration, provided here

export const DiffContext = createContext<ContextTypes>({} as any); //provides context object that country components pull rgb values from