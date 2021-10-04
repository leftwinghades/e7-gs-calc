function getUserGear() {
    let substat1 = eval(document.getElementById("substat1").value);
    let substat2 = eval(document.getElementById("substat2").value);
    let substat3 = eval(document.getElementById("substat3").value);
    let substat4 = eval(document.getElementById("substat4").value);

    let substat1Value = document.getElementById("substat1Value").value;
    let substat2Value = document.getElementById("substat2Value").value;
    let substat3Value = document.getElementById("substat3Value").value;
    let substat4Value = document.getElementById("substat4Value").value;

    let relevantSubstat1 = (document.getElementById("relevantSubstat1").checked ? 1 : 0);
    let relevantSubstat2 = (document.getElementById("relevantSubstat2").checked ? 1 : 0);
    let relevantSubstat3 = (document.getElementById("relevantSubstat3").checked ? 1 : 0);
    let relevantSubstat4 = (document.getElementById("relevantSubstat4").checked ? 1 : 0);

    let gearScore = Math.round(substat1 * substat1Value + 
        substat2 * substat2Value + 
        substat3 * substat3Value + 
        substat4 * substat4Value);
    document.getElementById("gearScore").textContent = gearScore;

    let relevantGearScore = Math.round(substat1 * substat1Value * relevantSubstat1 + 
        substat2 * substat2Value * relevantSubstat2 + 
        substat3 * substat3Value * relevantSubstat3 + 
        substat4 * substat4Value * relevantSubstat4);
    document.getElementById("relevantGearScore").textContent = relevantGearScore;
}