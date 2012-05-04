// Model for the List which links to each rss feed
Ext.regModel('wall.models.Beer',{
             fields: [
                      {name: 'beerName', type: 'string'},
                      {name: 'beerDescription', type: 'string'}
                      ]
             });

// Contains the list of RSS feeds the component is initialized with
wall.stores.BeerStore = new Ext.data.Store({
                                              model: 'wall.models.Beer',
                                              data: [
                                                     //{ beerName: 'NameToShowOnList', beerDescription: 'Information on beer' },
                                                     { beerName: 'Strange Pale Ale', beerDescription: 'Strange Pale Ale is brewed in the American Style. Big and hoppy, but balanced and incredibly drinkable. We use five different malts to give Strange Pale Ale a malty complexity and four different hops to balance all that malt and give Strange Pale Ale its huge hop character. <br><br>5.5% ABV  40 IBUs' },
                                                     { beerName: 'IPAphany India Pale Ale', beerDescription: 'An epiphany. That’s what Strange Brewer Tim Myers had right before he wrote down the recipe for IPAphany IPA. Tim was never what you\'d call a "hophead". <br><br>That is until about five years ago when he tasted a certain Colorado IPA that was so balanced, so hoppy yet so malty, it opened Tim\'s eyes to a whole new world of beers. So he rushed home and began creating his own IPA. The end result after five years of tweaking homebrew batches is Strange IPAphany IPA. A big, malty, hoppy, well-rounded, lusciously smooth and drinkable India Pale Ale.<br><br>7.0%ABV  65 IBUs' },
                                                     { beerName: 'Strange Wit', beerDescription: 'Belgian’s brewing beginnings trace back to the middle ages. We’re fast-forwarding this traditional favorite with generous portions of both malted and unmalted wheat. Just the right amount of spices are added to compliment all that hazy wheat goodness. The perfect drink on a hot summer day or winter evening in the Rockies. Enjoy!<br><br>5.4% ABV  22 IBUs' },
                                                     { beerName: 'Le Bruit Du Diable', beerDescription: 'Our spin on a classic Belgian farmhouse ale. We start with high quality Belgian Pilsner malt and add some Belgian Caramel Vienne and Caramel Munich for color and complexity. Bring it back down to earth with just the right amount of Czech Saaz hops to provide refreshing balance. Fermented hot with a very special yeast strain from the Wallonia region of Belgium, this uni<br><br> 7.5% ABV  42 IBUs<br><br>Le Bruit du Diable Farmhouse Ale took Silver in the Belgian & French Ale Category at the August 2010 Colorado State Fair!!' },
                                                     { beerName: 'Bel\'Hop\'D Belgian Pale Ale', beerDescription: 'Take some Belgian malts, hop generously with Amarillo, Simcoe, and Cascade hops, then ferment with a tasty Belgian Abbey yeast. The result? Strange Bel\'Hop\'D Belgian Pale Ale–on the dark side with moderate fruity orange hues and soft, sip-able sweetness. <br><br>5.0% ABV  40 IBUs' },
                                                     { beerName: 'Tainted Black Pale', beerDescription: 'First brewed the same day a certain British company tainted something much larger than a boil kettle, Tainted Black Pale is a hybrid searching for an identity. Is it a really hoppy stout? Or a really roasty pale ale? Tainted Black Pale defies classification so we won’t box it in. What we do know is it\'s one tasty Strange brew. <br><br>6.0% ABV   60 IBUs' },
                                                     { beerName: 'Paint It Black Honey Coffee Stout', beerDescription: 'What has six pounds of Western Slope Ambrosia Honey, three pounds of cold-brewed Sumatra coffee, and over four pounds of Cascade hops? Paint It Black Honey Coffee Stout. Roasty. Hoppy. Dark. Really Dark.<br><br>6.5% ABV  65 IBUs' }, 
                                                     { beerName: 'Cherry Bomb Belgian Stout', beerDescription: 'What do you get when you throw the wrong malt into a batch of Belgian Wheat?<br> A happy mistake! That\'s how Strange Brewer Tim Myers stumbled across this Tasting Room favorite. Rather than dump the batch, Tim decided to create the world\'s first Belgian Wheat Stout. Gobs of Carafa III give this Belgian Wheat a delicious roastiness. Montmorency Tart Cherries give it a tart snap that will pucker you silly.<br><br>5.4% ABV  46 IBUs' }, 
                                                     { beerName: 'Cherry Kriek ', beerDescription: 'We named this Strange Brew \'Cherry Cherry\' because that\'s what it is. There\'s so much cherry in this beer even its foamy head is red! We start with a Dark Belgian Wheat recipe, cram it full of Montmorency Tart Cherry goodness, then age it with oak. The result is a cherry cherry lovers dream come true. Goes great with dark chocolate, with fudge brownies, with chocolate gateau, with cacao nibs, with...well you get the picture. And did we mention cherries?<br><br>4.7% ABV  15 IBUs<br><br>Cherry Kriek took Gold in the Fruit Beer Category at the August 2011 Colorado State Fair!! <br>Cherry Kriek took Bronze in the Fruit Beer Category at the August 2010 Colorado State Fair!!' } 
                                               ]      
                                                     
                                              });


wall.stores.NewsStore = new Ext.data.Store({
                                           model: 'wall.models.Beer',
                                           data: [
                                                  //{ beerName: 'NameToShowOnList', beerDescription: 'Website' },
                                                  { beerName: 'Denver Westword', beerDescription: 'http://bit.ly/bGo040' }, 
                                                  { beerName: 'Yelp', beerDescription: 'http://bit.ly/dvQ34S' }, 
                                                  { beerName: '5280 Magazine', beerDescription: 'http://bit.ly/cgbE6h' }, 
                                                  { beerName: 'Beer Alcohol Blog', beerDescription: 'http://bit.ly/dkGZhR' }, 
                                                  { beerName: 'Denver Post 1', beerDescription: 'http://bit.ly/aMwNYW' }, 
                                                  { beerName: 'Denver Post 2', beerDescription: 'http://photos.denverpost.com/mediacenter/2011/09/great-american-beer-festival-strange-brewing-company/' }, 
                                                  { beerName: 'Northern Brewer', beerDescription: 'http://www.northernbrewer.com/connect/episode/brewing-tv-episode-46-gabf-30th-anniversary/' }, 
                                                  { beerName: 'Denver Business Journal', beerDescription: 'http://www.bizjournals.com/denver/print-edition/2011/09/30/beer-festival-means-business-for.html' }, 
                                                  { beerName: 'Denver Off The Wagon', beerDescription: 'http://www.denveroffthewagon.com/2012/01/27/and-the-best-colorado-beer-of-2011-is/' }, 
                                                  { beerName: 'Denver Post 3', beerDescription: 'http://yourhub.denverpost.com/def-section/strange-brewery-adds-personal-touch/J5HS0OjKXu1hVSpBRzg9LK-ugc' }, 
                                                  { beerName: 'Examiner', beerDescription: 'http://www.examiner.com/craft-beer-in-denver/the-beauty-of-pale-ales-strange-brewing-company-s-strange-pale-ale-review' }, 
                                                  ]      
                                           
                                           });



