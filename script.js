/**
 * Created by obrassard on 17-01-25.
 */
function createArray(row, col) {
    var arr = new Array(row);

    for (var i = 0; i < row; i++) {
        arr[i] = new Array(col);
    }

    return arr;
}
var rail = parseInt(document.getElementById("rail").value);
function confirmRailValue() {
    console.log("Verified Rail Value: " + rail);
    if (isNaN(rail)) {
        alert("Incorrect number of rails");
        throw new Error("Incorrect rail value.");
    }
}

function completerInput()
{
    var textInput = document.getElementById("input").value;
    while(textInput.length % rail !=0)
    {
        textInput += ":";
    }
    return textInput.toUpperCase();

}

//processus d'encryption\\
document.getElementById("encrypt").onclick = encrypter;
function encrypter()
{
    rail = parseInt(document.getElementById("rail").value);
    confirmRailValue();
    var motAEncrypter = completerInput();
    var tabEncryption = createArray(rail, motAEncrypter.length / rail);

    //placer les caractère en colonnes
    var indexCaractere = 0;
    for (var col=0; col<(motAEncrypter.length / rail); col++)
    {
        for (var row=0; row<rail; row++)
        {
            tabEncryption[row][col] = motAEncrypter[indexCaractere];
            indexCaractere++;
        }
    }

    //retourner le résultat lut normalement
    var motCrypte="";
    for(row = 0; row < rail; row++)
    {
        for (col = 0; col < (motAEncrypter.length / rail); col++)
        {
            motCrypte += tabEncryption[row][col];
        }
    }
    document.getElementById("output").value=motCrypte;
    console.info("Succesfully encrypted");
}

//Décryptage

document.getElementById("decrypt").onclick = decrypter;
function decrypter()
{
    rail = parseInt(document.getElementById("rail").value);
    confirmRailValue();
    var motADecrypter = completerInput();
    var tabDecrypt = createArray(rail, motADecrypter.length / rail);


    var indexCaractere = 0;
    for (var row = 0; row < rail; row++)
    {
        for (var col = 0; col < (motADecrypter.length / rail); col++)
        {
            tabDecrypt[row][col] = motADecrypter[indexCaractere];
            indexCaractere++;
        }
    }

    var motClair = "";
    for (col = 0; col < (motADecrypter.length / rail); col++)
    {
        for (row = 0; row < rail; row++)
        {
            motClair += tabDecrypt[row][col];
        }
    }
    document.getElementById("output").value=motClair;
    console.info("Succesfully decrypted")
}
