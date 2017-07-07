(function (global, jQuery) {

    function Greetr(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    var supportedLangs = ['en', 'he', 'yi'];

    var greetings = {
        en: 'Howdy!',
        he: 'שלום!',
        yi: 'ואס מאכט א איד?!'
    }

    var title  = {
        en: 'Mr.',
        he: 'רבי',
        yi: 'רב'
    }

    var logMessages = {
        en: 'Logged in successfully',
        he: 'נכנסת בהצלחה',
        yi: 'איר הצלחה לאָגד אין'
    }

    Greetr.prototype = {
        welcomeMessage: function () {
            return `${greetings[this.language]},${title[this.language]} ${this.firstname} ${this.lastname}`;
        },
        logInMessage: function () {
            return `${logMessages[this.language]},${title[this.language]} ${this.firstname} ${this.lastname}`;
        },
    }

    Greetr.init = function (firstname, lastname, language) {

        var that = this;

        that.firstname = firstname || '';
        that.lastname = lastname || '';
        that.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window, jQuery);