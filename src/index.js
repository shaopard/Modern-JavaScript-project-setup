import Converter from './Converter';

const rootElement = document.getElementById('rootElement');
const eurToUsdCoefficient = 1.11745;

var conv = new Converter(rootElement, eurToUsdCoefficient);
conv.render();