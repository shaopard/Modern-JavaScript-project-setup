import $ from 'jquery';

export default class {

    constructor(rootElement, eurToUsdCoeffient) {
        this.rootElement = rootElement;
        this.eurToUsdCoeffient = eurToUsdCoeffient;
        this.EUR = 0;
        this.USD = 0;
    }

    render() {
        //detach event listeners
        $('button').off('click');

        //define html
        let html = `
            <table>
                <tr>
                    <td>EUR</td>
                    <td>&nbsp;</td>
                    <td>EUR</td>
                </tr>
                <tr>
                    <td><input type="text" id="EUR" value="${this.EUR}"></td>
                    <td>
                        <button id="convertEURtoUSD">>>></button><br>
                        <button id="convertUSDtoEUR"><<<</button>
                    </td>
                    <td><input id="USD" value="${this.USD}" /></td>
                </tr>
            </table>
        `;
        rootElement.innerHtml = html;

        //attach event listeners
        $('#convertEURtoUSD').on('click', function() {
            console.log("Regular function 'this'");
            console.log(this);
            this.convertEURtoUSD() 
        });
        $('#convertUSDtoEUR').on('click', () => { 
            console.log("Arrow function 'this'");
            console.log(this);
            this.convertUSDtoEUR() 
        });
    }
}