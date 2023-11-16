function updateCont(inputId) {
  var inputValue = document.getElementById(inputId).value;
  var num = curtofloat(inputValue);
  var textSpanId = inputId + 'Text';
  document.getElementById(textSpanId).innerText = 
  num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) +
  " (" +   extenso(inputValue, {mode: 'currency'}).replace("de reais","reais") + ")"

}

function updatePct(inputId) {
  var inputValue = document.getElementById(inputId).value;
  var textSpanId = inputId + 'Text';
  document.getElementById(textSpanId).innerText = 
  inputValue +"% ("+
  extenso(inputValue, { number: { decimal: 'informal' } }) +
  " por cento)";
}

function copyText(spanId) {
  var textToCopy = document.getElementById(spanId).innerText;
  var tempInput = document.createElement('textarea');
  document.body.appendChild(tempInput);
  tempInput.value = textToCopy;
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

function curtofloat(x){
  return Number(x.replaceAll(".","").replaceAll(",",".").replace(/[^0-9.-]+/,""));
}