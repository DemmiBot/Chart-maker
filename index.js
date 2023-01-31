function update(elem) {
    var newPercent = parseFloat(document.getElementById('input1').value);
    document.getElementById(elem.id).style.height = newPercent+"%";
}