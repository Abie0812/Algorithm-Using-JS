/** ======================================================== */
/**                     BANGUN DATAR                         */
/** ======================================================== */
const PHIDESIMAL = 3.14;
const PHIPECAHAN = 22/7;
const ISTRUE = true;
const ISFALSE = false;
let luas, keliling, jarijari = 0;
let isDapatDibagiTujuh = (jarijari % 7 === 0) ? ISTRUE : ISFALSE;

function luasPersegi(sisi) {
    return luas = Math.pow(sisi, 2);
}

function luasPersegiPanjang(panjang, lebar) {
    return luas = panjang * lebar;
}

function luasJajaranGenjang(alas, tinggi) {
    return luas = alas * tinggi;
}

function luasTrapesium(sisiSejajar1, sisiSejajar2, tinggi) {
    return luas = ((sisiSejajar1 + sisiSejajar2) * tinggi) / 2;
}

function luasBelahKetupat(diagonal1, diagonal2) {
    return luas = (diagonal1 * diagonal2) / 2;
}

function luasLayangLayang(diagonal1, diagonal2) {
    return luas = (diagonal1 * diagonal2) / 2;
}

function luasSegitiga(alas, tinggi) {
    return luas = alas * tinggi / 2;
}

function luasLingkaran(jarijari) {
    if (isDapatDibagiTujuh === true)
        return luas = PHIPECAHAN * Math.pow(jarijari, 2);

    return luas = PHIDESIMAL * Math.pow(jarijari, 2);
}

function kelilingPersegi(sisi) {
    return keliling = 4 * sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return keliling = 2 * (panjang + lebar);
}

function kelilingJajaranGenjang(panjang, lebar) {
    return keliling = 2 * (panjang + lebar);
}

function kelilingTrapesium(sisi1, sis2, sisi3, sisi4) {
    return keliling = sisi1 + sis2 + sisi3 + sisi4;
}

function kelilingBelahKetupat(sisi) {
    return keliling = 4 * sisi;
}

function kelilingLayangLayang(panjang, lebar) {
    return keliling = 2 * (panjang + lebar);
}

function kelilingSegitiga(sisi1, sisi2, sisi3) {
    return keliling = sisi1 + sisi2 + sisi3;
}

function kelilingLingkaran(jarijari) {
    if (isDapatDibagiTujuh === true)
        return keliling = 2 * PHIPECAHAN * jarijari;

    return keliling = 2 * PHIDESIMAL * jarijari;
}

/** ======================================================== */
/**                     BANGUN RUANG                         */
/** ======================================================== */
let volume, luasPermukaan, luasSelimut = 0;

function volumeKubus(rusuk) {
    return volume = Math.pow(rusuk, 3);
}

function volumeBalok(panjang, lebar, tinggi) {
    return volume = panjang * lebar * tinggi;
}

function volumeLimasSegitiga(alas, tinggi, tinggiLimas) {
    return volume = 1/6 * alas * tinggi * tinggiLimas;
}

function volumeLimasSegiEmpat(panjang, lebar, tinggiLimas) {
    return volume = 1/3 * panjang * lebar * tinggiLimas;
}

function volumePrismaSegitiga(alas, tinggi, tinggiPrisma) {
    return volume = luasSegitiga(alas, tinggi) * tinggiPrisma;
}

function volumePrismaPersegi(sisi, tinggiPrisma) {
    return volume = luasPersegi(sisi) * tinggiPrisma;
}

function volumeSegiEmpat(panjang, lebar, tinggiPrisma) {
    return volume = luasPersegiPanjang(panjang, lebar) * tinggiPrisma;
}

function volumeSegiLima(alas, tinggi, tinggiPrisma) {
    return volume = (5 * luasSegitiga(alas, tinggi)) * tinggiPrisma;
}

function volumeTabung(jarijari, tinggiTabung) {
    return volume = luasLingkaran(jarijari) * tinggiTabung;
}

function volumeKerucut(jarijari, tinggiKerucut) {
    return volume = 1/3 * luasLingkaran(jarijari) * tinggiKerucut;
}

function volumeBola(jarijari) {
    if (isDapatDibagiTujuh === true)
        return volume = 4/3 * PHIPECAHAN * Math.pow(jarijari, 3);

    return volume = 4/3 * PHIDESIMAL * Math.pow(jarijari, 3);
}

function luasKubus(rusuk) {
    return luas = 6 * Math.pow(rusuk, 2);
}

function luasBalok(panjang, lebar, tinggi) {
    return luas = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
}

function luasSelimutPrismaSegitiga(sisi1, sisi2, sisi3, tinggiPrisma) {
    return luas = kelilingSegitiga(sisi1, sis2, sisi3) * tinggiPrisma;
}

function luasPermukaanPrismaSegitiga(sisi1, sisi2, sisi3, tinggiPrisma, alas, tinggi) {
    return luas = luasSelimutPrismaSegitiga(sisi1, sisi2, sisi3, tinggiPrisma) + alas * tinggi;
}

function luasPermukaanLimasSegitiga(alas, tinggi) {
    return luas = luasSegitiga(alas, tinggi) + (3 * luasSegitiga(alas, tinggi));
}

function luasPermukaanLimasSegiEmpat(luas, lebar, alas, tinggi) {
    return luas = luasPersegiPanjang(luas, lebar) + (4 * luasSegitiga(alas, tinggi))
}

function luasSelimutTabung(jarijari, tinggiTabung) {
    if (isDapatDibagiTujuh === true)
        return luas = 2 * PHIPECAHAN * jarijari * tinggiTabung;

    return luas = 2 * PHIDESIMAL * jarijari * tinggiTabung;
}

function luasPermukaanTabung(jarijari, tinggiTabung) {
    return luas = luasSelimutTabung(jarijari, tinggiTabung) + (2 * luasLingkaran(jarijari));
}

function luasSelimutKerucut(jarijari, sisiMiring) {
    if (isDapatDibagiTujuh === true)
        return luas = PHIPECAHAN * jarijari * sisiMiring;

    return luas = PHIDESIMAL * jarijari * sisiMiring;
}

function luasPermukaanKerucut(jarijari, sisiMiring) {
    if (isDapatDibagiTujuh === true)
        return luas = luasSelimutKerucut(jarijari, sisiMiring) + luasLingkaran(jarijari);

    return luas = luasSelimutKerucut(jarijari, sisiMiring)  + luasLingkaran(jarijari);
}

function luasBola(jarijari) {
    return luas = 4 * luasLingkaran(jarijari);
}