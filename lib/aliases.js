
var aliases = {
  '/events/facebook-hackathon': '/events/2013-03-23-facebook-hackathon',
  '/events/%22randomness-in-crypto%22-followed-by-a-h@epfl-drink-up': '/events/2013-12-11-randomness-in-crypto-followed-by-a-h@epfl-drink-up',
  '/events/nasa-international-space-apps-challenge': '/events/2013-04-20-nasa-international-space-apps-challenge',
  '/events/drinkup-1': '/events/2013-04-15-drinkup-1'
};

module.exports = function(app) {
    for(from in aliases) {
      (function(from, to) {
          app.get(from, function(req, res) {
              res.redirect(301, to);
          });
      })(from, aliases[from]);
    }
}
