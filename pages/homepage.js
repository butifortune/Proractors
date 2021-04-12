let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    //let goButton = element(by.id('gobutton'));
    //let goButton = element(by.xpath('//*[@id="gobutton"]'));


    this.get = function(url){

        browser.get(url);
       
    };

    this.enterFirstNumber = function(firstNo){

        firstNumber_input.sendKeys(firstNo);

    };

    this.enterSecondNumber = function(secondNo){

        secondNumber_input.sendKeys(secondNo);

    };

    this.clickGo = function(){

        browser.sleep(200);
        goButton.click();
        browser.sleep(200);

    };

    this.verifyResults = function(results){

        //let output = element(by.cssContainingText('.ng-binding',results));

        let output = element(by.xpath('/html/body/div/div/form/h2')).getText();
        expect(output.getText()).toEqual(results);

    };

};

module.exports = new homepage();