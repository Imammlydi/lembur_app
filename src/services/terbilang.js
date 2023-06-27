export const terbilang = (number) => {
    const satuan = [
        "",
        "satu",
        "dua",
        "tiga",
        "empat",
        "lima",
        "enam",
        "tujuh",
        "delapan",
        "sembilan",
    ];
    const belasan = [
        "",
        "sebelas",
        "dua belas",
        "tiga belas",
        "empat belas",
        "lima belas",
        "enam belas",
        "tujuh belas",
        "delapan belas",
        "sembilan belas",
    ];

    const terbilangRatusan = (number) => {
        if (number < 10) {
            return satuan[number];
        } else if (number < 20) {
            return belasan[number - 10];
        } else if (number < 100) {
            return (
                satuan[Math.floor(number / 10)] +
                " puluh " +
                (number % 10 !== 0 ? satuan[number % 10] : "")
            );
        } else {
            return "";
        }
    };

    if (number === 0) {
        return "nol";
    } else if (number < 100) {
        return terbilangRatusan(number);
    } else if (number < 1000) {
        return (
            satuan[Math.floor(number / 100)] +
            " ratus " +
            (number % 100 !== 0 ? terbilangRatusan(number % 100) : "")
        );
    } else if (number < 1000000) {
        return (
            terbilang(Math.floor(number / 1000)) +
            " ribu " +
            (number % 1000 !== 0 ? terbilang(number % 1000) : "")
        );
    } else if (number < 1000000000) {
        return (
            terbilang(Math.floor(number / 1000000)) +
            " juta " +
            (number % 1000000 !== 0 ? terbilang(number % 1000000) : "")
        );
    } else {
        return "";
    }
};
