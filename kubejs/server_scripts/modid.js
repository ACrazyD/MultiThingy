// priority: 0

console.info('Loading Your Shorthands.')


let MOD = (domain, id, x) => (x ? `${x}x ` : '') + (id.startsWith('#') ? '#' : '') + domain + ':' + id.replace('#', '')
//Minecraft
let MC = (id, x) => MOD('minecraft', id, x)
let F = (id, x) => MOD('forge', id, x)
let PA = (id,x) => MOD('project_alloy', id, x)//KubeJS Project Handle :)
let KJ = (id, x) => MOD('kubejs', id, x)
//Sohpisticated Mods
let SOB = (id, x) => MOD('sophisticatedbackpacks', id, x)
let SOS = (id, x) => MOD('sophisticatedstorage', id, x)
//Allomancy
let AM = (id, x) => MOD('allomancy', id, x)
let FC = (id, x) => MOD('feruchemy', id, x)
let HL = (id, x) => MOD('hemalurgy', id, x)
//Create+addons
let CR = (id, x) => MOD('create', id, x)
let CG = (id, x) => MOD('creategears', id, x)
let CA = (id, x) => MOD('createaddition', id, x)
let CL = (id, x) => MOD('alloyed', id, x)
let CF = (id, x) => MOD('extendedflywheels', id, x)
let AG = (id, x) => MOD('alloyedguns', id, x)
//Biome Related Mods
let VJ = (id, x) => MOD('projectvibrantjourneys', id, x)
let BM = (id, x) => MOD('biomemakeover', id, x)
let EC = (id, x) => MOD('expcaves', id, x)
let CPO = (id, x) => MOD('compactores', id, x)
//Others
let CHL = (id, x) => MOD('chemlib', id, x)
let AC = (id, x) => MOD('alchemistry', id, x)
let TC = (id, x) => MOD('tconstruct', id, x)
let TCI = (id, x) => MOD('tcintergrations', id, x)
let ALM = (id, x) => MOD('alexsmobs', id, x)
let FD = (id, x) => MOD('farmersdelight', id, x)
let IP = (id, x) => MOD('immersivepetroleum', id, x)
let IE = (id, x) => MOD('immersiveengineering', id, x)

